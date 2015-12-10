$(document).ready(function() {
	var socket = io(window.location.host+ window.location.pathname);
	console.log(socket);
	console.log(window.location.host + window.location.pathname);
	$(".left").on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		socket.emit("left");
	});
	$(".right").on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		socket.emit("right");
	});
	$(".up").on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		socket.emit("up");
	});
	$(".down").on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		socket.emit("down");
	});
});
