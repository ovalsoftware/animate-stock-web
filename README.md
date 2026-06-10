# animatestock.com

Marketing site for the Animate Stock iOS app, built with [Astro](https://astro.build) as a fully static site.

## Develop

```sh
npm install
npm run dev      # local dev server
npm run build    # static output in dist/
npm run preview  # serve the built site
```

## Pages

- `/` — homepage with all features
- `/stock-price-animation` — animated stock chart videos
- `/market-cap-animation` — market cap evolution videos
- `/compare-stocks` — multi-stock comparison animations
- `/what-if-i-invested` — "what if I bought $100 of X in YYYY" scenarios
- `/stock-chart-gif-maker` — looping GIF export
- `/support`, `/privacy`

## Before launch

1. **App Store link** — search for `id0000000000` and replace with the real
   App Store URL (it appears in `src/layouts/Base.astro`, `src/components/CtaBand.astro`,
   and the hero of each page).
2. **GIF slots** — export demo GIFs from the app and fill the placeholders.
   See `public/gifs/README.md` for the list of slots and how to wire them up.
3. **OG image** — add `public/og-image.png` (1200×630) for social link previews.

## Deployment

`npm run deploy` builds the site and pushes `dist/` to the `gh-pages` branch,
which GitHub Pages serves at <https://ovalsoftware.github.io/animate-stock-web/>.
The deploy script sets `SITE` and `BASE_PATH` env vars so links work under the
`/animate-stock-web/` base path; plain `npm run build` defaults to
animatestock.com at `/`.

To go live on animatestock.com:

1. Remove `SITE=… BASE_PATH=…` from the `deploy` script in `package.json`
   (the build then defaults to animatestock.com with base `/`).
2. Add `public/CNAME` containing `animatestock.com`.
3. In the repo's Pages settings, set the custom domain to `animatestock.com`
   and enforce HTTPS.
4. At your DNS provider, point `animatestock.com` to GitHub Pages
   (A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
   `185.199.111.153`, plus a `www` CNAME to `ovalsoftware.github.io`).

The site also deploys anywhere that serves static files (Netlify, Vercel,
Cloudflare Pages, S3).
