console.dir(document.querySelector('#g-recaptcha'));
const form = document.querySelector('.form');
const refs = {
	form: document.querySelector('.form'),
	nameError: document.querySelector('.form-error-name'),
	phoneError: document.querySelector('.form-error-phone'),
}

const textTitles = {
	nameError: `Ім'я не може містити символів та цифр, від 2 до 30 символів`,
	phoneError: `Не правильне значення. Приклад: +3809364772809 або 09364772809`,
}

const isValidName = (name) => {
	const regex = /^[\p{L}'’`´ʼʻ’]{2,30}$/iu;
	return regex.test(name);
}

const isValidUkrainianPhoneNumber = (number) => {
	const regex = /^(\+38)?0\d{9}$/;
	return regex.test(number);
}


const formHandler = (e) => {
	e.preventDefault();
	const formData = e.target;

	refs.nameError.innerText = '';
	refs.phoneError.innerText = '';

	const name = formData[0].value;
	const phone = formData[1].value;
	const description = formData[2].value;


	if (!isValidName(name)) refs.nameError.innerText = textTitles.nameError;
	if (!isValidUkrainianPhoneNumber(phone)) refs.phoneError.innerText = textTitles.phoneError;
	if (!isValidName(name) || !isValidUkrainianPhoneNumber) return;


}

refs.form.addEventListener('submit', formHandler);