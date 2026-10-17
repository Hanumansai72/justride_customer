# JustRide customer website

React 19 and Vite product website for the JustRide connected motorcycle navigation device.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build` and serve it with `npm run preview`.

## Pages

- `/` — early-interest homepage
- `/about-us` — About Us
- `/product` — Product
- `/download` — Download
- `/contact-us` — Contact Us
- `/early-access` — alternate URL for the early-interest homepage
- `/faqs` — searchable, grouped product and pre-purchase FAQs

The site uses the browser History API for navigation. `/about` and `/contact` remain readable aliases.

## Integrations

The Download page requests published Android and firmware releases from `https://backend.justride.cc/api` (using the development `/api` proxy locally). It reports release-loading errors instead of inventing a download link. The Contact page opens the visitor's email app with a prepared message; there is no contact submission API in this project.

Device images use the supplied circular JustRide front and side renders. No day/night mode is advertised.

The early-access form posts to `/api/early-interest` through the same backend. In development, Vite proxies `/api` to `http://localhost:5000`; start the backend separately with a working MongoDB connection. Staff retrieve paginated submissions with an ADMIN or HELPER token.

## Website FAQs

`src/data/websiteFaqs.js` contains 20 product-focused answers, separate from the APK troubleshooting library. The homepage and Product page show a compact accordion with a link to `/faqs`; the full page offers categories and keyword search. FAQs are also linked from the product details, navigation and footer.

Only confirmed information is included: 1.43-inch circular display, 2500 mAh battery, estimated 10–12-hour backup, turn-by-turn navigation and the implemented app workflow. Touchscreen/glove support, water resistance, charging, mounting, price, warranty, returns and delivery are deferred until confirmed.

Configure the deployment to serve `index.html` for direct requests to `/faqs` and the other History API routes. `npm run build` verifies the production bundle.
