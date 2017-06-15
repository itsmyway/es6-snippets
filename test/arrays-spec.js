describe("ARRAYS", function(){
  it("Should return the first matching element using find", function(){
    let arr = [1,4,5];
    expect(arr.find(n => n > 3)).toBe(4);
  });
  it("Should return the first matching index using findIndex", function(){
    let arr = [1,4,5];
    expect(arr.findIndex(n => n > 3)).toBe(1);
  });
  it("Should fill entire array with value specified", function(){
    let arr = [1,4,5];
    arr.fill('a');
    expect(arr[1]).toBe('a');
  });
  it("Should fill array at start and end index when args are passed", function(){
    let arr = [1,2,3,4,5];
    arr.fill('a',2,3);
    expect(arr[2]).toBe('a');
    expect(arr[3]).toBe(4);
  });
  it("Copy elements with copywithin", function(){
    let arr = [1,2,3,4];
    // arr.copywithin(2,0) 2 target index and 0 index to be copied from [1,2,1,2]
    //arr.copywithin(2,0,1) 3rd index to denote how many items to copy [1,2,1,4]
    // arr.copywithin(0, -2) 0 target index and -2 index to reverse copy [3,4,3,4]
    arr.copyWithin(2,0);
    expect(arr[2]).toBe(1);
    expect(arr[3]).toBe(2);
  });
  it("Should create an array with length 1", function(){
    let arr = new Array(3); //creates [,,] undefined
    let ofArr = Array.of(3); // [3]
    expect(arr.length).toBe(3);
    expect(ofArr.length).toBe(1);
  });
  it("Should create a new array from an array like function when array from is called", function(){
    let arrLike = document.querySelectorAll('div');
    //expect(typeof arrLike.forEach).toEqual('function'); - seems to work
    let fromArray = Array.from(arrLike);
    expect(fromArray.forEach).toBeDefined();
  });
  it("Should return entries from the entries function", function(){
    let arr = ["Sam", "Bob", "Alex"],
        entries = arr.entries(),
        firstEntry = entries.next().value;
    //expect(typeof arrLike.forEach).toEqual('function'); - seems to work
    expect(firstEntry[0]).toBe(0);
    expect(firstEntry[1]).toBe("Sam");
  });
  it("Should return keys with the keys function", function(){
    let arr = ["Sam", "Bob", "Alex"],
        entries = arr.keys(),
        firstKey = entries.next().value;
    //expect(typeof arrLike.forEach).toEqual('function'); - seems to work
    expect(firstKey).toBe(0);
  });
  // it("Should create array comprehensions easily", function(){
  //   let arr = [for (i of [1,4,5]) i]; // [1,4,5]
  //   expect(arr[2]).toBe(4);
  //   let arr2 = [for (i of [1,2,3] i*i)] //[1,4,9]
  //   expect(arr2[2]).toBe(9);
  //   let arr3 = [for (i of [1,2,3]) if(i < 3) i] [1,2]
  //   expect(arr3[1]).toBe(2);
  //
  //   let arr4 = [for (first of ["William", "Sam", "Bob"])
  //         for (middle of ["Washington", "Samuel", "Alex"])
  //         if(first != middle)(first + ' ' + middle + "Aura")]
  //   console.log(arr4);
  //   expect(arr4[0]).toBe("William Washington Aura");
  // });
})
