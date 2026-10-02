# Fruitiply product metafields

The juice product template reads these product metafields. Create them once in
**Shopify admin → Settings → Custom data → Products → Add definition**.

For each one, use namespace and key exactly as shown (e.g. `fruitiply.virtue`),
and tick **Storefronts: read access** so the theme can display it.

| Name | Namespace and key | Type | Validation / notes |
|---|---|---|---|
| Virtue | `fruitiply.virtue` | Single line text | e.g. "Joy". Shown above the product title |
| Accent color | `fruitiply.color` | Color | Used for accents only (borders, swatch, tints) |
| Color name | `fruitiply.color_name` | Single line text | e.g. "Sunrise Orange" |
| Ingredients | `fruitiply.ingredients` | Single line text, **list of values** | One ingredient per entry |
| Flavor | `fruitiply.flavor` | Multi-line text | |
| Lesson | `fruitiply.lesson` | Multi-line text | Shown as a featured quote |
| Nutrition | `fruitiply.nutrition` | Rich text | Leave empty until finalized; section is hidden when empty |
| Allergens | `fruitiply.allergens` | Multi-line text | Hidden when empty |
| Availability status | `fruitiply.availability_status` | Single line text, **limit to preset choices** | Choices: `coming_soon`, `available_in_stores`, `available_online` |
| Retailer URL | `fruitiply.retailer_url` | URL | "Where to buy" button is hidden when empty |

Only fill in nutrition, allergens, and any health-related wording with
client-approved, finalized content.

## Showing and hiding

- **Hide a juice entirely:** set the product status to **Draft**.
- **Hide a field on one juice:** leave that metafield empty.
- **Hide or rename a field on all juices:** Online Store → Themes → Customize →
  Products → Default product → **Juice details** section, then hide/rename the block.
- **Purchase buttons:** the Price, Variant picker, Quantity selector and Buy
  buttons blocks exist in the product template but are hidden. Turn them on in the
  theme editor when the e-commerce add-on is approved.
