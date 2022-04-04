const User = require('../model').default;

module.exports = (repository) => {
  async function execute(id){
    
    if (String(id).match(/^[0-9a-fA-F]{24}$/)) {
      const users = await repository.getById(id);
    return new Promise((resolve, reject) => {
      if(!users){
        reject(new Error('User does not exist'));
        return;
      }
      resolve(users);
    }).then(users => {
      if (String(users.referrer).match(/^[0-9a-fA-F]{24}$/)) {
        return repository.getById(users.referrer);
      } else {
        return "User does not have a referrer"
      }
      
    }).then((transaction)=>{
      return Promise.resolve(transaction);
    });
    } else {
      return new Promise((resolve, reject) => {
        reject(new Error('Not a valid ID'));
      }) 
    }}
  return {execute}
}