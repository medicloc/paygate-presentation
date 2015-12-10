var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require("socket.io")(http);

app.use(express.static(__dirname));

app.get('/',function(req,res){
	res.sendFile(__dirname +'/index.html');
});

app.get('/controll',function(req,res){
	res.sendFile(__dirname +'/controll.html');
});

app.get('/touch',function(req,res){
	res.sendFile(__dirname +'/touch.html');
});


var root = io.of('/');
root.on('connection',function(socket){
	console.log("a user connected");
	socket.on('disconnect',function(){
		console.log("user disconnected");
	});
});

var controll = io.of('/controll');
controll.on('connection',function(socket){
	console.log("a user connected to controll");
	socket.on('disconnect',function(){
		console.log("user disconnected from controll");
	});
	socket.on('left',function(){

		socket.broadcast.emit('left');
	});
	socket.on('right',function(){
		socket.broadcast.emit('right');
	});
	socket.on('up',function(){
		socket.broadcast.emit('up');
	});
	socket.on('down',function(){
		socket.broadcast.emit('down');
	});
});

var touch = io.of('/touch');
touch.on('connection',function(socket){
	console.log("a user connected to controll");
	socket.on('disconnect',function(){
		console.log("user disconnected from controll");
	});
	socket.on('swipeleft',function(){

		socket.broadcast.emit('swipeleft');
	});
	socket.on('swiperight',function(){
		socket.broadcast.emit('swiperight');
	});
	socket.on('swipeup',function(){
		socket.broadcast.emit('swipeup');
	});
	socket.on('swipedown',function(){
		socket.broadcast.emit('swipedown');
	});
})

var port = process.env.PORT || 4000;

http.listen(port,function(){
	console.log("listening on http://localhost:"+port);
});
