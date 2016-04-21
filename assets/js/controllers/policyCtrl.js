/**
 * Created by clement on 27/3/16.
 */
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
  $scope.isActive = [{active:false},{active:false},{active:false},{active:true},{active:false}];

  $scope.breadcrumbStep5 = function () {
    $scope.isActive[0].active = false;
    $scope.isActive[1].active = false;
    $scope.isActive[2].active = false;
    $scope.isActive[3].active = flase;
    $scope.isActive[4].active = true;
  }

  $scope.flow = [
    {step1:true, step2:false, step3:false, offer:false}
  ];


  $scope.step2IsVisible = function () {
    $scope.flow.step1 = false;
    if($scope.policy.profil.Vehicle.RegistrationNumber != null
      && $scope.policy.profil.Vehicle.Seats != null
      && $scope.policy.profil.Vehicle.ChassisNumber != null
      && $scope.policy.profil.Vehicle.EngineNumber != null
      && $scope.policy.profil.Vehicle.HasFinanceLoan != null
      && $scope.policy.profil.Vehicle.PrevCarInsured != null) $scope.flow.step1 = true;
    return $scope.flow.step1;
  }

  $scope.step3IsVisible = function () {
    $scope.flow.step2 = true;
   if($scope.policy.profil.PolicyHolder.Email !=null
     && $scope.policy.profil.PolicyHolder.Phone !=null
     && $scope.policy.profil.PolicyHolder.AddressLine1 != null
     && $scope.policy.profil.PolicyHolder.PostalCode !=null)
     $scope.flow.step2 = true;

    return $scope.flow.step1 && $scope.flow.step2;
  }
  $scope.paymentIsEnabled = function(){
    $scope.flow.step3 = false;
    if($scope.policy.profil.PolicyHolder.Email != null && policy.policy.profil.PolicyHolder.Phone != null) $scope.flow.step3 = true;
    $scope.flow.offer = $scope.flow.step1 && $scope.flow.step2 && $scope.flow.step3;

    return $scope.flow.offer;
  }

}]);
