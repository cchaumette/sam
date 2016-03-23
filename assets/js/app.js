var app = angular.module('StarterApp', ['ngRoute', 'ngMaterial', 'ngSails']);


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




app.controller('AppCtrl', ['$scope', '$sails', '$http', '$filter', '$interval', '$mdSidenav', '$mdDialog', function ($scope, $sails, $http, $filter, $interval, $mdSidenav, $mdDialog) {


    console.log("== AppCtrl ==");



  $scope.userState = '';
  $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
  'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
  'WY').split(' ').map(function (state) { return { abbrev: state }; });


    $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };

    $scope.deletePost = function (postId) {

        if (typeof postId === 'number') {

            var req = {
                method: 'POST',
                url: '/posts/destroy?id=' + postId
            };

            $http(req);

        }

    };

    $scope.determinateValue = 0;

    $scope.$on('$destroy', function () {

        $interval.cancel(postsLoading);

    });

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


  (function () {

        $sails.get("/posts")
            .success(function (data, status, headers, jwr) {

            $scope.posts = data;
            $scope.determinateValue = 100;

        })
            .error(function (data, status, headers, jwr) {

            throw new Error(data);

        });

        $sails.on("posts", function (message) {

            if (message.verb == "destroyed") {

                var index = $filter('getIndex')($scope.posts, parseInt(message.id, 10));
                $scope.posts.splice(index, 1);

            } else if (message.verb == "created") {
                $scope.posts.push(message.data);
            }

        });

    }());

}]);
app.controller('offerCtrl', ['$scope', '$sails', '$http', '$filter', '$interval', '$mdSidenav', '$mdDialog', function ($scope, $sails, $http, $filter, $interval, $mdSidenav, $mdDialog) {


  console.log("== AppCtrl ==");


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
app.controller('addonCtrl', ['$scope', '$sails', '$http', '$filter', '$interval', '$mdSidenav', '$mdDialog', function ($scope, $sails, $http, $filter, $interval, $mdSidenav, $mdDialog) {


  console.log("== AppCtrl ==");

}]);
app.controller('policyCtrl', ['$scope', '$sails', '$http', '$filter', '$interval', '$mdSidenav', '$mdDialog', function ($scope, $sails, $http, $filter, $interval, $mdSidenav, $mdDialog) {


  console.log("== AppCtrl ==");
  $scope.showHints = true;
  $scope.user = {
    name: "",
    email: "",
    social: "123456789",
    phone: "N/A"
  };

}]);

function DialogController($scope, $mdDialog, $http) {

    $scope.colors = ["green", "gray", "yellow", "blue", "purple", "red"];

    $scope.createPost = function (newPost) {

        var req = {
            method: 'POST',
            url: '/posts/create',
            data: newPost
        };

        $http(req)
            .success(function (data) {
            $mdDialog.cancel();
        })
            .error(function (data) {
            console.log(data);
        });

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
