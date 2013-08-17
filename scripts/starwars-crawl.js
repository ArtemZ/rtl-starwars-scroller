;(function ($) {
	var intro = $('.intro'),
	    logo = $('.logo'),
	    audio = document.getElementById('starwars-theme'),
	    crawl = $('.crawl'),
	    transEndEventNames = {
		    'WebkitTransition' : 'webkitTransitionEnd',
		    'MozTransition'    : 'transitionend',
		    'OTransition'      : 'oTransitionEnd',
		    'msTransition'     : 'MSTransitionEnd',
		    'transition'       : 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];
	    
	$(function () {
		intro.on(transEndEventName, function () {
			setTimeout(function () {
				audio.play();
				intro.removeClass('show');
				logo.addClass('show')
				logo.find('img').addClass('recede');
				
				logo.find('img').on(transEndEventName, function () {
					logo.removeClass('show');
					crawl.addClass('play');
					crawl.on(transEndEventName, function () {
						crawl.css('display', 'none');
					});
				});
			}, 3000);
		});
		intro.addClass('show');
	});
})(jQuery);
