/**
 * Created by clement on 27/3/16.
 */
app.controller('addonCtrl', ['$scope', 'policy','product','$filter', '$mdSidenav', '$mdDialog', '$mdMedia', function ($scope,policy,product, $filter, $mdSidenav, $mdDialog, $mdMedia) {
  console.log("== addonCtrl ==");
  $scope.policy = policy;
  $scope.product = product;
  $scope.plan = product.offer.Products[2].Plans[0];
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

  $scope.getPacks = function () {
    var info;
    for (var i = 0; i < $scope.plan.Packs.length; ++i) {
      info = $scope.getMarketingInfo($scope.plan.Packs[i].MarketingInfo.RecordKey);
      $scope.plan.Packs[i]['Benefits'] = [];
      for (var j = 0; j < info.Fields.length; ++j) {
        if (info.Fields[j].Name.indexOf("Main Title") > -1) {
          $scope.plan.Packs[i]['Title']= info.Fields[j].Value ;
        }
        else if(info.Fields[j].Name.indexOf("Sub Title 1") > -1){
          $scope.plan.Packs[i]['SubTitle']= info.Fields[j].Value ;
        }
        else if (info.Fields[j].Name.indexOf("Key Benefit") > -1 && info.Fields[j].Value) {
          $scope.plan.Packs[i]['Benefits'].push(info.Fields[j].Value);
        }
      }
    }
  }
  $scope.getPacks();

  $scope.getAddons = function () {
    var info;
    for (var i = 0; i < $scope.plan.AddOns.length; ++i) {
      info = $scope.getMarketingInfo($scope.plan.AddOns[i].MarketingInfo.RecordKey);
      for (var j = 0; j < info.Fields.length; ++j) {
        if (info.Fields[j].Name.indexOf("Main Title") > -1) {
          $scope.plan.AddOns[i]['Title']= info.Fields[j].Value ;
        }
        else if(info.Fields[j].Name.indexOf("Sub Title 1") > -1){
          $scope.plan.AddOns[i]['SubTitle']= info.Fields[j].Value ;
        }
      }
    }
  }

  $scope.getAddons();



  $scope.policy.packs = [
    {id:'family', name:'Family protector', selected : false, panel_content:"panel content for FP", modal_body:  "Fore aut non quem incididunt, varias reprehenderit deserunt quem offendit, cillum proident ne reprehobant voluptatibus quo mentitum est laboris. Quorum mandaremus graviterque. Mentitum id velit, dolor aut litteris, ea varias illustriora, ita commodo ita ingeniis, iis nulla appellat incurreret, aut irure amet summis pariatur ita ubi quis dolore veniam proident, consequat sed ingeniis."},
    {id:'duo', name:'Pack duo', selected : false, panel_content:"panel content for duo", modal_body:  "Fore aut non quem incididunt, varias reprehenderit deserunt que"},
    //  {id:'overseas', name:'Overseas protector', selected : false, panel_content:"panel content for overseas protector", modal_body:  "Fore aut non quem incididunt, varias reprehenderit deserunt que"},
    //  {id:'claims', name:'Claims protector', selected : false, panel_content:"panel content for claims", modal_body:  "Fore aut non quem incididunt, varias reprehenderit deserunt que"}
  ];
  $scope.policy.addons = [
    {id:'excess', name:'Family protector', selected : false, panel_content:"panel content for FP", modal_body:  "Fore aut non quem incididunt, varias reprehenderit deserunt quem offendit, cillum proident ne reprehobant voluptatibus quo mentitum est laboris. Quorum mandaremus graviterque. Mentitum id velit, dolor aut litteris, ea varias illustriora, ita commodo ita ingeniis, iis nulla appellat incurreret, aut irure amet summis pariatur ita ubi quis dolore veniam proident, consequat sed ingeniis."},
    {id:'ncd protector', name:'Pack duo', selected : false, panel_content:"panel content for duo", modal_body:  "Fore aut non quem incididunt, varias reprehenderit deserunt que"},
    {id:'overseas', name:'Overseas protector', selected : false, panel_content:"panel content for overseas protector", modal_body:  "Fore aut non quem incididunt, varias reprehenderit deserunt que"},
    {id:'claims', name:'Claims protector', selected : false, panel_content:"panel content for claims", modal_body:  "Fore aut non quem incididunt, varias reprehenderit deserunt que"}
  ];

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
