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

The site uses the browser History API for navigation. `/about` and `/contact` remain readable aliases.

## Integrations

The Download page requests Android and firmware releases from `VITE_API_URL`, defaulting to the existing JustRide release service. If the release service is unavailable, the existing Android APK fallback URL is used. The Contact page uses the existing email addresses and opens the visitor's email app with a prepared message; there is no contact submission API in this project.

Device images in `src/assets` are the supplied JustRide renders, including separate day and night navigation images. The product gallery contains front, back, left, and right views.

The early-access form posts to the existing backend's `/api/early-interest` endpoint. In development, Vite proxies `/api` to `http://localhost:5000`; start the backend separately with a working MongoDB connection. In production, set `VITE_API_URL` to the deployed backend API URL if it differs from the site's existing default. Staff can retrieve paginated submissions through `GET /api/early-interest?page=1` with an ADMIN or HELPER token.
