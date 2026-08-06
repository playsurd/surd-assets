/* surd:strip-trackers stub: Google Analytics removed. Keeps window.ga so callers do not throw. */
(function (W) {
  if (typeof W.ga !== 'function') { W.ga = function () {}; W.ga.q = []; W.ga.l = 1 * new Date(); }
  W.dataLayer = W.dataLayer || [];
  if (typeof W.gtag !== 'function') { W.gtag = function () {}; }
})(window);
