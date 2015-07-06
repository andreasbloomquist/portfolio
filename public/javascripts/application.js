$(function(){
	$("#arrow").on("click", function(e){
			scrollPage();
		});
});

// Scroll page on arrow click
var scrollPage = function(){
	$("html, body").animate({ scrollTop: $('#top-container').offset().top }, 0);
};

