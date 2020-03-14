var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;
	var tl = new TimelineMax({repeat:-1});
	var img1 = document.getElementById('img1');
	var img2 = document.getElementById('img2');
	var img3 = document.getElementById('img3');
	var img4 = document.getElementById('img4');

	var cta = document.getElementById('cta');
	var cta_txt = document.getElementsByClassName('cta_txt');
	var buttonExit = document.getElementById('button-exit');

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});

		buttonExit.addEventListener('mouseover', function () {
            t.to(cta, .25, {backgroundColor: "#3bc0f8"});
            t.to(cta_txt, .25, {fill: "#262626" });
        });

        buttonExit.addEventListener('mouseout', function () {
            t.to(cta, .25, {backgroundColor: "#f5cc02"});
            t.to(cta_txt, .25, {fill: "#000" });
        });
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		tl.set(img1, {display:'none'}, "+=.5")
		.set(img2, {display:'none'}, "+=.5")
		.set(img3, {display:'none'}, "+=.5")
		.set(img4, {display:'none'}, "+=.5");
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
