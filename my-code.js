$(document).ready(function() {

	$("p").hide();
	$("#topPicture").hide();

	$("h1").click(function() {

		$(this).next().fadeToggle(1000);

	});

	/* this id jq 02 - button selectors */

	$("#testbutton").click(function() {
		/*$("#jq02").css("background-color","#ffffcc");*/
		$("strong, #testbutton").css("background-color", "#ffffcc");

	});
	/* this is jq 03 mouse effects*/
	
	$("h3").mousedown(function(){
		$(this).css("background-color", "#ffffcc");
	});
	
	 $("h3").mouseup(function(){
		$(this).css("background-color", "#66ccff");
	});
		
	 $("h3").mouseenter(function(){
		$(this).css("font-size", "3em");
	});
	
	 $("h3").mouseleave(function(){
		$(this).css("font-size", "2em");
	});
		
		/* $(this).unbind(); one time only */
	
});
