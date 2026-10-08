/*
  Fruitiply analytics events.

  Publishes custom events through Shopify's Customer Events system
  (Shopify.analytics.publish). Nothing is sent to Google from here and no
  tracking IDs live in the theme: a custom pixel in Settings > Customer events
  subscribes to these events and forwards them to GA4 (see
  docs/analytics.md). Product page views are already tracked by Shopify's
  standard `product_viewed` event, so they aren't duplicated here.

  Events:
  - fruitiply:cta_click       any button-styled link in the page content
  - fruitiply:retailer_click  "Where to buy" buttons (data-fruitiply-event)
  - fruitiply:sign_up         newsletter signup succeeded
  - fruitiply:contact_submit  contact form sent successfully
*/
(function () {
  function publish(name, detail) {
    var payload = Object.assign({ page: window.location.pathname }, detail);
    if (window.Shopify && Shopify.analytics && typeof Shopify.analytics.publish === 'function') {
      Shopify.analytics.publish('fruitiply:' + name, payload);
    }
    if (window.Shopify && Shopify.designMode) {
      console.debug('[fruitiply analytics]', name, payload);
    }
  }

  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[href]');
    if (!link) return;

    // Visible label only (drop screen-reader-only text like "Opens in a new window").
    var copy = link.cloneNode(true);
    copy.querySelectorAll('.visually-hidden').forEach(function (el) {
      el.remove();
    });
    var label = copy.textContent.replace(/\s+/g, ' ').trim();
    var named = link.getAttribute('data-fruitiply-event');

    if (named) {
      publish(named, { label: label, url: link.href });
    } else if ((link.classList.contains('button') || link.classList.contains('fy-btn')) && link.closest('main')) {
      publish('cta_click', { label: label, url: link.href });
    }
  });

  // Shopify reloads the page after a successful form post and adds these
  // query flags, so firing here only counts submissions that went through.
  var params = new URLSearchParams(window.location.search);
  if (params.get('customer_posted') === 'true') publish('sign_up', {});
  if (params.get('contact_posted') === 'true') publish('contact_submit', {});
})();
