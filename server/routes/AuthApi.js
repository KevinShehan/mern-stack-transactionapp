import { Router } from "express";


const router = Router();
router.post('/register', (req, res) => {
    // get all form data
    //check if user exists with same email
    // hash th password
    // save user
    const email= req.body;
    console.log(req.body);
    res.json({ message: "User is created" });
  });
  

export default router;