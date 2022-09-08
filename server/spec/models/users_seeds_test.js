const User = require("../../models/user");
const mongoose = require("mongoose");
require('dotenv').config({ path: './config.env' });

// const Db = process.env.ATLAS_URI || 'mongodb://0.0.0.0/ratify';
// const Db = process.env.ATLAS_URI;
const Db = 'mongodb://0.0.0.0/ratify_test';

const seedingUsers = () => { 
  mongoose
  .connect(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('connection established!');
  })
  .then(() => 
    seedDB()
  )
  .catch((err) => {
    console.log(err);
  });
}

const userSeeds = [
  {
    firstName: "Peter",
    lastName: "Strange",
    email: "Peter@email.com",
    password: "petepassword",
  },
  {
    firstName: "Test FN",
    lastName: "Test Surname",
    email: "test@test.com",
    password: "123456789",
  },
  {
    firstName: "John",
    lastName: "Doe",
    email: "j@test.com",
    password: "987654321",
  },
  {
    firstName: "Boris",
    lastName: "Johnson",
    email: "bg@gov.uk",
    password: "qwerty123",
  },
];

const seedDB = async () => {
  await User.deleteMany({});
  await User.insertMany(userSeeds);
};

module.exports = userSeeds;
module.exports = seedingUsers;