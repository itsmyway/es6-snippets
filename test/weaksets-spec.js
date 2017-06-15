describe("WEAKSETS", function(){
  //weakmaps and weakset same logic applies
  it("Should not have properties or methods that relate to the entire set", function(){
    let set = new WeakSet();
    expect(set.size).toBeUndefined();
    expect(set.forEach).toBeUndefined();
    expect(set.entries).toBeUndefined();
    expect(set.values).toBeUndefined();
  })
  //add, delete and clear are same as sets
});
