const User = require('../model').default;

module.exports = (repository) => {
  async function execute(type,isactive){
    console.log("type",type)
    const users = await repository.getUsertype(type,isactive);
    return new Promise((resolve, reject) => {
      resolve(users);
    });
  }
  return {execute}
}