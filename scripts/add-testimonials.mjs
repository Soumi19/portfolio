// Usage: node scripts/add-testimonials.mjs
// Reads data/testimonials.json and writes a "Client feedback" section between the
// <!--testimonials:start--> and <!--testimonials:end--> markers on the pages listed below.
// With an empty list the markers stay empty, so nothing is shown.
import {readFile,writeFile} from 'node:fs/promises';
const PAGES=['index.html','about/index.html','services/index.html'];
const esc=s=>String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const data=JSON.parse(await readFile('data/testimonials.json','utf8'));
const items=(data.testimonials||[]).filter(t=>t.quote&&t.name);
const card=t=>{
  const who=[t.role,t.company,t.country].filter(Boolean).map(esc).join(' · ');
  const name=t.link?`<a class="text-link" href="${esc(t.link)}" rel="noopener noreferrer" target="_blank">${esc(t.name)}</a>`:esc(t.name);
  return `<figure class="testimonial-card"><blockquote><p>${esc(t.quote)}</p></blockquote><figcaption><strong>${name}</strong>${who?`<span>${who}</span>`:''}${t.service?`<small>${esc(t.service)}</small>`:''}${t.date?`<time datetime="${esc(t.date)}">${esc(t.date)}</time>`:''}</figcaption></figure>`;
};
const section=items.length?`<section class="section testimonials"><span class="eyebrow">CLIENT FEEDBACK</span><h2>What clients say.</h2><div class="testimonial-grid">${items.map(card).join('')}</div><p class="fine">Shared with permission. Client names and details are published as provided.</p></section>`:'';
const re=/<!--testimonials:start-->[\s\S]*?<!--testimonials:end-->/;
const block=`<!--testimonials:start-->${section}<!--testimonials:end-->`;
let changed=0;
for(const p of PAGES){
  let h=await readFile(p,'utf8');
  if(re.test(h)){h=h.replace(re,block)}
  else{const i=h.indexOf('<section class="cta');if(i===-1)continue;h=h.slice(0,i)+block+h.slice(i)}
  await writeFile(p,h);changed++;
}
console.log(items.length?`Wrote ${items.length} testimonial(s) to ${changed} page(s).`:`No testimonials yet: markers are in place on ${changed} page(s) and nothing is shown.`);
