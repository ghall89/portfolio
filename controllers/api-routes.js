const router = require('express').Router();

const portfolio = require('../db/portfolio.json')

router.get('/portfolio', (req, res) => {
	res.json(portfolio);
});

module.exports = router;