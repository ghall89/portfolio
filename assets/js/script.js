intro = document.querySelector('#intro');


window.addEventListener('scroll', function() {
	let remainder = window.pageYOffset % 10;
	if (remainder === 0) {
		console.log(window.pageYOffset);
	}

});