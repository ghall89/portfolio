emailjs.init('user_j6iNhBoPrmR2pDbSvZL37');

const nameInputEl = document.querySelector('#nameInput');
const emailInputEl = document.querySelector('#emailInput');
const messageInputEl = document.querySelector('#messageInput');

const sendBtnEl = document.querySelector('#sendBtn');

// Check email is a valid format
const validateEmail = email => {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Send email using Email.js API (configure at http://emailjs.com)
const sendEmail = (name, email, message) => {
	let messageParam = {
		from_name: name,
		reply_to: email,
		message: message
	};

	emailjs.send('ghall.dev', 'template_k0w5xko', messageParam).then(
		function (response) {
			nameInputEl.value = '';
			emailInputEl.value = '';
			messageInputEl.value = '';
			UIkit.notification("<span uk-icon='icon: check'></span> Message sent!", {
				timeout: 3000,
				status: 'success'
			});
		},
		function (error) {
			console.log('FAILED...', error);
			UIkit.notification(
				"<span uk-icon='icon: warning'></span> Something went wrong!",
				{
					timeout: 3000,
					status: 'danger'
				}
			);
		}
	);
};

// Take form input, validate input, and send email
sendBtnEl.addEventListener('click', function () {
	event.preventDefault();

	if (nameInputEl.value && emailInputEl.value && messageInputEl.value) {
		name = nameInputEl.value;
		email = emailInputEl.value;
		message = messageInputEl.value;

		if (!validateEmail(email)) {
			UIkit.notification(
				"<span uk-icon='icon: warning'></span> Please enter a valid email!",
				{
					timeout: 3000,
					status: 'danger'
				}
			);
			return;
		}

		sendEmail(name, email, message);
	} else {
		UIkit.notification(
			"<span uk-icon='icon: warning'></span> Please fill out all the fields!",
			{
				timeout: 3000,
				status: 'danger'
			}
		);
	}
});
