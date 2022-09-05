const User = require("../../models/user");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://0.0.0.0/ratify_test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection established!");
  })
  .catch((err) => {
    console.log(err);
  });

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

seedDB().then(() => {
  mongoose.connection.close();
});

module.exports = userSeeds;