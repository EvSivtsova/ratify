const Animal = require("../models/animal");
 
const AnimalsController = {
  Find: async (req, res) => {
      try {
        let animal = req.query.chosen;
      const animals = await Animal.find({animal: `${animal}`})
      res.json(animals);
      console.log("response sent");
      } catch (err) {
      console.log("Error", err);
      }
  },

  List: async (req, res) => {
    console.log("I'm in animal controller in findAnimals method")
    try {
      const animalData = await Animal.find();
      const animalArray = await animalData.map(animal => animal.animal);
      res.json(animalArray);
      console.log("response sent");
    } catch (err) {
    console.log("Error", err);
    }
  }
};
 
module.exports = AnimalsController;