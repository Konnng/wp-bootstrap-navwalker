;(function ($) {

	$(document).ready(function () {

		$('ul.dropdown-menu [data-toggle=dropdown]').on('click.wp-bootstrap-navwalker', function (e) {
	  		e.preventDefault();
	  		e.stopPropagation();

	  		$('ul.dropdown-menu [data-toggle=dropdown]').not(this).parent().removeClass('open');
	  		$(this).parent().toggleClass('open');
			
	  	});

	});

})(jQuery)