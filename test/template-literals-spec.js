describe ("TEMPLATE LITERALS", function(){
  it("can build URLs", function(){
    let category = "shopping",
        id = 1234,
        url = `http://apiserver/${category}/${id}`;
    expect(url).toBe("http://apiserver/shopping/1234");
  });

  it("can use tags", function(){

    let upper = function(strings, ...values){
      let result = "";
      for(let i=0; i < strings.length; i++){
          result += strings[i];
          if(i < values.length){
            result += values[i];
          }
      }
      return result.toUpperCase();
    }
    let x = 1,
        y = 4,
        result = upper `${x} + ${y} is ${x+y}`;
    expect(result).toBe("1 + 4 IS 5");
  });
});
