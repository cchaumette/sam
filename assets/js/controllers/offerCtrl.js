/**
 * Created by clement on 27/3/16.
 */
app.controller('offerCtrl', ['$scope','policy' ,'marketing','offer', 'product','$filter', '$mdSidenav', '$mdDialog', function ($scope,policy, marketing, offer,product, $filter, $mdSidenav, $mdDialog) {
  console.log("== offerCtrl ==");

  product.set();
  $scope.product = product.selected;
  $scope.benefitsList = product.benefitsList;
  $scope.policy  = policy.profil;

  /* inception date */
  $scope.inceptionDate = {
    min : moment().add(-1, 'days').toDate(),
    max : moment().add(90, 'days').toDate()
  }

  $scope.updatePolicyEndDate = function(){
    if($scope.policy.PolicyStartDate) $scope.policy.PolicyEndDate = moment($scope.policy.PolicyStartDate).add(1,'years').add(-1, 'days').toDate()
  }

  if($scope.policy.PolicyStartDate == null || !$scope.policy.PolicyStartDate)  {
    $scope.policy.PolicyStartDate = $scope.inceptionDate.min;
    $scope.updatePolicyEndDate();
  }

}]);
