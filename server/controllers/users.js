const User = require("../models/user");

const UsersController = {
  Create: async (req, res) => {
    console.log("I'm in user controler in create mrthod")
    if (User.findOne({ email: req.body.email } === null)) {
      const user = await new User(req.body);
      console.log(user);
      await user.save((err) => {
        if (err) {
          res.send(err);
        }
      })
      console.log(user);
      res.json(user);
      // res.json(User.findOne({ email: user.email }));
    }
  }
};

module.exports = UsersController;
