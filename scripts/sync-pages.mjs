import {readFile,writeFile,mkdir,readdir} from 'node:fs/promises';
const read=async p=>JSON.parse(await readFile(p,'utf8'));
const data=await read('data/portfolio.json'),medium=await read('data/medium-snapshot.json'),docs=await read('data/article-documents.json'),repos=await read('data/github-snapshot.json'),extra=await read('data/additional-publications.json');
const esc=s=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safe=u=>/^https:\/\//.test(u||'')?u:'';
let articles=await readFile('articles/index.html','utf8');
const template=await readFile('articles/'+data.articles.find(a=>a.readerId)?.readerId+'/index.html','utf8');
for(const a of [...medium,...extra]){
 let existing=data.articles.find(x=>x.readerId&&x.readerId===a.readerId||x.url.split('?')[0]===a.url.split('?')[0]);
 if(existing)continue;
 const id=a.readerId||'publication-'+Buffer.from(a.url).toString('hex').slice(-24);const item={...a,id,slug:id,category:a.category||'Published Writing',tags:[]};data.articles.unshift(item);
 const href=a.readerId?'./'+id+'/':safe(a.url),img=safe(a.image)||'../images/services/writing.webp';
 const card=`<article class="article-card"><a class="article-art" href="${esc(href)}"><img src="${esc(img)}" alt="${esc(a.title)}" width="800" height="443" loading="lazy"><span class="article-topic">${esc(item.category)}</span></a><div class="article-content"><div class="eyebrow">${esc(a.source)}</div><h3><a href="${esc(href)}">${esc(a.title)}</a></h3><p class="article-excerpt">${esc(a.excerpt)}</p><div class="card-bottom"><span>${esc(a.date||'')}</span><a href="${esc(href)}">Read article →</a></div></div></article>`;
 articles=articles.replace('<div class="article-grid">','<div class="article-grid">'+card);
 if(a.readerId){const doc=docs.find(x=>x.id===a.readerId);if(doc){
 // Reuse the original site's header/footer and CSS; provide semantic reader body.
 let page=template.replace(/<main\b[^>]*>[\s\S]*?<\/main>/,`<main><section class="section"><nav aria-label="Breadcrumb"><a href="../../">Home</a> / <a href="../">Articles</a></nav><span class="eyebrow">Medium</span><h1>${esc(a.title)}</h1><div class="article-body">${doc.blocks.map(b=>b.kind==='image'?`<img src="${esc(safe(b.text))}" alt="${esc(b.alt||a.title)}" loading="lazy">`:`<${b.kind==='h2'?'h2':'p'}>${esc(b.text)}</${b.kind==='h2'?'h2':'p'}>`).join('')}</div><a class="button" href="${esc(safe(a.url))}" target="_blank" rel="noopener noreferrer">Read original publication</a></section></main>`);
 page=page.replace(/<title>[\s\S]*?<\/title>/,`<title>${esc(a.title)} | Soumi Ganguly</title>`).replace(/<meta name="description"[^>]*>/,`<meta name="description" content="${esc(a.excerpt)}">`).replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g,'').replace(/<link rel="canonical"[^>]*>/,`<link rel="canonical" href="https://soumi19.github.io/portfolio/articles/${id}/">`).replace(/<meta property="og:(title|description|url|image)"[^>]*>/g,'');
 const schema={ '@context':'https://schema.org','@type':'Article',headline:a.title,author:{'@type':'Person',name:'Soumi Ganguly'},datePublished:a.date,url:`https://soumi19.github.io/portfolio/articles/${id}/`,image:a.image};page=page.replace('</head>',`<meta property="og:title" content="${esc(a.title)}"><meta property="og:description" content="${esc(a.excerpt)}"><meta property="og:url" content="https://soumi19.github.io/portfolio/articles/${id}/"><script type="application/ld+json">${JSON.stringify(schema).replace(/</g,'\\u003c')}</script></head>`);
 await mkdir('articles/'+id,{recursive:true});await writeFile('articles/'+id+'/index.html',page);
 }}
}
await writeFile('articles/index.html',articles);
let projects=await readFile('projects/index.html','utf8');
for(const r of repos){if(projects.includes(esc(r.html_url))||projects.includes(r.html_url))continue;const card=`<article class="repo-card"><div class="repo-content"><span class="eyebrow">GitHub repository</span><h3><a href="${esc(safe(r.html_url))}" target="_blank" rel="noopener noreferrer">${esc(r.name)}</a></h3><p>${esc(r.description||'Explore the source code and project documentation on GitHub.')}</p><p>${esc([r.language,...(r.topics||[])].filter(Boolean).join(' · '))}</p><a class="text-link" href="${esc(safe(r.html_url))}">View repository →</a></div></article>`;const match=projects.match(/<div class="(?:repo-grid|project-grid)[^"]*">/);if(match)projects=projects.replace(match[0],match[0]+card)}
await writeFile('projects/index.html',projects);data.exportedAt=new Date().toISOString();await writeFile('data/portfolio.json',JSON.stringify(data,null,2));
const config=await read('site.config.json'),site=config.siteUrl.replace(/\/$/,'');const urls=[];
async function walk(dir=''){for(const e of await readdir(dir||'.',{withFileTypes:true})){if(e.name.startsWith('.')||['vendor','scripts'].includes(e.name))continue;const f=(dir?dir+'/':'')+e.name;if(e.isDirectory())await walk(f);else if(e.name==='index.html'&&dir!=='technical-writing'){let s=await readFile(f,'utf8');s=s.replace(/https:\/\/soumi19\.github\.io\/(?:Soumi-ganguly|portfolio)/g,site);await writeFile(f,s);urls.push(site+'/'+(dir?dir+'/':''))}}}await walk();
await writeFile('sitemap.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+urls.map(u=>'<url><loc>'+esc(u)+'</loc><lastmod>'+new Date().toISOString().slice(0,10)+'</lastmod></url>').join('')+'</urlset>');await writeFile('robots.txt','User-agent: *\nAllow: /\n\nSitemap: '+site+'/sitemap.xml\nSitemap: '+site+'/image-sitemap.xml\n');
let images=await readFile('image-sitemap.xml','utf8');images=images.replace(/https:\/\/soumi19\.github\.io\/(?:Soumi-ganguly|portfolio)/g,site);await writeFile('image-sitemap.xml',images);console.log('Plain-JS sync complete:',urls.length,'pages');
