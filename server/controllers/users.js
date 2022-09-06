const User = require("../models/user");

const UsersController = {
  Create: (req, res) => {
    console.log("I'm in user controler in create mrthod")
    const user = new User(req.body);

    console.log(user);

    user.save((err) => {
      if (err) {
        throw err;
      }
      console.log("user saved to the database");
    });
  },
};

module.exports = UsersController;
