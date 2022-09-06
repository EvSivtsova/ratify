const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  email: { type: String, lowercase: true, unique: true, required: true },
  password: { type: String, min: 8, max: 16, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  animal: { 
    type: String,
    required: false
  },
  isABreeder: { type: Boolean, required: false },
  verifiedBreeder: {
    status: { type: Boolean, required: false, default: false },
    county: { type: String, required: false },
    association: { type: String, required: false },
    website: { type: String, unique: true, required: false },
    required: false,
  },
  signupDate: {
    type: Date,
    default: () => Date.now(),
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
