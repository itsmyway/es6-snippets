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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
class Slider{
  constructor(){
    this.slides = document.querySelectorAll('.carousel-page')
    this.drawer = document.querySelector('.open')
    this.addEvents = this.addEvents.bind(this)
  }
  addEvents(){
    Array.from(this.slides).forEach((ul) => {
      ul.addEventListener('click', this.switchContent.bind(this), false)
    })
    this.drawer.addEventListener('click', this.slideDrawer.bind(this), false)
  }
  switchContent(e){
    if(e.target.tagName === 'IMG'){
      let id = e.target.getAttribute('data-id')
      let active = document.querySelector('div.carousel-container.active')
      active.classList.toggle('active')
      document.querySelector('#'+id).classList.toggle('active')
    }
  }
  slideDrawer(e){
    e.preventDefault()
    event.target.closest('.active').classList.add('modal')
    // document.querySelector('div.active').classList.add('modal')
  }
}
/* harmony export (immutable) */ __webpack_exports__["Slider"] = Slider;


let slider = new Slider()
slider.addEvents()


// removeData(data){
//   let curr = this.head
//   let prev = this.head
//
//   while(curr){
//     if(curr.data === data){
//       if(curr === this.head){
//         this.head = this.head.next
//       }
//       if(curr === this.tail){
//         this.tail = prev
//       }
//       prev.next = curr.next
//       this.numberOfValues--;
//     } else {
//       prev = cur
//     }
//
//     curr = curr.next
//   }
// }


/***/ })

/******/ });
//# sourceMappingURL=sliderEntry.js.map