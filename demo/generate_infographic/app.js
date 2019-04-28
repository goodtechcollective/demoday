"use strict";

// https://developers.infogr.am/rest/content-schema.html

exports.generateInfographicJSON = function(data) {
	let json = {
		publish: true,
	  theme_id: 308, // https://infogram.com/app/#/templates
		title: data.organization.name,
		content: [
	    {
	      "type": "h1",
	      "text": data.organization.name
	    },
	    {
	      "type": "body",
	      "text": data.organization.overview
	    }
	  ]
	}
	let facts_and_figures = {
		"type": "facts_and_figures",
		"data": []
	}
	if (data.organization.founded) {
		facts_and_figures.data.push({
			icon: "",
			figure: data.organization.founded,
			fact: "Year Founded"
		})
	}
	if (data.organization.approxEmployees) {
		facts_and_figures.data.push({
			icon: "",
			figure: data.organization.approxEmployees,
			fact: "Employees"
		})
	}
	if (data.traffic && data.traffic.ranking && data.traffic.ranking.length > 0) {
		facts_and_figures.data.push({
			icon: "",
			figure: data.traffic.ranking[0].rank,
			fact: "Global Traffic Ranking"
		})
	}
	json.content.push(facts_and_figures);
	return json;
}
