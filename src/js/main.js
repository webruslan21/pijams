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