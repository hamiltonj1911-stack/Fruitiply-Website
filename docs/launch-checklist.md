# Pre-launch checklist

Work through this on the unpublished theme preview (`shopify theme dev` or the
theme's Preview link) before publishing. Tick each item.

## Content
- [ ] No `[PLACEHOLDER]` text left anywhere (search each page)
- [ ] Nutrition, allergens, and any health wording are client-approved only
- [ ] Privacy Policy and Terms contain the attorney's final text
- [ ] Every juice has: image with alt text, virtue, color, color name, ingredients, flavor, lesson, availability status
- [ ] Hidden juices are set to Draft

## Devices and browsers
- [ ] iPhone (Safari), Android (Chrome)
- [ ] iPad / tablet
- [ ] Desktop: Chrome, Safari, Firefox, Edge
- [ ] Home hero buttons visible without scrolling on a phone

## Accessibility
- [ ] Tab through Home, a juice page, FAQ, Contact: focus always visible, order makes sense, menu opens/closes with keyboard (Escape closes)
- [ ] FAQ questions open/close with Enter/Space
- [ ] Hero text readable over the final photo (raise image overlay if not)
- [ ] Juice colors from the brand book: accent tints still look right; text stays dark green
- [ ] Run Lighthouse (Chrome DevTools → Lighthouse) on Home, a juice page, FAQ, Contact; aim for 90+ Accessibility and SEO

## Forms
- [ ] Contact form: send a real test message; success message shows; email arrives
- [ ] Contact form: submit empty / bad email, error message shows
- [ ] Newsletter (home + footer + Where to Find Us): test signup shows success and appears under Customers
- [ ] Spam protection on (Online Store → Preferences)

## Links and pages
- [ ] Every header/footer link works; no 404s
- [ ] Visit a made-up URL (e.g. /oops): custom 404 shows with working buttons
- [ ] Policy links in footer work

## SEO and sharing
- [ ] Each page/product has its own title and description
- [ ] Paste a juice URL into Google's Rich Results Test: Product detected, no errors
- [ ] Share the home page and a juice page in iMessage/Facebook (or opengraph.xyz): image, title, description look right
- [ ] Favicon set (Theme settings → Logo → Favicon)
- [ ] Store password removed only at launch; then submit sitemap in Search Console

## Analytics
- [ ] GA4 Realtime shows page views
- [ ] Custom pixel connected; clicking a button and signing up show `cta_click` / `sign_up` in Realtime

## Launch
- [ ] Duplicate the current live theme as a backup
- [ ] Domain connected (Settings → Domains), SSL active
- [ ] Publish theme; re-check home, a juice page, and contact on phone and laptop
