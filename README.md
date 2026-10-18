# Jonny Streets — static site (preview)

Plain HTML/CSS + a tiny bit of JS. No build step. Works opened locally or on GitHub Pages as-is.

## Add a new release
1. Save cover art to `assets/covers/<slug>.jpg` (Spotify oEmbed: `https://open.spotify.com/oembed?url=<album url>` → `thumbnail_url`).
2. In `releases.js`, add a block at the top of `RELEASES` (newest first).
3. If it's the new latest release, update `LATEST` (title, label, cover, spotify, embed = `https://open.spotify.com/embed/album/<id>`).

## Files
- `index.html` – page structure and copy (hero, releases, Your Story Your Song, about, footer links)
- `style.css` – dark, mobile-first styles
- `releases.js` – release data (edit this per release)
- `app.js` – renders the hero + grid, filter chips
- `.nojekyll` – so GitHub Pages serves files untouched
