var app = angular.module('StarterApp', ['ngRoute', 'ngMaterial','algoliasearch']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('red');

});

app.config(function($mdDateLocaleProvider) {
  $mdDateLocaleProvider.formatDate = function (date) {
    return moment(date).format('DD/MM/YYYY');
  };
});

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/homepage', {
        templateUrl: 'templates/homepage.html',
        controller: 'HomepageCtrl'
      }).
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
app.controller('HomepageCtrl', ['$scope','policy', 'product','$filter', '$mdSidenav', '$mdDialog', function ($scope,policy, product, $filter, $mdSidenav, $mdDialog) {
  console.log("== homepageCtrl ==");
  $scope.policy = policy;
  $scope.product = product;
}]);


app.controller('policyCtrl', ['$scope','policy', '$filter', '$mdSidenav', '$mdDialog', function ($scope, policy, $filter, $mdSidenav, $mdDialog) {
  $scope.policy = policy;
  console.log("== policyCtrl ==");
  $scope.showHints = true;
  $scope.user = {
    name: "",
    email: "",
    social: "123456789",
    phone: "N/A"
  };
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
