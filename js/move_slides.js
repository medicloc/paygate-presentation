$(document).ready(function() {
	var socket = io(window.location.host+"/controll");
	socket.on('connect',function(){
		console.log("connected to controlls");
		socket.on('left',function(){
			Reveal.left();
		});
		socket.on('down',function(){
			Reveal.down();
		});
		socket.on('up',function(){
			Reveal.up();
		});
		socket.on('right',function(){
			Reveal.right();
		});
	});

	var touchSocket = io(window.location.host+"/touch")

	touchSocket.on("connect",function(){
		console.log("connected to touch controlls");
		touchSocket.on('swipeleft',function(){
			Reveal.left();
		});
		touchSocket.on('swipedown',function(){
			Reveal.down();
		});
		touchSocket.on('swipeup',function(){
			Reveal.up();
		});
		touchSocket.on('swiperight',function(){
			Reveal.right();
		});
	});

});
