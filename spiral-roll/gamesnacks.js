/* surd:strip-trackers stub: Google GameSnacks ad/analytics SDK removed.
 * The globals stay because the game's own SDK shim calls straight into them. No ad ever runs:
 * ad breaks report "notReady" and the rewarded opportunity is simply never offered, which the
 * caller already handles with its own timeout. */
(function (W) {
  W.adsbygoogle = W.adsbygoogle || [];
  if (typeof W.adConfig !== 'function') { W.adConfig = function () {}; }
  if (typeof W.adBreak !== 'function') {
    W.adBreak = function (o) {
      o = o || {};
      if (typeof o.adBreakDone === 'function') {
        setTimeout(function () {
          o.adBreakDone({ breakType: o.type, breakName: o.name, breakFormat: '', breakStatus: 'notReady' });
        }, 0);
      }
    };
  }
  if (typeof W.GAMESNACKS !== 'object' || !W.GAMESNACKS) {
    W.GAMESNACKS = {
      gameReady: function () {}, gameOver: function () {}, levelComplete: function () {},
      sendScore: function () {}, subscribeToAudioUpdates: function () {},
      isAudioEnabled: function () { return true; },
      /* No reward: never call beforeReward. The caller times out and continues unrewarded. */
      rewardedAdOpportunity: function () {},
      showAd: function (cb) { if (typeof cb === 'function') setTimeout(cb, 0); },
    };
  }
})(window);
