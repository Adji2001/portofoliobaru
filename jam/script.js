function clock() {
	let time = new Date();
	let hours = time.getHours();
	let minutes = time.getMinutes();
	let seconds = time.getSeconds();

	let sF = seconds / 60;
	let mF = (sF + minutes) / 60;
	let hF = (mF + hours) / 12;

	let sD = Math.floor(sF * 360);
	let mD = Math.floor(mF * 360);
	let hD = Math.floor(hF * 360);

	let detik = document.querySelector('.seconds');
	let menit = document.querySelector('.minutes');
	let jam = document.querySelector('.hours');

	let sesson = 'AM';

	detik.style.transform = `rotate(${sD}deg)`;
	menit.style.transform = `rotate(${mD}deg)`;
	jam.style.transform = `rotate(${hD}deg)`;

	let digital = document.querySelector('.digital');
	if (hours < 10 ) {
		hours = '0' + hours;
	}
	if (hours > 12) {
		sesson = 'PM';
	}
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	if (seconds < 10) {
		seconds = '0' + seconds;
	}
	digital.innerHTML = hours + ' : ' + minutes + ' : ' + seconds + ' ' + sesson;
}

setInterval(clock, 1000);
