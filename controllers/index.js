const router = require('express').Router();

// const apiRoutes = require('./api-routes.js');
const htmlRoutes = require('./html-routes.js');

// router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

router.use((req, res) => {
	res.status(404).end();
});

module.exports = router;
