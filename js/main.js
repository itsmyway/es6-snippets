console.log("JS Interview Questions");

import requestXHR from './ajaxExport';
requestXHR({url: "employees.json"})
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
        });
        document.getElementById("main").innerHTML = html;
    })
    .catch(error => {
        console.log(error);
    });

//-------------------------------------------------------------------------------------------------------------------------
//Repeatify
// console.log('hello'.repeatify(3))
// String.prototype.repeatify = String.prototype.repeatify || function (n){
//   let str;
//   for(let i=0; i<n; i++){
//     str += this
//   }
//   return str;
// }
//-------------------------------------------------------------------------------------------------------------------------
import json from '../src/data.json';
console.log('JSON' + JSON.stringify(json));
//-------------------------------------------------------------------------------------------------------------------------
import './createCompany';

//One way to import from modules
// import {Employee, log, modelEmployee} from './employee';
// let emp = new Employee('Anu');
// document.querySelector('.module').innerHTML = emp.doWork();
// log(modelEmployee);

//Second way to import from modules
let emp = require('./employee');
console.log(emp);

 let anu = new emp.Employee('anu');
// //anu._name = 'priya'; will not work if we use symbol to store
emp.log(emp.modelEmployee);
emp.log(anu);

//Find random number between  1 and 6
//Math.floor(Math.random() * 6) + 1
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Array.prototype.random = function () {
//   return this[Math.floor((Math.random()*this.length))];
// }

//-------------------------------------------------------------------------------------------------------------------------
/*"this" is undefined within IIFE function,*/
(function() {
  "use strict";
  let f = this ? class g { } : class h { };
  console.log(typeof f);
  console.log(typeof h);
  return [
    typeof f,
    typeof h
  ];
})();
//-------------------------------------------------------------------------------------------------------------------------
//find largest product yielded from three of the integers
// Greatest product is either (min1 * min2 * max1 || max1 * max2 * max3)

let unsortedArray = [-10, 7, 29, 30, 5, -10, -70],
    sortedArray = unsortedArray.sort((a, b) => a-b);

let findMaxProduct = function(arr){
  const min1 = arr[0],
        min2 = arr[1],
        max1 = arr[arr.length -1];


  //min1 * min2 * max1
  let option1 = min1 * min2 * max1,
      option2 = 1;

  //max1 * max2 * max
  for(let i=arr.length-1; i > arr.length-4; i--){
    option2 = option2 * arr[i];
  }

  if(option1 > option2) return option1;

  return option2;
}
console.log('Max Product :  ' + findMaxProduct(sortedArray));
//-------------------------------------------------------------------------------------------------------------------------
// Removing duplicates of an array and returning an array of only unique elements

let array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8],
    nondupArray = Array.from(new Set(array));

console.log(`Unique Array ES6 \n ${nondupArray}`);

let findUnique = function(array){
  let hashMap = {},
      uniqueArray = [];

  for(let i=0; i< array.length; i++){
    if(!hashMap.hasOwnProperty(array[i])){
      hashMap[array[i]] = 1;
      uniqueArray.push(array[i]);
    }
  }

  return uniqueArray;
}
let nonDupArray2 = findUnique(array);

console.log(`Unique Array ES5 \n ${nonDupArray2}`);

//-------------------------------------------------------------------------------------------------------------------------
//Given an array of integers, find the largest difference between two elements such that the element of lesser value must come before the greater element
// [7, 8, 4, 9, 9, 15, 3, 1, 10] would return `11` based on the difference between `4` and `15`
// Notice: It is not `14` from the difference between `15` and `1` because 15 comes before 1.
let arr = [7, 8, 4, 9, 9, 15, 3, 1, 10];
let LargestDiff = findLargestDiff(arr);

console.log(`Find Largest differ :: ${LargestDiff}`);


function findLargestDiff(array){
  let currentMin = arr[0];
  let currentMaxDiff = 0;

  // If there is only one element, there is no difference
  if(array.length <= 1) return -1;

 // We will iterate through the array and keep track of the current max difference
 // If we find a greater max difference, we will set the current max difference to that variable
 // Keep track of the current min as we iterate through the array, since we know the greatest
 // difference is yield from `largest value in future` - `smallest value before it`
  for(let i=1; i<arr.length; i++){
    if(array[i] > currentMin && array[i]-currentMin > currentMaxDiff){
      currentMaxDiff = array[i]-currentMin;
    } else if(array[i] <= currentMin){
      currentMin = array[i];
    }
  }
  // If negative or 0, there is no largest difference
  if(currentMaxDiff <= 0) return -1
  return currentMaxDiff;
}
//-------------------------------------------------------------------------------------------------------------------------
//Given an array of integers, return an output array such that output[i] is equal to the product of all the elements in the array other than itself. (Solve this in O(n) without division)

let firstArray = [2, 2, 4, 1],
    secondArray = [0, 0, 0, 2],
    thirdArray = [-2, -2, -3, 2];

console.log(productExceptSelf(firstArray)); // [8, 8, 4, 16]
console.log(productExceptSelf(secondArray)); // [0, 0, 0, 0]
console.log(productExceptSelf(thirdArray)); // [12, 12, 8, -12]
function productExceptSelf(arr){
  let init = 1,
      index = 0,
      size = arr.length,
      output = [];
  while(index < arr.length){
    init = 1;
    for(let i=0; i<arr.length; i++){
      if(index != i){
        init = init * arr[i];
      }
    }
    output.push(init);
    index++;
  }
  return output;
}

//-------------------------------------------------------------------------------------------------------------------------
// Find the intersection, union, difference of two arrays.
// union / concat can be easily done via
// The spread operator (...) turns an iterable into the arguments of a function or parameter call,
// Spread also turns an iterable into the elements of an array
//The Array.from() method creates a new Array instance from an array-like or iterable object.
let newFirst = [2, 2, 4, 1];
let newSecond = [1, 2, 0, 2];

let a = new Set(newFirst),
    b = new Set(newSecond);

let union = Array.from(new Set([...a, ...b]));
console.log(`UNION :: ${union}`);

let intersection = Array.from(new Set([...a].filter(x => b.has(x))));
console.log(`INTERSECTION :: ${intersection}`);

let difference = Array.from(new Set([...a].filter(x => !b.has(x))));
console.log(`DIFFERENCE :: ${difference}`);
//-------------------------------------------------------------------------------------------------------------------------
//Given a string, reverse each word in the sentence "Welcome to this Javascript Guide!" should be become "emocleW ot siht tpircsavaJ !ediuG"
let string = "Welcome to this Javascript Guide!";

function reverseBySeperator(str, seperator){
  return str.split(seperator).reverse().join(seperator);
}

let reverseSentence = reverseBySeperator(string, "");
let reverseWord = reverseBySeperator(string, " ");
console.log(`Reversed Sentence ${string} becomes ${reverseSentence}`);
//-------------------------------------------------------------------------------------------------------------------------
//Find anagrams "Mary" is an anagram of "Army"

let words = ["Mary", "Army", "Sam", "Mas", "one", "two"], output = [];

function isAnagram(word1, word2){
  let wd1 = word1.toLowerCase().split("").sort().join(""),
      wd2 = word2.toLowerCase().split("").sort().join("");
  return wd1 === wd2;
}
for(let j=0; j<words.length; j++){
  for(let i=1; i<words.length; i++){
    if(i !== j && isAnagram(words[j], words[i])){
      let wordArray = [words[j], words[i]];
      output.push(wordArray);
    }
  }
}

console.log("Anagram arrays", output);
//-------------------------------------------------------------------------------------------------------------------------

// Let's say I want to do the following:
//
// Collect two days' worth of tasks.
// Convert the task durations to hours, instead of minutes.
// Filter out everything that took two hours or more.
// Sum it all up.
// Multiply the result by a per-hour rate for billing.
// Output a formatted dollar amount.

let monday = [
  {
    'name': 'Write a tutorial',
    'duration': 120
  },
  {
    'name': 'Some web development',
    'duration': 60
  }
];
let tuesday = [
  {
    'name': 'Keep writing that tutorial',
    'duration': 240
  },
  {
    'name': 'Some more web development',
    'duration': 140
  },
  {
    'name': 'A whole lot of nothing',
    'duration': 120
  }
]

let tasks = [monday, tuesday]

let totalTaskDur = tasks.reduce((previous, current) => previous.concat(current))
                        .map((task) => task.duration/60)
                        .filter((duration) => duration >= 2)
                        .map((billing) => billing * 25)
                        .reduce((accu, current) => [(+accu) + (+current)])
                        .map((amount) => '$' + amount.toFixed(2))
                        .reduce((formatted_amount) => formatted_amount);

console.log("Tasks greater than 2 hrs", totalTaskDur);
                      //  .map((task) => task.duration * 25);

                        //reduce ((accumulator, current))
// .reduce((accumulator, current) => accumulator + current.duration); If we need to collect the total duration
// console.log('Total task', Object.prototype.toString.call(totalTask));
// let totalDuration = totalTask.reduce(function (previous, current) {
//   return previous + current.duration;
// },0);
//console.log('Total task duration', totalTaskDur);

//-------------------------------------------------------------------------------------------------------------------------
class Foo{
  constructor(prop){
    this.prop = prop;
  }
  static staticMethod(){
    return 'Classy';
  }
  prototypeMethod(){
    return 'prototypical';
  }
}
let foo = new Foo(123)

console.log(Foo === Foo.prototype.constructor);
console.log('Type of Foo: ' +typeof Foo);
console.log('Type of Foo Static:' +typeof Foo.staticMethod);
console.log(Foo.staticMethod());
console.log('TYpeof Foo Prototypical:' +typeof Foo.prototype.prototypeMethod);
console.log(foo.prototypeMethod());

class MyClass {
    get prop() {
        return 'getter';
    }
    set prop(value) {
        console.log('setter: '+value);
    }
}

const inst = new MyClass();
inst.prop = 456;
console.log(inst.prop);

//-------------------------------------------------------------------------------------------------------------------------
class IterableArgs {
  constructor(...args){
    this.args = args;
  }
  *[Symbol.iterator](){
    for(const arg of this.args){
      yield arg;
    }
  }
}

let iter = new IterableArgs('hello', 'world');
for(let x of iter){
  console.log('Item:', x);
}
//-------------------------------------------------------------------------------------------------------------------------
//Storing pricate data variables Exploringjs.com //classes
class CountDown{
	constructor(counter, cb){
		this.dec = function(){
    console.log("Counter" + counter);
      if(counter === 0) { cb(); }
      if(counter < 1) return;
      console.log('Decrementing' + counter--);
    }
	}
}
let c = new CountDown(2, () => console.log('DONE'))
c.dec();
c.dec();
//-------------------------------------------------------------------------------------------------------------------------
//Promises

function asyncF(){
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('success'), 3000);
  })
}
asyncF().then((resp) => console.log(resp));

//using async/awai

async function main(){
  let x = await asyncF();
  console.log('Result' +x);
}
main();
//-------------------------------------------------------------------------------------------------------------------------
//Reading from a file without a promise
// fs.readFile('../src/config.json',
//     function (error, text) {
//         if (error) {
//             console.error('Error while reading config file');
//         } else {
//             try {
//                 const obj = JSON.parse(text);
//                 console.log(JSON.stringify(obj, null, 4));
//             } catch (e) {
//                 console.error('Invalid JSON in file');
//             }
//         }
//     });

//Reading from a file using a Promise
//import {readFile} from 'fs';

// function readFileUsingPromise(filename){
//   console.log('Entering fn');
//   //if multiple filenames
//   // filenames.forEach((filenam) => {
//   //
//   // })
//   return new Promise((resolve, reject) => {
//     readFile(filename, {encoding: 'utf-8'}, (error, data) =>{
//       if(error){
//         reject(error);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

//usage
// readFileUsingPromise('../src/config.json')
//   .then((resp) => console.log(resp))
//   .catch((error) => console.log(error))

//Random generator array length
// let colors = ["red", "blue", "green", "yellow", "purple"]
// let buttonEl = document.querySelector('#hello')
//
// const randomColorGen = (arr) => {
// 	return colors[Math.floor(Math.random() * arr.length)]
// }
//
// setInterval(() => {
//    buttonEl.style.backgroundColor = randomColorGen(colors)
// }, 1000)
