console.log("Inside Main.JS");

function getOrder(orderId){
  return Promise.resolve({userId: 35});
}
function getUser(userId){
  return Promise.resolve({companyId: 18});
}
function getCompany(companyId){
  return Promise.resolve({name: 'PluralSight'});
}
