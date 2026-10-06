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
