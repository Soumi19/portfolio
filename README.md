# Soumi Ganguly — HTML / CSS / JavaScript portfolio

All public pages are real HTML files. Styling is in assets/css and pages-enhancements.css. Interaction and background motion are in pages-runtime.js. There is no React, TypeScript, npm installation, bundler or compilation step.

## Preview
Run `python3 -m http.server 8000` in this folder and open http://localhost:8000. Use an HTTP server: opening index.html through file:// blocks module imports, content fetches and the PDF viewer in browsers.

## GitHub Pages
Use GitHub Desktop to clone Soumi19/portfolio. Back up your previous checkout. Replace its website contents with the contents of this package, keeping the checkout's .git directory. Remove the previous source and _next directories and previous workflow YAML files; this package contains its own .github/workflows/pages.yml. Commit and push. Settings → Pages → Source: GitHub Actions. The workflow deploys the plain files and refreshes public feeds daily.

## Custom domain
Add the domain in GitHub Pages Settings, configure your registrar's GitHub Pages DNS records, and update site.config.json siteUrl to the exact HTTPS domain. The workflow updates canonical URLs, OpenGraph URLs, structured-data URLs and sitemaps. Relative assets and internal links work with repository URLs or a custom domain.

## Content
All existing 23 writing PDFs, reader pages, images, service copy, project information, education, experience and SEO metadata were retained. Edit HTML directly for text/layout changes. Edit data/portfolio.json for skill/sample metadata. PDF viewer has no download/print buttons; publicly delivered PDF bytes can still be saved by visitors.

## Sync
scripts/refresh-feeds.mjs fetches public Medium, GitHub and readable Muck Rack listings with retained fallbacks. scripts/sync-pages.mjs adds new article/repository cards and Medium reader pages using plain JavaScript. No paid API or server database is required. Muck Rack updates depend on publicly readable listings. Other platforms need a public feed/API added explicitly. Contact uses mailto and requires the visitor to send the message in their email app.

## Motion
The background uses the supplied static-hosting silver-shard Canvas fix, with Pause/Play, reduced-motion support and hidden-tab suspension. The earlier WebGPU React AeroShards effect is not pixel-identical to this Canvas version. All pre-rendered layouts and content are preserved; browser visual comparison has not been completed in this workspace.
