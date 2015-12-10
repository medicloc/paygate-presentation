$(document).ready(function() {
	var socket = io(window.location.host+ window.location.pathname);
	$("html").swipe( {
	        //Generic swipe handler for all directions
	        swipeLeft:function(event, direction, distance, duration, fingerCount) {
	          $("body").css("background","red");
	          $(".info").text("Swiped "+direction);
	          socket.emit("swipeleft");
	        },
	        swipeRight:function(event, direction, distance, duration, fingerCount) {
	          $("body").css("background","orange");
	          $(".info").text("Swiped "+direction);
	          socket.emit("swiperight");
	        },
	        swipeUp:function(event, direction, distance, duration, fingerCount) {
	          $("body").css("background","green");
	          $(".info").text("Swiped "+direction);
	          socket.emit("swipeup");
	        },
	        swipeDown:function(event, direction, distance, duration, fingerCount) {
	          $("body").css("background","lightblue");
	          $(".info").text("Swiped "+direction);
	          socket.emit("swipedown");
	        }
	      });
});
