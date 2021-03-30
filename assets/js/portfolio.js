const data = [
	{
		"title": "Weather Dashboard",
		"description": "A basic weather page created for the web development bootcamp I attended. The goal of the project was to demonstrate my knowledge of CSS frameworks, REST APIs, and utilizing local storage to save and retrieve user data.",
		"img": "weather.png",
		"url": "https://ghall89.github.io/weather-dashboard/",
		"github": "weather-dashboard",
		"tags": "api"
	},
	{
		"title": "CSS Shadow Tool",
		"description": "A simple tool I built in my free time to make it easier to create and preview CSS shadow effects.",
		"img": "css-shadow.png",
		"url": "https://ghall89.github.io/css-shadow-tool/",
		"github": "css-shadow-tool",
		"tags": "js"
	}
];

const generatePortfolio = () => {
	const grid = document.querySelector('#portfolio-grid');
	const modals = document.querySelector('#modals');
	
	for (let i = 0; i < data.length; i++) {
		// portfolio grid
		const itemEl = document.createElement('li');
		itemEl.classList = `tag-${data[i].tags}`;
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