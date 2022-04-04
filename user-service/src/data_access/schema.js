const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
  firstname: { type: String },
  lastname:  { type: String },
  email:     { type: String },
  phoneNumber: { type: String },
  occupation : { type: String },
  usertype: { type: String},
  isverified: {type: Boolean},
  isactive: {type: Boolean},
  referrer : { type: String },
  birthday : { type: String },
  address : { type: String },
  timestamp:  { type: String },
  income_source:  { type: String },
  nationality:  { type: String },
  comission_rate: { type: String },
  photo_url: { type: String },
});
