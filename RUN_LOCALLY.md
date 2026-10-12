# Run locally (Antigravity / any editor terminal)

    cd <this folder>
    npx serve .          # or: python3 -m http.server 8080
    # open http://localhost:3000  (or :8080)

Pages use relative paths, so it also works from a sub-folder (GitHub Pages) or a root domain.

## Before you host
1. Final domain:  `node scripts/set-domain.mjs https://your-domain.com`
   (rewrites canonical, og:url, JSON-LD, sitemap.xml, image-sitemap.xml, robots.txt, llms.txt)
2. Upload everything incl. `.github` and `.nojekyll`.
3. Search Console + Bing Webmaster: verify, submit `sitemap.xml` and `image-sitemap.xml`.
4. Off-page work: see `OFFPAGE_BACKLINK_PLAYBOOK.md`.
