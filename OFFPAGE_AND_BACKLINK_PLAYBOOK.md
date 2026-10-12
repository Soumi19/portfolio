# Off-page SEO & backlinks — what code cannot do, and what to do instead

Links must be earned from real pages. Do not buy links, join link farms or use mass directory submissions: they can cause penalties.

## Week 1 — make every existing profile point to one URL
- LinkedIn (website field + Featured section), Medium (bio + each article's footer), GitHub (profile README + pinned repo READMEs), Muck Rack: same name, same one-line description, same portfolio URL.
- Use identical wording for "Technical Content Writer · Data & AI · Web solutions". Consistency helps Google link these profiles to one person (the site's `sameAs` schema already lists them).
- In every Medium article and GitHub README add: "More work: <portfolio URL>/writing/".

## Weeks 2–6 — earn real links
- Guest/contributor articles on tech, data, edtech and research-writing blogs; ask for an author bio link to /writing/ or /data-ai/.
- Replying to journalist/expert requests (e.g. HARO-style services, Qwoted, Featured) when she genuinely has the expertise.
- Universities / student communities she already supports: ask for a resources-page mention of the academic-support page (only where permitted; no endorsement claims).
- Open-source: add a link to the portfolio in project docs of repos she contributes to.
- Professional listings with real profiles: Upwork/Fiverr/Contra profile links, Clutch or similar if she has client reviews. These are often nofollow but build brand search and trust.
- Publish 1 original, citable piece per month (a small dataset analysis, a how-to with a chart). Original data earns links naturally.
- Testimonials: ask genuine clients for a written quote and a link back; add it with their permission.

## Technical follow-ups after hosting
- Search Console: submit sitemap.xml + image-sitemap.xml; request indexing for home, /services/, /writing/, /data-ai/.
- Bing Webmaster Tools: import from Search Console. Enable IndexNow if the host supports it.
- Add Google Business Profile only if she has a legitimate service-area business setup.
- Track monthly: impressions, clicks, queries by country (UK/US/KW/NZ/IN), referring domains.

## What is already done on the site
Canonical + hreflang (en / x-default), sitemap with lastmod, image sitemap, robots, llms.txt, Person + WebSite + ProfessionalService + Service + FAQ + Breadcrumb + Article schema, unique titles/descriptions, internal links on every page, manifest.
