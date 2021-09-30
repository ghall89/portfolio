const JSONdb = require('simple-json-db');
const portfolioDb = new JSONdb('./db/portfolio.json');

//pull data from database
const getData = () => {
	const data = portfolioDb.get('portfolio');
	return data;
};

module.exports = { getData };
