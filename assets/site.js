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
  // Google Ads conversions (Tires11 277-530-9870)
  function conv(id) { if (typeof window.gtag === 'function' && id) window.gtag('event', 'conversion', { send_to: id, value: 1.0, currency: 'CAD' }); }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="tel:"],a[href^="sms:"]');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (href.indexOf('tel:') === 0) return conv(window.TIRES11_CALL_CONVERSION);
    // "Text us my booking" on the booking page = booking request sent by text
    if (a.closest('#bk')) return conv(window.TIRES11_BOOKING_CONVERSION);
  });
  // Confirmed online bookings are tracked inside booking.js (fireConversion), with the booking # to avoid double counts.
})();
