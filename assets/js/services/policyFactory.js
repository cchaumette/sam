/**
 * Created by clement on 27/3/16.
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
