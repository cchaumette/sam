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

}]);
