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

// blog
router.get('/blog', (req, res) => {
	const data = getBlog();
	res.render('blog', { data });
});

router.get('/blog/:id', (req, res) => {
	const data = getBlogPost(req.params.id);
	if (!data.slug) {
		res.redirect('/blog');
	}
	res.render('blog-post', { data });
});

module.exports = router;
