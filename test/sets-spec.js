describe("SETS", function(){
  it("Should be of size 0 when constructed", function(){
    let set = new Set();
    expect(set.size).toBe(0);
  });
  it("Should contain 1 item when new item added", function(){
    let set = new Set();
    set.add("Sam")
    expect(set.size).toBe(1);
  });
  it("Should allow objects as keys", function(){
    let set = new Set(),
        key = {};
    set.add(key);
    expect(set.has(key)).toBe(true);
  });
  it("Should contain array values as keys when passed in constructor", function(){
    let set = new Set([1,2,3]);
    expect(set.has(1)).toBe(true);
  });
  it("Should not allow duplicate values", function(){
    let set = new Set();
    let key = {};
    set.add(key);
    set.add(key);
    expect(set.size).toBe(1);
  });
  it("Should have no items after clear is called", function(){
    let set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);
    set.clear()
    expect(set.size).toBe(0);
  });
  it("Should remove an item when delete is called", function(){
    let set = new Set();
    set.add(1);
    set.add(2);
    set.delete(1);
    expect(set.size).toBe(1);
  });
  //Set iterator
  it("Should call a callback function once for each item when forEach is invoked", function(){
    let set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);

    let count = 0;
    set.forEach(item => count++);
    expect(count).toBe(3);
  });

  it("Should support iterations", function(){
    let set = new Set([1,2,3]);

    let count = 0;
    for(let item of set) {
      count++;
    }
    expect(count).toBe(3);
  });

  it("Should return an iterator of arrays when entries function is called", function(){
    let set = new Set([1,2,3]),
        entries = set.entries(),
        firstEntry = entries.next().value;
    expect(firstEntry[0]).toBe(1);
    expect(firstEntry[1]).toBe(1);
  });

  it("Should return an iterator of values when value function is called", function(){
    let set = new Set([1,2,3]),
        values = set.values(),
        firstValue = values.next().value;
    expect(firstValue).toBe(1);
  });

  it("Construct new set from old", function(){
    let set = new Set([1,2,3]);
    let set2 = new Set(set.values()) //new Set(set) also works
    expect(set2.size).toBe(3);
  });
})
