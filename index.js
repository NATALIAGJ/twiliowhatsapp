// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'AC2fc2234a1ed3b736cae4eea7c168e9ec';
const authToken = '0cf11fd0dacbb53cb2fdbd14e70d6070';
const client = require('twilio')(accountSid, authToken);

client.messages
.create({
  body: 'Hola YADURANIA!',
  from: 'whatsapp:+14155238886',
  to: 'whatsapp:+573014849293'
})
.then(message => console.log(message.sid))
.done();