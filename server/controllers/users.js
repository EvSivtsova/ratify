const User = require("../models/user");

const UsersController = {
  Create: async (req, res) => {
    console.log("I'm in user controler in create mrthod")
    if (User.findOne({ email: req.body.email } === null)) {
      const user = await new User(req.body);
      await user.save((err) => {
        if (err) {
          res.send(err);
        }
      })
      console.log(user);
      res.json(user);
      // res.json(User.findOne({ email: user.email }));
    }
  },
  Login: (req, res) => {
    User.findOne({"email": req.body.email, "password": req.body.password}, function(err, item) {
      if (item == null) {
        res.send(500);
      }
      else {
        res.send(200);
      }
    });
  }
};

module.exports = UsersController;
