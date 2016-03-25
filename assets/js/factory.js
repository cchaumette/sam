/**
 * Created by clement on 25/3/16.
 */

app.factory('policy', function() {
  console.log("===factory.policy==");
  var policy =
  {
    profil:
    {
      "Vehicle": {
        "Make": "FORD",
        "Model": "FOCUS 1.4",
        "YearOfMake": "2000",
        "OffPeakCar": false,
        "Seats": 4,
        "RegistrationNumber": "",
        "EngineNumber": "",
        "ChassisNumber": "",
        "SubModel": "",
        "CubicCapacity": "343",
        "HasFinanceLoan": false,
        "HasFinanceCompany": "",
        "PrevCarInsured": false,
        "PrevCarInsurer": "NONE"


      },
      "Drivers": [
        {
          "Gender": "MALE",
          "MaritalStatus": "MARRIED",
          "DateOfBirth": "19761231",
          "YearsOfDrivingExp": "6",
          "PostalCode": "999999"
        },

        //TODO : dynamique
        {},{},{},{}
      ],
      "PolicyHolder": [{
        "IsCorporateClient": "Individual",
        "Surname": "Mike",
        "GivenName": "Floyd",
        "DisplayName": "GivenName + Surname",
        "DateOfBirth": "19761231",
        "Gender": "MALE",
        "MaritalStatus": "MARRIED",
        "Nationality": "SIN",
        "IDNumber": "S8068097Z",
        "Phone": "6564271232",
        "Email": "youremail@youremail.com",
        "Country": "SIN",
        "PostalCode": "999999",
        "Occupation": "GEXC",
        "AddressLine1": "Addr Line 1",
        "AddressLine2": "Addr Line 2",
        "AddressLine3": ""
      }],

      "IsMainDriverPolicyHolder": true,
      "NumberOfClaims": "",
      "NumberOfWindscreenClaims": "",
      "TotalClaimAmount": "",
      "NCDPoints": "10",
      "ClaimsPast3Years":"",
      "PolicyStartDate": "20160102",
      "PolicyEndDate": "20170101",
      "Certificate":true
    },

    param :
    {
      "Vehicle": {
        OffPeakCar :[{label : 'No', value : false}, {label : 'Yes', value : true} ],
        YearOfMake : [{year: '2016'},{year: '2015'},{year: '2014'},{year: '2013'},{year: '2012'},{year: '2011'},{year: '2010'},{year: '2009'},{year: '2008'},{year: '2007'},{year: '2006'},{year: '2005'},{year: '2004'},{year: '2003'},{year: '2002'},{year: '2001'},{year: '2000'},{year: '1999'},{year: '1998'},{year: '1997'}],
        Seats:[{value:'9'},{value:'8'},{value:'7'},{value:'6'},{value:'5'},{value:'4'},{value:'3'},{value:'2'}],
        RegistrationNumber:{},
        EngineNumber:{},
        ChassisNumber:{},
        SubModel:{},
        CubicCapacity:{},
        HasFinanceLoan:[{label : 'No', value : false}, {label : 'Yes', value : true} ],
        HasFinanceCompany:{},
        PrevCarInsured:[{label : 'No', value : false}, {label : 'Yes', value : true} ],
        PrevCarInsurer:{}

      },
      "Drivers" :
      {
        Title : [{label :'main driver'},{label :'driver 2'},{label :'driver 3'},{label :'driver 4'}],
        Gender :[{label : 'Male', value : "MALE"}, {label : 'Female', value : "FEMALE"} ],
        MaritalStatus :[{label : 'Yes', value : "MARRIED"}, {label : 'No', value : "OTHER"} ],
        DateOfBirth:{}
      },
      "PolicyHolder":
      {
        IsCorporateClient:[{value:'Individual'}, {value:'Corporate'}],
        Surname: {},
        GivenName:{},
        DisplayName:{},
        DateOfBirth: {},
        Gender:[{value:'MALE', label:'male'}, {value:'FEMALE', label:'female'}],
        MaritalStatus :[{label : 'Yes', value : "MARRIED"}, {label : 'No', value : "OTHER"} ],
        Nationality:{},
        IDNumber:{},
        Phone:{},
        Email:{},
        PostalCode:{},
        Occupation:{},
        AddressLine1:{},
        AddressLine2:{},
        AddressLine3:{}

      },
      "IsMainDriverPolicyHolder": [{value: false, label:'No'}, {value:true, label:'Yes'}],
      "NCDPoints" : [{label : '50%', value :'50'},{label : '40%', value :'40'},{label : '30%', value :'30'},{label : '20%', value :'20'},{label : '10%', value :'10'},{label : '0%', value :'0'}],
      "ClaimsPast3Years" : [{label : 'No', value : false},{label : 'Yes', value : true}],
      "TotalClaimAmount" : [{label : 'Less than $10,000', value :'0'},{label : 'More than $10,000', value :'10001'}],
      "NumberOfClaims" : [{label : '0', value :'0'},{label : '1', value :'1'},{label : '2', value :'2'},{label : 'more than 2', value :'3'}],
      "NumberOfWindscreenClaims" : [{label : '0', value :'0'},{label : '1', value :'1'},{label : '2', value :'2'},{label : 'more than 2', value :'3'}],
      "Certificate": [{value: false, label:'No'}, {value:true, label:'Yes'}]
    }
  }
  return policy;
});

app.factory('product', function() {
  console.log("===factory.product==");
  var product =
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
  marketing : {
    "pxObjClass": "AXA-FW-GI-Int-API-REF-MarketingInfo-Response",
    "MarketingInfo": [{
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDriveTPFT",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<span style=\"font-family:'FranklinGothic-Book', Arial, sans-serif; color:#ee0000; font-style:italic;\">Third Party,<br>Fire &amp; Theft<\/span>"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "SmartDrive"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Third Party, Fire &amp; Theft"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_Comprehensive_Plus",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Plus"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\"Minimal & Easy\""
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<span style=\"font-family:'FranklinGothic-Heavy', Arial, sans-serif; font-size:24px; color:#103478;letter-spacing:1px;\">Smart<\/span><span style=\"font-family:'FranklinGothic-Book', Arial, sans-serif; font-size:24px; color:#ee0000; font-style:italic;\">Drive <span id=\"product_selected_name\">Comprehensive<\/span> <span id=\"product_plan_selected_name\"><\/span>"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_PrivateMPV",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Private MPV"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Private MPV"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\u201c Greater protection for family \u201d"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<table style=\"margin:10px;margin-left:20px;\">                           \n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Waiver of Named Young or Inexperienced Driver Excess<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Windscreen Replacement with Excess OR Repair your windscreen at your preferred location and get $50 cash reward with no excess<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">24\/7 Towing & Transportation in Singapore or Overseas<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Loss of Personal Effects in Singapore up to $3,000<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Daily Transport Allowance of $50 for a maximum of 5 days<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Personal accident benefit of up to $20,000 for you or one of your named drivers while driving and $20,000 per passenger<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Double Personal Accidental Benefit for Young and Old Passengers<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Workshop of Your Choice<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Car Accessories up to $2,500<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Medical and dental expenses up to $500 per person for either you as the driver or your authorised driver and a passenger<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Loss or Damage<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Legal Liability<\/td>\n<\/tr>                                       \n<\/table>"
      }, {
        "Name": "Key Benefit 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Waiver of Named Young or Inexperienced Driver Excess"
      }, {
        "Name": "Key Benefit 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Windscreen Replacement with Excess OR Repair your windscreen at your preferred location and get $50 cash reward with no excess"
      }, {
        "Name": "Key Benefit 3",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "24\/7 Towing & Transportation in Singapore or Overseas"
      }, {
        "Name": "Key Benefit 4",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Loss of Personal Effects in Singapore up to $3,000"
      }, {
        "Name": "Key Benefit 5",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Daily Transport Allowance of $50 for a maximum of 5 days"
      }, {
        "Name": "Key Benefit 6",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Personal accident benefit of up to $20,000 for you or one of your named drivers while driving and $20,000 per passenger"
      }, {
        "Name": "Key Benefit 7",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Double Personal Accidental Benefit for Young and Old Passengers"
      }, {
        "Name": "Key Benefit 8",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Workshop of Your Choice"
      }, {
        "Name": "Key Benefit 9",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Car Accessories up to $2,500"
      }, {
        "Name": "Key Benefit 10",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Medical and dental expenses up to $500 per person for either you as the driver or your authorised driver and a passenger"
      }, {
        "Name": "Key Benefit 11",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Loss or Damage"
      }, {
        "Name": "Key Benefit 12",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Legal Liability"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_TP_Plus",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "PLUS"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "PLUS"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\u201c Minimal & Easy \u201d"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<table style=\"margin:10px;margin-left:20px;\">                           \r\n<tr>\r\n\t<td><img src=\"webwb\/tick_small.png\"><\/td>\r\n        <td style=\"padding-left:10px;\">Towing & Transportation in Singapore or Overseas<\/td>\r\n<\/tr>\r\n<tr>\r\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\r\n        <td style=\"padding-left:10px;\">Survey and Repairs Authorization within 24 hours<\/td>\r\n<\/tr>\r\n<tr>\r\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>\r\n        <td style=\"padding-left:10px;\">Personal Accident $30,000<\/td>\r\n<\/tr>\r\n<tr>\r\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>\r\n        <td style=\"padding-left:10px;\">Repairs guaranteed for 12 months<\/td>\r\n<\/tr>\r\n<tr>\r\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>\r\n        <td style=\"padding-left:10px;\">Flood Protection<\/td>\r\n<\/tr>\r\n<tr>\r\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>  \r\n        <td style=\"padding-left:10px;\">Delivery repaired car<\/td>\r\n<\/tr>\r\n<tr>\r\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\r\n        <td style=\"padding-left:10px;\">Personal belongings $3,000<\/td>\r\n<\/tr>                                        \r\n<\/table>"
      }, {
        "Name": "Key Benefit 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Towing & Transportation in Singapore or Overseas"
      }, {
        "Name": "Key Benefit 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Survey and Repairs Authorization within 24 hours"
      }, {
        "Name": "Key Benefit 3",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Personal Accident $30,000"
      }, {
        "Name": "Key Benefit 4",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Repairs guaranteed for 12 months"
      }, {
        "Name": "Key Benefit 5",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Flood Protection"
      }, {
        "Name": "Key Benefit 6",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Delivery repaired car"
      }, {
        "Name": "Key Benefit 7",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Personal belongings $3,000"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_Offer_ForHer",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "For Her"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\"Efficient & Family\""
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<span style=\"font-family:'FranklinGothic-Heavy', Arial, sans-serif; font-size:24px; color:#103478;letter-spacing:1px;\">Smart<\/span><span style=\"font-family:'FranklinGothic-Book', Arial, sans-serif; font-size:24px; color:#ee0000; font-style:italic;\">Drive <span id=\"product_selected_name\">Comprehensive<\/span> <span id=\"product_plan_selected_name\"><\/span>"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.GetGTOMdDiscount",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Get GTOM\u2019d Discount"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_VPA_Comprehensive_Make",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Make"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\"Minimal & Easy\""
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<span style=\"font-family:'FranklinGothic-Heavy', Arial, sans-serif; font-size:24px; color:#103478;letter-spacing:1px;\">Smart<\/span><span style=\"font-family:'FranklinGothic-Book', Arial, sans-serif; font-size:24px; color:#ee0000; font-style:italic;\">Drive <span id=\"product_selected_name\">Comprehensive<\/span> <span id=\"product_plan_selected_name\"><\/span>"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_Offer_SavvyPlus",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Savvy Plus"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\"Value & Savings\""
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<span style=\"font-family:'FranklinGothic-Heavy', Arial, sans-serif; font-size:24px; color:#103478;letter-spacing:1px;\">Smart<\/span><span style=\"font-family:'FranklinGothic-Book', Arial, sans-serif; font-size:24px; color:#ee0000; font-style:italic;\">Drive <span id=\"product_selected_name\">Comprehensive<\/span> <span id=\"product_plan_selected_name\"><\/span>"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.NewCampaignDiscount",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "High FIVE Campaign"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.ZeroExcess",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Zero Excess"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Your are covered in full for the repair cost, including the excess, in the event of an accident even if you are at fault"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDriveComprehensive_Thai",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Thai Main Title"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Thai sub title"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_Essential",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Essential"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Essential"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\u201c Value \u201d"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<table style=\"margin:10px;margin-left:20px;\">                           \n<tr>\n\t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">24\/7 Towing & Transportation in Singapore or Overseas<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Windscreen Replacement with Excess OR Repair your windscreen at your preferred location and get $50 cash reward with no excess<\/td>\n<\/tr>\n<tr>\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Guaranteed Repairs for twelve (12) Months<\/td>\n<\/tr>\n<tr>\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Loss or Damage<\/td>\n<\/tr>\n<tr>\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Legal Liability<\/td>\n<\/tr>\n<\/table>"
      }, {
        "Name": "Key Benefit 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "24\/7 Towing & Transportation in Singapore or Overseas"
      }, {
        "Name": "Key Benefit 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Windscreen Replacement with Excess OR Repair your windscreen at your preferred location and get $50 cash reward with no excess"
      }, {
        "Name": "Key Benefit 3",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Guaranteed Repairs for twelve (12) Months"
      }, {
        "Name": "Key Benefit 4",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Loss or Damage"
      }, {
        "Name": "Key Benefit 5",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Legal Liability"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.YoungCar15Discount",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Young Car Discount"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_MakeFamily",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "${pyWorkPage.Vehicle.Make} Family"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Complete Family Protection"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<span style=\"font-family:'FranklinGothic-Heavy', Arial, sans-serif; font-size:24px; color:#103478;letter-spacing:1px;\">Smart<\/span><span style=\"font-family:'FranklinGothic-Book', Arial, sans-serif; font-size:24px; color:#ee0000; font-style:italic;\">Drive <span id=\"product_selected_name\">Comprehensive<\/span> <span id=\"product_plan_selected_name\"><\/span>"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SuperSaleDiscount",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Super Sale Discount"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.PAWith100KSI",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "PA with Sum Insured 100K"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "PA with Sum Insured 100K"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.OffPeakCarDiscount",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Off Peak Car Discount"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDriveComprehensive",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<span style=\"font-family:'FranklinGothic-Book', Arial, sans-serif; color:#ee0000; font-style:italic;\">Comprehensive<\/span>"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "SmartDrive"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Comprehensive"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SafeDriverDiscount",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Safe Driver Discount"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.PackProtectorPlus",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Protector Plus"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\"Designed to minimise financial losses\""
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "To Consider"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<table cellspacing=\"5\" cellpadding=\"5\" style=\"font-family:'Arial-Narrow', Geneva, sans-serif;color:#444444;\">\r\n\t<tr>\r\n\t\t<td colspan=\"2\" style=\"font-family:'FranklinGothic-Demi', Geneva, sans-serif; font-size:16px;text-transform:uppercase;color:#103184;\">Benefits:<\/td>\r\n    <\/tr>                            \t\r\n    <tr>\r\n\t\t<td style=\"background:url(webwb\/tick_small_2.png) 5px 10px no-repeat;\" width=\"15\"><\/td>\r\n        <td style = \"font-size:16px;color:#444444;\">We will pay you a daily transport allowance of $100 for a maximum of 10 days<\/td>\r\n    <\/tr>                            \t\r\n    <tr>\r\n\t\t<td style=\"background:url(webwb\/tick_small_2.png) 5px 10px no-repeat;\" width=\"15\"><\/td>\r\n        <td style = \"font-size:16px;color:#444444;\">We will pay you 110% of your car's market value (at the time of loss or damage) without applying any basic own damage excess in the event of total loss<\/td>\r\n\t<\/tr>\r\n    <tr>\r\n\t\t<td style=\"background:url(webwb\/tick_small_2.png) 5px 10px no-repeat;\" width=\"15\"><\/td>\r\n        <td style = \"font-size:16px;color:#444444;\">We will deliver your repaired car to your preferred location in Singapore<\/td>\r\n\t<\/tr> \r\n    <tr>\r\n\t\t<td style=\"background:url(webwb\/tick_small_2.png) 5px 10px no-repeat;\" width=\"15\"><\/td>\r\n        <td style = \"font-size:16px;color:#444444;\">We will give you a discount of 5% off your renewal premium if  you do not have any accidents during the year <\/td>\r\n\t<\/tr> \t\r\n<\/table>"
      }, {
        "Name": "Key Benefit 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Benefits:"
      }, {
        "Name": "Key Benefit 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Key Benefit 3",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "We will pay you a daily transport allowance of $100 for a maximum of 10 days"
      }, {
        "Name": "Key Benefit 4",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Key Benefit 5",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "We will pay you 110% of your car's market value (at the time of loss or damage) without applying any basic own damage excess in the event of total loss"
      }, {
        "Name": "Key Benefit 6",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Key Benefit 7",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "We will deliver your repaired car to your preferred location in Singapore"
      }, {
        "Name": "Key Benefit 8",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Key Benefit 9",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "We will give you a discount of 5% off your renewal premium if  you do not have any accidents during the year"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.EnhancedMedicalDentalExpenses",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Enhanced Medical and Dental Expenses"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "You, your named drivers and your immediate family members are all entitled to an additional Medical Expenses benefit up to $5,000 per person including dental expenses each in the event of an accident"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_PrivateAPW",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Private APW"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Private APW"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\u201c Value \u201d"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<table style=\"margin:10px;margin-left:20px;\">                           \n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Windscreen Replacement with Excess OR Repair your windscreen at your preferred location and get $50 cash reward with no excess<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Guaranteed Repairs for twelve (12) Months<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">24\/7 Towing & Transportation in Singapore or Overseas<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Loss of Personal Effects in Singapore up to $3,000<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Daily Transport Allowance of $50 for a maximum of 5 days<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Personal accident benefit of up to $30,000 for you or your named drivers while driving<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Medical and dental expenses up to $500 per person for either you as the driver or your authorised driver and a passenger<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Loss or Damage<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Legal Liability<\/td>\n<\/tr>                                       \n<\/table>"
      }, {
        "Name": "Key Benefit 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Windscreen Replacement with Excess OR Repair your windscreen at your preferred location and get $50 cash reward with no excess"
      }, {
        "Name": "Key Benefit 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Guaranteed Repairs for twelve (12) Months"
      }, {
        "Name": "Key Benefit 3",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "24\/7 Towing & Transportation in Singapore or Overseas"
      }, {
        "Name": "Key Benefit 4",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Loss of Personal Effects in Singapore up to $3,000"
      }, {
        "Name": "Key Benefit 5",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Daily Transport Allowance of $50 for a maximum of 5 days"
      }, {
        "Name": "Key Benefit 6",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Personal accident benefit of up to $30,000 for you or your named drivers while driving"
      }, {
        "Name": "Key Benefit 7",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Medical and dental expenses up to $500 per person for either you as the driver or your authorised driver and a passenger"
      }, {
        "Name": "Key Benefit 8",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Loss or Damage"
      }, {
        "Name": "Key Benefit 9",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Legal Liability"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_EssentialPlus",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Essential+"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Essential Plus"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\u201c Value & Savings \u201d"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<table style=\"margin:10px;margin-left:20px;\">                           \n<tr>\n\t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">24\/7 Towing & Transportation in Singapore or Overseas<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Windscreen Replacement with Excess OR Repair your windscreen at your preferred location and get $50 cash reward with no excess<\/td>\n<\/tr>\n<tr>\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Guaranteed Repairs for twelve (12) Months <\/td>\n<\/tr>\n<tr>\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Daily Transport Allowance of $100 for a maximum of 10 days<\/td>\n<\/tr>\n<tr>\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Reimbursement of 110% of your car\u2019s market value in the event of total loss (without Basic Own Damage Excess)<\/td>\n<\/tr>\n<tr>\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>  \n        <td style=\"padding-left:10px;\">Delivery of Repaired Car<\/td>\n<\/tr>\n<tr>\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>  \n        <td style=\"padding-left:10px;\">Medical and dental expenses up to $1,000 per person for you, your named drivers and your immediate family members<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Loss or Damage<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Legal Liability<\/td>\n<\/tr>                                       \n<\/table>"
      }, {
        "Name": "Key Benefit 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "24\/7 Towing & Transportation in Singapore or Overseas"
      }, {
        "Name": "Key Benefit 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Windscreen Replacement with Excess OR Repair your windscreen at your preferred location and get $50 cash reward with no excess"
      }, {
        "Name": "Key Benefit 3",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Guaranteed Repairs for twelve (12) Months"
      }, {
        "Name": "Key Benefit 4",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Daily Transport Allowance of $100 for a maximum of 10 days"
      }, {
        "Name": "Key Benefit 5",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Reimbursement of 110% of your car\u2019s market value in the event of total loss (without Basic Own Damage Excess)"
      }, {
        "Name": "Key Benefit 6",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Delivery of Repaired Car"
      }, {
        "Name": "Key Benefit 7",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Medical and dental expenses up to $1,000 per person for you, your named drivers and your immediate family members"
      }, {
        "Name": "Key Benefit 8",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Loss or Damage"
      }, {
        "Name": "Key Benefit 9",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Legal Liability"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_Comprehensive_Make",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Make"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\"Value & Flexibility\""
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<span style=\"font-family:'FranklinGothic-Heavy', Arial, sans-serif; font-size:24px; color:#103478;letter-spacing:1px;\">Smart<\/span><span style=\"font-family:'FranklinGothic-Book', Arial, sans-serif; font-size:24px; color:#ee0000; font-style:italic;\">Drive <span id=\"product_selected_name\">Comprehensive<\/span> <span id=\"product_plan_selected_name\"><\/span>"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_Peace",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Peace"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Peace"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\u201c Efficient & Holistic \u201d"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<table style=\"margin:10px;margin-left:20px;\">                           \n<tr>\n\t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">24\/7 Towing & Transportation in Singapore or Overseas<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Windscreen Replacement with Excess OR Repair your windscreen at your preferred location and get $50 cash reward with no excess<\/td>\n<\/tr>\n<tr>\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Guaranteed Repairs for twelve (12) Months<\/td>\n<\/tr>\n<tr>\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Delivery of Repaired Car<\/td>\n<\/tr>\n<tr>\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Reimbursement of 110% of your car's market value in the event of total loss due to flood (without Basic Own Damage Excess)<\/td>\n<\/tr>\n<tr>\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>  \n        <td style=\"padding-left:10px;\">Loss of Personal Effects in Singapore up to $3,000<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Medical and dental expenses up to $1,000 per person for you, your named drivers and your immediate family members<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Loss or Damage<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Legal Liability<\/td>\n<\/tr>                                       \n<\/table>"
      }, {
        "Name": "Key Benefit 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "24\/7 Towing & Transportation in Singapore or Overseas"
      }, {
        "Name": "Key Benefit 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Windscreen Replacement with Excess OR Repair your windscreen at your preferred location and get $50 cash reward with no excess"
      }, {
        "Name": "Key Benefit 3",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Guaranteed Repairs for twelve (12) Months"
      }, {
        "Name": "Key Benefit 4",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Delivery of Repaired Car"
      }, {
        "Name": "Key Benefit 5",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Reimbursement of 110% of your car's market value in the event of total loss due to flood (without Basic Own Damage Excess)"
      }, {
        "Name": "Key Benefit 6",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Loss of Personal Effects in Singapore up to $3,000"
      }, {
        "Name": "Key Benefit 7",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Medical and dental expenses up to $1,000 per person for you, your named drivers and your immediate family members"
      }, {
        "Name": "Key Benefit 8",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Loss or Damage"
      }, {
        "Name": "Key Benefit 9",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Legal Liability"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.ContinentalCarChallengeDiscount",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Continental Car Challenge Discount"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.PackOverseaProtect",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Overseas Protector"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\"Designed for frequent driving up north\""
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "To Consider"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<table cellspacing=\"5\" cellpadding=\"5\" style=\"font-family:'Arial-Narrow', Geneva, sans-serif;color:#444444;\">\r\n\t<tr>\r\n\t\t<td colspan=\"2\" style=\"font-family:'FranklinGothic-Demi', Geneva, sans-serif; font-size:16px;text-transform:uppercase;color:#103184;\">Benefits:<\/td>\r\n    <\/tr>                            \t\r\n    <tr>\r\n\t\t<td style=\"background:url(webwb\/tick_small_2.png) 5px 10px no-repeat;\" width=\"15\"><\/td>\r\n        <td style = \"font-size:16px;color:#444444;\">You will receive a lump sum of $200 to cover any extra expenses arising from a car accident while overseas. <\/td>\r\n    <\/tr>\r\n\t<tr>\r\n\t\t<td style=\"background:url(webwb\/tick_small_2.png) 5px 10px no-repeat;\" width=\"15\"><\/td>\r\n        <td style = \"font-size:16px;color:#444444;\">You will be reimbursed up to $300 for the cost of one night hotel accommodation for you and your passengers in the event of car theft or accident while overseas<\/td>\r\n    <\/tr> \r\n\t<tr>\r\n\t\t<td style=\"background:url(webwb\/tick_small_2.png) 5px 10px no-repeat;\" width=\"15\"><\/td>\r\n        <td style = \"font-size:16px;color:#444444;\">We will reimburse you up to $2,500 for cancellation fees of your pre-paid travel bookings in the event of car theft or accident while overseas<\/td>\r\n    <\/tr> \r\n\t<tr>\r\n\t\t<td style=\"background:url(webwb\/tick_small_2.png) 5px 10px no-repeat;\" width=\"15\"><\/td>\r\n        <td style = \"font-size:16px;color:#444444;\">We will arrange a rental car for up to 14 days, in the event of car theft or accident while overseas. <\/td>\r\n    <\/tr> \r\n\t<tr>\r\n\t\t<td style=\"background:url(webwb\/tick_small_2.png) 5px 10px no-repeat;\" width=\"15\"><\/td>\r\n        <td style = \"font-size:16px;color:#444444;\">We will reimburse the replacement cost of your personal effects up to $3,000 if damaged in an accident or fire, or stolen with your car overseas<\/td>\r\n    <\/tr> \r\n<\/table>"
      }, {
        "Name": "Key Benefit 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Benefits:"
      }, {
        "Name": "Key Benefit 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Key Benefit 3",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "You will receive a lump sum of $200 to cover any extra expenses arising from a car accident while overseas."
      }, {
        "Name": "Key Benefit 4",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Key Benefit 5",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "You will be reimbursed up to $300 for the cost of one night hotel accommodation for you and your passengers in the event of car theft or accident while overseas"
      }, {
        "Name": "Key Benefit 6",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Key Benefit 7",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "We will reimburse you up to $2,500 for cancellation fees of your pre-paid travel bookings in the event of car theft or accident while overseas"
      }, {
        "Name": "Key Benefit 8",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Key Benefit 9",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "We will arrange a rental car for up to 14 days, in the event of car theft or accident while overseas."
      }, {
        "Name": "Key Benefit 10",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Key Benefit 11",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "We will reimburse the replacement cost of your personal effects up to $3,000 if damaged in an accident or fire, or stolen with your car overseas"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.PackFinance",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Finance"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\"Designed for you and your partner.\""
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "To Consider"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<table cellspacing=\"5\" cellpadding=\"5\" style=\"font-family:'Arial-Narrow', Geneva, sans-serif;color:#444444;\">\r\n\t<tr>\r\n\t\t<td colspan=\"2\" style=\"font-family:'FranklinGothic-Demi', Geneva, sans-serif; font-size:16px;text-transform:uppercase;color:#103184;\">Benefits:<\/td>\r\n    <\/tr>                            \t\r\n    <tr>\r\n\t\t<td style=\"background:url(webwb\/tick_small_2.png) 5px 10px no-repeat;\" width=\"15\"><\/td>\r\n        <td style = \"font-size:16px;color:#444444;\">We reimburse your transport cost while your car is at the workshop up to $150\/day.<\/td>\r\n    <\/tr>                            \t\r\n    <tr>\r\n\t\t<td style=\"background:url(webwb\/tick_small_2.png) 5px 10px no-repeat;\" width=\"15\"><\/td>\r\n        <td style = \"font-size:16px;color:#444444;\">We reimburse 110% of  your car market value if your car is damaged by an accident beyond repair.<\/td>\r\n\t<\/tr>                            \t\r\n    <tr>\r\n        <td style=\"background:url(webwb\/tick_small_2.png) 5px 10px no-repeat;\" width=\"15\"><\/td>\r\n\t\t<td style = \"font-size:16px;color:#444444;\">We guarantee 5% discount on top of your normal renewal price.<\/td>\r\n\t<\/tr>                            \t\r\n    <tr>\r\n\t\t<td style=\"background:url(webwb\/tick_small_2.png) 5px 10px no-repeat;\" width=\"15\"><\/td>\r\n        <td style = \"font-size:16px;color:#444444;\">We deliver to your preferred location, anywhere in Singapore, once repaired.<\/td>\r\n    <\/tr>\r\n<\/table>"
      }, {
        "Name": "Key Benefit 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Benefits:"
      }, {
        "Name": "Key Benefit 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Key Benefit 3",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "We reimburse your transport cost while your car is at the workshop up to $150\/day."
      }, {
        "Name": "Key Benefit 4",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Key Benefit 5",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "We reimburse 110% of  your car market value if your car is damaged by an accident beyond repair."
      }, {
        "Name": "Key Benefit 6",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Key Benefit 7",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "We guarantee 5% discount on top of your normal renewal price."
      }, {
        "Name": "Key Benefit 8",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Key Benefit 9",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "We deliver to your preferred location, anywhere in Singapore, once repaired."
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.NCDProtectorForFamilyBenefit",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "NCD Protector"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Your NCD is not affected if you have 1 accident during the insured period"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.CarAccessoriesReimbursedUpTo2K",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Car Accessories $2000"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "We will cover your car accessories for up to $2000 without applying any excess in the event of loss or damage, and your NCD will not be affected."
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDriveComprehensive_Ch",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Chinese"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Chinese"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Chinese"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Chinese"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_Comprehensive_Family",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Family"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\"Complete Family Protection\""
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<span style=\"font-family:'FranklinGothic-Heavy', Arial, sans-serif; font-size:24px; color:#103478;letter-spacing:1px;\">Smart<\/span><span style=\"font-family:'FranklinGothic-Book', Arial, sans-serif; font-size:24px; color:#ee0000; font-style:italic;\">Drive <span id=\"product_selected_name\">Comprehensive<\/span> <span id=\"product_plan_selected_name\"><\/span>"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_PrivateMPVAPW",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Private MPV (APW)"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Private MPV (APW)"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<table style=\"margin:10px;margin-left:20px;\">                           \n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Windscreen Replacement with Excess OR Repair your windscreen at your preferred location and get $50 cash reward with no excess<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Guaranteed Repairs for twelve (12) Months <\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">24\/7 Towing & Transportation in Singapore or Overseas<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Loss of Personal Effects in Singapore up to $3,000<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Daily Transport Allowance of $50 for a maximum of 5 days<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Personal accident benefit of up to $30,000 for you or one of your named drivers while driving and $20,000 per passenger<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Double Personal Accidental Benefit for Young and Old Passengers<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Medical and dental expenses up to $500 per person for either you as the driver or your authorised driver and a passenger<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Car Accessories up to $2,500<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Waiver of Named Young or Inexperienced Driver Excess<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Loss or Damage<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Legal Liability<\/td>\n<\/tr>                                       \n<\/table>"
      }, {
        "Name": "Key Benefit 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Windscreen Replacement with Excess OR Repair your windscreen at your preferred location and get $50 cash reward with no excess"
      }, {
        "Name": "Key Benefit 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Guaranteed Repairs for twelve (12) Months"
      }, {
        "Name": "Key Benefit 3",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "24\/7 Towing & Transportation in Singapore or Overseas"
      }, {
        "Name": "Key Benefit 4",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Loss of Personal Effects in Singapore up to $3,000"
      }, {
        "Name": "Key Benefit 5",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Daily Transport Allowance of $50 for a maximum of 5 days"
      }, {
        "Name": "Key Benefit 6",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Personal accident benefit of up to $30,000 for you or one of your named drivers while driving and $20,000 per passenger"
      }, {
        "Name": "Key Benefit 7",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Double Personal Accidental Benefit for Young and Old Passengers"
      }, {
        "Name": "Key Benefit 8",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Medical and dental expenses up to $500 per person for either you as the driver or your authorised driver and a passenger"
      }, {
        "Name": "Key Benefit 9",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Car Accessories up to $2,500"
      }, {
        "Name": "Key Benefit 10",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Waiver of Named Young or Inexperienced Driver Excess"
      }, {
        "Name": "Key Benefit 11",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Loss or Damage"
      }, {
        "Name": "Key Benefit 12",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Legal Liability"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_TP",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Third Party Only"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Third Party Only"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\u201c Simple Coverage due to TPO \u201d"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<table style=\"margin:10px;margin-left:20px;\">                           \r\n<tr>\r\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\r\n        <td style=\"padding-left:10px;\">Legal Liability<\/td>\r\n<\/tr>\r\n<\/table>"
      }, {
        "Name": "Key Benefit 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Legal Liability"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.ChoiceOfCourtesyCar",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Courtesy Car in Singapore"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "A Courtesy Car will be delivered to and picked up from your preferred location in Singapore. It will be provided for a maximum duration of 10 days for Own Damage claim (Standard under 5 years old \/\/ MPV under 3 years old \/\/ High-end under 3 years old)"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.AXAPremierWorkshop",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "AXA Premier Workshop"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.PAWith200KSI",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "PA with Sum Insured 200K"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "PA with Sum Insured 200K"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.NCDProtector",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "NCD Protector"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Your NCD is protected for all types of claims and for accidents involving your authorised drivers"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.EarlyBirdDiscount",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Early Bird Discount"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_Ch",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Chinese"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Chinese"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Chinese"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Chinese"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_Make",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "${pyWorkPage.Vehicle.Make}"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Value & Flexibility"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<span style=\"font-family:'FranklinGothic-Heavy', Arial, sans-serif; font-size:24px; color:#103478;letter-spacing:1px;\">Smart<\/span><span style=\"font-family:'FranklinGothic-Book', Arial, sans-serif; font-size:24px; color:#ee0000; font-style:italic;\">Drive <span id=\"product_selected_name\">Comprehensive<\/span> <span id=\"product_plan_selected_name\"><\/span>"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SpecialJulyDiscount",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Special July Discount"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_Private",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Private"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Private"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\u201c Flexible \u201d"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<table style=\"margin:10px;margin-left:20px;\">                           \n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Windscreen Replacement with Excess OR Repair your windscreen at your preferred location and get $50 cash reward with no excess<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">24\/7 Towing & Transportation in Singapore or Overseas<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Daily Transport Allowance of $50 for a maximum of 5 days<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Personal accident benefit of up to $20,000 for you or your named drivers while driving<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Workshop of Your Choice<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Medical and dental expenses up to $500 per person for either you as the driver or your authorised driver and a passenger<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Loss or Damage<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Legal Liability<\/td>\n<\/tr>                                       \n<\/table>"
      }, {
        "Name": "Key Benefit 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Windscreen Replacement with Excess OR Repair your windscreen at your preferred location and get $50 cash reward with no excess"
      }, {
        "Name": "Key Benefit 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "24\/7 Towing & Transportation in Singapore or Overseas"
      }, {
        "Name": "Key Benefit 3",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Daily Transport Allowance of $50 for a maximum of 5 days"
      }, {
        "Name": "Key Benefit 4",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Personal accident benefit of up to $20,000 for you or your named drivers while driving"
      }, {
        "Name": "Key Benefit 5",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Workshop of Your Choice"
      }, {
        "Name": "Key Benefit 6",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Medical and dental expenses up to $500 per person for either you as the driver or your authorised driver and a passenger"
      }, {
        "Name": "Key Benefit 7",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Loss or Damage"
      }, {
        "Name": "Key Benefit 8",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Legal Liability"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_VPA_Comprehensive_Family",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Family"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\"Minimal & Easy\""
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<span style=\"font-family:'FranklinGothic-Heavy', Arial, sans-serif; font-size:24px; color:#103478;letter-spacing:1px;\">Smart<\/span><span style=\"font-family:'FranklinGothic-Book', Arial, sans-serif; font-size:24px; color:#ee0000; font-style:italic;\">Drive <span id=\"product_selected_name\">Comprehensive<\/span> <span id=\"product_plan_selected_name\"><\/span>"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_SavvyPlus",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Savvy Plus"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Value & Savings"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<span style=\"font-family:'FranklinGothic-Heavy', Arial, sans-serif; font-size:24px; color:#103478;letter-spacing:1px;\">Smart<\/span><span style=\"font-family:'FranklinGothic-Book', Arial, sans-serif; font-size:24px; color:#ee0000; font-style:italic;\">Drive <span id=\"product_selected_name\">Comprehensive<\/span> <span id=\"product_plan_selected_name\"><\/span>"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_VPA_Comprehensive_Platinum",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Platinum"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\"Minimal & Easy\""
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<span style=\"font-family:'FranklinGothic-Heavy', Arial, sans-serif; font-size:24px; color:#103478;letter-spacing:1px;\">Smart<\/span><span style=\"font-family:'FranklinGothic-Book', Arial, sans-serif; font-size:24px; color:#ee0000; font-style:italic;\">Drive <span id=\"product_selected_name\">Comprehensive<\/span> <span id=\"product_plan_selected_name\"><\/span>"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.ChoiceOfCourtesyCarHighEnd",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Choice Of Courtesy Car High-end"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Choice Of Courtesy Car High-end"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.NoClaimDiscount",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "No Claim Discount"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.ReimburseCarMarketValueWithNoExcessAtTotalLoss",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Car Protector"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "We will pay you 110% of your car's market value (at the time of loss or damage) without applying any basic own damage excess in the event of total loss"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.AXARegionalDiscount",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "AXA Regional Discount"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.AXARelativeRetiredDiscount",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "AXA Relative\/Retired Discount"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_Comprehensive_Platinum",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Platinum"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\"Flexibility & Savings\""
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<span style=\"font-family:'FranklinGothic-Heavy', Arial, sans-serif; font-size:24px; color:#103478;letter-spacing:1px;\">Smart<\/span><span style=\"font-family:'FranklinGothic-Book', Arial, sans-serif; font-size:24px; color:#ee0000; font-style:italic;\">Drive <span id=\"product_selected_name\">Comprehensive<\/span> <span id=\"product_plan_selected_name\"><\/span>"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_ForHer",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "For Her"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "For Her"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\u201c What a woman wants \u201d"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<table style=\"margin:10px;margin-left:20px;\">                           \n<tr>\n\t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">24\/7 Towing & Transportation in Singapore or Overseas<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Windscreen Replacement with Excess OR Repair your windscreen at your preferred location and get $50 cash reward with no excess<\/td>\n<\/tr>\n<tr>\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Guaranteed Repairs for twelve (12) Months<\/td>\n<\/tr>\n<tr>\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Daily Transport Allowance of $50 for a maximum of 10 days<\/td>\n<\/tr>\n<tr>\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Phone Assistance and Roadside Support<\/td>\n<\/tr>\n<tr>\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>  \n        <td style=\"padding-left:10px;\">Reimbursement of 110% of your car's market value in the event of total loss due to flood (without Basic Own Damage Excess)<\/td>\n<\/tr>\n<tr>\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>  \n        <td style=\"padding-left:10px;\">Basic Own Damage Excess Waiver from 3rd Year if you are accident-free during the first two years<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Medical and dental expenses up to $1,000 per person for you, your named drivers and your immediate family members<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Loss or Damage<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Legal Liability<\/td>\n<\/tr>                                       \n<\/table>"
      }, {
        "Name": "Key Benefit 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "24\/7 Towing & Transportation in Singapore or Overseas"
      }, {
        "Name": "Key Benefit 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Windscreen Replacement with Excess OR Repair your windscreen at your preferred location and get $50 cash reward with no excess"
      }, {
        "Name": "Key Benefit 3",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Guaranteed Repairs for twelve (12) Months"
      }, {
        "Name": "Key Benefit 4",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Daily Transport Allowance of $50 for a maximum of 10 days"
      }, {
        "Name": "Key Benefit 5",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Phone Assistance and Roadside Support"
      }, {
        "Name": "Key Benefit 6",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Reimbursement of 110% of your car's market value in the event of total loss due to flood (without Basic Own Damage Excess)"
      }, {
        "Name": "Key Benefit 7",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Basic Own Damage Excess Waiver from 3rd Year if you are accident-free during the first two years"
      }, {
        "Name": "Key Benefit 8",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Medical and dental expenses up to $1,000 per person for you, your named drivers and your immediate family members"
      }, {
        "Name": "Key Benefit 9",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Loss or Damage"
      }, {
        "Name": "Key Benefit 10",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Legal Liability"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_FlexiFamily",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Flexi Family"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Flexi Family"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\u201c Complete Family Protection \u201d"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<table style=\"margin:10px;margin-left:20px;\">                           \n<tr>\n\t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">24\/7 Towing & Transportation in Singapore or Overseas<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Workshop of Your Choice<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Reimbursement of 110% of your car's market value in the event of total loss due to flood (without Basic Own Damage Excess)<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Loss of Personal Effects in Singapore up to $6,000<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Personal accident benefit of up to $60,000 per person for you, your named drivers and your immediate family members<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Medical and dental expenses up to $5,000 per person for you, your named drivers and your immediate family members<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Monthly allowance of $3,000 for each injured person for you and your spouse up to 18 months<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Waiver of Named Young or Inexperienced Driver Excess<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Windscreen Replacement with Excess OR Repair your windscreen at your preferred location and get $50 cash reward with no excess<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Loss or Damage<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Legal Liability<\/td>\n<\/tr>                                       \n<\/table>"
      }, {
        "Name": "Key Benefit 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "24\/7 Towing & Transportation in Singapore or Overseas"
      }, {
        "Name": "Key Benefit 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Workshop of Your Choice"
      }, {
        "Name": "Key Benefit 3",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Reimbursement of 110% of your car's market value in the event of total loss due to flood (without Basic Own Damage Excess)"
      }, {
        "Name": "Key Benefit 4",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Loss of Personal Effects in Singapore up to $6,000"
      }, {
        "Name": "Key Benefit 5",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Personal accident benefit of up to $60,000 per person for you, your named drivers and your immediate family members"
      }, {
        "Name": "Key Benefit 6",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Medical and dental expenses up to $5,000 per person for you, your named drivers and your immediate family members"
      }, {
        "Name": "Key Benefit 7",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Monthly allowance of $3,000 for each injured person for you and your spouse up to 18 months"
      }, {
        "Name": "Key Benefit 8",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Waiver of Named Young or Inexperienced Driver Excess"
      }, {
        "Name": "Key Benefit 9",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Windscreen Replacement with Excess OR Repair your windscreen at your preferred location and get $50 cash reward with no excess"
      }, {
        "Name": "Key Benefit 10",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Loss or Damage"
      }, {
        "Name": "Key Benefit 11",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Legal Liability"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.ContinentalCar25Discount",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Continental Car Discount"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.Special5Discount",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Special Discount"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_VPA_Comprehensive_Plus",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Plus"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\"Minimal & Easy\""
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<span style=\"font-family:'FranklinGothic-Heavy', Arial, sans-serif; font-size:24px; color:#103478;letter-spacing:1px;\">Smart<\/span><span style=\"font-family:'FranklinGothic-Book', Arial, sans-serif; font-size:24px; color:#ee0000; font-style:italic;\">Drive <span id=\"product_selected_name\">Comprehensive<\/span> <span id=\"product_plan_selected_name\"><\/span>"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_Savvy",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Savvy"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Value"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<span style=\"font-family:'FranklinGothic-Heavy', Arial, sans-serif; font-size:24px; color:#103478;letter-spacing:1px;\">Smart<\/span><span style=\"font-family:'FranklinGothic-Book', Arial, sans-serif; font-size:24px; color:#ee0000; font-style:italic;\">Drive <span id=\"product_selected_name\">Comprehensive<\/span> <span id=\"product_plan_selected_name\"><\/span>"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_Thai",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Thai Main Title"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Thai sub title"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.PhoneAssistanceAndRoadSideSupportWhenBreakDown",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Phone Assistance and Roadside Support"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "We will provide you with phone assistance and\/or roadside support in the event of vehicle breakdown or immobilization"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<span style=\"font-family:'FranklinGothic-Book', Arial, sans-serif; color:#ee0000; font-style:italic;\">Third Party Only<\/span>"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "SmartDrive"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Third Party Only"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SpecialDiscount",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Special Discount"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.LaunchOfferDiscount",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Launch Offer Discount"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.PackDuo",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Duo Protector"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\"Designed for drivers with one other named driver\""
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "To Consider"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<table cellspacing=\"5\" cellpadding=\"5\" style=\"font-family:'Arial-Narrow', Geneva, sans-serif;color:#444444;\">\r\n\t<tr>\r\n\t\t<td colspan=\"2\" style=\"font-family:'FranklinGothic-Demi', Geneva, sans-serif; font-size:16px;text-transform:uppercase;color:#103184;\">Benefits:<\/td>\r\n    <\/tr>                            \t\r\n    <tr>\r\n\t\t<td style=\"background:url(webwb\/tick_small_2.png) 5px 10px no-repeat;\" width=\"15\"><\/td>\r\n        <td style = \"font-size:16px;color:#444444;\">We will pay you a daily transport allowance of $150 for a maximum of 10 days<\/td>\r\n    <\/tr>                            \t\r\n    <tr>\r\n\t\t<td style=\"background:url(webwb\/tick_small_2.png) 5px 10px no-repeat;\" width=\"15\"><\/td>\r\n        <td style = \"font-size:16px;color:#444444;\">We will pay you and your first additional named driver a monthly allowance of $3,000 for each injured person up to 18 months, in the event of total permanent disablement due to an accident<\/td>\r\n    <\/tr>  \r\n\t<tr>\r\n\t\t<td style=\"background:url(webwb\/tick_small_2.png) 5px 10px no-repeat;\" width=\"15\"><\/td>\r\n        <td style = \"font-size:16px;color:#444444;\">We will offer personal accident benefit for you and your first additional named driver up to $60,000 per person in the event of death or total permanent disablement from a car accident<\/td>\r\n    <\/tr>  \r\n\t<tr>\r\n\t\t<td style=\"background:url(webwb\/tick_small_2.png) 5px 10px no-repeat;\" width=\"15\"><\/td>\r\n        <td style = \"font-size:16px;color:#444444;\">You and your first additional named driver are both entitled to an additional Medical Expenses benefit up to $5,000 per person including dental expenses in the event of an accident<\/td>\r\n    <\/tr>  \r\n\t<tr>\r\n\t\t<td style=\"background:url(webwb\/tick_small_2.png) 5px 10px no-repeat;\" width=\"15\"><\/td>\r\n        <td style = \"font-size:16px;color:#444444;\">Your basic Own Damage Excess is reduced by $200<\/td>\r\n    <\/tr>  \r\n<\/table>"
      }, {
        "Name": "Key Benefit 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Benefits:"
      }, {
        "Name": "Key Benefit 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Key Benefit 3",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "We will pay you a daily transport allowance of $150 for a maximum of 10 days"
      }, {
        "Name": "Key Benefit 4",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Key Benefit 5",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "We will pay you and your first additional named driver a monthly allowance of $3,000 for each injured person up to 18 months, in the event of total permanent disablement due to an accident"
      }, {
        "Name": "Key Benefit 6",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Key Benefit 7",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "We will offer personal accident benefit for you and your first additional named driver up to $60,000 per person in the event of death or total permanent disablement from a car accident"
      }, {
        "Name": "Key Benefit 8",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Key Benefit 9",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "You and your first additional named driver are both entitled to an additional Medical Expenses benefit up to $5,000 per person including dental expenses in the event of an accident"
      }, {
        "Name": "Key Benefit 10",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Key Benefit 11",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Your basic Own Damage Excess is reduced by $200"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.CarAccessories",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Car Accessories"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "We will cover your car accessories for up to the amount selected above without applying any excess in the event of loss or damage, and your NCD will not be affected."
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.Day1Discount",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Day 1 Discount"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_Flexi",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Flexi"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Flexi"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\u201c Value & Flexibility \u201d"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<table style=\"margin:10px;margin-left:20px;\">                           \n<tr>\n\t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">24\/7 Towing & Transportation in Singapore or Overseas<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Windscreen Replacement with Excess OR Repair your windscreen at your preferred location and get $50 cash reward with no excess<\/td>\n<\/tr>\n<tr>\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Workshop of Your Choice<\/td>\n<\/tr>\n<tr>\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Medical and dental expenses up to $1,000 per person for you, your named drivers and your immediate family members<\/td>\n<\/tr>\n<tr>\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Reimbursement of 110% of your car's market value in the event of total loss due to flood (without Basic Own Damage Excess)<\/td>\n<\/tr>\n<tr>\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>  \n        <td style=\"padding-left:10px;\">Loss or Damage<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Legal Liability<\/td>\n<\/tr>                                        \n<\/table>"
      }, {
        "Name": "Key Benefit 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "24\/7 Towing & Transportation in Singapore or Overseas"
      }, {
        "Name": "Key Benefit 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Windscreen Replacement with Excess OR Repair your windscreen at your preferred location and get $50 cash reward with no excess"
      }, {
        "Name": "Key Benefit 3",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Workshop of Your Choice"
      }, {
        "Name": "Key Benefit 4",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Medical and dental expenses up to $1,000 per person for you, your named drivers and your immediate family members"
      }, {
        "Name": "Key Benefit 5",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Reimbursement of 110% of your car's market value in the event of total loss due to flood (without Basic Own Damage Excess)"
      }, {
        "Name": "Key Benefit 6",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Loss or Damage"
      }, {
        "Name": "Key Benefit 7",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Legal Liability"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_Classic",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Classic"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Efficient & Holistic"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<span style=\"font-family:'FranklinGothic-Heavy', Arial, sans-serif; font-size:24px; color:#103478;letter-spacing:1px;\">Smart<\/span><span style=\"font-family:'FranklinGothic-Book', Arial, sans-serif; font-size:24px; color:#ee0000; font-style:italic;\">Drive <span id=\"product_selected_name\">Comprehensive<\/span> <span id=\"product_plan_selected_name\"><\/span>"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_MakePlus",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "${pyWorkPage.Vehicle.Make} Plus"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Flexibility & Savings"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<span style=\"font-family:'FranklinGothic-Heavy', Arial, sans-serif; font-size:24px; color:#103478;letter-spacing:1px;\">Smart<\/span><span style=\"font-family:'FranklinGothic-Book', Arial, sans-serif; font-size:24px; color:#ee0000; font-style:italic;\">Drive <span id=\"product_selected_name\">Comprehensive<\/span> <span id=\"product_plan_selected_name\"><\/span>"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.PackFamily",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Family Protector"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\"Designed for family protection in mind\""
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "To Consider"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<table cellspacing=\"5\" cellpadding=\"5\" style=\"font-family:'Arial-Narrow', Geneva, sans-serif;color:#444444;\">\r\n\t<tr>\r\n\t\t<td colspan=\"2\" style=\"font-family:'FranklinGothic-Demi', Geneva, sans-serif; font-size:16px;text-transform:uppercase;color:#103184;\">Benefits:<\/td>\r\n    <\/tr>                            \t\r\n    <tr>\r\n\t\t<td style=\"background:url(webwb\/tick_small_2.png) 5px 10px no-repeat;\" width=\"15\"><\/td>\r\n        <td style = \"font-size:16px;color:#444444;\">We will reimburse the replacement cost of your personal effects up to $6,000 if damaged in an accident or fire, or if stolen with your car in Singapore<\/td>\r\n    <\/tr>                            \t\r\n    <tr>\r\n\t\t<td style=\"background:url(webwb\/tick_small_2.png) 5px 10px no-repeat;\" width=\"15\"><\/td>\r\n        <td style = \"font-size:16px;color:#444444;\">We will offer personal accident benefit for you, your named drivers and your immediate family members up to $60,000 per person in the event of death or total permanent disablement from a car accident<\/td>\r\n\t<\/tr>                            \t\r\n    <tr>\r\n        <td style=\"background:url(webwb\/tick_small_2.png) 5px 10px no-repeat;\" width=\"15\"><\/td>\r\n\t\t<td style = \"font-size:16px;color:#444444;\">You, your named drivers and your immediate family members are all entitled to Medical Expenses benefit up to $5,000 per person including dental expenses in the event of an accident<\/td>\r\n\t<\/tr>                            \t\r\n    <tr>\r\n\t\t<td style=\"background:url(webwb\/tick_small_2.png) 5px 10px no-repeat;\" width=\"15\"><\/td>\r\n        <td style = \"font-size:16px;color:#444444;\">We will pay you and your spouse a monthly allowance of $3,000 each up to 18 months, in the event of total permanent disablement due to an accident<\/td>\r\n    <\/tr>\r\n\t<tr>\r\n\t\t<td style=\"background:url(webwb\/tick_small_2.png) 5px 10px no-repeat;\" width=\"15\"><\/td>\r\n        <td style = \"font-size:16px;color:#444444;\">No additional excess for young or inexperienced named driver<\/td>\r\n    <\/tr>\r\n<\/table>"
      }, {
        "Name": "Key Benefit 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Benefits:"
      }, {
        "Name": "Key Benefit 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Key Benefit 3",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "We will reimburse the replacement cost of your personal effects up to $6,000 if damaged in an accident or fire, or if stolen with your car in Singapore"
      }, {
        "Name": "Key Benefit 4",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Key Benefit 5",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "We will offer personal accident benefit for you, your named drivers and your immediate family members up to $60,000 per person in the event of death or total permanent disablement from a car accident"
      }, {
        "Name": "Key Benefit 6",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Key Benefit 7",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "You, your named drivers and your immediate family members are all entitled to Medical Expenses benefit up to $5,000 per person including dental expenses in the event of an accident"
      }, {
        "Name": "Key Benefit 8",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Key Benefit 9",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "We will pay you and your spouse a monthly allowance of $3,000 each up to 18 months, in the event of total permanent disablement due to an accident"
      }, {
        "Name": "Key Benefit 10",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Key Benefit 11",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "No additional excess for young or inexperienced named driver"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.PackProtector",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Claim Protector"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\u201cDesigned to protect NCD with excess waiver\u201d"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Must Have"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<table cellspacing=\"5\" cellpadding=\"5\" style=\"font-family:'Arial-Narrow', Geneva, sans-serif;color:#444444;\">\r\n\t<tr>\r\n\t\t<td colspan=\"2\" style=\"font-family:'FranklinGothic-Demi', Geneva, sans-serif; font-size:16px;text-transform:uppercase;color:#103184;\">Benefits:<\/td>\r\n    <\/tr>                            \t\r\n    <tr>\r\n\t\t<td style=\"background:url(webwb\/tick_small_2.png) 5px 10px no-repeat;\" width=\"15\"><\/td>\r\n        <td style = \"font-size:16px;color:#444444;\">Your NCD is protected for all types of claims and for accidents involving your authorised drivers<\/td>\r\n    <\/tr>                            \t\r\n    <tr>\r\n\t\t<td style=\"background:url(webwb\/tick_small_2.png) 5px 10px no-repeat;\" width=\"15\"><\/td>\r\n        <td style = \"font-size:16px;color:#444444;\">Your basic own damage excess under this policy is waived<\/td>\r\n\t<\/tr>                            \t\r\n<\/table>"
      }, {
        "Name": "Key Benefit 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Benefits:"
      }, {
        "Name": "Key Benefit 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Key Benefit 3",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Your NCD is protected for all types of claims and for accidents involving your authorised drivers"
      }, {
        "Name": "Key Benefit 4",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Key Benefit 5",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Your basic own damage excess under this policy is waived"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.Excess",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Voluntary Excess"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Your basic own damage excess under this policy is now waived \/\/ doubled."
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.FullRepairCostCoveredNoExcessInAccident",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Full Repair Cost Covered No Excess In Accident"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Full Repair Cost Covered No Excess In Accident"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.ChoiceOfCourtesyCarMPV",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Choice Of Courtesy Car MPV"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Choice Of Courtesy Car MPV"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.ChoiceOfCourtesyCarStandard",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Choice Of Courtesy Car Standard"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Choice Of Courtesy Car Standard"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.AXAStaffDiscount",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "AXA Staff\/Family Discount"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.PersonalAccident",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Personal Accident for Driver"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Personal accident with choice of sum insured of 50k \/\/ 100k \/\/ 200k \/\/ 500k in addition to any existing benefit"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_FlexiPlus",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Flexi+"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Flexi Plus"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\u201c Flexibility & Savings \u201d"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<table style=\"margin:10px;margin-left:20px;\">                           \n<tr>\n\t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">24\/7 Towing & Transportation in Singapore or Overseas<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Windscreen Replacement with Excess OR Repair your windscreen at your preferred location and get $50 cash reward with no excess<\/td>\n<\/tr>\n<tr>\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Workshop of Your Choice<\/td>\n<\/tr>\n<tr>\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Daily Transport Allowance of $100 for a maximum of 10 days<\/td>\n<\/tr>\n<tr>\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Reimbursement of 110% of your car\u2019s market value in the event of total loss (without Basic Own Damage Excess)<\/td>\n<\/tr>\n<tr>\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>  \n        <td style=\"padding-left:10px;\">Delivery of Repaired Car<\/td>\n<\/tr>\n<tr>\n       \t<td><img src=\"webwb\/tick_small.png\"><\/td>  \n        <td style=\"padding-left:10px;\">Medical and dental expenses up to $1,000 per person for you, your named drivers and your immediate family members <\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Loss or Damage<\/td>\n<\/tr>\n<tr>\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\n        <td style=\"padding-left:10px;\">Legal Liability<\/td>\n<\/tr>                                       \n<\/table>"
      }, {
        "Name": "Key Benefit 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "24\/7 Towing & Transportation in Singapore or Overseas"
      }, {
        "Name": "Key Benefit 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Windscreen Replacement with Excess OR Repair your windscreen at your preferred location and get $50 cash reward with no excess"
      }, {
        "Name": "Key Benefit 3",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Workshop of Your Choice"
      }, {
        "Name": "Key Benefit 4",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Daily Transport Allowance of $100 for a maximum of 10 days"
      }, {
        "Name": "Key Benefit 5",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Reimbursement of 110% of your car\u2019s market value in the event of total loss (without Basic Own Damage Excess)"
      }, {
        "Name": "Key Benefit 6",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Delivery of Repaired Car"
      }, {
        "Name": "Key Benefit 7",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Medical and dental expenses up to $1,000 per person for you, your named drivers and your immediate family members"
      }, {
        "Name": "Key Benefit 8",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Loss or Damage"
      }, {
        "Name": "Key Benefit 9",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Legal Liability"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_Comprehensive_Savvy",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Savvy"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\"Value\""
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<span style=\"font-family:'FranklinGothic-Heavy', Arial, sans-serif; font-size:24px; color:#103478;letter-spacing:1px;\">Smart<\/span><span style=\"font-family:'FranklinGothic-Book', Arial, sans-serif; font-size:24px; color:#ee0000; font-style:italic;\">Drive <span id=\"product_selected_name\">Comprehensive<\/span> <span id=\"product_plan_selected_name\"><\/span>"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.SmartDrive_TPFT",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Third Party, Fire & Theft"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Third Party, Fire & Theft"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "\u201c Simple Coverage due to TPFT \u201d"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "<table style=\"margin:10px;margin-left:20px;\">                           \r\n<tr>\r\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\r\n        <td style=\"padding-left:10px;\">Loss or Damage by Fire & Theft<\/td>\r\n<\/tr>\r\n<tr>\r\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\r\n        <td style=\"padding-left:10px;\">24\/7 Towing in Singapore<\/td>\r\n<\/tr>\r\n<tr>\r\n      \t<td><img src=\"webwb\/tick_small.png\"><\/td>\r\n        <td style=\"padding-left:10px;\">Legal Liability<\/td>\r\n<\/tr>\r\n<\/table>"
      }, {
        "Name": "Key Benefit 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Loss or Damage by Fire & Theft"
      }, {
        "Name": "Key Benefit 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "24\/7 Towing in Singapore"
      }, {
        "Name": "Key Benefit 3",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Legal Liability"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.NewCarDiscount",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "New Car Discount"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.PersonalAccidentForPassenger",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Personal Accident for Passengers"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "We will offer personal accident benefit $20,000 for your passengers in the event of death or total permanent disablement from a car accident"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.NewVehicleDiscount",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "New Vehicle Discount"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.LossOrDamageToVehicleAccessoriesDeclared",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Loss Or Damage To Vehicle Accessories Declared"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Loss Or Damage To Vehicle Accessories Declared"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.DoubleExcessForIndividualBenefit",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Double Excess"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "From $${PFWParent.RefData.Benefits(Excess).Parameters(ExcessPerOccurrence).Value} To $${PFWParent.RefData.Benefits(Excess).Parameters(ExcessPerOccurrence).ModifiedValue}"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "${PFWParent.RefData.Benefits(Excess).Parameters(ExcessPerOccurrence).ModifiedValue}"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "Your basic excess is doubled in case of accident"
      }]
    }, {
      "Language": "en",
      "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfo",
      "RecordKey": "AXA-SG-POL-GI-Motor-Work.PAWith500KSI",
      "Fields": [{
        "Name": "Main Title",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "PA with Sum Insured 500K"
      }, {
        "Name": "Sub Title 1",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Sub Title 2",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField"
      }, {
        "Name": "Description",
        "pxObjClass": "AXA-FW-GI-Int-API-MarketingInfoField",
        "Value": "PA with Sum Insured 500K"
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

  return product;
});
