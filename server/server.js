

import  express  from 'express';
import mongoose from "mongoose"
import cors from "cors";
import bodyParser from "body-parser";

import Transaction from "./models/transaction.js";

const PORT = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/',(req, res)=>{
  res.send("Hello World");
});


app.get('/transaction', async (req,res)=>{
  const transaction =await Transaction.find({});
  res.json(transaction);
});

app.post('/transaction', async (req, res)=>{
 const {amount,description, date}= req.body;
 const transaction = new Transaction({
     amount,description,date
 });
 await transaction.save();
  res.json({message:"Success"});
});

app.listen(PORT,()=>{
  console.log("SERVER is Running at http://localhost:4000")
});

const uri = "mongodb+srv://kevin_shehan30:smcrcc2012@cluster0.n2gbu.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri).then(()=>console.log("MongoDB Connection Successfull"))
    .catch((err)=>console.error(err));

