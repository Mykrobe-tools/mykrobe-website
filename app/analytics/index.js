/* @flow */

if (process.env.GA_ID) {
  // tracking
  window.ga =
    window.ga ||
    function() {
      (window.ga.q = window.ga.q || []).push(arguments);
    };
  window.ga.l = +new Date();

  window.ga('create', process.env.GA_ID, 'auto');
  window.ga('set', 'anonymizeIp', true);
  window.ga('require', 'eventTracker');
  window.ga('require', 'outboundLinkTracker');
  window.ga('require', 'urlChangeTracker');
  window.ga('require', 'cleanUrlTracker');

  window.ga('send', 'pageview');
}
