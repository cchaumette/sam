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


app.controller('AppCtrl', ['$scope','policy', '$filter', '$mdSidenav', '$mdDialog','algolia', function ($scope, policy, $filter, $mdSidenav, $mdDialog,algolia) {

  console.log("== AppCtrl ==");

  $scope.licenseMonth = '';

  $scope.months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec' ];

  $scope.policy = policy;
  $scope.car = policy.car;

  var clientAlgolia = algolia.Client('BGXJZLELLV', 'f73fe5af31d85d2206be16d5a51718b0');
  var indexAlgolia = clientAlgolia.initIndex('car_list_dev');

  $scope.search = {value:""};

  $scope.algolia = function () {
    console.log("car = " + $scope.car.make);
    $scope.car.car_id = null;
    indexAlgolia.search( $scope.car.make).then(function(content){$scope.hits = content.hits;});
  };
  $scope.range = _.range;
  $scope.searchTo = function(car, car_id) {
    $scope.car.make = car;
    $scope.car.car_id = car_id;
  }

  $scope.flow = [
    {step1:true, step2:false, step3:false}
  ];
  $scope.flowOne = function(){
    $scope.flow.step1 = true,
      $scope.flow.step2 = true,
      $scope.flow.step3 = false
  };

  $scope.flowTwo = function(){
    $scope.flow.step1 = true,
      $scope.flow.step2 = true,
      $scope.flow.step3 = true
  };

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
$scope.checkNCD = function(ev, ncd){
  if (ncd == 30 || ncd == 40 ||ncd == 50 ){
    $scope.showAdvanced(ev)
  }
};

  $scope.showAdvanced = function (ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: '/templates/dialogNCD.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        locals :{currentPack : null }
      })
  };


  $scope.CheckClaims = function (claims){
    if (claims == true){
      $scope.showClaims_amount = true;
    }
    else{
      $scope.showClaims_amount = false;
    }
  }
  $scope.CheckClaimsAmount = function (amount){
    if (amount == '0'){
      $scope.showClaims_number = true;
    }
    else{
      $scope.showReferral()
    }
  }
  $scope.CheckClaimsNumber = function (number){
    if (number > '2'){
      $scope.showReferral()
    }

  }
  $scope.CheckClaimsNumberWind = function (number){
    if (number > '2'){
      $scope.showReferral()
    }

  }
  $scope.showReferral = function (ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: '/templates/dialogReferral.html',
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
app.controller('offerCtrl', ['$scope', 'product','$filter', '$mdSidenav', '$mdDialog', function ($scope,product, $filter, $mdSidenav, $mdDialog) {


  console.log("== offerCtrl ==");
  $scope.product = product.offer.Products[2];
  $scope.product.Plans =  _.sortBy($scope.product.Plans, 'DisplayOrder');


  $scope.getMarketingInfo = function (RecordKey){
     for (var i = 0; i < product.marketing.MarketingInfo.length; ++i) {
       if(product.marketing.MarketingInfo[i].RecordKey === RecordKey && product.marketing.MarketingInfo[i].Language === "en"){
          return product.marketing.MarketingInfo[i];
        }
       }
    return null;
  }

  $scope.getBenefitsList = [
    {value:'24/7 Towing & Transportation in Singapore or Overseas', label:'24/7 Towing & transport back home'},
    {value:'Windscreen Replacement with Excess OR Repair your windscreen at your preferred location and get $50 cash reward with no excess', label:'Windscreen Replacement'},
    {value:'Guaranteed Repairs for twelve (12) Months', label:'Guaranteed Repairs for 12 Months'},
    {value:'Delivery of Repaired Car', label:'Delivery of Repaired Car'},
  //  {value:'Reimbursement of 110% of your cars market value in the event of total loss due to flood (without Basic Own Damage Excess)', label:'110% of your cars market value for total loss due to flood'},
    {value:'Reimbursement of 110% of your car’s market value in the event of total loss (without Basic Own Damage Excess)', label:'110% of your cars market value for total loss'},
    {value:'Loss of Personal Effects in Singapore up to $3,000', label:'Loss of Personal Effects'},
    {value:'Medical and dental expenses up to $1,000 per person for you, your named drivers and your immediate family members', label:'Medical and dental expenses'},
    {value:'Loss or Damage', label:'Loss or Damage'},
    {value:'Legal Liability', label:'Legal Liability'},
    {value:'Daily Transport Allowance of $100 for a maximum of 10 days', label:'Daily Transport Allowance'},
    {value:'Workshop of Your Choice', label:'Workshop of Your Choice'}
  ];

  $scope.getBenefits = function () {
    var info;
    for (var i = 0; i < $scope.product.Plans.length; ++i) {
      info = $scope.getMarketingInfo($scope.product.Plans[i].MarketingInfo.RecordKey);
      $scope.product.Plans[i]['Benefits'] = {};
      for (var j = 0; j < info.Fields.length; ++j) {
        if (info.Fields[j].Name.indexOf("Key Benefit") > -1) {
    /*
          if ($scope.getBenefitsList.indexOf(info.Fields[j].Value) == -1) {
            $scope.getBenefitsList.push(info.Fields[j].Value);
          }
    */
          $scope.product.Plans[i]['Benefits'][info.Fields[j].Value] = true;
        }
      }
    }
  }



  $scope.getBenefits();

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
app.controller('addonCtrl', ['$scope', 'policy','product','$filter', '$mdSidenav', '$mdDialog', '$mdMedia', function ($scope,policy,product, $filter, $mdSidenav, $mdDialog, $mdMedia) {
  console.log("== addonCtrl ==");
  $scope.policy = policy;
  $scope.product = product;
  $scope.plan = product.offer.Products[2].Plans[0];
  $scope.getMarketingInfo = function (RecordKey){
    for (var i = 0; i < product.marketing.MarketingInfo.length; ++i) {
      if(product.marketing.MarketingInfo[i].RecordKey === RecordKey && product.marketing.MarketingInfo[i].Language === "en"){
        return product.marketing.MarketingInfo[i];
      }
    }
    return null;
  }

  $scope.getBenefitsList = [
    {value:'24/7 Towing & Transportation in Singapore or Overseas', label:'24/7 Towing & transport back home'},
    {value:'Windscreen Replacement with Excess OR Repair your windscreen at your preferred location and get $50 cash reward with no excess', label:'Windscreen Replacement'},
    {value:'Guaranteed Repairs for twelve (12) Months', label:'Guaranteed Repairs for 12 Months'},
    {value:'Delivery of Repaired Car', label:'Delivery of Repaired Car'},
    //  {value:'Reimbursement of 110% of your cars market value in the event of total loss due to flood (without Basic Own Damage Excess)', label:'110% of your cars market value for total loss due to flood'},
    {value:'Reimbursement of 110% of your car’s market value in the event of total loss (without Basic Own Damage Excess)', label:'110% of your cars market value for total loss'},
    {value:'Loss of Personal Effects in Singapore up to $3,000', label:'Loss of Personal Effects'},
    {value:'Medical and dental expenses up to $1,000 per person for you, your named drivers and your immediate family members', label:'Medical and dental expenses'},
    {value:'Loss or Damage', label:'Loss or Damage'},
    {value:'Legal Liability', label:'Legal Liability'},
    {value:'Daily Transport Allowance of $100 for a maximum of 10 days', label:'Daily Transport Allowance'},
    {value:'Workshop of Your Choice', label:'Workshop of Your Choice'}
  ];

  $scope.getPacks = function () {
    var info;
    for (var i = 0; i < $scope.plan.Packs.length; ++i) {
      info = $scope.getMarketingInfo($scope.plan.Packs[i].MarketingInfo.RecordKey);
      $scope.plan.Packs[i]['Benefits'] = [];
      for (var j = 0; j < info.Fields.length; ++j) {
        if (info.Fields[j].Name.indexOf("Main Title") > -1) {
          $scope.plan.Packs[i]['Title']= info.Fields[j].Value ;
        }
        else if(info.Fields[j].Name.indexOf("Sub Title 1") > -1){
          $scope.plan.Packs[i]['SubTitle']= info.Fields[j].Value ;
        }
        else if (info.Fields[j].Name.indexOf("Key Benefit") > -1 && info.Fields[j].Value) {
          $scope.plan.Packs[i]['Benefits'].push(info.Fields[j].Value);
        }
      }
    }
  }
  $scope.getPacks();

  $scope.getAddons = function () {
    var info;
    for (var i = 0; i < $scope.plan.AddOns.length; ++i) {
      info = $scope.getMarketingInfo($scope.plan.AddOns[i].MarketingInfo.RecordKey);
      for (var j = 0; j < info.Fields.length; ++j) {
        if (info.Fields[j].Name.indexOf("Main Title") > -1) {
          $scope.plan.AddOns[i]['Title']= info.Fields[j].Value ;
        }
        else if(info.Fields[j].Name.indexOf("Sub Title 1") > -1){
          $scope.plan.AddOns[i]['SubTitle']= info.Fields[j].Value ;
        }
      }
    }
  }

  $scope.getAddons();



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

  $scope.$watch(function() {
    return $mdMedia('xs') || $mdMedia('sm');
  }, function(wantsFullScreen) {
    $scope.customFullscreen = (wantsFullScreen === true);
  });


  $scope.showPacks = function(ev, p) {
    console.log("== showPacks ==");
   var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: '/templates/dialogPack.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: useFullScreen,
      locals :{currentPack : p }
    })
  };



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
