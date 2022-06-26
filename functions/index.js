// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  let intentMap = new Map();
  let CELSIUS_UNIT = "celsius";
  let FAHRENHEIT_UNIT = "fahrenheit";
  intentMap.set('Convert', function(agent) {
    let number = agent.parameters.number;
    let unit = agent.parameters.TemperatureUnit;
    if(unit == CELSIUS_UNIT) {
    	agent.add("The fahrenheit value is " + ((number * 9 / 5) + 32).toFixed(2));
    } else {
    	agent.add("The celsius value is " + ((number - 32) * 5 / 9).toFixed(2));
    }
  });
  agent.handleRequest(intentMap);
});
