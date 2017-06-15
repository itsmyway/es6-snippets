describe("PROMISES", function(){
  it('should be a test', function(done){
    setTimeout(function(){
      done(); //calling this denotes the asyn test is done to jasmine
    },1000)
  });
  it('Should execute the call back given to then', function(done){
    let promise = new Promise(function(resolve, reject){
      resolve(1);
    })
    promise.then(function(data){
      expect(data).toBe(1);
      done();
    });
  });
  it('Should fail when rejected', function(done){
    let promise = new Promise(function(resolve, reject){
      reject(Error('Oh ho...'));
    })
    promise.then(function(data){
      done();
    }, function(error){
      expect(error.message).toBe('Oh ho...');
      done();
    });
  });
  it('Should have a catch', function(done){
    let promise = new Promise(function(resolve, reject){
      reject(Error('Oh ho...'));
    });
    promise.catch(function(error){
      expect(error.message).toBe('Oh ho...');
      done();
    });
  });
  it('Should compose when resolved with a previous promise', function(done){
    let prevPromise = new Promise(function(resolve, reject){
      resolve(3);
    });
    let promise = new Promise(function(resolve, reject){
      resolve(prevPromise);
    });
    promise.then(function(data){
      expect(data).toBe(3);
      done();
    });
  });
  it('Should have a static resolve', function(done){
    let prevPromise = Promise.resolve(3);
    let promise = Promise.resolve(prevPromise);
    promise.then(function(data){
      expect(data).toBe(3);
      done();
    });
  });
  it('Should have a static reject', function(done){
    let promise = Promise.reject(Error('Oh ho'));
    promise.catch(function(error){
      expect(error.message).toBe('Oh ho');
      done();
    });
  });
  it('Should be asynchronous', function(done){
    let async = false;
    let promise = new Promise(function(resolve, reject){
      resolve();
    });
    promise.then(function(){
      expect(async).toBe(true);
      done();
    });
    async = true;
  });
})
