module.exports = class User {
  constructor(firstname,lastname,email, username, password, phoneNumber, occupation, usertype, isverified, isactive,referrer,birthday,address,timestamp,income_source,nationality,comission_rate,photo_url,id){
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
    this.referrer = referrer;
    this.birthday = birthday;
    this.address = address;
    this.timestamp = timestamp;
    this.income_source = income_source;
    this.nationality = nationality;
    this.comission_rate = comission_rate;
    this.photo_url = photo_url
    this.id = id;
  }
}