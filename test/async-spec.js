describe("ASYNCHRONOUS", function(){
  it("Should chain sequentially using then", function(done){

    function getOrder(orderId){
      return Promise.resolve({userId:35})
    }

    function getUser(userId){
      return Promise.resolve({companyId:13})
    }

    function getCompany(companyId){
      return Promise.resolve({'name': 'PluralSight'})
    }

    getOrder(3).then(function(order){
      return getUser(order.userId)
    }).then(function(user){
      return getCompany(user.companyId)
    }).then(function(company){
      expect(company.name).toBe('PluralSight');
      done();
    }).catch(function(error){
      console.log(error.message);
    })
  });

  it("Should execute after all promises done with all", function(done){

    function getCourse(courseId){
      let courses = {
        1 : {name: 'JavaScript'},
        2 : {name: 'Fortran'},
        3 : {name: 'C++'}
      }
      return Promise.resolve(courses[courseId]);
    }
    let courses =[1,2,3],
        promises = [];

    for(let i=0; i<courses.length; i++){
      promises.push(getCourse(courses[i]));
    }
    Promise.all(promises).then(function(values){
      expect(values.length).toBe(3);
      done();
    });
  });
  it("Race should resolve after the first promise", function(done){

    function getCourse(courseId){
      let courses = {
        1 : {name: 'JavaScript'},
        2 : {name: 'Fortran'},
        3 : {name: 'C++'}
      }
      return Promise.resolve(courses[courseId]);
    }
    let courses =[1,2,3],
        promises = [];

    for(let i=0; i<courses.length; i++){
      promises.push(getCourse(courses[i]));
    }
    Promise.race(promises).then(function(firstValue){
      expect(firstValue.name).toBeDefined();
      done();
    });
  });
})
