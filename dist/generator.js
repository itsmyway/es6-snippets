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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, exports) {

let customName = document.getElementById('customname'),
    randomize = document.querySelector('.randomize'),
    story = document.querySelector('.story');

const insertX = ['Willy the Goblin', 'Big Daddy','Father Christmas'],
      insertY = ['the soup kitchen', 'Disneyland','the White House'],
      insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

let temperature = '94 farenheit',
    weight = '300'

const randomValueFromArray = (array) => {
  // console.log(array[Math.floor(Math.random()*array.length)]);
  return array[Math.floor(Math.random()*array.length)];
};

randomize.addEventListener('click', () => {
  xItem = randomValueFromArray(insertX),
  yItem = randomValueFromArray(insertY),
  zItem = randomValueFromArray(insertZ);

  if(customName.value != ''){
    name = customName.value
  }

  if(document.getElementById("uk").checked) {
     weight = Math.round(300*0.0714286) + ' stone';
     temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
  }

  story.textContent = `It was ${temperature} outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}:. ${name} saw the whole thing, but he was not surprised — ${xItem}: weighs ${weight}, and it was a hot day.`;
  story.style.visibility = 'visible';
});


/***/ })

/******/ });
//# sourceMappingURL=generator.js.map