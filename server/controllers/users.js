const User = require("../models/user");

const UsersController = {
  Create: async (req, res) => {
    try {
    if ( await User.findOne({ email: req.body.email }) !== null){
      console.log('User already exists')
      res.json({
        error: "This email is already in use.",
       });
    } else {
      const user = await new User(req.body);
      user.save();
      console.log(user);
      res.json(user);
      }
    } catch(err) {
      res.send(err);
    }
  },
  Login: async (req, res) => {
    try {
      if (await User.findOne({email: req.body.email, password: req.body.password}) === null) {
        res.json({
          error: "Please enter correct email and password."
        });
      } else {
        res.send(200);
      }
    } catch(err) {
      res.send(err);
    }
  }
};

module.exports = UsersController;

