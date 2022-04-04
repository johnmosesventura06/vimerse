const User = require('../model');

module.exports = (repository) => {
  async function execute(
    firstname,
    lastname,
    email,
    username,
    password,
    phoneNumber,
    occupation,
    usertype,
    isverified,
    isactive,
    referrer,
    birthday,
    address,
    timestamp,
    income_source,
    nationality,
    comission_rate,
    photo_url,
    id
    ){
      
    return repository.getById(id)
      .then((user) => {
        return new Promise((resolve, reject) => {
          if(!user){
            reject(new Error('User does not exist'));
            return;
          }
        const UpdateUser = new User(
          firstname,
          lastname,
          email,
          username,
          password,
          phoneNumber,
          occupation,
          usertype,
          isverified,
          isactive,
          referrer,
          birthday,
          address,
          timestamp,
          income_source,
          nationality,
          comission_rate,
          photo_url,
          id
             );
          resolve(UpdateUser);
        })
        .then(user => {
          return repository.updateUser(user);
        })
        .then((user)=>{
          return Promise.resolve(user);
        })
      })

  }
  return { execute }
}
