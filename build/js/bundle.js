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
/***/ (function(module, exports, __webpack_require__) {

var slider = __webpack_require__(/*! ./slider */ "./src/js/slider.js");

$(window).on('load resize', slider.onResize);
$(window).on('load', function () {
  $(document).on('click', '.slider__arrow_right', slider.nextSlide);
  $(document).on('click', '.slider__arrow_left', slider.prevSlide);
});

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () {
  var slideIndex = 0;
  var sliderContainer = $(".slider__list");
  var sliderChildren = sliderContainer.children();
  var sliderChildrenLength = sliderChildren.length;

  var transformSlide = function transformSlide(slidePosition) {
    sliderContainer.css({
      "-webkit-transform": "translate3d(-".concat(slidePosition, "px, 0px, 0px)"),
      "-moz-transform": "translate3d(-".concat(slidePosition, "px, 0px, 0px)"),
      "-ms-transform": "translate3d(-".concat(slidePosition, "px, 0px, 0px)"),
      "-o-transform": "translate3d(-".concat(slidePosition, "px, 0px, 0px)"),
      "transform": "translate3d(-".concat(slidePosition, "px, 0px, 0px)")
    });
  };

  var getSlidePosition = function getSlidePosition(slide) {
    return $(slide).position().left;
  };

  var nextSlide = function nextSlide() {
    if (slideIndex !== sliderChildrenLength - 1) {
      slideIndex++;
    } else {
      slideIndex = 0;
    }

    transformSlide(getSlidePosition(sliderChildren[slideIndex]));
  };

  var prevSlide = function prevSlide() {
    if (slideIndex !== 0) {
      slideIndex--;
    } else {
      slideIndex = sliderChildrenLength - 1;
    }

    transformSlide(getSlidePosition(sliderChildren[slideIndex]));
  };

  var onResize = function onResize() {
    var viewportWidth = $(window).outerWidth();
    sliderChildren.each(function () {
      $(this).outerWidth(viewportWidth);
    });
    sliderContainer.width(sliderChildrenLength * $(sliderChildren[0]).outerWidth());
    transformSlide(getSlidePosition(sliderChildren[slideIndex]));
  };

  return {
    nextSlide: nextSlide,
    prevSlide: prevSlide,
    onResize: onResize
  };
}();

/***/ })

/******/ });