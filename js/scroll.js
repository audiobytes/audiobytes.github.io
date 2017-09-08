var lastknownposition = 0;
var ticking = false;

function doSomething(scroll_pos) {
	var strings = ["home", "about", "instruments", "repair", "organise", "contact"];
	var elements = strings.map((x) => document.getElementById(x));

	function removeAllActive() {
		for (element of elements) {
			if (element.className.match(/(?:^|\s)active(?!\S)/)) {
				element.className = element.className.replace( /(?:^|\s)active(?!\S)/g , '' )
			}
		}
	}

	if(scroll_pos<845)
	{
		removeAllActive();
		document.getElementById("home").className += " active";
	}
	else if (scroll_pos > 845 && scroll_pos < 1370)
	{
		removeAllActive();
		document.getElementById("about").className += " active";
	}
	else if (scroll_pos > 1370 && scroll_pos < 2079)
	{
		removeAllActive();
		document.getElementById("instruments").className += " active";
	}
	else if (scroll_pos > 2079 && scroll_pos < 2892)
	{
		removeAllActive();
		document.getElementById("repair").className += " active";
	}
	else if (scroll_pos > 2892)
	{
		removeAllActive();
		document.getElementById("organise").className += " active";
	}
	else if(scroll_pos > 3000)
	{
		removeAllActive();
		document.getElementById("organise").className += " active";
	}

}

window.addEventListener('scroll', function(e) {
	lastknownposition = window.scrollY;
	if(!ticking)
		window.requestAnimationFrame(function()	{
			doSomething(lastknownposition);
			ticking = false;
		});
	ticking = true;
})
