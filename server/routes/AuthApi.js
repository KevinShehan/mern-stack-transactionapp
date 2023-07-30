import { Router } from "express";


const router = Router();
router.post('/register', (req, res) => {
    res.json({ message: "User is created" });
  });
  

export default router;