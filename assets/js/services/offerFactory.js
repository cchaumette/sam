/**
 * Created by clement on 27/3/16.
 */
app.factory('offer', function() {
  console.log("===factory.offer==");
  var offer =
  { offer: {
    "pxObjClass": "AXA-SG-POL-GI-Int-API-NB-Quotation-Motor-GetOfferRes",
    "ProcessOutput": {
      "CurrentUserHasOwnership": "true",
      "pxObjClass": "AXA-FW-GI-Int-API-ProcessOutput",
      "Status": "success",
      "WorkObjectHandle": "AXA-SG-POL-GI-MOTOR-WORK AXA-MTR-SG-2016-961",
      "WorkObjectStatus": "New",
      "AssignmentList": [{
        "AssignedTo": "GTOMAPI@axa.com",
        "AssignmentHandle": "ASSIGN-WORKLIST AXA-SG-POL-GI-MOTOR-WORK AXA-MTR-SG-2016-961!GENERATEOFFER",
        "pxObjClass": "AXA-FW-GI-Int-API-AssignmentListEntry"
      }],
      "ProcessState": {
        "AssignmentHandle": "ASSIGN-WORKLIST AXA-SG-POL-GI-MOTOR-WORK AXA-MTR-SG-2016-961!GENERATEOFFER",
        "FlowIdentifier": "GenerateOffer",
        "pxObjClass": "AXA-FW-GI-Int-API-ProcessState",
        "AssignmentActionList": [{
          "ActionLabel": "Offer",
          "ActionName": "Offer",
          "ActionType": "FlowAction",
          "pxObjClass": "AXA-FW-GI-Int-API-AssignmentActionEntry"
        }]
      }
    },
    "Products": [{
      "DisplayOrder": "1",
      "EligibilityAction": "Accepted",
      "IsSelected": "false",
      "ProductID": "PRD00003",
      "pxObjClass": "AXA-FW-GI-Int-API-Product",
      "RecordName": "SmartDrive_TP",
      "MarketingInfo": {
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
        "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive"
      },
      "Plans": []
    }, {
      "DisplayOrder": "2",
      "EligibilityAction": "Accepted",
      "IsSelected": "false",
      "ProductID": "PRD00004",
      "pxObjClass": "AXA-FW-GI-Int-API-Product",
      "RecordName": "SmartDrive_TPFT",
      "MarketingInfo": {
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
        "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDriveTPFT"
      },
      "Plans": []
    }, {
      "DisplayOrder": "4",
      "EligibilityAction": "Accepted",
      "IsSelected": "true",
      "ProductID": "PRD00002",
      "pxObjClass": "AXA-FW-GI-Int-API-Product",
      "RecordName": "SmartDrive",
      "MarketingInfo": {
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
        "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDriveComprehensive"
      },
      "Plans": [{
        "Currency": "SGD",
        "FinalPremium": "946.28",
        "IsSelected": "true",
        "PlanID": "PLN00007",
        "PremiumBeforeAuthorityDiscount": "946.28",
        "pxObjClass": "AXA-FW-GI-Int-API-Plan",
        "RecordName": "SmartDrive_Peace",
        "UsualPremium": "1328.13",
        "AddOns": [{
          "AddOnID": "BGR00028",
          "IsSelected": "false",
          "PremiumBeforeAuthorityDiscount": "76.27",
          "pxObjClass": "AXA-FW-GI-Int-API-AddOn",
          "RecordName": "ChangeExcess",
          "UsualPremium": "76.27",
          "MarketingInfo": {
            "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
            "RecordKey": "AXA-SG-POL-GI-Motor-Work.Excess"
          },
          "Parameters": [{
            "Name": "ChangeExcess",
            "pxObjClass": "AXA-FW-GI-Int-API-Parameter",
            "Options": [{
              "Name": "Zero Excess",
              "pxObjClass": "AXA-FW-GI-Int-API-ParameterOption",
              "Value": "Zero"
            }, {
              "Name": "Double Excess",
              "pxObjClass": "AXA-FW-GI-Int-API-ParameterOption",
              "Value": "Double"
            }]
          }]
        }, {
          "AddOnID": "BGR00026",
          "IsSelected": "false",
          "PremiumBeforeAuthorityDiscount": "14.45",
          "pxObjClass": "AXA-FW-GI-Int-API-AddOn",
          "RecordName": "PersonalAccident",
          "UsualPremium": "14.45",
          "MarketingInfo": {
            "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
            "RecordKey": "AXA-SG-POL-GI-Motor-Work.PersonalAccident"
          },
          "Parameters": [{
            "Name": "LimitPerDay",
            "pxObjClass": "AXA-FW-GI-Int-API-Parameter",
            "Options": [{
              "Name": "$50,000",
              "pxObjClass": "AXA-FW-GI-Int-API-ParameterOption",
              "Value": "50000"
            }, {
              "Name": "$100,000",
              "pxObjClass": "AXA-FW-GI-Int-API-ParameterOption",
              "Value": "100000"
            }, {
              "Name": "$200,000",
              "pxObjClass": "AXA-FW-GI-Int-API-ParameterOption",
              "Value": "200000"
            }, {
              "Name": "$500,000",
              "pxObjClass": "AXA-FW-GI-Int-API-ParameterOption",
              "Value": "500000"
            }]
          }, {
            "Name": "LumpSumPerDay",
            "pxObjClass": "AXA-FW-GI-Int-API-Parameter",
            "Options": []
          }]
        }, {
          "AddOnID": "BGR00010",
          "IsSelected": "false",
          "PremiumBeforeAuthorityDiscount": "96.30",
          "pxObjClass": "AXA-FW-GI-Int-API-AddOn",
          "RecordName": "CarAccessoriesReimbursedUpTo2K",
          "UsualPremium": "96.30",
          "MarketingInfo": {
            "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
            "RecordKey": "AXA-SG-POL-GI-Motor-Work.CarAccessoriesReimbursedUpTo2K"
          }
        }, {
          "AddOnID": "BGR00009",
          "IsSelected": "false",
          "PremiumBeforeAuthorityDiscount": "82.47",
          "pxObjClass": "AXA-FW-GI-Int-API-AddOn",
          "RecordName": "CourtesyCar",
          "UsualPremium": "82.47",
          "MarketingInfo": {
            "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
            "RecordKey": "AXA-SG-POL-GI-Motor-Work.ChoiceOfCourtesyCar"
          },
          "Parameters": [{
            "Name": "CarType",
            "pxObjClass": "AXA-FW-GI-Int-API-Parameter",
            "Options": [{
              "Name": "Standard",
              "pxObjClass": "AXA-FW-GI-Int-API-ParameterOption",
              "Value": "Standard"
            }, {
              "Name": "MPV",
              "pxObjClass": "AXA-FW-GI-Int-API-ParameterOption",
              "Value": "MPV"
            }, {
              "Name": "Luxury",
              "pxObjClass": "AXA-FW-GI-Int-API-ParameterOption",
              "Value": "Luxury"
            }]
          }]
        }, {
          "AddOnID": "BGR00029",
          "IsSelected": "false",
          "PremiumBeforeAuthorityDiscount": "41.95",
          "pxObjClass": "AXA-FW-GI-Int-API-AddOn",
          "RecordName": "ReimburseCarMarketValueWithNoExcessAtTotalLoss",
          "UsualPremium": "41.95",
          "MarketingInfo": {
            "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
            "RecordKey": "AXA-SG-POL-GI-Motor-Work.ReimburseCarMarketValueWithNoExcessAtTotalLoss"
          }
        }, {
          "AddOnID": "BGR00008",
          "IsSelected": "false",
          "PremiumBeforeAuthorityDiscount": "107.00",
          "pxObjClass": "AXA-FW-GI-Int-API-AddOn",
          "RecordName": "PhoneAssitanceAndRoadsideSupport",
          "UsualPremium": "107.00",
          "MarketingInfo": {
            "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
            "RecordKey": "AXA-SG-POL-GI-Motor-Work.PhoneAssistanceAndRoadSideSupportWhenBreakDown"
          }
        }, {
          "AddOnID": "BGR00024",
          "IsSelected": "false",
          "PremiumBeforeAuthorityDiscount": "37.45",
          "pxObjClass": "AXA-FW-GI-Int-API-AddOn",
          "RecordName": "PAForPassengers",
          "UsualPremium": "37.45",
          "MarketingInfo": {
            "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
            "RecordKey": "AXA-SG-POL-GI-Motor-Work.PersonalAccidentForPassenger"
          }
        }],
        "Discounts": [{
          "ApplicableToOptionalBenefits": "false",
          "ApplicableToPacks": "false",
          "DiscountID": "DIS00006",
          "DiscountType": "CampaignDiscount",
          "PayablePremium": "-332.04",
          "Percentage": "25.0000",
          "PremiumAfterDiscount": "996.09",
          "pxObjClass": "AXA-FW-GI-Int-API-Discount",
          "RecordName": "OffPeakCarDiscount",
          "MarketingInfo": {
            "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
            "RecordKey": "AXA-SG-POL-GI-Motor-Work.OffPeakCarDiscount"
          }
        }, {
          "ApplicableToOptionalBenefits": "false",
          "ApplicableToPacks": "false",
          "DiscountID": "DIS00053",
          "DiscountType": "CampaignDiscount",
          "PayablePremium": "-49.81",
          "Percentage": "5.0000",
          "PremiumAfterDiscount": "946.28",
          "pxObjClass": "AXA-FW-GI-Int-API-Discount",
          "RecordName": "Special5Discount",
          "MarketingInfo": {
            "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
            "RecordKey": "AXA-SG-POL-GI-Motor-Work.Special5Discount"
          }
        }],
        "Excesses": [{
          "Amount": "600",
          "Name": "Excess",
          "pxObjClass": "AXA-FW-GI-Int-API-Excess"
        }, {
          "Amount": "100",
          "Name": "WindScreenExcess",
          "pxObjClass": "AXA-FW-GI-Int-API-Excess"
        }],
        "MarketingInfo": {
          "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
          "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_Peace"
        },
        "Packs": [{
          "DisplayInstruction": "Eligible",
          "IsSelected": "false",
          "PackID": "PCK00003",
          "PremiumBeforeAuthorityDiscount": "133.75",
          "pxObjClass": "AXA-FW-GI-Int-API-Pack",
          "RecordName": "PackFamily",
          "UsualPremium": "133.75",
          "MarketingInfo": {
            "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
            "RecordKey": "AXA-SG-POL-GI-Motor-Work.PackFamily"
          }
        }, {
          "DisplayInstruction": "Eligible",
          "IsSelected": "false",
          "PackID": "PCK00005",
          "PremiumBeforeAuthorityDiscount": "53.50",
          "pxObjClass": "AXA-FW-GI-Int-API-Pack",
          "RecordName": "PackOversea",
          "UsualPremium": "53.50",
          "MarketingInfo": {
            "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
            "RecordKey": "AXA-SG-POL-GI-Motor-Work.PackOverseaProtect"
          }
        }, {
          "IsSelected": "false",
          "PackID": "PCK00007",
          "PremiumBeforeAuthorityDiscount": "121.04",
          "pxObjClass": "AXA-FW-GI-Int-API-Pack",
          "RecordName": "PackFinance2",
          "UsualPremium": "121.04",
          "MarketingInfo": {
            "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
            "RecordKey": "AXA-SG-POL-GI-Motor-Work.PackProtectorPlus"
          }
        }]
      }, {
        "Currency": "SGD",
        "PlanID": "PLN00003",
        "PremiumBeforeAuthorityDiscount": "912.21",
        "pxObjClass": "AXA-FW-GI-Int-API-Plan",
        "RecordName": "SmartDrive_Essential",
        "UsualPremium": "1280.30",
        "MarketingInfo": {
          "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
          "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_Essential"
        }
      }, {
        "Currency": "SGD",
        "PlanID": "PLN00008",
        "PremiumBeforeAuthorityDiscount": "978.75",
        "pxObjClass": "AXA-FW-GI-Int-API-Plan",
        "RecordName": "SmartDrive_EssentialPlus",
        "UsualPremium": "1373.69",
        "MarketingInfo": {
          "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
          "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_EssentialPlus"
        }
      }, {
        "Currency": "SGD",
        "PlanID": "PLN00012",
        "PremiumBeforeAuthorityDiscount": "1072.63",
        "pxObjClass": "AXA-FW-GI-Int-API-Plan",
        "RecordName": "SmartDrive_Flexi",
        "UsualPremium": "1505.45",
        "MarketingInfo": {
          "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
          "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_Flexi"
        }
      }]
    }]
  }
    ,
    param :
    {
      "Product": {
        DisplayOrder: [{order: '1'}, {order: '2'}, {order: '3'}],
        EligibilityAction: [{value: 'Accepted'}, {value: 'Rejected'}],
        IsSelected: [{value: false}, {value: true}],
        ProductID: [{id: 'PRD00003', label: 'Third Party Only'}, {id: 'PRD00004', label: 'Third Party, Fire & Theft'}, {id: 'PRD00002', label: 'Comprehensive'}],
        pxObjClass: {class: 'AXA-FW-GI-Int-API-Product'},
        RecordName: [{name: 'SmartDrive_TP', label: 'Third Party Only'}, {name: 'SmartDrive_TPFT', label: 'Third Party, Fire & Theft'}, {name: 'SmartDrive', label: 'Comprehensive'}],
        MarketingInfo: [{pxObjClass: 'AXA-FW-GI-Int-API-MarketingInfo', RecordKey: 'AXA-SG-POL-GI-Motor-Work.SmartDrive'}, {pxObjClass: 'AXA-FW-GI-Int-API-MarketingInfo', RecordKey: 'AXA-SG-POL-GI-Motor-Work.SmartDriveTPFT'}, {pxObjClass: 'AXA-FW-GI-Int-API-MarketingInfo', RecordKey: 'AXA-SG-POL-GI-Motor-Work.SmartDriveComprehensive'}]

      },
      "Plans" :
      {
        Currency: {value: 'SGD'},
        FinalPremium: {},
        IsSelected: [{value: false}, {value: true}],
        PlanID: [{id: 'PLN00005'}, {id: 'PLN00007'}, {id: 'PLN00003'}, {id: 'PLN00008'}, {id: 'PLN00012'}],
        PremiumBeforeAuthorityDiscount: {},
        pxObjClass: {class:'AXA-FW-GI-Int-API-Plan'},
        RecordName:[ {name:'SmartDrive_Peace',label: 'Peace'}, {name:'SmartDrive_Essential',label: 'Essential'}, {name:'SmartDrive_EssentialPlus',label: 'Essential Plus'}, {name:'SmartDrive_Flexi',label: 'Flexi'}],
        UsualPremium: {},
        MarketingInfo: [{pxObjClass:'AXA-FW-GI-Int-API-MarketingInfo', RecordKey:'AXA-SG-POL-GI-Motor-Work.SmartDrive_Peace'},{pxObjClass:'AXA-FW-GI-Int-API-MarketingInfo', RecordKey:'AXA-SG-POL-GI-Motor-Work.SmartDrive_Essential'},{pxObjClass:'AXA-FW-GI-Int-API-MarketingInfo', RecordKey:'AXA-SG-POL-GI-Motor-Work.SmartDrive_EssentialPlus'},{pxObjClass:'AXA-FW-GI-Int-API-MarketingInfo', RecordKey:'AXA-SG-POL-GI-Motor-Work.SmartDrive_Flexi'}]
      },
      "AddOns" :
      {
        AddOnID: [{id:'BGR00028'},{id:'BGR00026'},{id:'BGR00010'},{id:'BGR00009'},{id:'BGR00029'},{id:'BGR00008'},{id:'BGR00024'}],
        IsSelected: [{value: false}, {value: true}],
        PremiumBeforeAuthorityDiscount: {},
        pxObjClass: {class:'AXA-FW-GI-Int-API-Plan'},
        RecordName: [{name:'ChangeExcess', label:'Change your excess'},{name:'PersonalAccident', label:'Personal accident for driver'},{name:'CarAccessoriesReimbursedUpTo2K', label:'Car accessories cover'},{name:'CourtesyCar', label:'Courtesy car'},{name:'ReimburseCarMarketValueWithNoExcessAtTotalLoss', label:'Reimbursement of the car market value'},{name:'PhoneAssitanceAndRoadsideSupport', label:'Phone and roadside assistance'},{name:'PAForPassengers', label:'Personal accident for passengers'}],
        UsualPremium:{},
        MarketingInfo:[{pxObjClas: 'AXA-FW-GI-Int-API-MarketingInfo', RecordKey: 'AXA-SG-POL-GI-Motor-Work.Excess'}, {pxObjClas: 'AXA-FW-GI-Int-API-MarketingInfo', RecordKey: 'AXA-SG-POL-GI-Motor-Work.PersonalAccident'},{pxObjClas: 'AXA-FW-GI-Int-API-MarketingInfo', RecordKey: 'AXA-SG-POL-GI-Motor-Work.CarAccessoriesReimbursedUpTo2K'},{pxObjClas: 'AXA-FW-GI-Int-API-MarketingInfo', RecordKey: 'AXA-SG-POL-GI-Motor-Work.ChoiceOfCourtesyCar'},{pxObjClas: 'AXA-FW-GI-Int-API-MarketingInfo', RecordKey: 'AXA-SG-POL-GI-Motor-Work.ReimburseCarMarketValueWithNoExcessAtTotalLoss'},{pxObjClas: 'AXA-FW-GI-Int-API-MarketingInfo', RecordKey: 'AXA-SG-POL-GI-Motor-Work.PhoneAssistanceAndRoadSideSupportWhenBreakDown'},{pxObjClas: 'AXA-FW-GI-Int-API-MarketingInfo', RecordKey: 'AXA-SG-POL-GI-Motor-Work.PersonalAccidentForPassenger'}],
        Parameters: [{Name: 'ChangeExcess', pxObjClass: "AXA-FW-GI-Int-API-Parameter", Options: [{Name: 'Zero Excess', pxObjClass: 'AXA-FW-GI-Int-API-ParameterOption', Value: 'Zero'}, {Name: 'Double Excess', pxObjClass: 'AXA-FW-GI-Int-API-ParameterOption', Value: 'Double'}]},{Name: 'LimitPerDay', pxObjClass: 'AXA-FW-GI-Int-API-Parameter', Options:[{Name: '$50,000', pxObjClass: 'AXA-FW-GI-Int-API-ParameterOption', Value: '50000'}, {Name: '$100,000', pxObjClass: 'AXA-FW-GI-Int-API-ParameterOption', Value: '100000'}, {Name: '$200,000', 'pxObjClass': 'AXA-FW-GI-Int-API-ParameterOption', Value: '200000'}, {Name: '$500,000', pxObjClass: 'AXA-FW-GI-Int-API-ParameterOption', Value: '500000'}]}, {Name: 'CarType', pxObjClass: 'AXA-FW-GI-Int-API-Parameter', Options:[{Name: 'Standard', pxObjClass: 'AXA-FW-GI-Int-API-ParameterOption', Value: 'Standard'}, {Name: 'MPV', pxObjClass: 'AXA-FW-GI-Int-API-ParameterOption', Value: 'MPV'}, {Name: 'Luxury', pxObjClass: 'AXA-FW-GI-Int-API-ParameterOption', Value: 'Luxury'}]}]
      }
    }
  }

  return offer;
});
