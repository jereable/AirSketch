var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// app.get('/', function(request, response) {
  // response.render('helloworld.html');
// });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.ws('/echo', function(ws, req) {
  ws.on('message', function(message) {
    ws.send(message);
	console.log(message);
  });
});

var server = app.listen(process.env.PORT || 5000);