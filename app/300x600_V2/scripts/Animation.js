var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;
	var tl = new TimelineMax();
	var txt2a = document.getElementById('txt2a');
	var txt2b = document.getElementById('txt2b');
	var txt2c = document.getElementById('txt2c');

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});

		
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {
		tl.from(txt2a, .5, {y:"-=100", ease: Sine.easeOut}, "+=1.5")
		.from(txt2b, .5, {y:"-=100", ease: Sine.easeOut}, "-=.5")
		.from(txt2c, .5, {y:"-=100", ease: Sine.easeOut}, "-=.5")
		
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
