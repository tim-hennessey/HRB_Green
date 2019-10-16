var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;
	var tl = new TimelineMax();
	var txt2a = document.getElementById('txt2a');
	var txt2b = document.getElementById('txt2b');
	var txt2c = document.getElementById('txt2c');
	var txt2d = document.getElementById('txt2d');
	var txt2e = document.getElementById('txt2e');

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});

		
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {
		tl.from(txt2a, .75, {y:"-=100", ease: Sine.easeOut}, "+=1.5")
		.from(txt2b, .75, {y:"-=100", ease: Sine.easeOut}, "-=.25")
		.from(txt2c, .75, {y:"-=100", ease: Sine.easeOut}, "-=.25")
		.from(txt2d, .75, {y:"-=100", ease: Sine.easeOut}, "-=.25")
		.from(txt2e, .75, {y:"-=100", ease: Sine.easeOut}, "-=.25");
		
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
