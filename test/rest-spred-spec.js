describe ("REST and SPREAD params", function(){
  it("its like varargs", function(){
    var math = function(name, ...numbers){
      let result = 0;
      numbers.forEach(function(n){
        result += n;
      })
      return result;
    }
    let add = math("add", 1, 5, 4) // if passed as ("add") returns 0 as nothing is sent means empty array
    expect(add).toBe(10)
  });

  it("spreads the array across parameters", function(){
    var math = function(x, y, z){
      return x + y + z;
    }
    let add = math(...[1, 5, 4]) // if passed as ("add") returns 0 as nothing is sent means empty array
    expect(add).toBe(10)
  });

  it("can embed one array into another", function(){
    let a = [4, 5, 6, 7],
        b = [1, 2, 3, ...a, 8, 9, 10];
    expect(b).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
