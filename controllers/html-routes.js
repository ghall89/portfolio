const router = require('express').Router();

// homepage
router.get('/', (req, res) => {
	res.render('home');
});

module.exports = router;