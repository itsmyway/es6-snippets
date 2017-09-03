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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
/***/ (function(module, exports) {

//------------------------------------------------------------------------------------------------
//DEFAULT PARAMS CANNOT ACCESS INNER BODY
const x = 'outer';
function foo(a = x) {
    const x = 'inner';
    console.log(a); // outer
}

foo();

function bar(x=y, y=4) { return {x,y}; }
//console.log(bar())
//------------------------------------------------------------------------------------------------
//Counter function
//Counter is class instance
class Countdown {
  constructor(counter, action){
    this._counter = counter;
    this._action = action;
  }
  dec() {
    //ebugger;
    if(this._counter < 1 ) return;
    this._counter --;
    if(this._counter === 0) {
      this._action();
    }
  }
  get counter() {
    return this._counter;
  }
}

const c = new Countdown(3, () => console.log('DONE'))
c.dec();
console.log('C++++++', c.counter)

const d = new Countdown(2, () => console.log('DONE ALSO'))
d.dec();
console.log('D+++++', d.counter)

// TODO: Need to check
//Default params callback as default
// const QUX = 2;
// function baz(callback = () => QUX) { // returns 2
//     const QUX = 3;
//     callback();
// }
// baz( () => console.log('DDDD') ); // ReferenceError
// console.log('ss', baz())
//------------------------------------------------------------------------------------------------
//ITERATOR
const obj = {
    * [Symbol.iterator]() {
        yield 'a';
        yield 'b';
        yield 'c';
    }
};
const arr = [...obj];
console.log(arr)
//------------------------------------------------------------------------------------------------
//FUNCTIONS
//function declaration
function foo(x){

}
//functon expression
const fooE = function(x){

}
//------------------------------------------------------------------------------------------------
//GENERATOR function
//declaration
function* foo1(x){

}
//expressesion
const foo2 = function* (x){

}
//GENERATOR METHOD DEFINITIONS
//object
const objd = {
  * add(){

  }
}
//class
class objc {
  * add(){

  }
}
//------------------------------------------------------------------------------------------------
//CLASSES
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
Point.ZERO = new Point(0, 0);
const p = new Point(1, 2)
console.log(p)
console.log(Point.ZERO)
//------------------------------------------------------------------------------------------------
// GENRATOR METHODS
class IterableMethod {
  constructor(...args){
    this.args = args
  }
  * [Symbol.iterator]() {
    for(const arg of this.args){
      yield arg
    }
  }
}
for( const x of new IterableMethod('hello', 'world')){
  console.log(x)
}
//------------------------------------------------------------------------------------------------
//ARRAY FROM
const spans = document.querySelectorAll('span.test');
console.log(typeof spans)
const names = Array.prototype.map.call(spans, s => s.textContent);
console.log('Text inside test', names)
const names2 = Array.from(spans, s => s.textContent);
console.log('Array from', names2)
//------------------------------------------------------------------------------------------------
//Array Subclassing
class MyArray extends Array{

}
const myArrayInstance = MyArray.from([1,2,3], x => x * x)
console.log(myArrayInstance instanceof MyArray)

const reverse = function (arr){
    let newArr = []
    while(arr.length > 0){
      newArr.push(arr.pop())
    }
    return newArr
  }

console.log(reverse(['a', 'b', 'c']))
//------------------------------------------------------------------------------------------------
function add(x, y){
  return this.a + this.b + x + y;
}
var o = {a: 1, b: 3};
console.log(add.apply(o, [2,4]))
console.log(add.call(o, 2,3))
//------------------------------------------------------------------------------------------------
let words = 'anu is a good girl'
console.log(words.split(' ').reverse().join(' '))

class Counter{
  static increment(n){
    if (n === undefined){
      n = 1
    }
    return ++n;
  }
}

console.log('Counter' + Counter.increment());
console.log('Counter' + Counter.increment(3));

class Count{
  constructor(){
    this._id = Count.counter;
    // console.log('STEP 1', this._id);

  }
  get id(){
    // console.log('STEP 2');
    return this._id
  }
  static get counter(){
    // console.log('STEP 3')
    Count._counter = (Count._counter || 0) + 1;
    return Count._counter;
  }
  resetCounter(){
    Count._counter = 0;
  }
}
let a = new Count();
console.log('Counter Static', a.id)
let b = new Count();
console.log('Counter Static', b.id)
let cd = new Count();
console.log('Counter Static', cd.id)
cd.resetCounter();
console.log(new Count());
console.log(cd.id);
//------------------------------------------------------------------------------------------------

//Simple Array Sum
[1, 2, 3, 4, 5].reduce((a, b) => a + b, 0)
// Compare the Triplets
let arr1 = [5, 6, 7]
let arr2 = [10, 6, 10]
let result =  []
for(const [index, element] of arr1.entries()){
  result[index] = arr1[index] > arr2[index] ? 1 : arr2[index] > arr1[index] ? 1 : undefined
}
console.log(result)

//array flatten
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
}, []);

//count instance of values
var namesn = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
let countednames = namesn.reduce( (acc, curr) => {
  if(curr in acc){
    acc[curr]++;
  } else {
    acc[curr] = 1
  }
  return acc;
}, {});

//String reduce
const str = 'baab'; let newStr = '';
const countedNames = str.split('').reduce( (acc, curr) => {
  if(curr in acc){
    acc[curr]++;
  } else {
    acc[curr] = 1
  }
  return acc;
}, {});
for( let key in countedNames){
   newStr += (countedNames[key] % 2 === 0) ? '' : key
}
console.log(newStr)

// if(!String.prototype.removeDupl){
//   String.prototype.removeDupl = function(){
//
//   }
// }
//count camelCase
const st = 'saveChangesInTheEditor'
function countUpperCaseChars(str) {
  var count=0,len=str.length;
  for(var i=0;i<len;i++) {
    if(/[A-Z]/.test(str.charAt(i))) count++;
  }
  return count;
}
function splitByUpperCase(str) {
  var count=0,len=str.length, init=0, rest=[], tot = [];
  for(var i=0;i<len;i++) {
    if(/[A-Z]/.test(str.charAt(i))){
      rest.push([init, i])
      init = i;
    }
  }
  rest.push([init, i])
  console.log(rest)
  rest.map( (item) => {
    tot.push(str.slice(item[0], item[1]))
    return tot
  })
  return tot;
}
//find sum of two numbers is in Array
const elnums = [2, 7, 11, 15, 3, 6]

function findSum(...args){
  const [target, nums] = args;
  let sumMap = new Map();
  let retResult = [];
  for (let i=0; i < nums.length; i++ ){
    const complement = target - nums[i]
    if(sumMap.has(complement)){
      retResult.push([sumMap.get(complement), i])
    } else {
      sumMap.set(nums[i], i)
    }
  }
  return retResult
}
console.log(findSum(9, elnums))


/***/ })

/******/ });
//# sourceMappingURL=sandboxEntry.js.map