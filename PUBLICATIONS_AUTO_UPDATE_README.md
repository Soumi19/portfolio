# Publication discovery and review

The Articles page includes the verified Hindustan Times co-authored article and the supplied BRICS Info link (authorship on the latter not independently verified).

GitHub Actions checks Google News RSS for potential mentions every Monday. It opens a pull request with candidates in `publication-candidates.json` (GitHub repository Actions permissions must allow creating pull requests). Search matches are **not** verified publications. Check exact author identity, title and destination; then copy approved entries into `publications-approved.json` and merge/push to publish. GitHub Pages is static and cannot reliably crawl all publishers or guarantee discovery of every new article. Other publication feeds/APIs can be added later.

To publish manually, add JSON objects such as `{ "title":"Title", "url":"https://publisher.example/article", "publisher":"Publisher", "date":"2026-10-12" }` to the approved array. Avoid duplicates.
