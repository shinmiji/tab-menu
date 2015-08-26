;(function(global, $, undefined){
	'use strict';

	var $menu = $('ul>li');

	$menu.each(function(index){
		$(this).on('click', 'a', function(event){
			event.preventDefault();
			// console.log(index);
			var $contents = $('div.wrap>div');
			$contents.removeClass('on');
			$contents.eq(index).addClass('on');
		});

	});
})(window, window.jQuery);