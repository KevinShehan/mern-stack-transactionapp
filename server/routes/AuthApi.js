import { Router } from "express";
import User from "../models/User.js";

const router = Router();
router.post("/register", async (req, res) => {
  // get all form data
  // check if user exists with same email
  // hash the password
  // save user
  const { email, password, firstName, lastName } = req.body;
  // console.log(req.body);

  const checkExists = await User.findOne({
    email,
    password,
    firstName,
    lastName,
  });
  if (checkExists) {
    res.status(406).json({ message: "User Already Exists" });
    return;
  }
  const user = await User(req.body);
  const savedUser = user.save();
  console.log(user);
  res.json({ message: "User is created" });
});

export default router;
