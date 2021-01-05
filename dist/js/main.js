/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ })

/******/ });
//# sourceMappingURL=main.js.map