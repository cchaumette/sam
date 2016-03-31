/**
 * Created by clement on 27/3/16.
 */
/**
 * Created by clement on 27/3/16.
 */
app.factory('product', function(offer, marketing) {
  console.log("===factory.product==");
  var product = {};
  product.selected = null;

  product.setSelected = function (){
    console.log(offer.Products);
    if(offer.offer.Products) {
      for (var i = 0; i < offer.offer.Products.length; i++) {
         if(offer.offer.Products[i].IsSelected === "true" || offer.offer.Products[i].IsSelected === true ) {
           product.selected = offer.offer.Products[i];
           return
         }
      }
    }
  }

  product.benefitsList = [
    {value:'Legal Liability', label:'Legal Liability'},
    {value:'24/7 Towing & Transportation in Singapore or Overseas', label:'24/7 Towing & transport back home'},
    {value:'Loss or Damage', label:'Loss or Damage'},
    {value:'Windscreen Replacement with Excess OR Repair your windscreen at your preferred location and get $50 cash reward with no excess', label:'Windscreen Replacement'},
    {value:'Guaranteed Repairs for twelve (12) Months', label:'Guaranteed Repairs for 12 Months'},
    {value:'Reimbursement of 110% of your car’s market value in the event of total loss (without Basic Own Damage Excess)', label:'110% of your cars market value for total loss'},
    {value:'Workshop of Your Choice', label:'Workshop of Your Choice'},
    {value:'Delivery of Repaired Car', label:'Delivery of Repaired Car'},
    //  {value:'Reimbursement of 110% of your cars market value in the event of total loss due to flood (without Basic Own Damage Excess)', label:'110% of your cars market value for total loss due to flood'},
    {value:'Medical and dental expenses up to $1,000 per person for you, your named drivers and your immediate family members', label:'Medical and dental expenses'},
    {value:'Daily Transport Allowance of $100 for a maximum of 10 days', label:'Daily Transport Allowance'},
    {value:'Loss of Personal Effects in Singapore up to $3,000', label:'Loss of Personal Effects'}

  ];

   product.setBenefitsTablePerPlan = function() {
       var mkt;
       for (var i = 0; i < product.selected.Plans.length; ++i) {
         mkt = marketing.get(product.selected.Plans[i].MarketingInfo.RecordKey);
         product.selected.Plans[i]['__Benefits'] = {};
         for (var j = 0; j < mkt.Fields.length; ++j) {
           if (mkt.Fields[j].Name.indexOf("Key Benefit") > -1 ) {
             /*if ($scope.getBenefitsList.indexOf(info.Fields[j].Value) == -1) {$scope.getBenefitsList.push(info.Fields[j].Value);}*/
             product.selected.Plans[i]['__Benefits'][mkt.Fields[j].Value] = true;
           }
           else if(mkt.Fields[j].Name == 'Main Title'){
             product.selected.Plans[i]['__Name'] = mkt.Fields[j].Value;
           }
         }
       }
     }


  product.updateSelectedPlan = function(plan) {
    for (var i = 0; i < product.selected.Plans.length; i++) {
      console.log("==updateSelectedPlan");
      console.log(plan);
      if (plan == product.selected.Plans[i]) product.selected.Plans[i].IsSelected = true;
      else product.selected.Plans[i].IsSelected = false;
    }
  }

   product.set = function () {
     product.setSelected();
     product.setBenefitsTablePerPlan();
     product.selected.Plans.pop();

     product.selected.Plans = _.sortBy(product.selected.Plans, 'UsualPremium');

   }

  return product;
});
