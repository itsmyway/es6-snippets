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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calculator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__counter__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clock__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autocomplete__ = __webpack_require__(2);





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
  console.log('Sum map', sumMap)

  return retResult
}
console.log('Findsumm',findSum(9, elnums))
//find vowels
const vowelMap = new Map([['a', 1], ['e', 1], ['o', 1], ['i', 1], ['u', 1]])
const input = 'nBBZLsnm'
let countVowel = 0
input.split('').forEach(item => {
  if(vowelMap.has(item)){
    countVowel++
  } else {
     countVowel =  'No vowels inside String'
  }
})
console.log('countVowel', countVowel)
//find min and max sum of (n-1) integers given N
const intAr = [1, 2, 3, 4, 5]
let sumAr = 0, finalAr = [], sum = 0
while(sumAr <= intAr.length-1){
  sum = 0;
  for(let i=0; i<=intAr.length-1 ; i++){
    console.log('Excluding', i)
    if(sumAr != i){
      sum = sum + intAr[i];
      console.log(sum)
    }
  }
  finalAr.push(sum)
  sumAr++;
}
console.log(finalAr)
const sortArr = finalAr.sort((a,b) => {
  return a - b
})
console.log(sortArr)
console.log(sortArr[0], sortArr[sortArr.length - 1])

//bubble sort
const bubbleSort = (narr) => {
  let swapbc = 0
  for(let i=0; i<narr.length; i++){
    for(let j=0; j<narr.length - i - 1; j++){
      if(narr[j+1] < narr[j]){
        [narr[j+1], narr[j]] = [narr[j], narr[j+1]]
        console.log(narr)
        swapbc++
      }
    }
  }
  console.log('Swapped count', narr)
}
bubbleSort([1,4,3,2,5])

//order by fan and lexicography

const db = [
  {name: 'surbhi', fanq: 3},
  {name: 'surpanakha', fanq: 3},
  {name: 'shreya', fanq: 5}
]
let fqns = db.sort((a,b) => {
  if(b.fanq < a.fanq){
    return -1;
  } else if (b.fanq > a.fanq){
    return 1
  } else {
    if(a.name < b.name){
      return -1
    } else if (a.name > b.name){
      return 1
    } else {
      return 0
    }
  }
})
console.log('fqns', fqns)
//linkedlist

function Node(data) {
  this.data = data
  this.next = null
}

class SinglyLinkedList {
  constructor(){
    this.head = null
    this.tail = null
    this.numberOfvalues = 0
  }
  add(data){
    const node = new Node(data)
    if(!this.head){
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.numberOfvalues++;
  }
  remove(data){
    let current = this.head
    let previous = this.head
    while(current){
      if(current.data === data){
        if(current === this.head){
          this.head = this.head.next
        }
        if(current === this.tail){
          this.tail = previous
        }
        previous.next = current.next
        this.numberOfValues--;
      } else {
        previous = current
      }
      current = current.next
    }
  }
  print(){
    let llstr = ''
    let current = this.head
    while(current){
      llstr += `${current.data}`
      current = current.next
    }
    console.log(llstr.trim())
  }
}
const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.add(1);
singlyLinkedList.add(2);
singlyLinkedList.add(3);
singlyLinkedList.add(4);
singlyLinkedList.print()
singlyLinkedList.remove(4);
singlyLinkedList.print()

//Monk and new array

var items = [
  [10, 2],
  [6, 8],
  [4, 1]
];

let sorted2DArray = items.map( arritem => {
  return arritem.sort( (a, b) => {
    return a - b
  })
})
// [2, 10] [6, 8] => [2,1
console.log('Sorted 2DArray', sorted2DArray)

//shift each char by position

function shiftChars(str, position){
  let splitStr = str.split('')
  for(let i=0; i<position; i++){
    splitStr.unshift(splitStr.pop())
  }
  return splitStr.join(',')
}

console.log(shiftChars('hacker', 3))

//sort substrings in descending order
const subs = [
  {str: 'hlleo', index: [1, 3]},
  {str: 'ooneefspd', index: [0,8]},
  {str: 'effort', index: [1, 4]}
]

let sortedStr = subs.map( item => {
   return item['str'].split('').splice(item['index'][0], item['index'][1]+1, '@').sort().reverse().join('')
})
console.log(sortedStr)
console.log(subs)

//find substrings in string
// sda
// sadasda

function getSubstringCount(str, substr, casesensitive){
  const searchStrLength = substr.length
  let substrArr = []
  let substrCount = 0
  if( searchStrLength === 0){
    return 0
  }
  if(!casesensitive){
    str = str.toLowerCase()
    substr = substr.toLowerCase()
  }
  let startIndex = 0
  let index
  while(~(index = str.indexOf(substr, startIndex))){
    substrArr.push(index)
    substrCount++
    startIndex = index + searchStrLength
  }
  return substrCount
}
console.log('Substrung Array', getSubstringCount('sadasda', 'sda', false))

//function palindromw
function palindrome(str){
  let result = 'NO'
  if(str === str.split('').reverse().join('')){
    result = 'YES'
  }
  return result
}
console.log(palindrome('abba'))
console.log(palindrome('aaaa'))
console.log(palindrome('abcd'))

//find popular hash tags
let sampleTweets = [
  'Donald Trump becomes the 45th #US President',
  'Potentially habitable exoplanet #ProximaB discovered',
  '#RogerFederer wins #US Open for 5th time',
  '#GravitationalWaves detection successful',
  'Traces of liquid water discovered on #Mars',
  'Life Could Survive on Exoplanet #ProximaB',
  'Go go #RogerFederer',
  'Ten ways #ProximaB is different from Earth',
  'ISRO becomes 4th space agency to reach #Mars',
  '#RogerFederer beats #Nadal'
]
let reg = /^#\b]/
function findPopularhashTags(tweets){
  let hashTweetmaps = new Map(), hashMaps, counts = [];
  tweets.forEach( tweet => {
    let strings = tweet.split(' ')
    strings.forEach( str => {
      let hashTag = str.match(/^#\w+/)
      if(hashTag){
        hashTag = hashTag[0]
        if(hashTweetmaps.has(hashTag)){
          let count = hashTweetmaps.get(hashTag)
          count++
          hashTweetmaps.set(hashTag, count)
        } else {
          hashTweetmaps.set(hashTag, 1)
        }
      }
    })
  })
  console.log(Array.from(hashTweetmaps.entries()))
  // debugger;
  //
  // tweets.map( tweet => {
  //   let strings = tweet.split(' ')
  //   strings.map( str => {
  //     let hashTag = str.match(/^#\w+/)
  //     return counts
  //     // if(hashTag && hashTweetmaps.has(hashTag)){
  //     //   hashTweetmaps.get(hashTag)++
  //     // } else if(hashTag){
  //     //   hashTweetmaps.set(hashTag, 1)
  //     // } else {
  //     //   //Do nothing
  //     // }
  //     // if(hashTweetmaps.has(hashTag)){
  //     //   hashTweetmaps.get(hashTag)++
  //     // } else if(hashTag){
  //     //   hashTweetmaps.set( hashTag, 1)
  //     // }
  //   })
  //   return counts;
  // })
  // counts = Array.from(hashTweetmaps.values()).sort((a, b) => {
  //   return a -b
  // })
}

console.log(findPopularhashTags(sampleTweets))
//find keys pressed
window.addEventListener("keypress", function(event) {
    console.log(String.fromCharCode(event.charCode));
  });

  //Counter
//   var counter = (function() {
//   var privateCounter = 0;
//   function changeBy(val) {
//     privateCounter += val;
//   }
//   return {
//     increment: function() {
//       changeBy(1);
//     },
//     decrement: function() {
//       changeBy(-1);
//     },
//     value: function() {
//       return privateCounter;
//     }
//   };
// })();
//
// console.log(counter.value()); // logs 0
// counter.increment();
// counter.increment();
// console.log(counter.value()); // logs 2
// counter.decrement();
// console.log(counter.value()); // logs 1

// var makeCounter = function() {
//   var privateCounter = 0;
//   function changeBy(val) {
//     privateCounter += val;
//   }
//   return {
//     increment: function() {
//       changeBy(1);
//     },
//     decrement: function() {
//       changeBy(-1);
//     },
//     value: function() {
//       return privateCounter;
//     }
//   }
// };
//
// var counter1 = makeCounter();
// var counter2 = makeCounter();
// alert(counter1.value()); /* Alerts 0 */
// counter1.increment();
// counter1.increment();
// alert(counter1.value()); /* Alerts 2 */
// counter1.decrement();
// alert(counter1.value()); /* Alerts 1 */
// alert(counter2.value()); /* Alerts 0 */

// the call() function. This function basically allows you to call a function defined somewhere else, but in the current context

function factorial(n){
  let fact = n
  while (n > 1){
    fact = fact*(n-1)
    n--
  }
  return fact
}
console.log('Factorial', factorial(4))

// const factorial = n => n ?  (n * factorial(n-1)) : 1;
//=======================================================
var data = [0, 1, 2];
var funcs = [];

function init() { // 0
  for (var i = 0; i < 3; i++) {

    var x = data[i]; // 1
    var innerFunc = function() { // 2
      return x;
    };

    funcs.push(innerFunc); // 3
  }
}

function run() { // 4
  for (var i = 0; i < 3; i++) {
    console.log(data[i] + ", " + funcs[i]()); // 5
  }
}

init();
run();

//
class EventEmitter{
  constructor(){
    this.eventTable = new Map()
    return this;
  }
  register(eventname, callback){
    let cbArray = []
    if(this.eventTable.has(eventname)){
      cbArray = this.eventTable.get(eventname)
    }
    cbArray.push(callback)
    this.eventTable.set(eventname, cbArray)
  }
  broadcast(eventname){
    if(this.eventTable.has(eventname)){
      this.eventTable.get(eventname).forEach( cb => {
        cb()
      })
    } else {
      console.log('Event not found')
    }
  }
}

const e = new EventEmitter();
e.register('hungry', () => console.log('I am hungry'))
e.register('hungry', () => console.log('I am hungry once again'))
e.register('foo', () => console.log('I am foo'))
e.register('foo', () => console.log('I am foo again'))
e.register('foo', () => console.log('I am foo 3rd time again'))
e.register('Baz', () => console.log('I am baz only once'))
e.broadcast('foo')
e.broadcast('hungry')
e.broadcast('Baz')
e.broadcast('hello')

//find unique
const dups = [1, 2, 3, 4, 5, 4, 2]
const unique = new Set(dups)
console.log(unique)


//teacher-student
const teachers = ['vasya', 'petya', 'kolya']
const teacherRecord = [
  {'name': 'vasya', 'student': 'errichto', 'age': 21},
  {'name': 'kolya', 'student': 'petr', 'age': 22},
  {'name': 'petya', 'student': 'egor', 'age': 19},
  {'name': 'vasya', 'student': 'tourist', 'age': 19}
]
/*
 * 'vasya': [
 *  'student' : aa,
 *  'age' : 12
 * ]
 * }
 *
 */

//  let keys = Array.from(hashTable.keys())
//
//         let values = Array.from(hashTable.values()) [1,1,1,..]
//         duplicateChars = values.filter( item => {
//             return item > 1
//         }) //[ a, b, c]
// let sortedTeacherRecord = []
// let dummy = []
// teacherRecord.forEach( record => {
//  let obj = {
//     'student': record.student,
//     'age': record.age
//   }
//   if(!sortedTeacherRecord[record.name]){
//     sortedTeacherRecord[record.name] = []
//     sortedTeacherRecord[record.name].push(obj)
//   } else {
//     sortedTeacherRecord[record.name].push(obj)
//   }
// })
// console.log('sortedTeacherRecord', sortedTeacherRecord)

0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0
const cc = [
  [
    [4, 5],
    [6, 10],
    [12, 14]
  ],
  [
    [4, 5],
    [5, 9],
    [13, 16]
  ],
  [
    [11, 14]
  ]
]

function findSlots(schedule) {
  const shared = []
  const day = []
  for (let i=0;i<23;i++){
    day[i] = 0;
  }

  // add all times from all people
  // to show potential scheduling times
  // use count to show most shared time
  let count = 0

  for (const person of schedule) {
    for (const slot of person){
      count++
      const dif = slot[1] - slot[0]
      day.fill(count, slot[0], (slot[0] + dif))
    }
  }

  const arrMax = Math.max(...day)

  for (const [i, slot] of day.entries()){
    if (slot == arrMax) {
      let str = (i < 12) ? 'pm' : 'am'
      let hour = (i > 12) ? (i - 12) : i
      shared.push(`${i == 0 ? 12 : hour}${str}`)
    }
  }

  return shared
}


// arr.map( item => {
//   return item.values
// }).sort((a, b) => {
//   return a - b
// })

// function findMedian(arr){
//   let median = Math.floor(arr.length / 2)
//   if(arr.length % 2){
//     return
//
//   }
//   arr.length / 2
// }
// var findMedianSortedArrays = function(nums1, nums2) {
//     const sortedArr1 = arrSort(nums1)
//     const sortedArr2 = arrSort(nums2)
//     console.log('Array 1', sortedArr1)
//     console.log('Array 2', sortedArr2)
// };
//
// findMedianSortedArrays([1, 12, 15, 26, 38], [2, 13, 17, 30, 45])


const dict = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
}
var letterCombinations = function(digits) {
    let words = []
    return digits.split('').map( number => {
        return dict[number]
    }).reduce(function (a, b){
        for(let i=0; i < a.length; i++){
            for(let j=0; j < b.length; j++){
                words.push(a[i]+b[j])
            }
        }
        return words
    })
};
letterCombinations("23")

var majorityElement = function(nums) {
    const majority = Math.floor(nums.length/2)
    const hashMap = new Map()
    nums.forEach( number => {
        if(hashMap.has(number)){
            let count = hashMap.get(number)
            count += 1
            hashMap.set(number, count)
        } else {
            hashMap.set(number, 1)
        }
    })
    for(let [key, value] of hashMap.entries()){
      if(value > majority){
        return key
      }
    }
};
majorityElement([1,2,3,2,2])
//[7, 1, 5, 3, 6, 4]
function findMaxProfit(arr){
  let minValue = Number.MAX_VALUE, maxValue = 0
  for(let i=0; i<arr.length; i++){
    if(arr[i] < minValue){
      minValue = arr[i]
    } else if(arr[i] - minValue > maxValue){
      maxValue = arr[i] - minValue
    }
  }
  return maxValue
}
console.log(findMaxProfit([7, 1, 5, 3, 6, 4]))

function removeElememt(nums, val) {
    let vv = 0;
     nums.forEach ( number => {
         if(number === val){
             vv++
         }
     })
    return vv
}
console.log(removeElememt([3,2,2,3], 3))

//product except self
var productExceptSelf = function(nums) {
    let result = [], counter = 0
    for(let j = 0; j < nums.length; j++){
        counter = j
        let value = 1
        for (let i=0; i< nums.length; i++){
            if( j !== i){
                value = value * nums[i]
            }
        }
        result.push(value)
    }
    return result
}

var reverseWords = function(str) {
        let words =  str.split(' '), newWords = ''
        newWords = words.filter( word => {
          if(word){
            return word
          }
        }).reverse().join (' ')
        return newWords
}
console.log(reverseWords("   a   b "))

//Viewport
/*
Window.innerHeight = Height (in pixels) of the browser window viewport
window.scrollY or window.pageYOffset = returns the number of pixels that the document is currently scrolled vertically
document.body.offsetHeight = The HTMLElement.offsetHeight read-only property is the height of the element including vertical padding and borders
Typically, an element's offsetHeight is a measurement in pixels of the element's CSS height, including border, padding and the element's horizontal scrollbar (if present, if rendered). It does not include the height of pseudo-elements such as :before or :after.

For the document body object, the measurement includes total linear content height instead of the element's CSS height
*

window.onscroll = function(ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        alert("you're at the bottom of the page");
    }
};

It can be achieved by using the window object's 'scroll' event. Here's the code:

var w = $(window), d = $(document);
w.scroll(function() {
   if(w.scrollTop() + w.height() == d.height())
   {
      console.log("You have hit the bottom!");
   }
});


This piece basically calculates how much you have scrolled from the top, adds the window height and checks whether this total height corresponds to the height of the complete document. If both of them match, then you must have scrolled all the way to the last.
*/

//currying
/*Curry: A function that takes a function with multiple parameters as input and returns a function with exactly one parameter.
Partial Application: a function that takes a function with multiple parameters and returns a function with fewer parameters
Closure: a closure gives you access to an outer function’s scope from an inner function.
Pure function :
  Given the same input, will always return the same output.
  Produces no side effects.
  Relies on no external mutable state.
Function composition: is the process of combining two or more functions to produce a new function. Composing functions together is like snapping together a series of pipes for our data to flow through.
Functional code tends to be more concise, more predictable, and easier to test than imperative or object oriented code 
A higher order function is any function which takes a function as an argument, returns a function, or both.
*/
function add(a, b){
  return function(b){
    return a + b;
  }
}
const add3 = add(3)
console.log('Add 3', add3(2))

const curryadd = (a, b) => ( (b) => a + b)
const cadd3 = curryadd(3)
console.log('Curry Add 3', curryadd(3)(2))

const partialApply = (fn, ...fullargs) => {
  return function(...remainingargs) {
    return fn.apply(this, fullargs.concat(remainingargs))
  }
}

//eg

const multiply = (a, b) => a * b
const multiply3 = partialApply(multiply, 3)
console.log('Multiply3', multiply3(2))
console.log('Multiply3', multiply3(3))

//sleep function
// function sleep(ms){
//   let start = Date.now()
//   while( (Date.now - start) < millisecons )
// }

//callback
const loadScript = (src, callback) => {
  let script = document.createElement('script')
  script.src = src
  script.onload = () => {
    callback(script)
  }
  document.head.append(script)
}
loadScript(
  'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js',
  (script) => {
    console.log(`Cool, the ${script.src} is loaded`)
    console.log( _ )
  }
)
//promised loadScript
const ploadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    script.src = src
    script.onload = () => resolve(script)
    script.onerror = () => reject(new Error ('whoops!!!'))
  })
}
ploadScript(
  'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js',
).then(
  script => alert(`Cool, the ${script.src} is loaded`),
  error => alert(`Error: ${error.message}`)
)
//delay in promised
const delay = (ms) => {
  return new Promise(resolve => setTimeOut(resolve, ms))
}
//delay(3000).then(() => alert('runs after 3 seconds'));

const decoratorDelay = (func, ms) => {
  return function(){
    setTimeout(() => func.apply(this, arguments), ms)
  }
}

// Throttle: the original function be called at most once per specified period.
// Debounce: the original function be called after the caller stops calling the decorated function after a specified period.

const decoratorDebounce = (func, ms) => {
  let isRunning = false
  return function(){
    if(isRunning) return
    func.apply(this, arguments)
    isRunning = true
    setTimeout(() => isRunning = false, ms)
  };
}
//Object methids
var protoCheck = {
  a: 'Hello',
  meth: function(){
    console.log('object methods')
  },
  foo(){
    console.log(this.a + 'Foo')
  },
  bar(){
    console.log(this.a + 'Bar')
  }
}
console.log(protoCheck)

function testProto(){
  this.foo = 'foo'
  this.bar = 'bar'
  this.baz = function(){
    console.log('Baz method')
  }
}
//constructor function is overridden in the below definition
testProto.prototype = {
  hello: function(){
    console.log('hello')
  }
}

// testProto.prototype.hello = function(){
//   console.log('hello')
// }
const ab = new testProto()

testProto.prototype = {

}

// class Clock{
//   constructor(template){
//     this._template = template
//   }
//   _render(){
//     let date = new Date()
//     let hours = date.getHours()
//     let secs = date.getSeconds()
//     let mins = date.getMinutes()
//     let output = this._template
//                     .replace('h', hours)
//                     .replace('m', mins)
//                     .replace('s', secs)
//   }
//   start(){
//     this._render()
//     this._timer = setInterval(() => this._render, 1)
//   }
// }
//
// let clock = new Clock({template: 'h:m:s'});

// class Animal {}
// class Rabbit extends Animal {}
//
// // for static propertites and methods
// alert(Rabbit.__proto__ == Animal); // true
//
// // and the next step is Function.prototype
// alert(Animal.__proto__ == Function.prototype); // true
//
// // that's in addition to the "normal" prototype chain for object methods
// alert(Rabbit.prototype.__proto__ === Animal.prototype);

let lis = document.querySelectorAll('li')
let output = []
for(let li of lis){
  let title = li.firstChild.data.trim()
  let descNodesCount = li.getElementsByTagName('li').length
  output.push({title, descNodesCount})
}
console.log('Final Output', output)

// let divs = document.querySelector('.test--outer')
// divs.outerHTML = '<p>Hello World</p>'
// console.log(divs.outerHTML)

// let data = {
//   "Fish": {
//     "trout": {},
//     "salmon": {}
//   },
//
//   "Tree": {
//     "Huge": {
//       "sequoia": {},
//       "oak": {}
//     },
//     "Flowering": {
//       "redbud": {},
//       "magnolia": {}
//     }
//   }
// };
//
// let container = document.createElement('div')
// container.className = 'container'
// let ul = document.createElement('ul')
// for(let item of data){
//   let li = document.createElement('li')
//   let text = document.createTextNode(item)
//   li.append(text)
//   for(let inneritem of li){
//
//   }
// }
//memoize
function memoize(func){
  let cache = {}
  return function(){
    let key = JSON.stringify(arguments)
    if(cache[key]){
      return cache[key]
    } else{
      let val = func.apply(this, arguments)
      cache[key] = val
      return val
    }
  };
}
let factorials = memoize(function(num){
  console.log('Working for factorial' + num)
  return num === 1 ? num : num * factorial(num-1)
})
console.log(factorials(3))

//handleScroll
function debounce(callback, wait, context = this) {
 let timeout = null
 let callbackArgs = null

 const later = () => callback.apply(context, callbackArgs)

 return function() {
   callbackArgs = arguments
   clearTimeout(timeout)
   timeout = setTimeout(later, wait)
 }
}

/*function debounce(fn, delay) {
  var timer = null;
  return function () {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}*/

// const handleScroll = debounce((e) => {
//  console.log('Window scrolled.')
// }, 1000)
// window.addEventListener('scroll', handleScroll)

function throttle(func, wait, context=this){
  let timeout = null
  let callbackArgs = null

  const later = () => {
    func.apply(context, callbackArgs)
    timeout = null
  }

  return function(){
    if(!timeout){
      callbackArgs = arguments
      timeout = setTimeout(later, wait)
    }
  }

}

// const handleKeydown = throttle((e) => {
//   console.log(e.target.value)
// }, 300)
//input.addEventListener('keydown', handleKeydown)


const sampleInput = [[1, 2, 3], { a: 2 }, [4, 5, 'hello', [45, [67, 89, 78, [11, 22, 33]]]], [6, 7, 8, 9]]
// > [1, 2, 3, { a: 2 }, 4, 5, "hello", 45, 67, 89, 78, 11, 22, 33, 6, 7, 8, 9]

function recursiveFlatten(arr){
  let op = []
  function isType(obj, type = 'Object'){
    return Object.prototype.toString.call(obj).indexOf(type) !== -1
  }
  for(let i=0; i < arr.length; i++){
    if(isType(arr[i], 'Array')){
      op = op.concat(recursiveFlatten(arr[i]))
    } else {
      op.push(arr[i])
    }
  }
  return op
}
console.log('Sample output', recursiveFlatten(sampleInput))

//count down
// let countdownIterator = {
//   countdown = 10,
//   next(){
//     return {
//       done: this.countdown === 0,
//       value: this.countdown
//     }
//   }
// }
// let countdownIterable = {
//   [Symbol.iterator](){
//     return Object.assign({}, countdownIterator)
//   }
// }
// let iterator = countdownIterable[Symbol.iterator]()
// iterator.next() //Object {done: false, value: 9}
// iterator.next() //Object {done: false, value: 8}
// let secondIterator = countdownIterable[Symbol.iterator]();
// let thirdIterator = countdownIterable[Symbol.iterator]();
//
// console.log( secondIterator.next() );
// // Object {done: false, value: 9}
//
// console.log( thirdIterator.next() );
// // Object {done: false, value: 9}
//
// console.log( secondIterator.next() );
// // Object {done: false, value: 8}

// function staticcounter(){
//   let count = 0
//   static increment(){
//     return ++count
//   }
//   static decrement(){
//     return --count
//   }
// }

// console.log(staticcounter.increment())
// console.log(staticcounter.increment())
// console.log(staticcounter.increment())
// console.log(staticcounter.increment())

const romanNumerals = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};

function convertToRoman(num) {
  let str = "";

  for (var thisRomanNumeral in romanNumerals ) {
    let thisRomanNumeralNumber = romanNumerals[thisRomanNumeral];
    let numDivisible = Math.floor(num / thisRomanNumeralNumber);
    num -= numDivisible * thisRomanNumeralNumber;
    for(let i = 0; i < numDivisible; i++) {
      str += thisRomanNumeral;
    }
  }
  return str;
}

function convertFromRoman(str) {
  let result = 0;
  for(var thisRomanNumeral in romanNumerals) {
    let thisRomanNumeralNumber = romanNumerals[thisRomanNumeral];
    while(str.indexOf(thisRomanNumeral) === 0) {
      result += thisRomanNumeralNumber;
      str = str.replace(thisRomanNumeral, '');
    }
  }
  return result;
}

function romanNumeralMultiplier (numeral) {
  const numberRepresentation = convertFromRoman(numeral);
  const numberResult = numberRepresentation * 3;
  return convertToRoman(numberResult);
}

console.log(romanNumeralMultiplier("IV"))

function tribonacci(number, memo){
  memo = memo || {}
  if(memo[number])
    return memo[number]
  if(number === 1 || number === 2)
    return 1
  if(number === 3)
    return 2
  return memo[number] = tribonacci(number-1, memo) + tribonacci(number-2, memo) + tribonacci(number-3, memo)
}
console.log(tribonacci(12))
//countand say
function countAndSay(n) {
	if (n <= 0)
	        return null;

	    var result = "1";
	    var i = 1;

	    while (i < n) {
	        var sb = '';
	        var count = 1;
	        for (var j = 1; j < result.length; j++) {
	            if (result.charAt(j) == result.charAt(j - 1)) {
	                count++;
	            } else {
	                sb += count;
	                sb += result.charAt(j - 1);
	                count = 1;
	            }
	        }

	        sb += count;
	        sb += result.charAt(result.length - 1);
	        result = sb;
	        i++;
	    }

	    return result;
}

console.log('Count and Say', countAndSay(4))

//calculator
let calculator = new __WEBPACK_IMPORTED_MODULE_0__calculator__["a" /* Calculator */]().fromString('7*2+2/8')
console.log('Calculator', calculator.value)


var body = document.body,
    button = document.querySelector('.handle'),
    animateTime = 900;

function getPageScroll() {
  var yScroll;

  if (window.pageYOffset) {
    yScroll = window.pageYOffset;
  } else if (document.documentElement && document.documentElement.scrollTop) {
    yScroll = document.documentElement.scrollTop;
  } else if (document.body) {
    yScroll = document.body.scrollTop;
  }
  return yScroll;
}

// button.addEventListener('click', function (event) {
//   let targetOffset, currentPosition
//   debugger;
//   targetOffset = document.getElementById(event.target.hash.substr(1)).offsetTop;
//   currentPosition = getPageScroll();
//
//   body.classList.add('in-transition');
//   // window.scrollTo(0, targetOffset);
//   body.style.WebkitTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
//   body.style.MozTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
//   body.style.transform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
//
//   window.setTimeout(function () {
//     body.style.WebkitTransform = "none"
//     // body.classList.remove('in-transition');
//     // body.style.cssText = "";
//     // console.log(window)
//     window.scrollTo(0, targetOffset);
//   }, animateTime);
//
//   event.preventDefault();
//
// }, false);


const cpalindrome = (number) => {
  if(x === 0 || x === 1) return true
  if(x < 0) return false
  let value = 1
  while(number/value > 10){
    value = value*10
  }
  while(number > 0){
    if(Math.floor(number/value) === number%10){
      number = Math.floor((number%value)/10)
      value = Math.floor(value/100)
    } else {
      return false
    }
  }
  return true
}
console.log(cpalindrome(12321))

const camelize = (str) => {
  let words = str.split('-')
  words.map((word, index) => {
    index === 0 ? word : word[0].toUpperCase() + word.slice(1)
  }).join('')
}

const filterRangeInPlace = (arr, start, end) => {
  arr.filter( item => (item >=start && item <= end))
}

// users.map( user => ({
//   id: user.id,
//   fullname: `${user.firstname} ${user.lastname}`
// }))
let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 29 }

let arr23 = [ john, pete, mary ];

// const findAverage = (arr) => {
//   arr.reduce((acc, curr) => acc + curr.age)/arr.length
// }

let range = {
  from: 1,
  to: 5,
  [Symbol.iterator]: function(){
    return{
      current: this.from,
      last: this.to,
      next(){
        if(this.current <= this.last){
          return {done: false, value: this.current++}
        } else {
          return {done: true}
        }
      }
    }
  }
};

for(let num of range){
  console.log(num)
}

const uniqueArr = (arr) => {
  return [...new Set(arr)]
}

const anangrams = (arr) => {
  let map = new Map()
  arr.forEach(word => {
    let sorted = word.toLowerCase().split('').sort().join('')
    map.set(sorted, word)
  })
  return Array.from(map.values())
}

let company = { // the same object, compressed for brevity
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

// The function to do the job
function sumSalaries(department) {
  if (Array.isArray(department)) { // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else { // case (2)
    let sum = 0;
    for(let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}

console.log('Salaries', sumSalaries(company));


function sumTo(n){
  if(n === 1) return 1
  return n + sumTo(n-1)
}


let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

const printList = (list) => {
  while(list){
    console.log(list.value)
    list = list.next
  }
  // while(list.next){
  //   printList(list.next)
  // }
}
printList(list)


const reverseList = (list) => {
  while(list.next){
    reverseList(list.next)
  }
  console.log(list.value)
}

const reverseList2 = (list) => {
  let arr = []
  while(list){
    arr.push(list.value)
    list = list.next
  }
  return arr.reverse()
}
console.log(reverseList2(list))
// /sum(1)(2) = 3
const summed = (n) => {
  // let currSum = n
  // let recurSum = (x) => {
  //   currSum += x
  //   return recurSum
  // }
  // recurSum.toString = () => return currSum
  // return recurSum
  // for two level
  return function(x){
    return n + x
  }
}

console.log('Summed', summed(1)(2))

const inBetween = (args, ...filters) => {
  let filt = args.filter(num => {
    if(num >= filters[0] && num <= filters[1]){
      return num
    }
  })
  return filt
}

console.log(inBetween([1, 2, 3, 4, 5, 6, 7], 3, 5))

//largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001].

const largestOfFour = (arr) => {
  return arr.map(values => {
    if(Array.isArray(values)){
      return Math.max(...values)
    }
  })

}
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

function ask(question, ...handlers) {
  let isYes = confirm(question);

  for(let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }

}
//ask("Question?", () => alert('You said yes'), result => alert(result));

let count1 = new __WEBPACK_IMPORTED_MODULE_1__counter__["a" /* CounterC */](10);
count1.increment()
count1.increment()
count1.increment()
count1.decrement()
console.log('Counter value', count1.value)
count1.value = 15
count1.decrement()
console.log('Counter value', count1.value)


function printNumbers(from=1, to=100){
  let timerId = setInterval(() => {
        console.log(from)
        if(from === to){
          clearInterval(timerId)
        }
        from++;
  }, 1000)
}
//printNumbers()


const spy = (func) => {
  let cache = new Map()
  function wrapper(...args){
    let key = [].join.call(arguments)
    wrapper.calls.push(args)
    if(cache.get(key)){
      return cache.get(key)
    }
    let result = func.apply(this, arguments)
    cache.set(key, result)
    return result
  }
  wrapper.calls = []
  return wrapper
}

function work(a, b) {
  console.log( 'Work', a + b ); // work is an arbitrary function or method
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for(let args of work.calls) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}


let dictionary = Object.create(null, {
  toString: { // define toString property
    value() { // the value is a function
      return Object.keys(this).join();
    }
  }
});


let clock = new __WEBPACK_IMPORTED_MODULE_2__clock__["a" /* Clock */]()
clock.start();
setTimeout(() => clock.stop(), 10000)


const decoratorThrottle = (func, ms) => {
  let isThrottled = false,
      savedArgs,
      savedThis;

  function wrapper(){
    //save the last memoized call
    if(isThrottled){
      savedArgs = arguments
      savedThis = this
      return;
    }

    func.apply(this, arguments)
    isThrottled = true

    setTimeout(function(){
      isThrottled= false
      if(savedArgs){
        wrapper.apply(savedThis, savedArgs)
        savedThis = savedArgs = null
      }
    }, ms)
  }
  return wrapper;
}

// let auto = new Autocomplete();


/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Autocomplete {
  constructor(input, options = {}) {
    this.configure(Autocomplete.defaults);
    this.configure(options);

    this.input = input;
    this.isCompleting = false;

    this.completions = document.createElement('div');
    this.completions.classList.add('autocomplete');
    insertAfter(this.input, this.completions);
    this.completions = new SelectionBox(this.completions);

    this.input.addEventListener('focus', e => {
      clearTimeout(this.blurTimer);
    });

    this.input.addEventListener('blur', e => {
      this.blurTimer = setTimeout(_ => this.stopCompleting(), 100);
    });

    this.input.addEventListener('input', e => {
      clearTimeout(this.inputTimer);
      this.inputTimer = setTimeout(_ => {
        if(this.isActionable(e)) {
          if(!this.isCompleting) this.startCompleting();
          this.refreshCompletions()
        } else {
          this.stopCompleting();
        }
      }, 500);
    });

    this.input.addEventListener('keydown', e => {
      let key = whichkey(e);
      if(this.isCompleting) {
        if(key.enter || key.up || key.down) {
          e.preventDefault();
          return false;
        } else if(key.esc) {
          this.stopCompleting();
        }
      }
    });
  }

  configure(options) {
    this.options = Object.assign(this.options || {}, options);
  }

  isActionable(e) {
    return this.options.threshold.call(this, this.input, e);
  }

  startCompleting() {
    this.completions.container.classList.add('open');
    this.completions.focus();
    this.isCompleting = true;
  }

  stopCompleting() {
    this.completions.container.classList.remove('open');
    this.completions.blur();
    this.isCompleting = false;
  }

  refreshCompletions() {
    this.completions.resetItems();

    let callback = (items) => {
      this.isQuerying = false;

      items.forEach(item => {
        let element = this.options.render.call(this, item);
        this.completions.addItem(element, _ => this.applyCompletion(item));
      });
    };

    if(!this.isQuerying) {
      this.isQuerying = true;
      let result = this.options.query.call(this, this.input.value, this.options.source, callback);
      if(result) callback(result);
    }
  }

  applyCompletion(item) {
    this.options.complete.call(this, item);
    this.stopCompleting();
  }
}
/* unused harmony export Autocomplete */


Autocomplete.defaults = {

  // ...
  threshold: function(input, e) {
    return input.value.length > 0;
  },

  // ...
  source: [],

  // ...
  query: function(query, source) {
    return source.filter(item => {
      return !!item.toLowerCase().match(query.toLowerCase());
    });
  },

  // ...
  render: function(item) {
    return docment.createTextNode(item);
  },

  // ...
  complete: function(item) {
    this.input.value = item;
  },
};

// variables
var input = document.querySelector('input');
var people = ['john doe', 'maria', 'paul', 'george', 'jimmy'];
var results;

// functions
function autocomplete(val) {
  var people_return = [];

  for (i = 0; i < people.length; i++) {
    if (val === people[i].slice(0, val.length)) {
      people_return.push(people[i]);
    }
  }

  return people_return;
}

// events
input.onkeyup = function(e) {
  input_val = this.value; // updates the variable on each ocurrence

  if (input_val.length > 0) {
    var people_to_show = [];

    autocomplete_results = document.getElementById("autocomplete-results");
    autocomplete_results.innerHTML = '';
    people_to_show = autocomplete(input_val);

    for (i = 0; i < people_to_show.length; i++) {
      autocomplete_results.innerHTML += '<li>' + people_to_show[i] + '</li>';

    }
    autocomplete_results.style.display = 'block';
  } else {
    people_to_show = [];
    autocomplete_results.innerHTML = '';
  }
}


/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Calculator {
   constructor(initialValue) {
     this.setValue = this.setValue.bind(this);
     this.times = this.times.bind(this);
     this.minus = this.minus.bind(this);
     this.plus = this.plus.bind(this);
     this.dividedBy = this.dividedBy.bind(this);
     this.toString = this.toString.bind(this);
     this.fromString = this.fromString.bind(this);

     this.setValue(initialValue);
   }
   setValue(val) {
     this.value = val;
     this.string = '' + val;
   }
   times(val) {
      this.value = this.value * val;
      this.string += '*' + val;
      return this;
   }
   minus(val) {
      this.value -= val;
      this.string += '-' + val;
      return this;
   }
   plus(val) {
      this.value += val;
      this.string += '+' + val;
      return this;
   }
   dividedBy(val) {
      this.value = this.value / val;
      this.string += '/' + val;
      return this;
   }
   toString() {
     return this.string;
   }
   fromString(str) {
      let numbers = [0,1,2,3,4,5,6,7,8,9];
      let operators = ['*', '-', '+', '/'];
      let currentNumberString = '';
      let currentOperatorChar = '';
      let operatorHandlers = {
        '*': this.times,
        '-': this.minus,
        '+': this.plus,
        '/': this.dividedBy
     }
      str.split('').forEach((char) => {
          if (numbers.indexOf(parseInt(char, 10)) !== -1) {
            // store this as part of next number to be used
            currentNumberString += char;
          } else if (operators.indexOf(char) !== -1) {
            // found the next operator
            if (!this.value) {
               // store intial value for operator to be used against if it isn't set
               this.setValue(parseInt(currentNumberString, 10));
            } else {
               // use the last operator, then store this one
               operatorHandlers[currentOperatorChar](parseInt(currentNumberString, 10))
            }
            currentNumberString = '';
            currentOperatorChar = char;

          }
      });
      // do the last operator and number
      operatorHandlers[currentOperatorChar](parseInt(currentNumberString, 10));
      return this;
   }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Calculator;



/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Clock{
  constructor(){
    this.render = this.render.bind(this)
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
  }
  render(){
    this.date = new Date()
    this.hrs = this.date.getHours()
    this.mins = this.date.getMinutes()
    this.secs = this.date.getSeconds()
    this.output = `${this.hrs}:${this.mins}:${this.secs}`
    console.log(this.output)
  }
  stop(){
    clearInterval(this.timer)
  }
  start(){
    this.render()
    this.timer = setInterval(() => this.render(), 1000)
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Clock;



/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class CounterC{
  constructor(value = 0){
    this._value = value
    this.increment = this.increment.bind(this)
  }
  increment(){
    this._value += 1
  }
  decrement(){
    this._value -= 1
  }
  get value(){
    return this._value
  }
  set value(val){
    this._value = val
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CounterC;



/***/ })

/******/ });
//# sourceMappingURL=sandboxEntry.js.map