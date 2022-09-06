const User = require('./user');
const mongoose = require('mongoose');
require('dotenv').config({ path: '../config.env' });

// const Db = process.env.ATLAS_URI || 'mongodb://0.0.0.0/ratify';
// const Db = process.env.ATLAS_URI;
const Db = 'mongodb://0.0.0.0/ratify';

console.log(Db);

mongoose
  .connect(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('connection established!');
  })
  .catch((err) => {
    console.log(err);
  });

const userSeeds = [
  {
    email: 'test@test.com',
    password: 'Mypassword1&',
    firstName: 'Elena',
    lastName: 'Lopez',
    animal: 'rat',
  },
  {
    email: 'Peter@email.com',
    password: 'Mypassword1&',
    firstName: 'Peter',
    lastName: 'Strange',
  },
 {
    email: 'johndoe@gmail.com',
    password: 'Mypassword1&',
    firstName: 'John',
    lastName: 'Doe',
    animal: 'rat',
    isABreeder: true,
    verifiedBreeder: {
      status: false,
      county: 'London',
      association:'Fancy Rats',
      website:'www.ratbreeder.com',
    }
  },
  {
    email: 'sam@gmail.com',
    password: 'Mypassword1&',
    firstName: 'Sam',
    lastName: 'Smith',
    animal: 'rat',
    isABreeder: true,
    verifiedBreeder: {
      status: true,
      county: 'London',
      association:'Fancy Rats',
      website:'www.ratbreeder2.com',
    }
  },
];

const seedDB = async () => {
  await User.deleteMany({});
  console.log("seeds deleted")
  await User.insertMany(userSeeds);
  console.log("seeds saved")
  console.log(userSeeds)
};

seedDB().then(() => {
  mongoose.connection.close();
});

module.exports = userSeeds;