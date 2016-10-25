var angular = require('angular');
var css = require('./css/app.css');

var mainCtrl = require('./controllers/mainCtrl.js');
var currentTime = require('./components/currentTime.js');

module.exports = angular.module('myapp', [])
  .component('currentTime', currentTime)
  .controller('MainCtrl', mainCtrl);
