var http = require('http');
var fs = require('fs');
var io = require('socket.io');

var server = http.createServer(function (request, response){
	if(request.url === '/')
	{
		fs.readFile('views/index.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/cats.html')
	{	
		fs.readFile('views/cats.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/cat1.png')
	{
		fs.readFile('views/images/cat1.png', function (errors, contents){
			response.writeHead(200, {'Content-type': 'image/png'});
			response.write(contents);
			response.end();
		})
	}
	else if(request.url === '/cat2.jpg')
	{
		fs.readFile('views/images/cat2.jpg', function (errors, contents){
			response.writeHead(200, {'Content-type': 'image/jpg'});
			response.write(contents);
			response.end();
		})
	}
	else if(request.url === '/cat3.jpg')
	{
		fs.readFile('views/images/cat3.jpg', function (errors, contents){
			response.writeHead(200, {'Content-type': 'image/jpg'});
			response.write(contents);
			response.end();
		})
	}
	else if(request.url === '/cat4.jpg')
	{
		fs.readFile('views/images/cat4.jpg', function (errors, contents){
			response.writeHead(200, {'Content-type': 'image/jpg'});
			response.write(contents);
			response.end();
		})
	}
	else if(request.url === '/cars.html')
	{	
		fs.readFile('views/cars.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/cars/new.html')
	{
		fs.readFile('views/new.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else
	{
		response.end('File not found!');
	}

});
var sockets = io.listen(server);

sockets.on('connection', function (socket)
{
	socket.on('send_message', function(message){
		socket.broadcast.emit('display_message', message);
	})
})
server.listen(7077);
console.log('Server running in localhost port 7077');