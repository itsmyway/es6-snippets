//Let Example - True block scoping

var doWork = function(flag){
  if(flag){
    var x = 3;
  }
  return x;
}

var result = doWork(false);
console.log(result);


// function greaterThan(m){
//   return function(n) { return n > m;};
// }
// const greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));
