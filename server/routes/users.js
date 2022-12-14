const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users");

console.log("I'm in users router")

router.post("/new", UsersController.Create);
router.post("/login", UsersController.Login);

module.exports = router;