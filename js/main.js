function greaterThan(m){
  return function(n) { return n > m;};
}
const greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
