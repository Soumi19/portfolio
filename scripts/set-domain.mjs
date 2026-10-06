// Usage: node scripts/set-domain.mjs https://www.yourdomain.com
// Rewrites every absolute URL (canonical, og:url, JSON-LD, sitemaps, robots, llms.txt) to the new origin.
// Also updates site.config.json. Run once, right before you host on the final domain.
import {readFile,writeFile,readdir} from 'node:fs/promises';
const next=(process.argv[2]||'').replace(/\/+$/,'');
if(!/^https:\/\/[^/\s]+(\/[^\s]*)?$/.test(next)){console.error('Give a full https origin, e.g. node scripts/set-domain.mjs https://www.example.com');process.exit(1)}
const cfg=JSON.parse(await readFile('site.config.json','utf8'));const prev=cfg.siteUrl.replace(/\/+$/,'');
if(prev===next){console.log('Already set to',next);process.exit(0)}
const exts=/\.(html|xml|txt|json|webmanifest|md)$/;let n=0;
async function walk(d='.'){for(const e of await readdir(d,{withFileTypes:true})){if(e.name.startsWith('.')||['node_modules','vendor','sample-assets'].includes(e.name))continue;const f=d+'/'+e.name;
 if(e.isDirectory())await walk(f);else if(exts.test(e.name)){const s=await readFile(f,'utf8');if(s.includes(prev)){await writeFile(f,s.split(prev).join(next));n++}}}}
await walk();cfg.siteUrl=next;await writeFile('site.config.json',JSON.stringify(cfg,null,2));
console.log(`Updated ${n} files: ${prev} -> ${next}`);
