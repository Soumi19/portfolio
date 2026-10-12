# SEO implementation — v11

## Completed in source
- Unique page titles and meta descriptions for 72 indexable pages (404 excluded).
- Corrected canonical URLs to match `site.config.json` and actual folder paths.
- Unique Open Graph / Twitter title, description and URL.
- Valid JSON-LD Person, WebSite, WebPage, BreadcrumbList and relevant Service nodes.
- Rebuilt XML sitemap and robots.txt from the same configured base URL.
- Added llms.txt as a voluntary machine-readable overview; it is not a Google ranking factor.
- Preserved existing page design, reviews, scripts and content.

## CRITICAL BEFORE DEPLOYMENT
1. Confirm the actual deployed base URL. Current `site.config.json` says `https://soumi19.github.io/soumi-ganguly`. If deployed at `/portfolio/` or at `soumiganguly.com`, change the base URL and regenerate the SEO assets. Canonicals and sitemap MUST match live URLs.
2. Publish ZIP contents at the root of the correct GitHub Pages repository, not nested under the `Soumi_Ganguly_Portfolio_v7` folder.
3. Register the deployed URL in Google Search Console and Bing Webmaster Tools. Submit `/sitemap.xml`; verify indexing via URL Inspection.
4. Use PageSpeed Insights / Lighthouse and Rich Results Test after deployment. Test real mobile rendering and page loading.
5. If migrating to custom domain, configure GitHub Pages custom domain, DNS and redirects, and regenerate canonical URLs before launch.

## AEO / GEO content recommendations
- Write concise service introductions answering what you do, who it helps, deliverables, process, pricing basis and turnaround (only if confirmed).
- Add verifiable case studies, portfolio screenshots and cited publications.
- Use original examples and accessible headings; avoid keyword stuffing and auto-generated doorway pages for cities/countries.
- Cite primary sources and display author name, date and meaningful updates for articles.
- `llms.txt` is optional; it does not ensure AI citation or search placement.

## Off-page SEO / backlinks — ACTION REQUIRED OUTSIDE ZIP
- Link the portfolio from your genuine GitHub profile README, pinned repository descriptions and public project README files.
- Add the portfolio to real Medium, LinkedIn, Muck Rack, and professional bios that you control.
- Where appropriate, ask publishers to add an author profile or author-page link on genuinely published articles.
- Publish original technical explainers and open-source projects that naturally earn editorial citations.
- Share useful project demonstrations on relevant professional communities without spamming.
- Never buy link farms, use automated reciprocal link schemes, or claim external backlinks were created merely by editing the website.

## Priority queries (natural relevance, not guaranteed rankings)
- freelance technical writer India / technical content writer for SaaS
- API documentation writer / technical documentation services
- Python data analysis freelancer / SPSS statistical analysis support
- custom CRM development for small business
- website and web application development freelancer
- data analytics dashboards and machine learning project support
- SEO content writing / social media branding services
- remote technical writing for UK, USA, Kuwait and New Zealand clients

## Monitor monthly
Google Search Console: impressions, clicks, queries, pages indexed, Core Web Vitals and backlinks. Evaluate service-page leads, not just rankings.
