module.exports = class UserRepository {

  constructor(database){
    this.database = database;
  }

  create(user){
    return new Promise((resolve, reject) => {
      this.database(user).save();
      resolve(user);
    });
  }

  getByEmail(email){
    return new Promise((resolve, reject) => {
      this.database.find({ 'email': email }).then(user => {
        resolve(user[0]);
      })
    });
  }

  updateUser(user){
    return new Promise((resolve, reject) => {
      this.database.findOne({ _id: user.id}).then(userData => {
     console.log(user)
        if(user.firstname != "")
        userData.firstname = user.firstname;

        if(user.lastname != "")
        userData.lastname = user.lastname;
        
        if(user.password != "")
        userData.password = user.password;
 
        if(user.occupation != "")
        userData.occupation = user.occupation;

        if(user.usertype != "")
        userData.usertype = user.usertype;

        if(user.isverified != null )
        userData.isverified = user.isverified;

        if(user.isactive != null )
        userData.isactive = user.isactive;

        if(user.referrer != "" )
        userData.referrer = user.referrer;

        if(user.birthday != "" )
        userData.birthday = user.birthday;

        if(user.address != "" )
        userData.address = user.address;

        if(user.income_source != "" )
        userData.income_source = user.income_source;

        if(user.nationality != "" )
        userData.nationality = user.nationality;

        if(user.comission_rate != "" )
        userData.comission_rate = user.comission_rate;

        if(user.photo_url != "" )
        userData.photo_url = user.photo_url;

        resolve(
          userData.save()
          );
      })
    });
  }

  getById(id){
    return new Promise((resolve, reject) => {
      console.log("id",id )
      this.database.find({_id: id}).then(user => {
        resolve(user[0]);
      })
    });
  }

  getAll(){
    return new Promise((resolve, reject) => {
      let users = this.database.find();
      resolve(users);
    });
  }

  getUsertype(id,isactive){
    return new Promise((resolve, reject) => {
      console.log("usertype",id )
      this.database.find({$and: [
        { usertype: id },
        { isactive: isactive }]
      }).then(users => {
        resolve(users);
      })
    });
  }

  getPlayersByAgent(id){
    return new Promise((resolve, reject) => {
      console.log("repo",id)
      this.database.find({$and: [
        { 'referrer': id },
        { 'usertype': 'player' }
      ]
    }).then(users => {
        resolve(users);
      })
    });
  }

  getAgentsBySuperAgent(id){
    return new Promise((resolve, reject) => {
      console.log("repo",id)
      this.database.find({$and: [
        { 'referrer': id },
        { 'usertype': 'agent' }
      ]
    }).then(users => {
        resolve(users);
      })
    });
  }

  // getPlayerAgent(id){
  //   return new Promise((resolve, reject) => {
  //     console.log("repo",id)
  //     this.database.find({$and: [
  //       { '_id': id },
  //       { 'usertype': 'player' }
  //     ]
  //   }).then(users => {
  //       resolve(users[0]);
  //     })
  //   });
  // }

}
