function startTimer(duration, warningTime, display) {
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
			display.classList.remove('timer-warning')
			display.classList.add('timer-done')
		} else if (timer < warning) {
			display.classList.add('timer-warning')
		}
	}, 1000);

	return interval;
}

var timer = null;
function countdownTimer(timespan, countdownTime, warningTime) {
	var display = document.querySelector(timespan);
	if (timer != null) {
		clearInterval(timer);
		timer = null;
		display.classList.remove('timer-active');
		display.classList.remove('timer-warning')
		display.classList.remove('timer-done')
	} else {
		timer = startTimer(countdownTime, warningTime, display);
		display.classList.remove('timer-warning')
		display.classList.remove('timer-done')
		display.classList.add('timer-active');
	}

};

function twoMinutes(timespan) {
	countdownTimer(timespan, (60 * 2), 10);
};

function fifteenMinutes(timespan) {
	countdownTimer(timespan, (60 * 15), 60);
};

