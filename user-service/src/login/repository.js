module.exports = class UserRepository {

  constructor(database){
    this.database = database;
  }

  getByUsername(username){
    return new Promise((resolve, reject) => {
      this.database.find({'email': username}).then(user => {
        resolve(user[0]);
      })
    });
  }

}
