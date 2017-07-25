$(document).ready( 
  function(){

	// $("body").hide();

	// $("body").show();

	// $("#section-one").fadeOut();

	// $("#section-one").fadeIn();

	// $("#section-one").fadeOut(1000);
	//Fade out over 1 second

	// $("#section-one").fadeIn(4000);
	//Fade in over 4 seconds

	// HIDING WITH SLIDING
	// Another way of hiding and showing items on the page is by using the slideUp() or slideDown() methods
	// $("#section-one").slideUp(1000);
	//Fade out over 1 second

	// $("#section-one").slideDown(4000);
	//Fade in over 4 seconds

	// 	ANIMATING CSS
	// Use jQuery's animate() method to animate most CSS properties that are numeric

	// $(".box").animate({
	//   opacity: 0.25,
	//   width: "50%"
	// } , 2000 );

	// THE CLICK EVENT
	// Remember that JavaScript events can be fired on any HTML element
	// To monitor an HTML element for the click event and then fire a callback function with some code:
	 $(".box").click(
	  function(){
	    alert('I got clicked!');
	  }
	);
  }
);
