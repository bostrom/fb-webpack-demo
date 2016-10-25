var css = require('./currentTime.css');

module.exports = {
  template: require('./currentTime.html'),
  controller: function($timeout) {
    var $ctrl = this;

    (function tick() {
      $ctrl.time = new Date();
      $timeout(tick, 1000);
    })();
  }
};
