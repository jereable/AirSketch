var http = require('http');

function onRequest(request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write('<p>Hello <strong>World</p>');
	response.end();
}

http.createServer(onRequest).listen(process.env.PORT || 8000);
