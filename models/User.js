const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  pgpPublicKey: { type: String, default: '' },
  message: { type: String, default: '' }
});

mongoose.model('users', userSchema);
