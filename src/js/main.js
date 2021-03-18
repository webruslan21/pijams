// Modal
let modalOverlay = document.querySelectorAll('.modal'),
		modalOpen = document.querySelectorAll('[data-modal]'),
		modalClose = document.querySelectorAll('[data-close]'),
		modalStatus = false;

[].forEach.call(modalOpen, function (el) {
	el.addEventListener('click', function (e) {
		var modalId = el.getAttribute('data-modal'),
			modal = document.getElementById(modalId);
			e.preventDefault();
		modalShow(modal);
	});
});

[].forEach.call(modalClose, function (el) {
	el.addEventListener('click', modalCloseFunc);
});

function modalShow(modal) {
	modalCloseFunc();
	modal.classList.add('show');
	document.body.style.overflow = 'hidden';
	modalStatus = true;
}

function modalCloseFunc() {
	if (modalStatus && (!event.keyCode || event.keyCode === 27)) {
		[].forEach.call(modalOverlay, function (modal) {
			modal.classList.remove('show');
			document.body.style.overflow = '';
		});
		modalStatus = false;
	}
}

document.addEventListener('keydown', modalCloseFunc);

[].forEach.call(modalOverlay, function (modal) {
	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			modalCloseFunc();
		}
	});
});

// end Modal