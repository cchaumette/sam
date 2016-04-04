/**
 * Created by clement on 4/4/16.
 */
/**
 * Created by clement on 27/3/16.
 */
app.controller('footerCtrl', ['$scope','policy','$route','$timeout', function ($scope, policy, $route, $timeout) {
  console.log("== footerCtrl ==");

  var state
  var buttonFeatures = {
    'home' : {
      back : {isVisible : false, url : null},
      next : {}
    }


  }

  $timeout( function(){ state = $route.current.state}, 500);




}]);
