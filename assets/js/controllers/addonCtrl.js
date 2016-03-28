/**
 * Created by clement on 27/3/16.
 */
app.controller('addonCtrl', ['$scope', 'policy','product','plan','$filter', '$mdSidenav', '$mdDialog', '$mdMedia', function ($scope,policy,product,plan, $filter, $mdSidenav, $mdDialog, $mdMedia) {
  console.log("== addonCtrl ==");

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
}]);
