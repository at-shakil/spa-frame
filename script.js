let scrolldownPositionY;

document.addEventListener("DOMContentLoaded", e => {
	applyStickyNavigation();
	applyResize();
});

function applyStickyNavigation()
{
	scrolldownPositionY = document.querySelector(".scroll-down").offsetTop + 20;
	document.onscroll = () => stickyNavigation();
	stickyNavigation();
}

function stickyNavigation()
{
	let body = document.querySelector("body");
	window.scrollY > scrolldownPositionY ? body.classList.add("fixed") :
	body.classList.remove("fixed")
}

function applyResize()
{
	window.onresize = () => scrolldownPositionY = document.querySelector(".scroll-down").offsetTop + 20;
}
