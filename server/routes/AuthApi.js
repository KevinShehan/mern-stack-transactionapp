import { Router } from "express";


const router = Router();
router.post('/register',(req,res)=>{
    req.json("User is created")
});

export default router;