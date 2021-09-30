const router = require('express').Router();
const { getData, getBlog, getBlogPost } = require('../db/db.js');

// homepage
router.get('/', (req, res) => {
	res.render('home');
});

// portfolio
router.get('/portfolio', (req, res) => {
	const data = getData();

	res.render('portfolio', { data });
});

// contact
router.get('/contact', (req, res) => {
	res.render('contact');
});

module.exports = router;
