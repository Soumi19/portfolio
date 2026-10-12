# What changed in this update (2026-10-06)

## Visual / layout
- Hero rebuilt as copy | stage. Floating cards now live inside the stage (left of the portrait), so they never overlap the headline or hide behind the photo. Portrait is ~25% larger, cropped edges softly faded, flush to the hero edge on desktop. Phones: cards become a neat row above the portrait.
- Services page: `.solution-card` had an old dark background -> black patches (and black before lazy images loaded). Now warm card + warm image placeholder. Social-card bottom bar fixed.
- Contrast: old light-grey text on beige fixed (tags, dates, meta, links, numbers, article text), dark project cards and contact box made light. Audit: 1211 -> ~0 real failures (remaining flags are ivory text on dark gradients, visually fine).
- Fluid sizing 320px -> 2560px, auto-fit grids, no horizontal overflow (tested). Gentle scroll-reveal, button sheen, image zoom; all off with reduced-motion.
Edit only `pages-enhancements.css` (final block at the bottom) and the hero block in `index.html`.

## SEO
- Canonical = final trailing-slash URL on every page; article canonicals -> Medium without tracking params.
- og:url / og:image / twitter:image / og:locale on all pages; hreflang en + x-default; manifest.
- Home JSON-LD ProfessionalService (areaServed India, UK, US, Kuwait, NZ + service catalogue).
- sitemap.xml with lastmod/priority (59 URLs), robots.txt lists both sitemaps, llms.txt for AI search.
- `node scripts/set-domain.mjs https://your-domain` switches every URL when you host.
- See OFFPAGE_BACKLINK_PLAYBOOK.md and RUN_LOCALLY.md.

## Update 2 (2026-10-06, later)
- Hero: the old floating photo cards are replaced by 6 clickable service chips (Technical Writing, Data & AI, Web Development, Custom CRM, Digital Marketing, Social Branding) in their own column beside the portrait. They float gently but sit in normal page flow, so they can never go behind the photo or over text (checked at 15 widths from 320px to 2560px).
- Dropdown pattern site-wide: experience / education / resume timelines show only title + company; points open in a "View responsibilities" dropdown. Same for home service cards and the bullet lists inside service pages. Smooth open animation, reduced-motion safe.
- Contrast: fixed dark-on-dark in CTA box, tech cards (category text), language cards (emblem letters), buttons inside cards, article reader button, tag chips. Verified with a pixel-sampling audit + screenshots.
- CSS link now has ?v=20261006 cache-buster on every page, so browsers pick up the new styles. If you still see the old look, hard refresh (Cmd+Shift+R) and make sure you replaced ALL files from this zip, not only some.

## Update 3 (2026-10-07)
- Experience, Education, Resume and Home: every role/qualification now has 5 plain-language points (In plain words · What the work involved/covers · Tools & methods · Skills built · How it helps a client) inside a dropdown. IBM SPSS and Cyber Security certificates have 4 points each.
- Experience and Education pages: intro paragraph, animated timeline chart ("Career at a glance", "Learning path"), image link-cards to services/projects, FAQ dropdowns, new SEO titles/descriptions, Person schema (hasOccupation / alumniOf / hasCredential).
- JSON-LD URLs everywhere now end with a trailing slash, matching canonicals.
- Theme/motion: reading-progress bar, cursor spotlight on cards, magnetic buttons, hero chip parallax, animated link underlines, headline entrance, smooth page transitions (Chromium), richer card/image hover. New file site-fx.js (about 3 KB, no libraries); everything is skipped for reduced-motion users.
- REVIEW BEFORE PUBLISHING: the site had no detail for the Uolo.com and Academia Xperts roles, so those points explain what the role generally involves plus the dates/location already on the site. Edit them if the real work differed. They are in experience/index.html, index.html and resume/index.html.

## Update 4 (2026-10-08)
- Hero chips now size to their own text (any font on Mac, iPhone or Android), and below 1100px they sit in a wrapped row above the portrait. Stress-tested with 3 fonts at 21 widths: no clipping, no overlap.
- Responsive hardening: 44px tap targets on touch screens, 12px minimum text, safe-area spacing for fixed buttons, back-to-top button, wrapped code box, breadcrumb fix. 91 page-width combinations (320px to 2560px) checked: no horizontal overflow, no text spilling out of its box.
- Theme polish: glowing page headers, richer cards and quick-answer boxes, refined buttons, animated CTA glow, gradient footer line, copy buttons.
- Content: the 3 academic pages (assignment, dissertation, SPSS/R/Python) rebuilt on the main service template with quick answer, how-it-works steps, 5 FAQs each and a plain-words statistics glossary. Quick-answer boxes + FAQ added to Contact, Projects, Experience and Education.
- (The media kit page added earlier has been removed in Update 5.)
- SEO / AEO / GEO: FAQPage schema on every page with a visible FAQ, keyword-rich hidden H1 descriptor on Home, llms-full.txt, AI crawlers allowed in robots.txt, sitemap refreshed (60 URLs), SEO_KEYWORD_MAP.md and a rewritten OFFPAGE_BACKLINK_PLAYBOOK.md.
- REVIEW: the academic pages say you remain responsible for authorship; the FAQ wording on data format, referencing and process steps is general. Edit if your real process differs.

## Update 5 (2026-10-08)
- Phone number set to +91 94773 04172 (contact page, schema and llms files). The old number is gone. The email is unchanged until you send the new one.
- Media kit page and every link to it removed.
- Keyword research (live web search) applied: new titles/descriptions for Home, Data & AI, SPSS analysis and Dissertation pages, keyword-led wording in the intros, 36 more FAQs (question-style, specific answers), "Last updated" lines and dateModified for freshness.
- Duplicates fixed: 10 identical GitHub project descriptions made unique, the awkward "drawn from my supplied CV" sentence replaced, repeated service-page FAQ and process sentences rewritten per service, 17 tailored closing CTAs, Home and Resume no longer repeat the Experience/Education text, repeated headings renamed, duplicate Service schema removed, duplicate St Andrews logo removed.
- University logos cleaned (see LOGO_GUIDE.md).
- Customer feedback: put quotes in data/testimonials.json, run `node scripts/add-testimonials.mjs`, and a "What clients say" section appears on Home, About and Services. With no entries nothing is shown.
- New BACKLINK_ACTION_LIST.md, rewritten SEO_KEYWORD_MAP.md and OFFPAGE_BACKLINK_PLAYBOOK.md.

## Update 6 (2026-10-12)
- Fonts: the theme was forcing Times New Roman everywhere. Now headings use Fraunces (new, self-hosted, 67 KB), body uses Source Sans 3, buttons/navigation/chips/labels use Manrope. Hero name, sizes and line-heights retuned; verified at 15 widths.
- UI/UX: active-page highlight in the menu, sticky A-Z glossary index, share row, back-to-top button, anchor offset under the sticky header, image fade-in, bigger input text and focus rings, print stylesheet (dropdowns open automatically when printing).
- New page /glossary/ (29 terms) linked from the footer and the main service pages.
- Technical SEO: branded share images, summary_large_image cards, rich-snippet robots directive, rel=me/author, refreshed sitemap, image sitemap and llms files, font preloads, security/caching headers.
- Internal links: related-project links on all 17 project pages.
