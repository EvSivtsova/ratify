const mongoose = require("mongoose");
const { Schema } = mongoose;
// animal schema setup
const AnimalSchema = new Schema({
  species: { type: String, required: true },
  description: { type: String, required: true },
  family: { type: String, required: true },
  careInfo: { type: String, required: true },
  foodURL: { type: String, required: true },
  nonToxicPlants: { type: String, required: true },
});

const Animal = mongoose.model("Animal", AnimalSchema);

module.exports = Animal;
