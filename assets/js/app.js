var app = angular.module('StarterApp', ['ngRoute', 'ngMaterial','algoliasearch']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('light-blue')
    .accentPalette('blue');

});

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'AppCtrl'
      }).
      when('/offer', {
        templateUrl: 'templates/offer.html',
        controller: 'offerCtrl'
      }).
      when('/addon', {
        templateUrl: 'templates/addon.html',
        controller: 'addonCtrl'
      }).
      when('/policy', {
        templateUrl: 'templates/policy.html',
        controller: 'policyCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);




function DialogController($scope, $mdDialog, currentPack, policy) {
  $scope.currentPack = currentPack;
  $scope.select = function () {
    if(currentPack) currentPack.IsSelected = true;
    $mdDialog.hide();
  };
  $scope.cancel = function () {
    $mdDialog.cancel();
  };

}

app.filter('getIndex', function () {
  return function (input, id) {
    var i = 0,
      len = input.length;
    for (; i < len; i++) {
      if (+input[i].id == +id) {
        return i;
      }
    }
    return null;
  };
});
