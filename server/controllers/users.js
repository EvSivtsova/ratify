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
  Login: async (req, res) => {
    try {
    let email = req.body.email;
    let password = req.body.password;
    const user = await User.findOne({email: email, password: password})
    console.log(user)
    user ? res.json(user) : res.send(500)
    } catch(err) {
      res.send(err);
    }

      // function(err, item) {
      //   // if OK, user exists, if  KO user does not exist
      //   console.log(err);
      //   console.log(item);
      // });
        // if ((username == "delly@email.com") && (password == "123456")) {
  //   res.send("OK");
  // }
  // else {
  //   res.status(500)
  //   res.send('KO')
  // }
    }
};

module.exports = UsersController;
