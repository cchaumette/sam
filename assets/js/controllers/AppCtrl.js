/**
 * Created by clement on 27/3/16.
 */
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
  $scope.checkOffpeak = function (ev, offpeak){

    console.log("===checkOffpeak = " + offpeak)

    if(offpeak == true){
      $scope.showAlert(ev)
    }
  }
  $scope.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert(ev)
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Offpeak car discount')
        .textContent('Offpeak car enjoys a 25% discount.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };

  $scope.posts = [];
  $scope.checkNCD = function(ev){
    if (policy.profil.NCDPoints >= 30 ){
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
