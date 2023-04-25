document.addEventListener('DOMContentLoaded', function () {
	let cf7Controls = document.querySelector('.service__controlers');

	cf7Controls.addEventListener('click', function (event) {
		if (event.target.tagName !== 'SPAN') {
			return;
		}

		let cf7Images = document.querySelectorAll('.service__wrapper');
		for (var i = 0; i < cf7Images.length; i++) {
			cf7Images[i].classList.remove('current');
		}

		let newImageIndex = Array.from(event.target.parentNode.children).indexOf(event.target);
		cf7Images[newImageIndex].classList.add('current');

		let cf7ControlSpans = document.querySelectorAll('.service__controlers span');
		for (let j = 0; j < cf7ControlSpans.length; j++) {
			cf7ControlSpans[j].classList.remove('selected');
		}
		event.target.classList.add('selected');
	});
});