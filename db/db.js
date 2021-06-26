const JSONdb = require('simple-json-db');
const portfolioDb = new JSONdb('./db/portfolio.json');
const blogDb = new JSONdb('./db/blog.json');

//pull data from database
const getData = () => {
	const data = portfolioDb.get('portfolio');
	return data;
};

const getBlog = () => {
	const data = blogDb.get('blog');
	return data;
};

const getBlogPost = query => {
	const posts = blogDb.get('blog');
	let data = {};
	for (let i = 0; i < posts.length; i++) {
		if (posts[i].slug === query) {
			data = posts[i];
		}
	}
	return data;
};

module.exports = { getData, getBlog, getBlogPost };
