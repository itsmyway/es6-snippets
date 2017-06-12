describe("GENERATOR FUNCTIONS", function(){
  it("can build an iterable", function(){
    let numbers = function*(start, end){
      for(let i=start; i<=end; i++){
        yield i;
      }
    };

    let sum = 0;
    for(let n of numbers(1,5)){
      sum += n;
    }
    expect(sum).toBe(15);
  });

  it("build your own iterator using generators", function(){
    class Company{
      constructor(){
        this.employees = [];
      }
      addEmployees(...names){
        this.employees = this.employees.concat(names);
      }
      *[Symbol.iterator](){
        for(let e of this.employees) {
          console.log(e);
          yield e;
        }
      }
    }

    let count = 0;
    let adidas = new Company();
    adidas.addEmployees("Scott", "Alex", "Bob", "Kyle");

    for(let employee of adidas){
      count += 1;
    }
    expect(count).toBe(4);
  });

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
      for (let item of items){
        if(predicate(item)){
          yield item;
        }
      }
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

  it("can take a parameter from next(param)", function(){
    let range = function*(start, end){
      let count = 1;
      while(start <= end){
        yield start;
        count += 1;
      }
    }

    let result = [];
    let iterator = range(1, 10);
    let next = iterator.next();
    while(!next.done){
      result.push(next.value);
      next = iterator.next(2)
    }

    //expect(result).toEqual([1, 3, 5, 7, 9]);
  });
});
