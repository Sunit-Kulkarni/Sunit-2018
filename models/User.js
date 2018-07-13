const mongoose = require('mongoose');
const { Schema } = mongoose;

//User Schema
const userSchema = mongoose.Schema({
  pgpPublicKey: { type: String, default: '' },
  signedMessage: { type: String, default: '' },
  securedPassword: { type: String, default: '' }
});

//Define and Export
module.exports = mongoose.model('user', userSchema);
