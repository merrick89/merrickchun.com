$(document).ready(function(){
	//Animate logo to fade in after 2 second delay
	$(".app-container").animate({
		opacity:1
	}, 500);

	//Fade intro text in after a small delay of 1 second
	setTimeout(helloText, 1000);

	function helloText(){
		$("#hello").typed({
    		strings: ["Merrick Chun."],
        	typeSpeed: 100
      	});
	};
});