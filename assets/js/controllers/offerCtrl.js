/**
 * Created by clement on 27/3/16.
 */
app.controller('offerCtrl', ['$scope', 'product','$filter', '$mdSidenav', '$mdDialog', function ($scope,product, $filter, $mdSidenav, $mdDialog) {


  console.log("== offerCtrl ==");
  $scope.product = product.offer.Products[2];
  $scope.product.Plans =  _.sortBy($scope.product.Plans, 'DisplayOrder');


  $scope.getMarketingInfo = function (RecordKey){
    for (var i = 0; i < product.marketing.MarketingInfo.length; ++i) {
      if(product.marketing.MarketingInfo[i].RecordKey === RecordKey && product.marketing.MarketingInfo[i].Language === "en"){
        return product.marketing.MarketingInfo[i];
      }
    }
    return null;
  }

  $scope.getBenefitsList = [
    {value:'24/7 Towing & Transportation in Singapore or Overseas', label:'24/7 Towing & transport back home'},
    {value:'Windscreen Replacement with Excess OR Repair your windscreen at your preferred location and get $50 cash reward with no excess', label:'Windscreen Replacement'},
    {value:'Guaranteed Repairs for twelve (12) Months', label:'Guaranteed Repairs for 12 Months'},
    {value:'Delivery of Repaired Car', label:'Delivery of Repaired Car'},
    //  {value:'Reimbursement of 110% of your cars market value in the event of total loss due to flood (without Basic Own Damage Excess)', label:'110% of your cars market value for total loss due to flood'},
    {value:'Reimbursement of 110% of your car’s market value in the event of total loss (without Basic Own Damage Excess)', label:'110% of your cars market value for total loss'},
    {value:'Loss of Personal Effects in Singapore up to $3,000', label:'Loss of Personal Effects'},
    {value:'Medical and dental expenses up to $1,000 per person for you, your named drivers and your immediate family members', label:'Medical and dental expenses'},
    {value:'Loss or Damage', label:'Loss or Damage'},
    {value:'Legal Liability', label:'Legal Liability'},
    {value:'Daily Transport Allowance of $100 for a maximum of 10 days', label:'Daily Transport Allowance'},
    {value:'Workshop of Your Choice', label:'Workshop of Your Choice'}
  ];

  $scope.getBenefits = function () {
    var info;
    for (var i = 0; i < $scope.product.Plans.length; ++i) {
      info = $scope.getMarketingInfo($scope.product.Plans[i].MarketingInfo.RecordKey);
      $scope.product.Plans[i]['Benefits'] = {};
      for (var j = 0; j < info.Fields.length; ++j) {
        if (info.Fields[j].Name.indexOf("Key Benefit") > -1) {
          /*
           if ($scope.getBenefitsList.indexOf(info.Fields[j].Value) == -1) {
           $scope.getBenefitsList.push(info.Fields[j].Value);
           }
           */
          $scope.product.Plans[i]['Benefits'][info.Fields[j].Value] = true;
        }
      }
    }
  }



  $scope.getBenefits();

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
