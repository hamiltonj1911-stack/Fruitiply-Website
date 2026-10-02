# Analytics and SEO setup

## What the theme already does

- **Product data for Google** (`snippets/juice-structured-data.liquid`): each juice
  page outputs Product JSON-LD with name, description, images, color name and
  virtue. A price/offer is only included once the juice's
  `availability_status` metafield is `available_online`.
- **Brand data**: Dawn outputs Organization data (name, logo, social links) on
  every page and WebSite data on the home page.
- **Social previews**: Open Graph and Twitter tags on every page. Juice pages use
  the product's first image; other pages use the social sharing image.
- **Analytics events** (`assets/fruitiply-analytics.js`): publishes these events
  through Shopify's Customer Events system:

  | Event | Fires when |
  |---|---|
  | `fruitiply:cta_click` | A button-style link in the page content is clicked (label + URL) |
  | `fruitiply:retailer_click` | A "Where to buy" button is clicked |
  | `fruitiply:sign_up` | A newsletter signup succeeds |
  | `fruitiply:contact_submit` | The contact form is sent successfully |

  Product page views are tracked by Shopify's built-in `product_viewed` event.

## Setup in the admin (at launch)

1. **SEO titles/descriptions:** set per page/product under **Search engine
   listing** on each page, product and collection. Home page: **Online Store →
   Preferences**.
2. **Social sharing image:** **Online Store → Themes → Customize → Theme settings
   → (or Preferences) Social sharing image**, 1200×628 recommended.
3. **GA4:** install Google's official **Google & YouTube** app and connect the
   client's GA4 property. It sends page views and product views automatically.
4. **Custom events to GA4** (needs approval: this loads Google's gtag script).
   **Settings → Customer events → Add custom pixel**, name it "Fruitiply events",
   paste the code below, and replace the measurement ID (GA4 → Admin → Data
   streams; it's a public ID, not a secret).

   ```js
   const MEASUREMENT_ID = 'G-XXXXXXXXXX';

   const script = document.createElement('script');
   script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
   script.async = true;
   document.head.appendChild(script);
   window.dataLayer = window.dataLayer || [];
   function gtag() { dataLayer.push(arguments); }
   gtag('js', new Date());
   gtag('config', MEASUREMENT_ID, { send_page_view: false });

   for (const name of ['cta_click', 'retailer_click', 'sign_up', 'contact_submit']) {
     analytics.subscribe(`fruitiply:${name}`, (event) => {
       gtag('event', name, event.customData || {});
     });
   }
   ```

   Then **Connect** the pixel. Check events in GA4 → Reports → Realtime.
5. **Search Console:** add the domain property, verify via DNS, and submit
   `https://fruitiply.com/sitemap.xml` (Shopify generates it and `robots.txt`).

## Checking the structured data

Once the store has a preview URL, paste a juice page URL into Google's Rich
Results Test (search.google.com/test/rich-results). Note: Google only shows
Product rich results when an offer, review or rating exists, so juices that
aren't for sale will validate but won't get a price snippet. That's intended.
