// hardcoded data, should move this to a database at some point :) 
const data = [
	{
		"title": "Family Financial",
		"description": "A website to simulate managing a stock portfolio for a family, or small group. Built as a boot camp group project, my primary responsibility was bulding the front end using Handlebars and vanilla JavaScript.",
		"img": "fam-fin.png",
		"url": "https://familyfinancials.herokuapp.com/",
		"githubUser": "htang2021",
		"github": "famfin",
		"tags": [
			"js",
			"handlebars",
			"node"
		]
	},
	{
		"title": "Weather Dashboard",
		"description": "A weather page created for the web development boot camp I attended. The goal of the project was to demonstrate my knowledge of CSS frameworks, REST APIs, and utilizing local storage to save and retrieve user data.",
		"img": "weather.png",
		"url": "https://ghall89.github.io/weather-dashboard/",
		"githubUser": "ghall89",
		"github": "weather-dashboard",
		"tags": [
			"api"
		]
	},
	{
		"title": "CSS Shadow Tool",
		"description": "My least favorite thing to do in CSS is to create drop shadows. I don't need to very often, but for the ocassions I do I wrote this quick web app to generate the code for me.",
		"img": "css-shadow.png",
		"url": "https://ghall89.github.io/css-shadow-tool/",
		"githubUser": "ghall89",
		"github": "css-shadow-tool",
		"tags": [
			"js"
		]
	},
	{
		"title": "Work Day Scheduler",
		"description": "Created during my time attending a web development boot camp to demonstrate my knowlege of local browser storage, and manipulating the DOM.",
		"img": "work-day.png",
		"url": "https://ghall89.github.io/work-day-scheduler/",
		"githubUser": "ghall89",
		"github": "work-day-scheduler",
		"tags": [
			"js"
		]
	}
];

const router = require('express').Router();


// homepage
router.get('/', (req, res) => {
	res.render('home', { data });
});

module.exports = router;