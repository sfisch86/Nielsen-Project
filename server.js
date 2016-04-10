var http = require('http');
var dispatcher = require('httpdispatcher');
var express = require('express');
var React = require('react');

const PORT = 8080;

function handelRequest(request, response) {
  try {
	  console.log(request.url);
	  dispatcher.dispatch(request, response);
	  //response.end('IT WORKS!!!! YIPPEEE!!');
		header('Content-Type: text/plain');
		echo('This is text');
  } catch (err) {
	  console.log(err);
  }
}

dispatcher.setStatic('resources');

dispatcher.onGet("/page1", function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'} );
	res.end('Page One');
} );

dispatcher.onPost("/post1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Got Post Data');
} );

var server = http.createServer(handelRequest);

server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:%s", PORT);
} );