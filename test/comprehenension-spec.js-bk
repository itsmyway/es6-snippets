it("build multiple iterator functions using generators", function(){
  class Company{
    constructor(){
      this.employees = [];
    }
    addEmployees(...names){
      this.employees = this.employees.concat(names);
    }
    *[Symbol.iterator](){
      for(let e of this.employees) {
        yield e;
      }
    }
  }
  //filter function
  let filter = function*(items, predicate){
    //not working in babel loader env
    yield* (for (item of items) if(predicate(item)) item);
  }
  //take function
  let take = function*(items, number){
    let count = 0;
    if(number < 1) return;
    for(let item of items){
      yield item;
      count += 1;
      if (count >= number) { return; }
    }
  }

  let count = 0;
  let adidas = new Company();
  adidas.addEmployees("Scott", "Sam", "Bob", "Kyle");

  for(let employee of take(filter(adidas, emp => emp[0] == "S"), 1)) {
    count += 1;
  }
  expect(count).toBe(1);
});
