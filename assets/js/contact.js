emailjs.init("user_j6iNhBoPrmR2pDbSvZL37");

const nameInputEl = document.querySelector("#nameInput");
const emailInputEl = document.querySelector("#emailInput");
const messageInputEl = document.querySelector("#messageInput");

const sendBtnEl = document.querySelector("#sendBtn");

sendBtnEl.addEventListener("click", function() {

	event.preventDefault();

	if (nameInputEl.value && emailInputEl.value && messageInputEl.value) {
		name = nameInputEl.value;
		email = emailInputEl.value;
		message = messageInputEl.value;
		
	

		sendEmail(name, email, message);

	} else {
		UIkit.notification("<span uk-icon='icon: warning'></span> Please fill out all the fields!", { timeout: 3000, status: 'danger' });
	}

});

const sendEmail = (name, email, message) => {
	let messageParam = {
		from_name: name,
		reply_to: email,
		message: message
	};

	emailjs.send('ghall.dev', 'template_k0w5xko', messageParam)
		.then(function(response) {
			nameInputEl.value = "";
			emailInputEl.value = "";
			messageInputEl.value = "";
			UIkit.notification("<span uk-icon='icon: check'></span> Message sent!", { timeout: 3000, status: 'success' });
		}, function(error) {
			console.log('FAILED...', error);
			UIkit.notification("<span uk-icon='icon: check'></span> Something went wrong!", { timeout: 3000, status: 'danger' });
		});

};

const validateEmail = email => {
	
}