var app = angular.module('StarterApp', ['ngRoute', 'ngMaterial','algoliasearch']);


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
  var policy =
  {
    profil:
    {
      "Vehicle": {
        "Make": "FORD",
        "Model": "FOCUS 1.4",
        "YearOfMake": "2000",
        "OffPeakCar": false,
        "Seats": 4,
        "RegistrationNumber": "",
        "EngineNumber": "",
        "ChassisNumber": "",
        "SubModel": "",
        "CubicCapacity": "343",
        "HasFinanceLoan": false,
        "HasFinanceCompany": "",
        "PrevCarInsured": false,
        "PrevCarInsurer": "NONE"


      },
      "Drivers": [
        {
          "Gender": "MALE",
          "MaritalStatus": "MARRIED",
          "DateOfBirth": "19761231",
          "YearsOfDrivingExp": "6",
          "PostalCode": "999999"
        },
        //TODO : dynamique
        {},{},{},{}
      ],
      "NumberOfClaims": "",
      "NumberOfWindscreenClaims": "",
      "TotalClaimAmount": "",
      "NCDPoints": "10",
      "ClaimsPast3Years":"",
      "PolicyStartDate": "20160102",
      "PolicyEndDate": "20170101",
      "Certificate":true
    },

    param :
    {
      "Vehicle": {
        OffPeakCar :[{label : 'No', value : false}, {label : 'Yes', value : true} ],
        YearOfMake : [{year: '2016'},{year: '2015'},{year: '2014'},{year: '2013'},{year: '2012'},{year: '2011'},{year: '2010'},{year: '2009'},{year: '2008'},{year: '2007'},{year: '2006'},{year: '2005'},{year: '2004'},{year: '2003'},{year: '2002'},{year: '2001'},{year: '2000'},{year: '1999'},{year: '1998'},{year: '1997'}],
        Seats:[{value:'9'},{value:'8'},{value:'7'},{value:'6'},{value:'5'},{value:'4'},{value:'3'},{value:'2'}],
        RegistrationNumber:{},
        EngineNumber:{},
        ChassisNumber:{},
        SubModel:{},
        CubicCapacity:{},
        HasFinanceLoan:[{label : 'No', value : false}, {label : 'Yes', value : true} ],
        HasFinanceCompany:{},
        PrevCarInsured:[{label : 'No', value : false}, {label : 'Yes', value : true} ],
        PrevCarInsurer:{}

      },
      "Drivers" :
      {
        Title : [{label :'main driver'},{label :'driver 2'},{label :'driver 3'},{label :'driver 4'}],
        Gender :[{label : 'Male', value : "MALE"}, {label : 'Female', value : "FEMALE"} ],
        MaritalStatus :[{label : 'Yes', value : "MARRIED"}, {label : 'No', value : "OTHER"} ]
      },
      "NCDPoints" : [{label : '50%', value :'50'},{label : '40%', value :'40'},{label : '30%', value :'30'},{label : '20%', value :'20'},{label : '10%', value :'10'},{label : '0%', value :'0'}],
      "ClaimsPast3Years" : [{label : 'No', value : false},{label : 'Yes', value : true}],
      "TotalClaimAmount" : [{label : 'Less than $10,000', value :'0'},{label : 'More than $10,000', value :'10001'}],
      "NumberOfClaims" : [{label : '0', value :'0'},{label : '1', value :'1'},{label : '2', value :'2'},{label : 'more than 2', value :'3'}],
      "NumberOfWindscreenClaims" : [{label : '0', value :'0'},{label : '1', value :'1'},{label : '2', value :'2'},{label : 'more than 2', value :'3'}],
      "Certificate": [{value: false, label:'No'}, {value:true, label:'Yes'}]
    }
  }

  return policy;
});

app.factory('product', function() {
  console.log("===factory.product==");
  var product =
  {
    profil: {
      "Products": [
        {
          "DisplayOrder": "1",
          "EligibilityAction": "Accepted",
          "IsSelected": "false",
          "ProductID": "PRD00003",
          "pxObjClass": "AXA-FW-GI-Int-API-Product",
          "RecordName": "SmartDrive_TP",
          "MarketingInfo": {
            "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
            "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive"
          },
        }],
      "Plans": [
            {
              "Currency": "SGD",
              "FinalPremium": "946.28",
              "IsSelected": "true",
              "PlanID": "PLN00007",
              "PremiumBeforeAuthorityDiscount": "946.28",
              "pxObjClass": "AXA-FW-GI-Int-API-Plan",
              "RecordName": "SmartDrive_Peace",
              "UsualPremium": "1328.13",
              "MarketingInfo": {pxObjClass:"AXA-FW-GI-Int-API-MarketingInfo", RecordKey:"AXA-SG-POL-GI-Motor-Work.SmartDrive_Peace"},

        }],
      "AddOns": [
        {
          "AddOnID": "BGR00028",
          "IsSelected": "false",
          "PremiumBeforeAuthorityDiscount": "76.27",
          "pxObjClass": "AXA-FW-GI-Int-API-AddOn",
          "RecordName": "ChangeExcess",
          "UsualPremium": "76.27",
          "MarketingInfo":{pxObjClass: "AXA-FW-GI-Int-API-MarketingInfo", RecordKey: "AXA-SG-POL-GI-Motor-Work.Excess"},
          "Parameters": [{Name: "ChangeExcess", pxObjClass: "AXA-FW-GI-Int-API-Parameter", Options: [{Name: "Zero Excess", pxObjClass: "AXA-FW-GI-Int-API-ParameterOption", "Value": "Zero"}]
          }]
        }
      ]
        },
    param :
    {
      "Product": {
        DisplayOrder: [{order: '1'}, {order: '2'}, {order: '3'}],
        EligibilityAction: [{value: 'Accepted'}, {value: 'Rejected'}],
        IsSelected: [{value: false}, {value: true}],
        ProductID: [{id: 'PRD00003', label: 'Third Party Only'}, {id: 'PRD00004', label: 'Third Party, Fire & Theft'}, {id: 'PRD00002', label: 'Comprehensive'}],
        pxObjClass: {class: 'AXA-FW-GI-Int-API-Product'},
        RecordName: [{name: 'SmartDrive_TP', label: 'Third Party Only'}, {name: 'SmartDrive_TPFT', label: 'Third Party, Fire & Theft'}, {name: 'SmartDrive', label: 'Comprehensive'}],
        MarketingInfo: [{pxObjClass: 'AXA-FW-GI-Int-API-MarketingInfo', RecordKey: 'AXA-SG-POL-GI-Motor-Work.SmartDrive'}, {pxObjClass: 'AXA-FW-GI-Int-API-MarketingInfo', RecordKey: 'AXA-SG-POL-GI-Motor-Work.SmartDriveTPFT'}, {pxObjClass: 'AXA-FW-GI-Int-API-MarketingInfo', RecordKey: 'AXA-SG-POL-GI-Motor-Work.SmartDriveComprehensive'}]

        },
      "Plans" :
      {
        Currency: {value: 'SGD'},
        FinalPremium: {},
        IsSelected: [{value: false}, {value: true}],
        PlanID: [{id: 'PLN00005'}, {id: 'PLN00007'}, {id: 'PLN00003'}, {id: 'PLN00008'}, {id: 'PLN00012'}],
        PremiumBeforeAuthorityDiscount: {},
        pxObjClass: {class:'AXA-FW-GI-Int-API-Plan'},
        RecordName:[ {name:'SmartDrive_Peace',label: 'Peace'}, {name:'SmartDrive_Essential',label: 'Essential'}, {name:'SmartDrive_EssentialPlus',label: 'Essential Plus'}, {name:'SmartDrive_Flexi',label: 'Flexi'}],
        UsualPremium: {},
        MarketingInfo: [{pxObjClass:'AXA-FW-GI-Int-API-MarketingInfo', RecordKey:'AXA-SG-POL-GI-Motor-Work.SmartDrive_Peace'},{pxObjClass:'AXA-FW-GI-Int-API-MarketingInfo', RecordKey:'AXA-SG-POL-GI-Motor-Work.SmartDrive_Essential'},{pxObjClass:'AXA-FW-GI-Int-API-MarketingInfo', RecordKey:'AXA-SG-POL-GI-Motor-Work.SmartDrive_EssentialPlus'},{pxObjClass:'AXA-FW-GI-Int-API-MarketingInfo', RecordKey:'AXA-SG-POL-GI-Motor-Work.SmartDrive_Flexi'}]
        },
      "AddOns" :
      {
        AddOnID: [{id:'BGR00028'},{id:'BGR00026'},{id:'BGR00010'},{id:'BGR00009'},{id:'BGR00029'},{id:'BGR00008'},{id:'BGR00024'}],
        IsSelected: [{value: false}, {value: true}],
        PremiumBeforeAuthorityDiscount: {},
        pxObjClass: {class:'AXA-FW-GI-Int-API-Plan'},
        RecordName: [{name:'ChangeExcess', label:'Change your excess'},{name:'PersonalAccident', label:'Personal accident for driver'},{name:'CarAccessoriesReimbursedUpTo2K', label:'Car accessories cover'},{name:'CourtesyCar', label:'Courtesy car'},{name:'ReimburseCarMarketValueWithNoExcessAtTotalLoss', label:'Reimbursement of the car market value'},{name:'PhoneAssitanceAndRoadsideSupport', label:'Phone and roadside assistance'},{name:'PAForPassengers', label:'Personal accident for passengers'}],
        UsualPremium:{},
        MarketingInfo:[{pxObjClas: 'AXA-FW-GI-Int-API-MarketingInfo', RecordKey: 'AXA-SG-POL-GI-Motor-Work.Excess'}, {pxObjClas: 'AXA-FW-GI-Int-API-MarketingInfo', RecordKey: 'AXA-SG-POL-GI-Motor-Work.PersonalAccident'},{pxObjClas: 'AXA-FW-GI-Int-API-MarketingInfo', RecordKey: 'AXA-SG-POL-GI-Motor-Work.CarAccessoriesReimbursedUpTo2K'},{pxObjClas: 'AXA-FW-GI-Int-API-MarketingInfo', RecordKey: 'AXA-SG-POL-GI-Motor-Work.ChoiceOfCourtesyCar'},{pxObjClas: 'AXA-FW-GI-Int-API-MarketingInfo', RecordKey: 'AXA-SG-POL-GI-Motor-Work.ReimburseCarMarketValueWithNoExcessAtTotalLoss'},{pxObjClas: 'AXA-FW-GI-Int-API-MarketingInfo', RecordKey: 'AXA-SG-POL-GI-Motor-Work.PhoneAssistanceAndRoadSideSupportWhenBreakDown'},{pxObjClas: 'AXA-FW-GI-Int-API-MarketingInfo', RecordKey: 'AXA-SG-POL-GI-Motor-Work.PersonalAccidentForPassenger'}],
        Parameters: [{Name: 'ChangeExcess', pxObjClass: "AXA-FW-GI-Int-API-Parameter", Options: [{Name: 'Zero Excess', pxObjClass: 'AXA-FW-GI-Int-API-ParameterOption', Value: 'Zero'}, {Name: 'Double Excess', pxObjClass: 'AXA-FW-GI-Int-API-ParameterOption', Value: 'Double'}]},{Name: 'LimitPerDay', pxObjClass: 'AXA-FW-GI-Int-API-Parameter', Options:[{Name: '$50,000', pxObjClass: 'AXA-FW-GI-Int-API-ParameterOption', Value: '50000'}, {Name: '$100,000', pxObjClass: 'AXA-FW-GI-Int-API-ParameterOption', Value: '100000'}, {Name: '$200,000', 'pxObjClass': 'AXA-FW-GI-Int-API-ParameterOption', Value: '200000'}, {Name: '$500,000', pxObjClass: 'AXA-FW-GI-Int-API-ParameterOption', Value: '500000'}]}, {Name: 'CarType', pxObjClass: 'AXA-FW-GI-Int-API-Parameter', Options:[{Name: 'Standard', pxObjClass: 'AXA-FW-GI-Int-API-ParameterOption', Value: 'Standard'}, {Name: 'MPV', pxObjClass: 'AXA-FW-GI-Int-API-ParameterOption', Value: 'MPV'}, {Name: 'Luxury', pxObjClass: 'AXA-FW-GI-Int-API-ParameterOption', Value: 'Luxury'}]}]

      }

    }
  }

  return product;
});


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
$scope.checkNCD = function(ncd){
  if (ncd == 30 || ncd == 40 ||ncd == 50 ){
    $scope.showAdvanced()
  }
};

  $scope.showAdvanced = function (ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: '/templates/dialogNCD.html',
        parent: angular.element(document.body),
        targetEvent: ev
      })
        .then(function (answer) {
          $scope.alert = 'You said the information was "' + answer + '".';
        }, function () {
          $scope.alert = 'You cancelled the dialog.';
        });

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
  $scope.product = product;

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

function DialogController($scope, $mdDialog, policy) {

  $scope.colors = ["green", "gray", "yellow", "blue", "purple", "red"];
$scope.policy= policy;
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
