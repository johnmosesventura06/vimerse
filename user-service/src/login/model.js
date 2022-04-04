module.exports = class User {
  constructor(firstname,lastname,email, username, password, phoneNumber, occupation, usertype, isverified, isactive, referrer, id){
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.username = username;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.occupation = occupation;
    this.usertype = usertype;
    this.isverified = isverified;
    this.isactive = isactive;
    this.referrer = referrer
    this.id = id;
  }
}