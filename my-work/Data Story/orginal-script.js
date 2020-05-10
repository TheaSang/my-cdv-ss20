
enterView({
	selector: '.special',
	enter: function(el) {
		console.log('a special element entered');
	},
	exit: function(el) {
    console.log('a special element exited');
	},
	progress: function(el, progress) {
    console.log("the special element's progress is:", progress);
	},
	// offset: 0.5, // enter at middle of viewport
	// once: true, // trigger just once
});
