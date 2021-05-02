module.exports = {
	copyrightYear: () => {
		const year = new Date().getFullYear();
		if(year > 2021) {
			return `2021 - ${year}`
		} else {
			return year;
		}
	}
}
