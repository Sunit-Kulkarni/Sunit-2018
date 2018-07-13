const mongoose = require('mongoose');
const openpgp = require('openpgp');

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// Connect to db
const db = mongoose.connect(
  'mongodb://localhost:27017/pgp-signing',
  {
    useMongoClient: true
  }
);

//Import Model
const User = require('./models/User');

//Authenticate User
const authUser = user => {
  User.create(user).then(user => {
    console.info('New user added');
    db.close();
  });
};
