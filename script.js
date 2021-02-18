const form = document.querySelector('form');
const passWordElement = document.getElementById('password');
const passWordConfirmElement = document.getElementById('password-confirm');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passWordsMatch = false;

function validateForm() {
	isValid = form.checkValidity();

	if (!isValid) {
		message.textContent = 'fill-out all fields';
		message.style.color = 'red';
		messageContainer.style.borderColor = 'red';

		return;
	};

	if (passWordElement.value === passWordConfirmElement.value) {
		passWordsMatch = true;
		passWordElement.style.borderColor = 'green';
		passWordConfirmElement.style.borderColor = 'green';
	} else {
		passWordsMatch = false;
		message.textContent = 'enSure passWords match';
		message.style.color = 'red';
		messageContainer.style.borderColor = 'red';
		passWordElement.style.borderColor = 'red';
		passWordConfirmElement.style.borderColor = 'red';

		return;
	};

	if (isValid && passWordsMatch) {
		message.textContent = 'Success';
		message.style.color = 'green';
		messageContainer.style.borderColor = 'green';
	};
};

function storeFormData() {
	const user = {
		name: form.name.value,
		eMail: form.eMail.value,
		number: form.number.value,
		webSite: form.webSite.value,
		passWord: form.passWord.value
	};

	console.table(user);
};

function processFormData(event) {
	event.preventDefault();
	validateForm();

	if (isValid && passWordsMatch) {
		storeFormData();
	};
};

form.addEventListener('submit', processFormData);