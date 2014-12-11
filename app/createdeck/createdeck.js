'use strict';

angular.module('myApp.createdeck', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/createdeck', {
    templateUrl: 'createdeck/createdeck.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);
