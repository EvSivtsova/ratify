const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  animal: { type: Schema.Types.ObjectId, ref: "Animal", required: false },
  verifiedBreeder: { type: Boolean, require: false },
  county: { type: String, require: false },
  association: { type: String, require: false },
  website: { type: String, required: false },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
