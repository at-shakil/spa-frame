var lnStickyNavigation;

$(document).ready(function()
{
	applyStickyNavigation();
	applyResize();
});

/* NAVIGATION FUNCTIONS */

function applyStickyNavigation()
{
	lnStickyNavigation = $('.scroll-down').offset().top + 20;

	$(window).on('scroll', function()
	{
		stickyNavigation();
	});

	stickyNavigation();
}

function stickyNavigation()
{
	if($(window).scrollTop() > lnStickyNavigation)
	{
		$('body').addClass('fixed');
	}
	else
	{
		$('body').removeClass('fixed');
	}
}


/* RESIZE FUNCTION */

function applyResize()
{
	$(window).on('resize', function()
	{
		lnStickyNavigation = $('.scroll-down').offset().top + 20;

		$('.jumbotron').css({ height: ($(window).height()) +'px' });
	});
}
