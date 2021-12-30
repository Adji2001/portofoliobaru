let text = document.querySelector('.text');
let cloud1 = document.querySelector('.cloud1');
let cloud2 = document.querySelector('.cloud2');
let bigCloud1 = document.querySelector('.bigCloud1');
let bird1 = document.querySelector('.bird1');
let bigCloud2 = document.querySelector('.bigCloud2');
let bird2 = document.querySelector('.bird2');
let rocks = document.querySelector('.rocks');
let fish1 = document.querySelector('.fish1');
let fish2 = document.querySelector('.fish2');
let jellyFish = document.querySelector('.jellyFish');
let nemo = document.querySelector('.nemo');
let pogot = document.querySelector('.pogot');
nemo.className = 'cupang';
pogot.className = 'mujaer';
jellyFish.className = 'jelli';

let btn = document.getElementById('explore');

btn.addEventListener('click', myKlik);

function myKlik() {

	confirmasi = confirm('Aktifkan/NonAktifkan Animasi?\n(Tekan OK utk Mengaktifkan, Tekan Cancel utk NonAktifkan)');

	if (confirmasi == true) {

		alert('Mengaktifkan animasi dapat menyebabkan Lag!!!')

		btn.innerHTML = 'Animation';

		jellyFish.className = 'jellyFish';
		nemo.className = 'nemo';
		pogot.className = 'pogot';

		window.addEventListener('scroll', aktif) 
		function aktif() {
		let value = window.scrollY;

		text.style.top = 30 + value * -0.5 + '%';
		cloud1.style.left = value * 1 + 'px';
		bigCloud1.style.left = value * 2 + 'px';
		cloud2.style.left = value * -1 + 'px';
		bigCloud2.style.left = value * -2 + 'px';
		bird1.style.top = value * -1.5 + 'px';
		bird1.style.left = value * 2 + 'px';
		bird2.style.top = value * -1.5 + 'px';
		bird2.style.left = value * -5 + 'px';
		rocks.style.top = value * -0.12 + 'px';
		fish1.style.left = value * 1.5 + 'px';
		fish2.style.left = value * -1.5 + 'px';
		fish2.style.top = value * -0.12 + 'px';
		}
	} 
	if (confirmasi == false) {
		btn.innerHTML = 'Explore';

		nemo.className = 'cupang';
		pogot.className = 'mujaer';
		jellyFish.className = 'jelli';
		
		window.addEventListener('scroll', aktif)

		function aktif() {
		let value = window.scrollY;

		text.style.top = 30 + value * 0 + '%';
		cloud1.style.left = value * 0 + 'px';
		bigCloud1.style.left = value * 0 + 'px';
		cloud2.style.left = value * 0 + 'px';
		bigCloud2.style.left = value * 0 + 'px';
		bird1.style.top = value * 0 + 'px';
		bird1.style.left = value * 0 + 'px';
		bird2.style.top = value * 0 + 'px';
		bird2.style.left = value * 0 + 'px';
		rocks.style.top = value * 0 + 'px';
		fish1.style.left = value * 0 + 'px';
		fish2.style.left = value * 0 + 'px';
		fish2.style.top = value * 0 + 'px';
		}
	}

}

const kirim = document.querySelector('.btn');
let nama = document.getElementById('name');
let email = document.getElementById('email');
let pesan = document.getElementById('pesan');

kirim.addEventListener('click', (e) => {
	e.preventDefault();
	if(nama.value == '' && email.value == '' && pesan.value == '') {
		alert('Mohon isikan form terlebih dahulu!');
		return false;
	}
	if(nama.value == '') {
		alert('Nama belum diisi!');
		return false;
	}
	if(email.value == '') {
		alert('Email belum diisi!');
		return false;
	}
	if(pesan.value == '') {
		alert('Pesan belum diisi!');
		return false;
	} else {
		alert('Terimakasih atas masukannya:)');
		nama.value = '';
		email.value = '';
		pesan.value = '';
		return false;
	}
});