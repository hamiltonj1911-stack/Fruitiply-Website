# Fruitiply Shopify theme

Theme for fruitiply.com, a cold-pressed juice brand by The Clientele Collective LLC.
Built on Shopify's [Dawn](https://github.com/Shopify/dawn) theme (v16.0.0).

**This repository is the source of truth for the website code.** Changes made in
the Shopify theme editor are committed back here automatically once the theme
is connected through Shopify's GitHub integration.

## What's custom

Everything else is stock Dawn, configured through theme settings and JSON templates.

| File | Purpose |
|---|---|
| `sections/juice-details.liquid` + `assets/section-juice-details.css` | Juice product details from `fruitiply.*` metafields; empty fields hide themselves |
| `snippets/juice-accent.liquid` | Exposes each juice's color as `--juice-accent` |
| `snippets/juice-structured-data.liquid` | Product JSON-LD; price only shown when a juice is sold online |
| `sections/fruitiply-404.liquid` | Editable 404 page |
| `assets/fruitiply-analytics.js` | Publishes CTA, retailer, signup and contact events via Shopify Customer Events |
| `templates/*.json` | Home, product, collection, page and 404 layouts |
| `config/settings_data.json` | Colors (cream / green / gold) and fonts |

Small edits to Dawn files are marked with a `Fruitiply` comment
(`layout/theme.liquid`, `sections/main-product.liquid`, `snippets/meta-tags.liquid`).

## Setup guides

- [docs/store-setup.md](docs/store-setup.md): pages, collection, menus, policies, cookie banner
- [docs/metafields.md](docs/metafields.md): juice metafield definitions
- [docs/analytics-seo.md](docs/analytics-seo.md): GA4, Search Console, structured data
- [docs/launch-checklist.md](docs/launch-checklist.md): pre-launch checks

## Local development

Requires the [Shopify CLI](https://shopify.dev/docs/api/shopify-cli) and staff or
collaborator access to the store.

```bash
shopify theme dev --store fruitiply.myshopify.com   # live preview with hot reload
shopify theme check                                  # lint
```

Never commit API keys, passwords, tokens or store credentials.

## Rules for changes

- Owner-editable content belongs in theme settings, sections and metafields, not hardcoded in Liquid.
- No new apps or third-party scripts without the owner's approval.
- Don't add nutrition facts, allergen info, health claims or legal text unless the client provides it.

## License

Dawn is © Shopify, released under the MIT license (see `LICENSE.md`).
