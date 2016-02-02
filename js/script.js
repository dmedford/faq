// Accordian

var action = "click";
var speed = "500";

$(document).ready(function(){
	
	$('.q').on(action ,function(){
		
		//get next element
		$(this).next()
			.slideToggle(speed)
				.siblings('li.a')
					.slideUp();
		
		// Get image for active question
		
		var img = $(this).children('img');
		
		// Remove rotate class for all images except the active
		
		$('img').not(img).removeClass('rotate');
		
		//toggle rotate class
		
		img.toggleClass('rotate');
		
	})
	
});