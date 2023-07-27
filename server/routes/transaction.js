import {Router} from "express";
import Transaction from "../models/transaction.js";
import mongoose from "mongoose";


const router = Router();


router.get('/transaction', async (req,res)=>{
    const transaction =await Transaction.find({}).sort({createdAt:-1});
    res.json(transaction);
});

router.post('/transaction', async (req, res)=>{
    const {amount,description, date}= req.body;
    const transaction = new Transaction({
        amount,description,date
    });
    await transaction.save();
    res.json({message:"Success"});
});
export default router;