# Store setup (Shopify admin)

The theme provides templates; these items are created in the Shopify admin.
Do them once, after the theme is installed. See also `metafields.md`.

## 1. Pages

**Online Store → Pages → Add page.** For each page, set the title, then under
**Theme template** (right sidebar) pick the template shown. The URL handle must
match so theme buttons link correctly (edit it under "Search engine listing").

| Page title | Handle | Theme template |
|---|---|---|
| Our Story | `our-story` | `page.our-story` |
| About | `about` | `page.about` |
| FAQ | `faq` | `page.faq` |
| Contact | `contact` | `page.contact` |
| Where to Find Us | `where-to-find-us` | `page.where-to-find-us` |

The page title becomes the page's main heading (H1). Text typed into the page's
own content box appears directly under it; the remaining sections are edited in
**Online Store → Themes → Customize** (choose the page from the top dropdown).

## 2. The Nine Juices collection

**Products → Collections → Create collection**: title "The Nine Juices",
handle `the-nine-juices`, type **Automated** with condition
*Product type is equal to Juice* (set each juice's product type to "Juice").
Set **Sort** to *Manually* and drag the juices into display order.

Then in the theme editor, point the home page "Meet the Nine" section and the
"Explore the Juices" buttons at this collection (currently they use the
built-in "all products" collection).

## 3. Navigation menus

**Online Store → Navigation.**

- **Main menu:** The Juices (collection), Our Story, About, FAQ, Contact
- **Footer menu:** Where to Find Us, FAQ, Contact, Privacy Policy, Terms of Service

## 4. Policies (legal text from the client's attorney)

**Settings → Policies.** Fill in Privacy Policy and Terms of Service with the
attorney-approved text. Shopify publishes them at `/policies/privacy-policy`
and `/policies/terms-of-service` and adds them to the footer menu picker.
Do not use Shopify's generated templates without the attorney's review.

## 5. Cookie notice

**Settings → Customer privacy → Cookie banner.** Shopify's built-in banner is
used instead of custom code; it's accessible, handles regional consent rules,
and its wording can be edited there once the attorney approves it.

## 6. Contact form

Messages go to the store's sender email (**Settings → Notifications → Sender
email**). Shopify adds spam protection (hCaptcha) automatically; confirm it's on
under **Online Store → Preferences → Spam protection**.
