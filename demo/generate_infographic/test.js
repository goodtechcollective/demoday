const app = require('./app')
const data = {
  "category": [
    {
      "code": "OTHER",
      "name": "Other"
    }
  ],
  "industries": [
    {
      "code": "7311",
      "name": "Advertising Agencies",
      "type": "SIC"
    },
    {
      "code": "541810",
      "name": "Advertising Agencies",
      "type": "NAICS"
    },
    {
      "code": "7374",
      "name": "Computer Processing and Data Preparation and Processing Services",
      "type": "SIC"
    },
    {
      "code": "518210",
      "name": "Data Processing, Hosting, and Related Services",
      "type": "NAICS"
    }
  ],
  "languageLocale": "en",
  "logo": "https://img.fullcontact.com/static/ddfc8939149611724afede22dec7801a_1ff8c1e69f38f9f5c7f5a3f753414f371e557b44bfe125aba9c10a914cb1c326",
  "onlineSince": "1997-09-15",
  "organization": {
    "approxEmployees": 62000,
    "contactInfo": {
      "addresses": [
        {
          "addressLine1": "1600 Amphitheatre Parkway",
          "country": {
            "name": "United States"
          },
          "label": "work",
          "locality": "Mountain View",
          "postalCode": "94043",
          "region": {
            "name": "California"
          }
        },
        {
          "country": {
            "name": "United States"
          },
          "locality": "Mountain View",
          "postalCode": "94043",
          "region": {
            "name": "CA"
          }
        }
      ],
      "phoneNumbers": [
        {
          "label": "other",
          "number": "650-253-0000"
        },
        {
          "label": "other",
          "number": "1-650-253-0000"
        }
      ]
    },
    "founded": "1998",
    "images": [
      {
        "label": "facebook",
        "url": "https://img.fullcontact.com/static/0c679961448ebd7a306a46fc146ddde9_be5ddde7b929b237e67e61a2d0ec2d9ae81fbaef8855b017b9fc484a8c67137d"
      },
      {
        "label": "twitter",
        "url": "https://img.fullcontact.com/static/a479ac8e94000b78a1fa9f365cfd3a85_a3f146358ed65d49b8ac612ed11aedcec50f78cd99beac2444cf0166faba9ab9"
      },
      {
        "label": "favicon",
        "url": "https://img.fullcontact.com/static/083b72cc2d980493f79f4fc597712599_e08a882b04254ab7646a54dd15818d304896b2f97950eec6ce828979f418f177"
      },
      {
        "label": "logo",
        "url": "https://img.fullcontact.com/static/bcdf9d5a32fc4ef4205c9e7061e42ded_61782b0d1be18d8d26b0d0558959154035515268259e34ba142709a49e32a19a"
      },
      {
        "label": "other",
        "url": "https://img.fullcontact.com/static/ddfc8939149611724afede22dec7801a_1ff8c1e69f38f9f5c7f5a3f753414f371e557b44bfe125aba9c10a914cb1c326"
      }
    ],
    "keywords": [
      "Email",
      "Maps",
      "Mountain View",
      "Search",
      "Software"
    ],
    "links": [
      {
        "label": "facebook",
        "url": "https://en-gb.facebook.com/googlechrome/about"
      },
      {
        "label": "other",
        "url": "http://about.google"
      },
      {
        "label": "crunchbasecompany",
        "url": "http://www.crunchbase.com/organization/"
      },
      {
        "label": "other",
        "url": "http://www.google.com"
      }
    ],
    "name": "Google",
    "overview": "Google's mission is to organize the world's information and make it universally accessible and useful."
  },
  "requestId": "4aaefe4c-a528-4bf3-a4a2-ed3002a844d7",
  "socialProfiles": [
    {
      "bio": "Google’s mission is to organize the world’s information and make it universally accessible and useful.",
      "followers": 8946,
      "id": "32203",
      "typeId": "angellist",
      "typeName": "AngelList",
      "url": "https://angel.co/google",
      "username": "google"
    },
    {
      "typeId": "crunchbasecompany",
      "typeName": "CrunchBase",
      "url": "http://www.crunchbase.com/organization/google",
      "username": "google"
    },
    {
      "typeId": "google",
      "typeName": "GooglePlus",
      "url": "https://plus.google.com/+google",
      "username": "google"
    },
    {
      "id": "100651",
      "typeId": "owler",
      "typeName": "Other",
      "url": "https://www.owler.com/iaApp/100651/google-company-profile",
      "username": "google"
    },
    {
      "typeId": "twitter",
      "typeName": "Twitter",
      "url": "https://twitter.com/google",
      "username": "google"
    },
    {
      "typeId": "facebook",
      "typeName": "Facebook",
      "url": "https://www.facebook.com/google",
      "username": "google"
    },
    {
      "typeId": "linkedincompany",
      "typeName": "LinkedIn",
      "url": "https://www.linkedin.com/company/google",
      "username": "google"
    }
  ],
  "status": 200,
  "traffic": {
    "ranking": [
      {
        "locale": "global",
        "rank": 1
      }
    ],
    "topCountryRanking": [
      {
        "locale": "us",
        "rank": 1
      },
      {
        "locale": "in",
        "rank": 1
      },
      {
        "locale": "jp",
        "rank": 1
      }
    ]
  },
  "website": "http://www.google.com"
}

let json = app.generateInfographicJSON(data);

console.log(json);
