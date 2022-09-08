const User = require("../models/user");

const UsersController = {
  Create: async (req, res) => {
    console.log("I'm in user controler in create method")
    try {
    if ( await User.findOne({ email: req.body.email }) !== null){
      console.log('User already exists')
      await res.json({
        error: "This email is already in use.",
       });
    } else {
      const user = await new User(req.body);
      await user.save((err) => {
        if (err) {
          res.send(err);
        }
      })
      console.log(user);
      await res.json(user);
      }
    } catch(err) {
      res.send(err);
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

