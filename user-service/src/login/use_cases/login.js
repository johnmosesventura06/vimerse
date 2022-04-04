const User = require('../model');

module.exports = (repository) => {
  async function execute(
    username,
    password,
    ){
    return repository.getByUsername(username)
    .then((user) => {
      return new Promise((resolve, reject) => {

        if(!user){
            reject(new Error('User does not exist'));
          return;
        }

        if(user){
          if (user.password !== password) {
            reject(new Error('Incorrect Password'));
            return;
          }
        }
        console.log("user type",user)
        const newUser = new User(
          firstname = user.firstname,
          lastname  = user.lastname, 
          email = user.email,
          username = user.username,
          password = "",
          phoneNumber = user.phoneNumber,
          occupation = user.occupation,
          usertype = user.usertype,
          isverified = user.isverified,
          isactive = user.isactive, 
          referrer = user.referrer,
          user._id
          );
        resolve(newUser);

      })
      
    })

  }
  return { execute }
}
