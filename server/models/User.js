import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: { type: String, required: ["FirstName field is Required"] },
    lastName: { type: String, required: ["LastName field is Required"] },
    email: { type: String, required: ["Email field is Required"] },
    password: { type: String, required: ["Password field is Required"] }, // String is shorthand for {type: String}
  },
  { timestamps: true }
);

export default new mongoose.model("User", userSchema);
