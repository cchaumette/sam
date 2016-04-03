var app = angular.module('StarterApp', ['ngRoute', 'ngMaterial','algoliasearch']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('red');

})


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
      when('/payment', {
        templateUrl: 'templates/payment.html',
        controller: 'paymentCtrl'
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
app.controller('paymentCtrl', ['$scope','policy', '$filter', '$mdSidenav', '$mdDialog','$sce', '$timeout', '$http', function ($scope, policy,  $filter, $mdSidenav, $mdDialog, $sce, $timeout, $http) {
  $scope.policy = policy;
  console.log("== policyCtrl ==");
  $scope.showHints = true;
  $scope.user = {
    name: "",
    email: "",
    social: "123456789",
    phone: "N/A"
  };
  $scope.ref = "";
  var url_endpoint = 'http://axa-digital-sit.getvalue.com.sg/api/pahsbc'
  var timer = 0;

  $scope.payStatus = {message : "Pay!", status: 'start'};
  var error_message;

  $scope.checkStatus = function () {
    timer = timer + 1;
    console.log("check status =" + $scope.ref);
    if(timer < 10){
      $http.post(url_endpoint + "/status",
        {
          "id": $scope.ref
        }
      ).success(function (resp) {
          console.log(resp);
          if (resp.status == 'OK') {
            $scope.payment_ok = true;
            $scope.payment_error = false;

            info = JSON.parse(resp.info);

            $scope.payStatus = {message : "Payment confirmed", status: 'ok', confirmation_number : info.TM_ApprovalCode };
          }
          else {
            try{
              $scope.payment_ok = false;
              $scope.payment_error = true;

              info = JSON.parse(resp.info);
              error_message = info.TM_ErrorMsg;

            }catch(e){};

            $timeout(function () {
              $scope.checkStatus();
            }, 1000);
          }
        })
        .error(function (resp) {
          $timeout(function () {  $scope.checkStatus() }, 1000);
        }
      )
    }
    else{
      $scope.payStatus = {message : "Payment ERROR", status: 'error', error_message : error_message};
    }
  }

  $scope.makePayment = function() {


    $scope.payStatus = {message : "...processing...", status: 'processing'};

    $http.post(url_endpoint + "/payment",
      {"kids":0,"spouse":0,"email":"a@a.com","customer_encrypted_data":"Y2MwNDI5ZWZmODYyMzJkMDllOWJlNzU1M2IzMDEyYzAwNjU3MjMxOTc4YTdkZGVkNDI5OWRlMDIzMjNkOWM3MjQyYjQ2ZjA1MzVkOGMxNDNmN2ZiMzQ0NzQ2NTdkNjQ2YjRkM2UwY2Y4YjNkN2E0N2EzZjUxYzY1YTM2YzE5ZjE2ODllMTEzMTRlNTE3ZTYwZjAxOWUyYjU1ZTM0ZjRmZmQzODA2YTg4Y2VmY2JiZmY3ZDYyMzE0YTBhMDFhNzY5MjM3ZDBmODc4NjUzZTU2YzhjMTJiNGEwZmIwNzI4ZjExZDExOGExZTFiZTVhNzU3YTFhZWMxOTU5NjgzMDljZQ==:0xXPVkRERERegr5qezm8qIdqwtb+fjJxfSE65vGUvQ1kWSprH3Txs7G5W8As1Fb0YWXgP1Kt+z2gFsijshuMd1UybVGdsU32hXErRsSy5mNvr+bBssz7q+91Mk+NKeAHdNYg54XtSvAhv0slTMpkxDvtl1aIkFd9EHvDnuTmu+swVGxwhSgBBOYvwlNTbuM5aTXXf/D+UVSWKzP6oEhuGeb/mqj5YPU7TbPuVUonaw9qUzxqo2NHxyuV8sD+XVPBNJySju2gLFeDgfg+b+5TtQ5bT87bv0/hnem+m2CD+RnBSsZgukE3vHrfnAsOYUSule2Au5wYFJkX0DEm97zCGiWVllBcNkoXESgscCKH0xzyxMoEmlMLF7enar08XKXCGNPT2Rf3gUNPW7gYh6CN+XhfOfxwtGpiuChoaz05tggOdBneEtSkQYWXEBTk4/puGPBd1qXCc+4mqxUpFG+pJ1I1/hYnVf0u8U0+KOqzEcliPhNY29C2F8SXu+egyg1fH/1od2+Sc3hgFKd7rbRIPhGZtq3R770NcAGKRwbP5NRNxIYvQHRBx/OHnCnAr0QiT3WYSO/XMryCPDXnbdPo3K5Gq6CTMuXpXlE594h1e9FIeQv/8quhR6PKUZAuO7uarRerD+8zVheB","policy_data":"{\"start_date\":\"2016-02-25\",\"end_date\":\"24/02/2017\",\"insuredlist\":[{\"status\":\"Policyholder\",\"dp\":{\"dt\":\"2016-02-25T14:54:19.640Z\",\"dateOptions\":{\"formatYear\":\"yyyy\",\"startingDay\":1,\"year-range\":20},\"opened\":false},\"salutation\":\"Mr.\",\"surname\":\"a\",\"given_name\":\"a\",\"dob\":\"1982-02-03T16:00:00.000Z\",\"age\":34,\"nric\":\"a\",\"nationality\":\"Singaporean\"}],\"street_name\":\"a\",\"block\":\"a\",\"unit\":\"a\",\"post_code\":\"a\",\"mobile\":12341234,\"email\":\"a@a.com\",\"declaration_1\":true,\"declaration_2\":true}"}
    ).success(function(resp) {
        card_num = $scope.card.number.replace(/ /g,"");
        car_exp = $scope.card.expiry.replace(/ /g,"").split("/")[1] + $scope.card.expiry.replace(/ /g,"").split("/")[0];
        card_cvc = $scope.card.cvc
        $scope.urlPayment = resp.url + "&ccnum="+ card_num +"&ccdate="+ car_exp +"&cccvv="+ card_cvc+"&paytype=3&skipstatuspage=Y";
        $scope.ref = resp.ref;
        console.log("== payment=" + $scope.ref);
        console.log($scope.urlPayment);
        $scope.currentProjectUrl = $sce.trustAsResourceUrl($scope.urlPayment);
        $timeout(function () {  $scope.checkStatus() }, 1000);
      })
      .error(function(data, status, headers, config) {
        console.log(status)
      });
    ;
  };




  $scope.card = {};

  $scope.cardPlaceholders = {
    name: 'Your Full Name',
    number: 'xxxx xxxx xxxx xxxx',
    expiry: 'MM/YYYY',
    cvc: 'xxx'
  };

  $scope.cardMessages = {
    validDate: 'valid\nthru',
    monthYear: 'MM/YYYY'
  };

  $scope.cardOptions = {
    debug: true,
    formatting: true
  };


}]);

function DialogController($scope, $mdDialog, currentPack, policy) {
  $scope.currentPack = currentPack;
  $scope.policy = policy
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
