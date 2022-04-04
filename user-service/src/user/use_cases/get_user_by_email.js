const User = require('../model').default;

module.exports = (repository) => {
  async function execute(email,phoneNumber,username){
   
    await new Promise(r => setTimeout(r, 100));
    const user = await repository.getByEmail(email,phoneNumber,username);
    return new Promise((resolve, reject) => {
      
        if(!user){
          reject(new Error('User does not exist'));
          return;
        }
      resolve(user);
    });
  }
  return {execute}
}
