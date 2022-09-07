const express = require("express");
const router = express.Router();
 
const AnimalsController = require("../controllers/animals");
 
console.log("I'm in animals router")
 
router.get("/find", AnimalsController.Find);
router.get("/list", AnimalsController.List);
 
module.exports = router;
