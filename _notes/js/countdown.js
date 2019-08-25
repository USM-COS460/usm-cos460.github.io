function startTimer(duration, display) {
	var timer = duration, minutes, seconds;
	interval = setInterval(function () {
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);

		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		display.textContent = minutes + ":" + seconds;

		if (--timer < 0) {
			timer = duration;
			clearInterval(interval);
		}
	}, 1000);

	return interval;
}


var timer = null;
function twoMinutes(timespan) {
	if (timer != null) {
		clearInterval(timer);
		timer = null;
	} else {
		var twoMinutes = 60 * 2,
			display = document.querySelector(timespan);
		timer = startTimer(twoMinutes, display);
	}

};