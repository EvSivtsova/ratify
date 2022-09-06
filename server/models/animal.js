const mongoose = require("mongoose");
const { Schema } = mongoose;

const AnimalSchema = new Schema({
  animal: { type: String, required: true },
  description: { type: String, required: true },
  order: { type: String, required: true },
  careInfo: { type: String, required: true },
  foodURL: { type: String, required: false },
  nonToxicPlants: [{ type: String, required: false }],
});

const Animal = mongoose.model("Animal", AnimalSchema);

module.exports = Animal;
