// hardcoded data, should move this to a database at some point :) 
const data = [
	{
		"title": "Weather Dashboard",
		"description": "A weather page created for the web development bootcamp I attended. The goal of the project was to demonstrate my knowledge of CSS frameworks, REST APIs, and utilizing local storage to save and retrieve user data.",
		"img": "weather.png",
		"url": "https://ghall89.github.io/weather-dashboard/",
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