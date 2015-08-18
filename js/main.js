$(document).ready(function(){

	var $nav = $('.process-bar'),
		$navIterms = $('.process-bar a'),
		$section = $('.scroll-container .scroll-content'),
		scrollTop = 130,
		scrollTime = 400;

	$navIterms.click(function(e){
		e.preventDefault();

		var href = $(this).attr('href');

		$(href).velocity('scroll',{
			duration: scrollTime,
			easing:'easeInOutCubic',
			offset:-scrollTop
		});
	});

});