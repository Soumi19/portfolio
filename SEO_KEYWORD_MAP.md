# SEO, AEO & GEO keyword map (updated 8 October 2026)

## Where the keywords came from
Live web research on current "freelance technical writer", "technical content writer India", "SPSS data analysis help for dissertations", "dissertation statistics help" and "generative engine optimization 2026" results. Search-volume numbers were not available, so keywords are chosen by intent match and by wording that competitors and job listings use repeatedly. Check real volumes in Google Search Console and a keyword tool (for example Google Keyword Planner, free) after the site is live.

## Keyword clusters
| Page | Primary keyword | Supporting keywords actually used on the page |
|---|---|---|
| / | freelance technical writer | technical content writer India, data analyst, research reports, SEO content |
| /writing/ | hire a freelance technical writer | technical documentation, technical articles, research reports, SEO content, remote clients |
| /data-ai/ | freelance data analyst | dashboards, forecasting, machine learning, Python, R, SQL, Power BI, Tableau, SPSS |
| /web-development/ | freelance web developer | websites, web applications, responsive, PHP, SQL, HTML/CSS |
| /crm/ | custom CRM development | customer records, lead pipelines, follow-up tasks, reporting |
| /digital-marketing/ | SEO content and digital marketing | editorial plan, search intent |
| /social-branding/ | social media branding | brand voice, content pillars, content planning |
| /student-data-analysis/ | SPSS data analysis help | dissertation data analysis, t-tests, chi-square, regression, interpretation of output |
| /dissertation-thesis-support/ | dissertation and thesis research help | literature review, methodology, results interpretation, editing |
| /academic-research-support/ | assignment and academic research support | Harvard and APA referencing, research question |
| /international-services/ | remote technical writer India | UK, USA, remote collaboration, time zone |
| /experience/ , /education/ | technical writer experience, B.Tech data science, MBA operations | plain-words explanations, certificates |

## What the research said about GEO / AEO (and how the site follows it)
- **Direct answer in the first 100-150 words:** every key page opens with a Quick-answer box.
- **FAQs with real, specific answers and question-style headings:** 36 more FAQs were added this round, each self-contained.
- **Freshness:** key pages show "Last updated" and carry `dateModified`. Update the date whenever a page genuinely changes.
- **Clean server-rendered HTML, working robots.txt, fast pages:** already in place (static pages; AI crawlers allowed).
- **Mentions on other sites and a consistent entity description** matter most: see OFFPAGE_BACKLINK_PLAYBOOK.md and BACKLINK_ACTION_LIST.md.
- **Honest note:** sources disagree on `llms.txt` and FAQ/JSON-LD schema. Google says it does not use llms.txt, and large studies found no clear link between schema and AI citations. They are cheap and harmless, so they stay, but do not expect them alone to change rankings.

## Content ideas that can earn links
1. "What does a technical content writer actually do?" (plain-words guide)
2. "SPSS vs R vs Python for dissertation data: how to choose"
3. "How to brief a technical writer: a one-page template"
4. "What is a custom CRM and when does a small business need one?"
5. A downloadable "dissertation methodology checklist"

## Added in Update 6 (12 October 2026)
- **Glossary page** (/glossary/): 29 plain-words definitions with DefinedTermSet schema and anchor links. People and AI assistants quote glossaries, so it is the main linkable asset. Link to it from your Medium bio, LinkedIn Featured section and guest-post bios.
- **Social share images**: a branded 1200x630 image for each main page (images/og/), `summary_large_image` cards, so shared links look professional on LinkedIn, X and WhatsApp.
- **Technical:** `max-image-preview:large` robots directive, `rel="me"` on your own profile links, `rel="author"`, refreshed sitemap and image sitemap, font preloads (Fraunces, Source Sans 3, Manrope), security and caching headers in `_headers` (used by Netlify and Cloudflare Pages).
- **Internal links:** every project page now links to three other projects, so no project page has a single inbound link any more.
