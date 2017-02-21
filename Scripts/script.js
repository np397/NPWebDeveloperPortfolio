$(document).ready(function(){
	
	var txt = $('.skillRotateContainer .skillRotate');
	var	txtLen = 14;
	var deg2rad = function(a) { return a*Math.PI/180.0; }
	var angle = 0, speed = 0.1, delay = 10, r = 250;

	(function rotate() {
		for (var i=0; i<txtLen; i++) {
			var a = angle + (i * 360 / txtLen);
			$(txt[i]).css({top: r+(Math.sin(deg2rad(a))*r), left: r+(Math.cos(deg2rad(a))*r)});
		}
		angle = (angle + speed) % 360;
		setTimeout(rotate, delay);
	})();  
	
	$(".skillRotate img").hover(function(){
		$(this).css({"width":"100%"});
		$(this).fadeOut("fast").fadeIn("fast");
	},
	function(){
		$(this).css({"width":"70%"});
	});
	
	
	
	$(".loaderWrap").show();
	$(".loaderWrap").fadeOut(3000);
	$("main").fadeIn(6000).delay(300);
	$('.typing').typeIt({
		strings: ["Hi, I'm Nidhi"],
		speed: 110,
		autoStart: false,
		startDelay: 3000,
		lifeLike:false,
		callback:function(){
			 $( ".title" ).delay(150).fadeOut('fast').fadeIn('fast').fadeOut('fast').fadeIn('fast');
		}
	});	
	
	
	
		
	$(".next").click(function(){
		var nextSection = $(this).parent(".section").next();
		$('html,body').animate({scrollTop: (nextSection.offset().top)}, 1000);
		
	});
	$(".menu a , #about a").click(function(){
		var goToSection = $(this).attr("href");
			$('html,body').animate({scrollTop: ($(goToSection).offset().top)}, 1000);
	});
	
	var blink;
	$(".menu img").mouseover(function(){
		toggleMenuText = "." + $(this).attr("data-text");
		$(toggleMenuText).fadeIn(600);
		blink = setInterval(function(){$(toggleMenuText).fadeOut(600).fadeIn(600)},1200);
		
	});	
	$(".menu img").mouseout(function(){
		toggleMenuText = "." + $(this).attr("data-text");
		$(toggleMenuText).hide();
		clearInterval(blink);
	});	
});