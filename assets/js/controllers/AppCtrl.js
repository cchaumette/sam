/**
 * Created by clement on 27/3/16.
 */
app.controller('AppCtrl', ['$scope','policy', '$filter', '$mdSidenav', '$mdDialog','$mdMedia','algolia', function ($scope, policy, $filter, $mdSidenav, $mdDialog,$mdMedia,algolia) {

  console.log("== AppCtrl ==");
  $scope.licenseMonth = '';
  $scope.months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec' ];
  $scope.rangeYearOfmake = 0;

  $scope.policy = policy;
  $scope.car = policy.profil.Vehicle;

  var clientAlgolia = algolia.Client('BGXJZLELLV', 'f73fe5af31d85d2206be16d5a51718b0');
  var indexAlgolia = clientAlgolia.initIndex('car_list_dev');

  $scope.algolia = function () {
    console.log("car = " + $scope.carSearch);
    $scope.policy.profil.Vehicle.car_id = null;
    $scope.policy.profil.Vehicle.Make = null;
   $scope.policy.profil.Vehicle.Model= null;
    indexAlgolia.search( $scope.carSearch).then(function(content){$scope.hits = content.hits;});
  };
  $scope.range = _.range;
  $scope.searchTo = function(hit) {
    $scope.policy.profil.Vehicle.Make = hit.make;
    $scope.policy.profil.Vehicle.Model = hit.model;
    $scope.policy.profil.Vehicle.car_id = hit.item;
    $scope.carSearch = hit.make + " " +  hit.model;
  }

  $scope.flow = [
    {step1:true, step2:false, step3:false, offer:false}
  ];


  $scope.step2IsVisible = function () {
    $scope.flow.step1 = false;
    if($scope.policy.profil.Vehicle.Make != null
        && $scope.policy.profil.Vehicle.Model != null
        && $scope.policy.profil.Vehicle.YearOfMake != null) $scope.flow.step1 = true;
    return $scope.flow.step1;
  }

  $scope.step3IsVisible = function () {
    $scope.flow.step2 = true;
    $scope.policy.profil.Drivers.forEach(function(driver, index)
      {
        $scope.flow.step2 = $scope.flow.step2
                   && driver.Gender !=null
                   && driver.MaritalStatus !=null
                   && driver.Age
                   && driver.license;
      }
    )
    return $scope.flow.step1 && $scope.flow.step2;
  }

  $scope.offerIsEnabled = function(){
    $scope.flow.step3 = false;
    if($scope.policy.profil.NCDPoints != null && policy.profil.ClaimsPast3Years == false) $scope.flow.step3 = true;
    $scope.flow.offer = $scope.flow.step1 && $scope.flow.step2 && $scope.flow.step3;

    return $scope.flow.offer;
  }
  $scope.referralIsEnabled = function(){
    $scope.flow.step3 = false;
    if($scope.policy.profil.NCDPoints != null && policy.profil.ClaimsPast3Years == true) $scope.flow.step3 = true;
    $scope.flow.offer = $scope.flow.step1 && $scope.flow.step2 && $scope.flow.step3;

    return $scope.flow.offer;
  }

  $scope.addDriver = function(){
    if($scope.isAddDriverEnable){
      console.log("== addDriver ==");
      $scope.policy.profil.Drivers.push({__label : "Driver " + (policy.profil.Drivers.length +1) });
    }
  };

  $scope.isAddDriverEnable = function(){
    var _isAddDriverEnable = false;
    if(policy.profil.Drivers.length < 5) {
      _isAddDriverEnable = true;
    }
    return _isAddDriverEnable;

  }

  $scope.removeDriver = function(index){
    console.log("== removeDriver =" + index);
    $scope.policy.profil.Drivers.splice(index, 1);
  };


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


  $scope.checkOffpeak = function (ev, offpeak){

    console.log("===checkOffpeak = " + offpeak)

    if(offpeak == true){
      $scope.showAlert(ev)
    }
  }

  $scope.showAgent = function (ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: '/templates/dialogAgent.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      locals :{currentPack : null }
    })
  };
  $scope.showAlert = function (ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: '/templates/dialogoffpeak.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      locals :{currentPack : null }
    })
  };

  $scope.posts = [];

  $scope.checkNCD = function(ev, NCDPoints){
    policy.profil.NCDPoints =NCDPoints ;
    if (policy.profil.NCDPoints >= 30 ){
      $scope.showAdvanced(ev)
    }
  };

  $scope.showAdvanced = function (ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: '/templates/dialogNCD.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      locals :{currentPack : null }
    })
  };

  $scope.checkSpouse= function (ev){
    if (policy.profil.MaritalStatus == 'MARRIED'){
      $scope.showSpouse(ev)
    }
  };
  $scope.showSpouse = function (ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: '/templates/dialogSpouse.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      locals :{currentPack:null, policy : policy }
    })
  };

  $scope.CheckClaims = function (ev){

    if (policy.profil.ClaimsPast3Years == true){
      $scope.showReferral(ev)
    }
    else{
      $scope.showClaims_amount = false;
    }
  }


  $scope.CheckClaimsAmount = function (ev){
    if (policy.profil.TotalClaimAmount == 0){
      $scope.showClaims_number = false;
    }
    else{
      $scope.showClaims_number = true;

    }
  };


  $scope.CheckClaimsNumber = function (ev) {
    if (policy.profil.NumberOfClaims != 0) {
      $scope.showReferral(ev)
    }

  };

  $scope.CheckClaimsNumberWind = function (number){
    if (policy.profil.NumberOfWindscreenClaims != 0) {
      $scope.showReferral(ev)
    }

  }

  $scope.showReferral = function (ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: '/templates/dialogReferral.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      locals :{currentPack:null, policy : policy }
    })
  };

}]);
