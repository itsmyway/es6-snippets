describe ("LET, CONST", function(){
  it("let fails when return outside", function(){
    var doWork = function(flag){
      if(flag)
      {
        let x = 3;
      }
      return x;
    }
    var result = doWork(true);  // x is not defined, since x is block scoped
    expect(result).toBe(3); //despite flag false or true
  });

  it("let will work with return inside block scope", function(){
    var doWork = function(flag){
      if(flag)
      {
        let x = 3;
        return x;
      }
    }
    var result = doWork(true);  // move return x within the if and true
    expect(result).toBe(3);
  });

  it("Reinitialize CONST will fail", function(){
    const MAX_SIZE = 10;
    MAX_SIZE = 12;
    expect(MAX_SIZE).toBe(12); //typeerror
  });
});
