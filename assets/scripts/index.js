// Parallax Scrolling Effect Jquery Script

//calculate on load, resize, and Scroll
$(window).on("load resize scroll",function(e){
	  var col1 = $("#left").outerHeight();
    var col2 = $("#right").outerHeight();
    var travel = col1 - col2;
    //top of columns
	  var topOfColumns = $('.parallax').offset().top;
    var columns = $('.parallax').outerHeight() - $(window).innerHeight();
	  var scrollInterval = columns / travel;

    //parallax
		var a = Math.round( ($(window).scrollTop() - topOfColumns ) / scrollInterval);
		//find the bottom of the right column and give a Boolean (true)
		var b = $(window).scrollTop() >= $('#right').offset().top + $('#right').outerHeight() - window.innerHeight;

		//if the user scrolls to the top of the collumns and the user has not scrolled to the bottom of the right column
        if ($(window).scrollTop() >= topOfColumns && b === false ) {
	        $("#right").css({
	            "-webkit-transform": "translate3d(0px, " + a + "px, 0px)",
	           	   "-moz-transform": "translate3d(0px, " + a + "px, 0px)",
			   	        "-ms-transform": "translateY(" + a + "px)",
			   		       "-o-transform": "translate3d(0px, " + a + "px, 0px)",
			   		 	          transform: "translate3d(0px, " + a + "px, 0px)"
	        });
        }
});