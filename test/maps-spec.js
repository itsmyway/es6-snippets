describe("MAPS", function(){
  it("Should contain one key value when an item is added", function(){
    let map = new Map()
    map.set("name", "john");
    expect(map.has("name")).toBe(true);
  });
  it("Should return value when called with right key using get ", function(){
    let map = new Map();
    map.set("name", "john");
    expect(map.get("name")).toBe("john");
  });
  it("Should allow an object to be the key", function(){
    let map = new Map();
    let person = {'name' : 'John'};
    map.set(person, 20);
    expect(map.get(person)).toBe(20);
  });
  it("Should contain items when an array is given in a constructor", function(){
    let map = new Map([['name', 'john'],['age','29'],['job','engineer']]);
    expect(map.get("name")).toBe("john");
  });
  it("Should not allow duplicates, overrides with latest", function(){
    let map = new Map();
    let key = {};
    map.set(key, 'first');
    map.set(key, 'second');
    expect(map.get(key)).toBe("second");
  });
  //clear and delete functions similar to set
  it("Should call the callback once for each item when foreach is called", function(){
    let map = new Map([['name', 'john'],['age','29'],['job','engineer']]);
    let count = 0;
    map.forEach((value, key) => count++)
    expect(count).toBe(3);
  });
  it("Should support for of for iteration", function(){
    let map = new Map([['name', 'john'],['age','29'],['job','engineer']]);
    let count = 0;
    for (let [key, value] of map){ //[key value] is ES6 for easy iteration than i
      count++;
    }
    expect(count).toBe(3);
  });
  //entries, keys and  values are same as sets
  it("Should be able to construct with an iterator", function(){
    let map = new Map();
    map.set('1');
    map.set('2');
    map.set('3');
    let map2 = new Map(map.entries());
    expect(map2.has('1')).toBe(true);
  });
})
