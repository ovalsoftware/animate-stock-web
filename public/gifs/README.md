# GIF slots

Export GIFs from the Animate Stock app and drop them in this folder, then pass
`src="/gifs/<filename>.gif"` to the matching `<GifSlot>` in the page.

Slots waiting for a GIF (search for `GIF SLOT` in src/pages to find them):

| Page | Suggested content | Ratio |
| --- | --- | --- |
| `index.astro` (home) | Famous stock's full history, e.g. AAPL 2004 → today | landscape (4:3) |
| `stock-price-animation.astro` | Single stock with event markers, e.g. NVDA 2015 → today | landscape (4:3) |
| `market-cap-animation.astro` | Market cap growth, e.g. AAPL crossing $1T/$2T/$3T | landscape (4:3) |
| `compare-stocks.astro` | Two stocks racing, e.g. TSLA vs F since 2010 | landscape (4:3) |
| `what-if-i-invested.astro` | "$100 of Nokia in 2008" scenario | landscape (4:3) |

Example edit in a page:

```astro
<GifSlot
  src="/gifs/tsla-vs-f.gif"
  label="Tesla vs Ford since 2010"
  caption="Tesla vs Ford since 2010 — created with Animate Stock."
/>
```
