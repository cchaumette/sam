/**
 * Created by clement on 27/3/16.
 */
app.factory('plan', function(product, marketing) {
  console.log("===factory.plan==");
  var plan = {};
  plan.selected = null;
  plan.setSelected = function (){
      if(product.selected) {

        console.log( product.selected.Plans);
        for (var i = 0; i < product.selected.Plans.length; i++) {
          if(product.selected.Plans[i].IsSelected === "true" || product.selected.Plans[i].IsSelected === true ) {
            plan.selected =  product.selected.Plans[i];
            return
          }
        }
      }
    }

  plan.setPacks = function () {
    var mkt;
    for (var i = 0; i < plan.selected.Packs.length; ++i) {
      mkt = marketing.get(plan.selected.Packs[i].MarketingInfo.RecordKey);
      plan.selected.Packs[i]['__label'] = {};
      plan.selected.Packs[i]['__label']['Benefits'] = [];
      for (var j = 0; j < mkt.Fields.length; ++j) {
        if (mkt.Fields[j].Name.indexOf("Main Title") > -1) {
          plan.selected.Packs[i]['__label']['Title']= mkt.Fields[j].Value ;
        }
        else if(mkt.Fields[j].Name.indexOf("Sub Title 1") > -1){
          plan.selected.Packs[i]['__label']['SubTitle']= mkt.Fields[j].Value ;
        }
        else if (mkt.Fields[j].Name.indexOf("Key Benefit") > -1 && mkt.Fields[j].Value) {
          plan.selected.Packs[i]['__label']['Benefits'].push(mkt.Fields[j].Value);
        }
      }
    }
  }

  plan.setAddons = function () {
   var mkt;
   for (var i = 0; i < plan.selected.AddOns.length; ++i) {
     mkt = marketing.get(plan.selected.AddOns[i].MarketingInfo.RecordKey);
     plan.selected.AddOns[i]['__label'] = {};
     for (var j = 0; j < mkt.Fields.length; ++j) {
       if (mkt.Fields[j].Name.indexOf("Main Title") > -1) {
         plan.selected.AddOns[i]['__label']['Title']= mkt.Fields[j].Value ;
       }
       else if(mkt.Fields[j].Name.indexOf("Sub Title 1") > -1){
         plan.selected.AddOns[i]['__label']['SubTitle']= mkt.Fields[j].Value ;
       }
     }
    }
  }

  plan.setDiscounts = function () {
    var mkt;
    for (var i = 0; i < plan.selected.Discounts.length; ++i) {
      mkt = marketing.get(plan.selected.Discounts[i].MarketingInfo.RecordKey);
      plan.selected.Discounts[i]['__label'] = {};
      for (var j = 0; j < mkt.Fields.length; ++j) {
        if (mkt.Fields[j].Name.indexOf("Main Title") > -1) {
          plan.selected.Discounts[i]['__label']= mkt.Fields[j].Value ;
        }
      }
    }
  }



  plan.set = function () {
    product.setSelected();
    plan.setSelected();
    console.log("==plan selected==");
    console.log( plan.selected);
    plan.setPacks();
    plan.setAddons();
    plan.setDiscounts();

  }

  return plan;
});
