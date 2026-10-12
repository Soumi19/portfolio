# University logos: how they work and how to swap in official files

The "Supporting students across universities" strip reads data/universities.json (32 entries) and the files in images/universities/uploaded/.

## What was fixed in this update
- Removed the duplicate University of St Andrews entry.
- Removed the fake grey/white checkerboard baked into 6 logos (King's College London, MIT, Columbia, Harvard, York, Johns Hopkins) and saved them as clean transparent PNGs.
- Removed the small watermark text under the University of Cambridge logo and trimmed the extra white space.
- Deleted 34 unused, duplicate or broken logo files (including a 37-byte broken file) from images/universities/.

## Still worth replacing with official files
- Abdullah Al Salem University (low resolution, soft edges).
- Any logo that looks blurry when you zoom in. Aim for an SVG, or a PNG at least 800 px wide with transparent background.

## How to swap one
1. Download the logo from that university's official brand, media or press page. Use the files and terms they provide.
2. Save it into images/universities/uploaded/ (for example logo-03.svg).
3. Edit the matching entry's "logo" path in data/universities.json.

The site already says that no institutional partnership or endorsement is implied. Keep that statement next to the logos.
