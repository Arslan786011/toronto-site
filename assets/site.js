/* Mobile Tire Repair Toronto: FAQ, reveal-on-scroll, call tracking hooks */
(function () {
  document.querySelectorAll('.faq-q').forEach(function (b) {
    b.addEventListener('click', function () {
      var it = b.closest('.faq-item'); var open = !it.classList.contains('open');
      it.classList.toggle('open', open); b.setAttribute('aria-expanded', open ? 'true' : 'false');
      var i = b.querySelector('.faq-icon'); if (i) i.textContent = open ? '−' : '+';
    });
  });
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add('visible'); }); }
  // Google Ads: fire a conversion on every tap-to-call / tap-to-text, once the Tires11 tag is installed.
  // Scout fills in window.TIRES11_CALL_CONVERSION = 'AW-XXXX/YYYY' in the Google tag snippet.
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="tel:"],a[href^="sms:"]');
    if (!a || typeof window.gtag !== 'function' || !window.TIRES11_CALL_CONVERSION) return;
    window.gtag('event', 'conversion', { send_to: window.TIRES11_CALL_CONVERSION });
  });
})();
