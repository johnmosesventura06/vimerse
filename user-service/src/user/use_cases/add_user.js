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
    ){
    return await repository.getByEmail(email)
      .then((user) => {
        return new Promise((resolve, reject) => {
         
          if(user) {
            console.log(user.email)
            if(user.email == email){
              return reject(new Error('Email Exists'));
            }
            // if(user.phoneNumber == phoneNumber){
            //   return reject(new Error('Phone number Exists'));
            // }
            // if(user.username == username){
            //   return reject(new Error('Username Exists'));
            // }
          }
          
          const newUser = new User(
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
            photo_url );
          resolve(newUser);
        })
        .then(user => { 
          console.log("hey this is a new user",user)
          return repository.create(user);
        })
        .then((user)=>{
          return Promise.resolve(user);
        })
      })

  }
  return { execute }
}
