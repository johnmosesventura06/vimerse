const User = require('../model').default;

module.exports = (repository) => {
  async function execute(id){
    if (String(id).match(/^[0-9a-fA-F]{24}$/)) {
      const users = await repository.getAgentsBySuperAgent(id);
    return new Promise((resolve, reject) => {
      console.log("sino ito",users)
      if(!users){
        reject(new Error('User does not exist'));
        return;
      }
      resolve(users);
    });
    } else {
      return new Promise((resolve, reject) => {
        reject(new Error('Not a valid ID'));
      }) 
    }}
  return {execute}
}