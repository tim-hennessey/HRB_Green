var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;
	var tl1 = new TimelineMax({paused:true});
	var tl2 = new TimelineMax();
	var txt2a = document.getElementById('txt2a');
	var txt2b = document.getElementById('txt2b');

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		tl1.from(txt2a, .75, {y:"-=100"})
		.from(txt2b, .75, {y:"-=100"}, "-=.35");

		tl2.to(tl1, 2, {progress:1, ease: Sine.easeOut}, "+=1.5");


		
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
