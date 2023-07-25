

import  express  from 'express';
import mongoose from "mongoose"
import cors from "cors";

const PORT = 4000;
const app = express();

app.use(cors());

app.get('/',(req, res)=>{
  res.send("Hello World");
});

app.post('/transaction',(req, res)=>{
  console.log(req.body);
  res.json({message:"Hello World"});
});

app.listen(PORT,()=>{
  console.log("SERVER is Running at http://localhost:4000")
});

const uri = "mongodb+srv://kevin_shehan30:smcrcc2012@cluster0.n2gbu.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri).then(()=>console.log("MongoDB Connection Successfull"))
    .catch((err)=>console.error(err));

