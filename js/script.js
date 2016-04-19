$(document).ready(function(){
	
	/*
		 Show's a bigger picute of the picture hovered over
	*/
	$('.sectionDivs').mouseover(function(){
	     var FadeIn = '#' + $(this).attr('id') + 'R';
		 $(FadeIn).fadeIn(1000);
	});
	
	
	/*
		 Chane the size of the picture that was hovered over back to normal
	*/
	$('.HDivs').mouseout(function(){
	     var FadeOut = '#' + $(this).attr('id');
		 $(FadeOut).fadeOut(1000);
	});
	
	/*
		 The display of the nav/menue bar at the top of page.. 
		 Note: there is a bug in this method.. when clicking menue to hide list under 770px 
		 you must click once again before you resize browser over 770px or the menue wont show!!!
	*/
	$('.menue').click(function(){
		 $('.list').toggle(1000);
	});
	
});

