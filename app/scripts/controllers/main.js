'use strict';

/**
 * @ngdoc function
 * @name catWarsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the catWarsApp
 */
angular.module('catWarsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
