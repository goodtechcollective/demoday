"use strict";
const InfogramAPI = require('infogram');

exports.infographic = async function(data, apiCreds) {

	const infogram = new InfogramAPI(apiCreds.key, apiCreds.secret);

	// default data if nothing passed in
	let params = {
	  theme_id: 308,
	  content: [
	    {
	      "type": "h1",
	      "text": "title"
	    },
	    {
	      "type": "body",
	      "text": "body"
	    },
	    {
	      "type": "chart",
	      "chart_type": "bar",
	      "data": [
	        [
	          ["apples", "today", "yesterday", "d. bef. yesterday"],
	          ["John", 4, 6, 7],
	          ["Peter", 1, 3, 9],
	          ["George", 4, 4, 3]
	        ]
	      ],
	      "settings": {
	        "width": 0.5,
	        "height": 300
	      }
	    },
	    {
		    "type": "chart",
		    "chart_type": "wordcloud",
		    "data": {
		        "sheets": [
		            {
		                "header": [ "Japan", "%"  ],
		                "rows": [
		                    {
		                        "color": "FC14F9",
		                        "data": [ "Sato",  1.57 ]
		                    },
		                    [ "Suzuki", 1.50 ],
		                    [ "Takahashi", 1.16 ]
		                ]
		            },
		            {
		                "header": [ "England", "%" ],
		                "rows" : [
		                    [ "Smith", 1.26 ],
		                    [ "Jones", 0.75 ],
		                    [ "Taylor", 0.59 ]
		                ]
		            },
		            {
		                "header": [ "USA", "%" ],
		                "rows" : [
		                    [ "Smith", 0.88  ],
		                    [ "Johnson", 0.69 ],
		                    [ "Williams", 0.57 ]
		                ]
		             }
		         ]
		     },
		    "colors" : ["#1D7BF5", "#599AF0", "#95BFF5", "#1DF548", "#5EF27C", "#83D693", "#CC2929", "#BF5A5A", "#EDC7C7"]
		}
	  ]
	}

	if (data) params = data;

	return infogram.createProject(params)
		.then(data => {
	  	return infogram.getProject(data.id)
				.then(project => {
					return project;
				});
	}, function(err) {
	  return err
	});

}
