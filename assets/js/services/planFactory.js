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
      plan.selected.Packs[i]['__Benefits'] = {};
      plan.selected.Packs[i]['__Benefits']['Benefits'] = [];
      for (var j = 0; j < mkt.Fields.length; ++j) {
        if (mkt.Fields[j].Name.indexOf("Main Title") > -1) {
          plan.selected.Packs[i]['__Benefits']['Title']= mkt.Fields[j].Value ;
        }
        else if(mkt.Fields[j].Name.indexOf("Sub Title 1") > -1){
          plan.selected.Packs[i]['__Benefits']['SubTitle']= mkt.Fields[j].Value ;
        }
        else if (mkt.Fields[j].Name.indexOf("Key Benefit") > -1 && mkt.Fields[j].Value) {
          plan.selected.Packs[i]['__Benefits']['Benefits'].push(mkt.Fields[j].Value);
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
  }

  return plan;
});
