describe("ITERABLES", function(){
  it("can work with iterators at low level", function(){
    let sum = 0,
        numbers = [1, 5, 4];

    //for loop
    for(let i=0; i<numbers.length; i++){
      sum += numbers[i];
    }
    expect(sum).toBe(10);

    //for in loop
    sum = 0;
    for(let i in numbers){
      sum += numbers[i];
    }
    expect(sum).toBe(10);

    //iterators
    sum = 0;
    let iterator = numbers[Symbol.iterator]();// var iterator = numbers.values(); does not work in chrome
    let next = iterator.next();
    while(!next.done){
      sum += next.value;
      next = iterator.next();
    }
    expect(sum).toBe(10);
  });
  it("can work with for-of at high level", function(){
    let sum = 0,
        numbers = [1, 5, 4];
    for(let i of numbers){
      sum += i;
    }
    expect(sum).toBe(10);
  });
  it("build your own iterator", function(){
    class Company{
      constructor(){
        this.employees = [];
      }
      addEmployees(...names){
        this.employees = this.employees.concat(names);
      }
      [Symbol.iterator](){
        return new ArrayIterator(this.employees);
      }
    }
    class ArrayIterator{
      constructor(array){
          this.array = array;
          this.index = 0;
      }
      next(){
        let result = {value: undefined, done: true};
        if(this.index < this.array.length){
          result.value = this.array[this.index];
          result.done = false;
          this.index += 1;
        }
        return result;
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
});
