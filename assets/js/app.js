var app = angular.module('StarterApp', ['ngRoute', 'ngMaterial']);


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


app.factory('policy', function() {
  console.log("===factory.policy==");
  var policy = {driver :{}, plan:{}, car :{}};
  return policy;
});



app.controller('AppCtrl', ['$scope', '$filter', '$mdSidenav', '$mdDialog', function ($scope, $filter, $mdSidenav, $mdDialog) {

  console.log("== AppCtrl ==");

  $scope.licenseMonth = '';

  $scope.months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec' ];


  $scope.drivers = [
    {name : 'main driver'},
    {name : 'driver 2'},
    {name : 'driver 3'}
  ]

  $scope.toggleSidenav = function (menuId) {
    $mdSidenav(menuId).toggle();
  };


  $scope.demo = {
    topDirections: ['left', 'up'],
    bottomDirections: ['down', 'right'],
    availableModes: ['md-fling', 'md-scale'],
    selectedMode: 'md-fling',
    availableDirections: ['up', 'down', 'left', 'right'],
    selectedDirection: 'down'
  };

  $scope.posts = [];


  $scope.showAdvanced = function (ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: '/templates/dialogClaim.html',
      parent: angular.element(document.body),
      targetEvent: ev
    })
      .then(function (answer) {
        $scope.alert = 'You said the information was "' + answer + '".';
      }, function () {
        $scope.alert = 'You cancelled the dialog.';
      });
  };

}]);
app.controller('offerCtrl', ['$scope', '$filter', '$mdSidenav', '$mdDialog', function ($scope, $filter, $mdSidenav, $mdDialog) {


  console.log("== offerCtrl ==");

  $scope.myDate = new Date();
  $scope.minDate = new Date(
    $scope.myDate.getFullYear(),
    $scope.myDate.getMonth() - 2,
    $scope.myDate.getDate());
  $scope.maxDate = new Date(
    $scope.myDate.getFullYear(),
    $scope.myDate.getMonth() + 2,
    $scope.myDate.getDate());
  $scope.onlyWeekendsPredicate = function(date) {
    var day = date.getDay();
    return day === 0 || day === 6;
  }

}]);
app.controller('addonCtrl', ['$scope', 'policy','$filter', '$mdSidenav', '$mdDialog', '$mdMedia', function ($scope,policy, $filter, $mdSidenav, $mdDialog, $mdMedia) {
  console.log("== addonCtrl ==");
  $scope.policy = policy;
  $scope.policy.packs = [
    {id:'family', name:'Family protector', selected : false, panel_content:"panel content for FP", modal_body:  "Fore aut non quem incididunt, varias reprehenderit deserunt quem offendit, cillum proident ne reprehobant voluptatibus quo mentitum est laboris. Quorum mandaremus graviterque. Mentitum id velit, dolor aut litteris, ea varias illustriora, ita commodo ita ingeniis, iis nulla appellat incurreret, aut irure amet summis pariatur ita ubi quis dolore veniam proident, consequat sed ingeniis."},
    {id:'duo', name:'Pack duo', selected : false, panel_content:"panel content for duo", modal_body:  "Fore aut non quem incididunt, varias reprehenderit deserunt que"},
  //  {id:'overseas', name:'Overseas protector', selected : false, panel_content:"panel content for overseas protector", modal_body:  "Fore aut non quem incididunt, varias reprehenderit deserunt que"},
  //  {id:'claims', name:'Claims protector', selected : false, panel_content:"panel content for claims", modal_body:  "Fore aut non quem incididunt, varias reprehenderit deserunt que"}
  ];
  $scope.policy.addons = [
    {id:'excess', name:'Family protector', selected : false, panel_content:"panel content for FP", modal_body:  "Fore aut non quem incididunt, varias reprehenderit deserunt quem offendit, cillum proident ne reprehobant voluptatibus quo mentitum est laboris. Quorum mandaremus graviterque. Mentitum id velit, dolor aut litteris, ea varias illustriora, ita commodo ita ingeniis, iis nulla appellat incurreret, aut irure amet summis pariatur ita ubi quis dolore veniam proident, consequat sed ingeniis."},
    {id:'ncd protector', name:'Pack duo', selected : false, panel_content:"panel content for duo", modal_body:  "Fore aut non quem incididunt, varias reprehenderit deserunt que"},
    {id:'overseas', name:'Overseas protector', selected : false, panel_content:"panel content for overseas protector", modal_body:  "Fore aut non quem incididunt, varias reprehenderit deserunt que"},
    {id:'claims', name:'Claims protector', selected : false, panel_content:"panel content for claims", modal_body:  "Fore aut non quem incididunt, varias reprehenderit deserunt que"}
  ];

  $scope.showAdvanced = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: '/templates/dialogClaim.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: useFullScreen
    })
      .then(function(answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function() {
        $scope.status = 'You cancelled the dialog.';
      });
    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };


}]);
app.controller('policyCtrl', ['$scope',  '$filter', '$mdSidenav', '$mdDialog', function ($scope, $filter, $mdSidenav, $mdDialog) {

  $scope.drivers = [ 'Main driver', 'Driver 2', 'Driver 3', 'Driver 4', 'Driver 5'];
  console.log("== policyCtrl ==");
  $scope.showHints = true;
  $scope.user = {
    name: "",
    email: "",
    social: "123456789",
    phone: "N/A"
  };

}]);

function DialogController($scope, $mdDialog) {

  $scope.colors = ["green", "gray", "yellow", "blue", "purple", "red"];

  $scope.createPost = function (newPost) {
  };

  $scope.hide = function () {
    $mdDialog.hide();
  };
  $scope.cancel = function () {
    $mdDialog.cancel();
  };
  $scope.answer = function (answer) {
    $mdDialog.hide(answer);
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
