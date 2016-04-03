/**
 * Created by clement on 27/3/16.
 */
app.controller('addonCtrl', ['$scope', 'policy','product','plan','$filter', '$mdSidenav', '$mdDialog', '$mdMedia', function ($scope,policy,product,plan, $filter, $mdSidenav, $mdDialog, $mdMedia) {
  console.log("== addonCtrl ==");
  product.set();


  plan.set();
  $scope.policy = policy;
  $scope.product = product.selected;
  $scope.plan = plan.selected;

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
  $scope.showAdvanced = function (ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: '/templates/dialogEmail.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      locals :{currentPack : null }
    })
  };


 $scope.addonsLabels = {
  "ChangeExcess" : {icon : 'icon-excess' , label: "Zero excess at claim"} ,
  "PersonalAccident" : {icon: 'icon-driver' , label:  "We gives you the amount of the sum insured in the event of invalidity following a car accident"},
  "CarAccessoriesReimbursedUpTo2K" : {icon: 'icon-accessories2' , label : "We cover your car accesories up to $2,000 in the event of theft or damage"},
  "CourtesyCar" : {icon: 'icon-courtesy', label :"Select your car type", label : "We send you on the road assistance in the event of a breakdown and accident"},
  "ReimburseCarMarketValueWithNoExcessAtTotalLoss" : {icon: 'icon-marketvalue'},
  "PhoneAssitanceAndRoadsideSupport" : {icon: 'icon-assistance', label:"Phone Assistance and Roadside Support"},
  "PAForPassengers" : {icon: 'icon-passenger', label:"Your passengers are entitled to a lump sum of $20,000 in the event of a car accident"}
  }

  $scope.packsLabels = {
    "PackFamily" : {icon : 'icon-family'} ,
    "PackOversea" : {icon: 'icon-overseas'},
    "PackFinance2" : {icon: 'icon-protector'}
  }


  $scope.updateParamsAddon = function(addon, optList, idx){
    if(optList[idx].isSelected == true) {
      optList[idx].isSelected = false;
      addon.IsSelected = false;
    }
    else{
      addon.IsSelected = true;
      for (var i= 0; i < optList.length; i++){
         if(i == idx) optList[i].isSelected = true;
         else optList[i].isSelected = false;
      }
    }
  }

}]);
