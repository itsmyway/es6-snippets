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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports) {

let request = function(obj){
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    //open the xhr connection
    xhr.open(obj.method || 'GET', obj.url);
    if(obj.headers){
      Object.keys(obj.headers).forEach((key) => {
        xhr.setRequestHeader(key, obj.headers[key]);
      });
    }
    //xhr.onload gets called when XMLHttpRequest transaction completes successfully.
    //syntax XMLHttpRequest.onload = callback;
    xhr.onload = () => {
      if(xhr.status >= 200 && xhr.status < 300){
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    }
    //XMLHttpRequest.onerror = callback;
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send(obj.body);
  });
}

request({url: "employees.json"})
  .then(data => {
    let employees = JSON.parse(data);
    let html = "";
    employees.forEach(employee => {
      html += `
        <div>
          <img src='${employee.picture}'/>
          <div>
              ${employee.firstName} ${employee.lastName}
              <p>${employee.phone}</p>
          </div>
        </div>`;
        document.getElementById("list").innerHTML = html;
    });
  })
  .catch(error => {
    console.log(error);
  })

// let request = obj => {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest();
//         console.log('XHR Request' + xhr);
//         xhr.open(obj.method || "GET", obj.url);
//         if (obj.headers) {
//             Object.keys(obj.headers).forEach(key => {
//                 xhr.setRequestHeader(key, obj.headers[key]);
//             });
//         }
//         xhr.onload = () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.response);
//             } else {
//                 reject(xhr.statusText);
//             }
//         };
//         xhr.onerror = () => reject(xhr.statusText);
//         xhr.send(obj.body);
//     });
// };

//console.log('XHR Request' + request);
//For you to understand that fns can be defined this way
// let ddd = ((n) => {
//   console.log('n', n);
// });
// console.log(ddd(3));
//----------------------------


/***/ })

/******/ });
//# sourceMappingURL=ajaxEntry.js.map