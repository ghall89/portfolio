intro = document.querySelector('#intro');


window.addEventListener('scroll', function() {
	console.log(window.pageYOffset);
});

const copyrightYear = () => {
	const year = new Date().getFullYear();
	const yearSpan = document.querySelector('#current-year');
	
	yearSpan.textContent = year;
};

copyrightYear();