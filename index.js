const express = require('express');
const app = express();
const accountSid = 'AC2fc2234a1ed3b736cae4eea7c168e9ec';
const authToken = '0cf11fd0dacbb53cb2fdbd14e70d6070';
const client = require('twilio')(accountSid, authToken);

app.use(express.static(__dirname + '/public/'));

app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});

app.use(express.static(__dirname + '/public/'));

 
// ruteo
app.get('/', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});

// ruteo
app.get('/message', function(req, res){
  client.messages
  .create({
    body: 'Hola mundo cruel!',
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+573014849293'
  })
  .then(message => {
    console.log(message.sid)
    res.send({ 'Mensaje enviado a: ': message.to })
  })
  .done();
});