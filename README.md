# Real Talk Cards

**Cards That Say What Everybody's Thinking.**

A print-on-demand greeting card storefront built around the Black American experience. Based in Charlotte, NC.

## What's here

- `site/` is the storefront. It's a static website with no build step.
  - `index.html` is the page.
  - `cards.js` holds all 51 cards (occasion, vibe, front text, inside text, status).
  - `app.js` runs browsing, the card preview, personalization, and the bag.
  - `styles.css` holds the look of the four vibes.
- `CARD_COPY.md` lists all 51 card drafts for the editor to review.

## Run it

Open `site/index.html` in a browser, or run `npx serve site`.

## Not done yet

- Checkout. It shows a "not live yet" note until a print-on-demand partner is connected.
- Price. $6.99 is a placeholder in `site/app.js`.
- Cover art. Covers are designed in code for now. AI-generated art can replace them later.
- Card approval. Every card is still marked "draft."
