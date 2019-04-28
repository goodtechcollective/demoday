const fdk=require('@autom8/fdk');
const a8=require('@autom8/js-a8-fdk')
const fullContactApiKey = '<apikey>'
const infogramApiCreds = {"key": "<apikey>", "secret": "<apisecret>"}
const app = require('./app')

fdk.handle(function(input){
  let domain = '';
  if (input['_inputs']) domain = input['_inputs'][0];
  if (input.domain) domain = input.domain;

  return a8.full_contact.get_company({"domain":domain, "apiKey":fullContactApiKey})
  	.then(res => {
  		const json = app.generateInfographicJSON(res);
  		return a8.infogram.create_infographic({"data":json, "apiCreds":infogramApiCreds})
  			.then(result => {
          return result;
  			})
  			.catch(err => {
  				return {"error": err};
  			})
  	})
})

fdk.slack(function(result) {
  let toReturn = {
        "response_type": "in_channel",
        "blocks" : []
  }
  if (!result.error) {
    toReturn.blocks.push({
    	"type": "image",
    	"title": {
    		"type": "plain_text",
    		"text": "Infographic",
    		"emoji": true
    	},
    	"image_url": result.thumbnail_url,
    	"alt_text": "Infographic"
    });
    toReturn.blocks.push({
    	"type": "section",
    	"text": {
    		"type": "mrkdwn",
    		"text": `<${result.url}|View Infographic>`,
    		"emoji": true
    	}
    });
  } else {
    toReturn.responseType = "ephemeral"
		toReturn.blocks.push({
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Error generating chart."
			}
		})
  }
  return toReturn;
})
