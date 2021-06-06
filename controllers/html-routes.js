const router = require('express').Router();

const { getData } = require('../db/db.js');

let homePage = false;

// homepage
router.get('/', (req, res) => {
	const data = getData('portfolio');
	console.log(data);
	const homePage = true;
	
	res.render('home', { data, homePage });
});

module.exports = router;