const fdk=require('@autom8/fdk');
const a8=require('@autom8/js-a8-fdk')
const app = require('./app')

fdk.handle(function(input){
  return app.infographic(input.data, input.apiCreds)
  	.then(res => {
  		return res;
  	})
  	.catch(err => {
  		return err;
  	})
})
