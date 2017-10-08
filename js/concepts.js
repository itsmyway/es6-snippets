/*The Object.assign() method is used to copy the values of all enumerable own properties
from one or more source objects to a target object. It will return the target object.
*/
let obj = { a: 1}
let copy = Object.assign({}, obj)

// Deep Clone
  obj1 = { a: 0 , b: { c: 0}};
  let obj3 = JSON.parse(JSON.stringify(obj1));
  obj1.a = 4;
  obj1.b.c = 4;
  console.log(JSON.stringify(obj3)); // { a: 0, b: { c: 0}}

//Deep clone option 2
const clone = (obj) => {
  //primitive case
  if(obj === null || typeof obj !== "object"){
    return obj
  }
  //Date
  if(obj instanceof Date){
    return new Date(obj.getTime())
  }
  //Array
  if(Array.isArray(obj)){
    let cloneArray = []
    obj.forEach(item => {
      cloneArray.push(clone(item))
    })
    return cloneArray
  }
  // objects

  let cloneObj = new obj.constructor()
  for(let prop in obj){
    if(obj.hasOwnProperty()){
      cloneObj[prop] = clone(obj[prop])
    }
  }
  return cloneObj
}
//Object create
var o;

// create an object with null as prototype
o = Object.create(null);

//9790474049

o = {};
// is equivalent to:
o = new Object()
// is equivalent to:
o = Object.create(Object.prototype);

function Constructor() {}
o = new Constructor();
// is equivalent to:
o = Object.create(Constructor.prototype);

//
String repeatifyif (!String.prototype.repeat) { // if there's no such method
  // add it to the prototype

  String.prototype.repeat = function(n) {
    // repeat the string n times

    // actually, the code should be more complex than that,
    // throw errors for negative values of "n"
    // the full algorithm is in the specification
    return new Array(n + 1).join(this);
  };
}
Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
};
function f() {
  alert("Hello!");
}
f.defer(1000); // shows "Hello!" after 1 sec

function f(a,b){
  return a + b
}
Function.prototype.defer = function(ms){
  let f = this
  return function(...args){
    setTimeout(() => fn.apply(this, args), ms)
  }
}
f.defer(1000)(2,3)

/*debounce
Debouncing enforces that a function not be called again until a certain amount of
time has passed without it being called. As in "execute this function only if 100 milliseconds
 have passed without it being called."
 */

 /** throttling
 Throttling enforces a maximum number of times a function can be called ov
 er time. As in "execute this function at most once every 100 milliseconds."
 */
 function debounce(callback, wait, context = this) {
   debugger;
  let timeout = null
  let callbackArgs = null

  const later = () => callback.apply(context, callbackArgs)

  return function() {
    callbackArgs = arguments
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

const handleScroll = debounce((e) => {
  console.log('Window scrolled.')
}, 100)
window.addEventListener('scroll', handleScroll)
