describe("ASYNCHRONOUS", function(){
  it("Should chain sequentially using then", function(done){
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
  })
})
