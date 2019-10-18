var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;
	var tl1 = new TimelineMax({paused:true});
	var tl2 = new TimelineMax();
	var txt2b = document.getElementById('txt2b');
	var txt2c = document.getElementById('txt2c');
	var txt2d = document.getElementById('txt2d');
	var txt2e = document.getElementById('txt2e');
	var cta = document.getElementById('cta');
	var cta_txt = document.getElementsByClassName('cta_txt');
	var buttonExit = document.getElementById('button-exit');

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});

		buttonExit.addEventListener('mouseover', function () {
            t.to(cta, .25, {backgroundColor: "#000"});
            t.to(cta_txt, .25, {fill: "#fff" });
        });

        buttonExit.addEventListener('mouseout', function () {
            t.to(cta, .25, {backgroundColor: "#f5cc02"});
            t.to(cta_txt, .25, {fill: "#000" });
        });
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		tl1.from(txt2b, .75, {y:"-=100"})
		.from(txt2c, .75, {y:"-=100"}, "-=.75")
		.from(txt2d, .75, {y:"-=100"}, "-=.35")
		.from(txt2e, .75, {y:"-=100"}, "-=.75");

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
