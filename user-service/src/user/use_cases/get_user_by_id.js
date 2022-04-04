const User = require('../model').default;

module.exports = (repository) => {
  async function execute(id){
    if (String(id).match(/^[0-9a-fA-F]{24}$/)) {
      return repository.getById(id)
      .then((user) => {
        return new Promise((resolve, reject) => {
          if(!user){
            reject(new Error('User does not exist'));
            return;
          }
          resolve(user);
        })
        
      })
    } else {
      return new Promise((resolve, reject) => {
        reject(new Error('Not a valid ID'));
      }) 
    }
    
  }
  return {execute}
}
