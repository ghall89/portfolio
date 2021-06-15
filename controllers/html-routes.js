const router = require('express').Router();

const { getData } = require('../db/db.js');

// homepage
router.get('/', (req, res) => {
	const data = getData('portfolio');
	
	res.render('home');
});

// portfolio
router.get('/portfolio', (req, res) => {
	const data = getData('portfolio');
	
	res.render('portfolio', { data });
});

// contact
router.get('/contact', (req, res) => {
	const data = getData('portfolio');
	
	res.render('contact');
});

module.exports = router;