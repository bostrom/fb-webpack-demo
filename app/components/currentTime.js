angular.module('myapp')
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
