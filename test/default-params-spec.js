describe ("DEFAULT PARAMS", function(){
  it("default params old method no input", function(){
    var doWork = function(name){
      name = name || "Scott";
      return name;
    }
    var result = doWork();
    expect(result).toBe("Scott")
  });

  it("default params old method empty string input", function(){
    var doWork = function(name){
      name = name || "Scott";
      return name;
    }
    var result = doWork("");
    expect(result).toBe("Scott")
  });

  it("default params new method passing undefined", function(){
    var doWork = function(name = "Scott"){
      return name;
    }
    var result = doWork(); //can pass "docWork(undefined)" //null will fail in new
    expect(result).toBe("Scott")
  });

  it("will provide default values for undefined", function(){
    var doWork = function(a=1, b=2, c=3){
      return [a, b, c];
    }
    let [a, b, c] = doWork(7, undefined); //can pass "doWork(undefined)"
    expect(a).toBe(7);
    expect(b).toBe(2);
    expect(c).toBe(3);
  });

  it("works with destructuring", function(){
    var doWork = function(url, {data="Scott", cache}){
      return data;
    }
    let result = doWork("api/test",{cache: false}); //can pass "docWork(undefined)"
    expect(result).toBe("Scott");
  });
});
