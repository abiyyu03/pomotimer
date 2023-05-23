let intervals = 0;
let checkTimerOrBreak = 0;

const startTimer = async () => {
	let setTimer = parseInt(document.getElementById('setTimer').value);
	const audioBreak = document.getElementById('audioBreak');
	document.getElementById('labelTimer').innerHTML = setTimer + ' : ' + '0';
	audioBreak.src = 'assets/alarm/' + alarmBreak.value;

	checkTimerOrBreak += 1;

	if (checkTimerOrBreak == 1) {
		seconds = 60;
		setTimer -= 1;
	} else {
		setTimer -= 1;
		seconds = 59;
	}

	return new Promise(
		(resolve) =>
			(runTimer = setInterval(() => {
				seconds--;
				const isBreak = setTimer == 0 && seconds == -1;

				if (isBreak) {
					clearTimeout(runTimer);
					audioBreak.play();
					breaks();
				}
				if (seconds == -1) {
					setTimer -= 1;
					seconds = 59;
				}
				document.getElementById('labelTimer').innerHTML = setTimer + ' : ' + seconds;
			}, 1000)),
	);
};

const breakTimer = async () => {
	let setBreak = parseInt(document.getElementById('setBreak').value);
	let setIntervals = parseInt(document.getElementById('setIntervals').value);
	const audioTimer = document.getElementById('audioTimer');
	audioTimer.src = 'assets/alarm/' + alarmTimer.value;

	domTimerBreak();

	checkTimerOrBreak += 1;
	const isInBreak = checkTimerOrBreak == 2;
	if (isInBreak) {
		seconds = 59;
		setBreak -= 1;
	} else {
		setBreak -= 1;
		seconds = 59;
	}

	return new Promise(
		(resolve) =>
			(runBreak = setInterval(function () {
				seconds--;
				if (setBreak == 0 && seconds == -1) {
					intervals += 1;
					if (intervals == setIntervals) {
						document.getElementById('titleHeader').className = 'card-header bg-success';
						document.getElementById('titleText').innerHTML = 'Atur Pomotimer';
						document.getElementById('buttonStart').disabled = false;
						document.getElementById('buttonReset').disabled = true;
						document.getElementById('buttonModal').click();
						clearTimeout(runBreak);
						document.getElementById('option').style.display = '';
						document.getElementById('imgIllustration').style.display = 'none';
						return;
					} else {
						audioTimer.play();
						clearTimeout(runBreak);
						timer();
					}
				}
				if (seconds == -1) {
					setBreak -= 1;
					seconds = 59;
				}
				document.getElementById('labelTimer').innerHTML = setBreak + ' : ' + seconds;
			}, 1000)),
	);
};

const timer = async () => {
	domTimerStart();

	await startTimer();
};

const breaks = async () => {
	await breakTimer();
};

// Reset Timer
function resetTimer() {
	//check if in work
	if (checkTimerOrBreak == 1 || checkTimerOrBreak % 2 != 0) {
		intervals = 0;
		checkTimerOrBreak = 0;
		domResetTimerIsInWork();
		clearInterval(runTimer);

		//check if in break
	} else if (checkTimerOrBreak % 2 == 0) {
		intervals = 0;
		checkTimerOrBreak = 0;
		domResetTimerIsInBreak();
		clearInterval(runBreak);
	}
}

function enableStartButton() {
	if (setTimer != 'none') {
		document.getElementById('buttonStart').disabled = false;
	}
}

function domTimerStart() {
	document.getElementById('title').innerHTML = 'Focus - Pomotimer ';
	document.getElementById('titleText').innerHTML = 'Yuk fokus bekerja..';
	document.getElementById('titleHeader').className = 'card-header bg-primary';
	document.getElementById('option').style.display = 'none';
	document.getElementById('buttonReset').disabled = false;
	document.getElementById('buttonStart').disabled = true;
	document.getElementById('imgIllustration').src = 'assets/illustration/work-illustration.png';
	document.getElementById('imgIllustration').style.display = '';
}

function domResetTimerIsInWork() {
	document.getElementById('labelTimer').innerHTML = '0:0';
	setTimer = 'Set Minutes';
	setBreak = 'Set Minutes of Break';
	document.getElementById('title').innerHTML = 'Atur Pomotimer';
	document.getElementById('titleHeader').className = 'card-header bg-success';
	document.getElementById('titleText').innerHTML = 'Atur Pomotimer';
	document.getElementById('buttonReset').disabled = true;
	document.getElementById('buttonStart').disabled = false;
	document.getElementById('option').style.display = '';
	document.getElementById('imgIllustration').style.display = 'none';
	document.getElementById('imgIllustration').src = '';
}

function domResetTimerIsInBreak() {
	setTimer = 'Set Minutes';
	setBreak = 'Set Minutes of Break';
	document.getElementById('titleText').innerHTML = 'Atur Pomotimer';
	document.getElementById('title').innerHTML = 'Atur Pomotimer';
	document.getElementById('titleHeader').className = 'card-header bg-success';
	document.getElementById('labelTimer').innerHTML = '0:0';
	document.getElementById('buttonReset').disabled = true;
	document.getElementById('buttonStart').disabled = false;
	document.getElementById('option').style.display = '';
	document.getElementById('imgIllustration').style.display = 'none';
	document.getElementById('imgIllustration').src = '';
}

function domTimerBreak() {
	document.getElementById('title').innerHTML = 'Istirahat - Pomotimer ';
	document.getElementById('titleText').innerHTML = 'Rileks dulu kawan..';
	document.getElementById('titleHeader').className = 'card-header bg-secondary';
	document.getElementById('labelTimer').innerHTML = setBreak + ' : ' + '0';
	document.getElementById('imgIllustration').src = 'assets/illustration/break-illustration.png';
	document.getElementById('imgIllustration').style.display = '';
}
