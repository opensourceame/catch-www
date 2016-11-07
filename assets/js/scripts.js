//$('.cards img').popover({
//	html: true,
//	placement: "auto right",
//	container: "body",
//	trigger: "hover"
//});

$(function(){

	// Instantiate MixItUp:

	$('#cards').mixItUp();
	
	// on btn click show greeting
	
	$(".write-gtng").click(function(){
		$(".greeting").fadeIn("slow");
		$(".nogreeting, .write-gtng").fadeOut("slow");
		$(".greeting-btn").delay(1000).fadeIn("slow");
		event.preventDefault();
	});

});