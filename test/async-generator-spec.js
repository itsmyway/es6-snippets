describe("ASYNC GENERATORS", function(){
  //iife 1
  /*(function(){
    let sequence;
    let run = function (gen){
      sequence = gen();
      let next = sequence.next();
    }

    let resume = function(value){
      sequence.next(value);
    }

    let fail = function(err){
      sequence.throw(err);
    }
    window.async = {
      run : run,
      resume : resume,
      fail : fail
    }
  }());*/
  //iife 2
  (function(){
    let run = function(generator){
      let sequence;
      //result is the call to generator.next
      let process = function(result){
        //result.value is a promise
          result.value.then((value) => {
            if(!result.done){
              //val is a the parameter received by the callback i.e value promise resolved with
              process(sequence.next(value));
            }
          }, function (err){
            if(!result.done){
              process(sequence.throw(err));
            }
          })
      }
      sequence = generator();
      let next = sequence.next();
      process(next);
    }
    window.asyncP = {
      run : run
    }
  }());


  function oldPause(delay, cb){
    setTimeout(() => {
      console.log("paused for " + delay + "ms");
      cb();
    }, delay);
  }
  function pause(delay){
    setTimeout(() => {
      console. log("Paused for " + delay + "ms");
      async.resume();
    }, delay)
  }

  function getStockPrice(){
    setTimeout(() => {
      try{
        throw Error('there was a problem !')
        async.resume(50);
      } catch (ex){
        async.fail(ex);
      }
    },300)
  }

  function getStockPriceP(){
    return new Promise(function(resolve, reject){
      setTimeout(() => {
        resolve(50);
      },300);
    });
  }

  function executeTrade(){
    setTimeout(() => {
      console.log("trade has completed");
      async.resume();
    }, 300)
  }

  function executeTradeP(){
    return new Promise(function(resolve, reject){
      setTimeout(() => {
        resolve();
        //reject(Error('failure!'));
      },300);
    });
  }

  xit('Regular async callbacks, harder to read', function() {
    console.log("start");
    oldPause(500, function(){
      console.log("middle");
      oldPause(500, function(){
        console.log("end")
      });
    });
  });

  xit('should be easier to read with generators', function(done) {
    function* main(){
      console.log("start");
      yield pause (500);
      console.log("middle");
      yield pause(500);
      console.log("end");
    }
    done();
    async.run(main);
  });

  xit('should be easier to read with returned data', function(done) {
    function* main(){
      let price = yield getStockPrice();
      if(price > 45){
        yield executeTrade();
      } else {
        console.log('trade not made');
      }
      done();
    }
    async.run(main);
  });

  xit('should be easier to read with error data', function(done) {
    function* main(){
      try{
        let price = yield getStockPrice();
        if(price > 45){
          yield executeTrade();
        } else {
          console.log('trade not made');
        }
      } catch(excep){
        console.log('error !' + excep.message);
      }
      done();
    }
    async.run(main);
  });
  xit('should also work with promises', function(done) {
    function* main(){
      try{
        let price = yield getStockPriceP();
        if(price > 45){
          yield executeTradeP();
        } else {
          console.log('trade not made');
        }
      } catch(excep){
        console.log('error !' + excep.message);
      }
      done();
    }
    asyncP.run(main);
  });
})
