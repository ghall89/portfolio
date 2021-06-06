const JSONdb = require('simple-json-db');
const db = new JSONdb('./db/storage.json');

//pull data from database
const getData = () => {
	const data = db.get('portfolio');
	return data;
}

module.exports = { getData };