# Portfolio auto-update setup (GitHub Pages)

## What works automatically

- GitHub Actions `pages.yml` runs daily (02:30 UTC), on pushes and via **Run workflow**.
- `scripts/refresh-feeds.mjs` fetches public GitHub repositories and the Medium RSS feed, with local snapshots as fallback.
- It attempts Muck Rack public article listings. If the page does not expose readable article links, existing entries remain; no guarantee of discovery.
- `scripts/sync-pages.mjs` adds newly found items to Projects and Articles, with image previews where available, and updates sitemap. GitHub project previews are repository cards, not claimed screenshots.
- `discover-publications.yml` searches Google News RSS weekly for potential name matches and opens a review PR. Review author identity before publication.

## What cannot be fully automatic

- LinkedIn posts generally require authorized API access and approved permissions. Do not scrape or pretend LinkedIn updates are synchronized. Add verified LinkedIn post URLs manually to the review queue or approved content.
- New job experience and employers require manual verification; never infer career history from posts.
- Images are only shown when publicly available; otherwise local fallback images are used. External sites may block hotlinked images.
- Other publishers may not offer public feeds, and Google News name matches can belong to other people.

## Setup

1. Upload all contents of this folder to the **root** of `soumi19/portfolio`, preserving `.github/workflows` and `scripts`.
2. GitHub **Settings → Actions → General**: permit workflows to run and, if you want publication candidate pull requests, allow Actions to create pull requests.
3. GitHub **Actions → HTML portfolio Pages and content sync → Run workflow**. Confirm a successful deployment.
4. Keep **Settings → Pages → Custom domain** as `soumiganguly.com`, **Enforce HTTPS** on.
5. New Medium posts and public GitHub repositories should appear after the next successful sync. Muck Rack availability varies.
6. For verified external publications, add `{"title":"...","url":"https://...","publisher":"...","date":"YYYY-MM-DD"}` to `publications-approved.json`. LinkedIn post URLs can be linked similarly when appropriate.
7. Never publish candidate items before verifying the author and source.

## Email

Displayed email references were updated to `contact@soumiganguly.com`. This does **not** create a mailbox: configure the actual email service and DNS separately at your email provider. Test the contact form as well, because a mailto link and a form backend are different mechanisms.
