// intro = document.querySelector('#intro');
// 
// 
// window.addEventListener('scroll', function() {
// 	console.log(window.pageYOffset);
// });

// display copyright year 
const copyrightYear = () => {
	const year = new Date().getFullYear();
	const yearSpan = document.querySelector('#current-year');
	if(year > 2021) {
		yearSpan.textContent = `2021 - ${year}`
	} else {
		yearSpan.textContent = year;
	}
};

copyrightYear();