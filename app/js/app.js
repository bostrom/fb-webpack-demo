angular.module('myapp', [])

  .controller('MainCtrl', function() {
    this.greeting = 'Hello Webpack!';
  })

  .component('currentTime', {
    template: `
      <div>{{$ctrl.time | date:'medium'}}</div>
    `,
    controller: function($timeout) {
      var $ctrl = this;

      (function tick() {
        $ctrl.time = new Date();
        $timeout(tick, 1000);
      })();
    }
  });
