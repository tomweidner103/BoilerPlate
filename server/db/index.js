const db = require('./db');
//other Models here, along ith associations
const User = require('./models/User');
const Pictures = require('./models/Pictures')

// add Models here as well
module.exports = {
  db,
  User,
  Pictures
};
