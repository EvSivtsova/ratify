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
  },
  Login: (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
  
    console.log("username: ", username);
    console.log("password: ", password);
  
    let MongoClient = require('mongodb').MongoClient
    // refactor the server ip
    MongoClient.connect("mongodb://0.0.0.0/ratify", function(err, client) {
      if (err) {
        console.log("mongodb error: ", error);
      }
  
      console.log(client);
      console.log(client.db);
      let collection = client.db("ratify").collection('users');
      collection.findOne({"email": username, "password": password}, function(err, item) {
        // if OK, user exists, if KO user does not exist
        console.log(err);
        console.log(item);
        if (item == null) {
          res.send(500);
        }
        else {
          res.send(200);
        }
      });
    });
  
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
