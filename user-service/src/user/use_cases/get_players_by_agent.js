const User = require('../model').default;

module.exports = (repository) => {
  async function execute(id){
    if (String(id).match(/^[0-9a-fA-F]{24}$/)) {
      const users = await repository.getPlayersByAgent(id);
    return new Promise((resolve, reject) => {
      resolve(users);
    })
    } else {
      return new Promise((resolve, reject) => {
        reject(new Error('Not a valid ID'));
      }) 
    }}
  return {execute}
}
