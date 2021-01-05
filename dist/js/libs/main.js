$('.main-slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow.svg"></button>',
	nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow.svg"></button>',
	responsive: [{
			breakpoint: 768,
			settings: {
				arrows: false,
			}
		}
	]
});
$('.brand-slider').slick({
	infinite: true,
	slidesToShow: 7,
	slidesToScroll: 1,
	responsive: [{
			breakpoint: 992,
			settings: {
				arrows: false,
				slidesToShow: 5,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				slidesToShow: 3
			}
		}
	]
});

// Modal
let modalOverlay = document.querySelectorAll('.modal'),
		modalOpen = document.querySelectorAll('[data-modal]'),
		modalClose = document.querySelectorAll('[data-close]'),
		modalStatus = false;

[].forEach.call(modalOpen, function (el) {
	// вешаем обработчик события на каждый элемент коллекции
	el.addEventListener('click', function (e) {
		// получаем значение атрибута ['data-modal'], которое
		// является class всплывающего окна
		var modalId = el.getAttribute('data-modal'),
			// используя class, получаем объект всплывающего окна,
			// которое мы собираемся открыть
			modal = document.getElementById(modalId);
			e.preventDefault();
		// вызываем функцию открытия всплывающего окна, аргументом
		// является объект всплывающего окна
		modalShow(modal);
	});
});

[].forEach.call(modalClose, function (el) {
	el.addEventListener('click', modalCloseFunc);
});

function modalShow(modal) {
	// показываем подложку всплывающего окна
	modalCloseFunc();
	modal.classList.add('show');
	document.body.style.overflow = 'hidden';
	modalStatus = true;
}

function modalCloseFunc() {
	// проверяем выполнение условия
	if (modalStatus && (!event.keyCode || event.keyCode === 27)) {
		// собираем коллекцию объектов всех всплывающих окон на странице
		// обходим по очереди каждый элемент коллекции (каждое всплывающее окно)
		// и в зависимости от типа анимации, используемой на данной странице,
		// удаляем класс анимации открытия окна и добавляем класс анимации закрытия
		[].forEach.call(modalOverlay, function (modal) {
			modal.classList.remove('show');
			document.body.style.overflow = '';
		});
		// сбрасываем флаг, устанавливая его значение в 'false'
		// это значение указывает нам, что на странице нет открытых
		// всплывающих окон
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