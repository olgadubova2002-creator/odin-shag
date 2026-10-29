(function () {
  var els = document.querySelectorAll('[data-r]');
  if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function (list) {
    list.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } });
  }, { threshold: 0.12 });
  els.forEach(function (e) { io.observe(e); });
  setTimeout(function () { document.querySelectorAll('.hero [data-r]').forEach(function (e) { e.classList.add('in'); }); }, 60);
})();
