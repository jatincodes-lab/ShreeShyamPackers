# Packers & Movers website

This React app adapts the downloaded Haul template. It keeps the original layout, CSS, images and vanilla UI interactions.

## Run locally

```sh
npm install
npm run dev
```

The homepage is `/`. Other pages use clean paths such as `/services/home-shifting`, `/pricing`, `/how-it-works`, `/locations`, `/quote`, `/track`, `/help/faqs` and `/contact`. The city and route URLs are content templates; verify coverage and add original local details before publishing. The production host must serve `index.html` for these app paths.

## Business setup

Update `public/js/business-config.js` with the quote API URL. The homepage form posts move type, pickup and destination locality/PIN, preferred date, inventory, name, mobile number and contact consent as JSON. It reports an error without claiming submission when no API URL is configured.

Replace visible placeholders only with business-approved details. Confirm service coverage, contact channels, prices and quote terms, protection and claims terms, company identity and any testimonials before publishing. Page content and metadata are maintained in `src/SitePage.jsx`; the adapted homepage is in `src/App.jsx`.
