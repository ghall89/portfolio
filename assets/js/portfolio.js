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

const filterTags = tags => {
	tagList = []
	for (let i = 0; i < tags.length; i++) {
		tagList.push(`tag-${tags[i]}`);
	}
	return tagList.join(" ");
} 

const generatePortfolio = () => {
	const grid = document.querySelector('#portfolio-grid');
	const modals = document.querySelector('#modals');
	
	for (let i = 0; i < data.length; i++) {
		// portfolio grid
		const itemEl = document.createElement('li');
		itemEl.classList = filterTags(data[i].tags);
		itemEl.innerHTML = `
		<div class="uk-background-muted">
			<div class="uk-text-center">
				<div class="uk-inline-clip uk-transition-toggle" tabindex="0">
						<img src="./assets/img/portfolio/${data[i].img}" alt="">
						<div class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default bg-blur">
								<p class="uk-h4 uk-margin-remove">${data[i].title}</p>
								<a href="" class="uk-margin-remove" uk-toggle="target: #${data[i].github}">More Info</a>
						</div>
				</div>
			</div>
		</div>
		`;
		grid.appendChild(itemEl);
		
		//modals
		const modalEl = document.createElement('div');
		modalEl.innerHTML = `
		<div id="${data[i].github}" uk-modal>
			<div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
				<button class="uk-modal-close-default" type="button" uk-close></button>
				<h2 class="uk-modal-title">${data[i].title}</h2>
				<p>${data[i].description}</p>
				<a href="https://ghall89.github.io/${data[i].github}/" target="_blank" class="uk-button uk-button-default">Visit Page</a>
				<a href="${data[i].url}" target="_blank" class="uk-button uk-button-default">GitHub Repo</a>
			</div>
		</div>
		`
		modals.appendChild(modalEl);
	}
}


generatePortfolio();