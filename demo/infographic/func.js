const fdk=require('@autom8/fdk');
const a8=require('@autom8/js-a8-fdk')
const fullContactApiKey = '<apikey>'

fdk.handle(function(input){
  let name = '';
  if (input['_inputs']) name = input['_inputs'][0];
  if (input.name) name = input.name;

  return a8.full_contact.search_companies({"name":name,"apiKey":fullContactApiKey})
    .then(res => {
    	return res;
    })

})

fdk.slack(function(result) {
  let toReturn = {
        "response_type": "in_channel",
        "blocks" : []
  }
  let arr = result.companies.slice(0, 2);

  arr.forEach((company, index) => {
  	let locationString = '';

  	if (company.location) {
  		if (company.location.locality) locationString += company.location.locality;
  		if (company.location.region && company.location.region.name) locationString += `, ${company.location.region.name}`;
  		if (company.location.country && company.location.country.name) locationString += `\n${company.location.country.name}`;
  	}

    let image_url = 'https://placeholder.pics/svg/300/FFFFFF/FFFFFF';
    if (company.logo) image_url = company.logo;

    toReturn.blocks.push({
        "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": `*${company.orgName}*\n${locationString}\n<http://${company.lookupDomain}|${company.lookupDomain}>`
          },
          "accessory": {
    			  "type": "image",
    			  "image_url": image_url,
    			  "alt_text": company.orgName
    			}
      });

    toReturn.blocks.push({
  		"type": "actions",
  		"elements": [
  			{
  				"type": "button",
  				"text": {
  					"type": "plain_text",
  					"text": "Generate Infographic",
  					"emoji": true
  				},
  				"value": company.lookupDomain
  			}
  		]
	   });

  	if (index !== arr.length - 1) {
  		toReturn.blocks.push({
  			"type": "divider"
  		});
  	}

  });

  return toReturn;

})
