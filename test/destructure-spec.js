describe("DESTRUCTURING", function(){
  "use strict";
  it("can destructure arrays", function(){
    var doWork = function(){
      return [3, 2];
    }
    let [x,y] = doWork(); // [x, y] = [y, x] is also valid.
    expect(x).toBe(3);
    expect(y).toBe(2);
  });

  it("can destructure arrays with extra args", function(){
    var doWork = function(){
      return [1, 3, 2];
    }
    let [, x, y, z] = doWork(); // [x, y] = [y, x] is also valid.
    expect(x).toBe(3);
    expect(y).toBe(2);
    expect(z).toBeUndefined();
  });

  it("can destructure objects", function(){
    var doWork = function(){
      return {
        firstName: "Scott",
        lastName: "Blake",
        handles: {
          twitter: "scootie",
          fb: "scoots"
        }
      }
    }
    let {
        firstName: fname, //firstName is the returned obj prop name and fname is the var name
        lastName: lname,
        handles: {twitter: tweets}
    } = doWork();
    expect(fname).toBe("Scott");
    expect(tweets).toBe("scootie");
  });

  it("can destructure objects - shortcuts", function(){
    var doWork = function(){
      return {
        firstName: "Scott",
        lastName: "Blake",
        handles: {
          twitter: "scootie",
          fb: "scoots"
        }
      }
    }
    let {
        firstName, //firstName is the returned obj prop name and firstName is the var name
        lastName,
        handles: {twitter}
    } = doWork();
    expect(firstName).toBe("Scott");
    expect(twitter).toBe("scootie");
  });

  it("works with parameters", function(){
    let doWork = function(url, {data, cache}){
      return data;
    }
    let result = doWork(
      "api/test", {
        data: "test",
        cache: false
      }
    );
    expect(result).toBe("test");
  });
});
