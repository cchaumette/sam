/**
 * Created by clement on 27/3/16.
 */
app.controller('offerCtrl', ['$scope','policy' ,'marketing','offer', 'product','plan','$filter', '$mdSidenav', '$mdDialog', function ($scope,policy, marketing, offer,product, plan, $filter, $mdSidenav, $mdDialog) {
  console.log("== offerCtrl ==");

  product.set();
  plan.set();

  $scope.product = product.selected;
  $scope.plan = plan.selected;
  $scope.benefitsList = product.benefitsList;
  $scope.policy  = policy.profil;

  $scope.isActive = [{active:false},{active:true},{active:false},{active:false},{active:false}];

  $scope.breadcrumbStep3 = function () {
    $scope.isActive[0].active = false;
    $scope.isActive[1].active = false;
    $scope.isActive[2].active = true;
  }

  /**
   *  TODO use GTOM API
   */
  $scope.PlansForNOCOMP = [
    {__Name:'TPFT',UsualPremium :'$753.23',IsSelected :true, __Benefits :{'Legal Liability' : true,'Loss Or Damage By Fire & Theft':true,'24/7 Towing & Transportation in Singapore or Overseas':true}},
    {__Name:'TPO',UsualPremium :'$353.73', __Benefits :{'Legal Liability' : true}}
  ];
  $scope.BenefitsForNOCOMP = [
    {value:'Legal Liability', label:'Legal Liability', icon:'icon-legal'},
    {value:'24/7 Towing & Transportation in Singapore or Overseas', label:'24/7 Towing & transport back home', icon:'icon-towing'},
    {value:'Loss Or Damage By Fire & Theft', label:'Loss Or Damage By Fire & Theft', icon:'icon-loss'},
  ];



  $scope.showAdvanced = function (ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: '/templates/dialogEmail.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      locals :{currentPack : null }
    })
  };
  $scope.toggleLeft = buildDelayedToggler('left');
  $scope.toggleRight = buildToggler('right');
  $scope.isOpenRight = function(){
    return $mdSidenav('right').isOpen();
  };
  /**
   * Supplies a function that will continue to operate until the
   * time is up.
   */
  function debounce(func, wait, context) {
    var timer;
    return function debounced() {
      var context = $scope,
        args = Array.prototype.slice.call(arguments);
      $timeout.cancel(timer);
      timer = $timeout(function() {
        timer = undefined;
        func.apply(context, args);
      }, wait || 10);
    };
  }
  /**
   * Build handler to open/close a SideNav; when animation finishes
   * report completion in console
   */
  function buildDelayedToggler(navID) {
    return debounce(function() {
      $mdSidenav(navID)
        .toggle()
        .then(function () {
          $log.debug("toggle " + navID + " is done");
        });
    }, 200);
  }
  function buildToggler(navID) {
    return function() {
      $mdSidenav(navID)
        .toggle()
        .then(function () {
          $log.debug("toggle " + navID + " is done");
        });
    }
  }

}])
.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function () {
    $mdSidenav('left').close()
      .then(function () {
        $log.debug("close LEFT is done");
      });
  };
})
  .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  });
