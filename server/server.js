
import { MongoClient, ServerApiVersion } from 'mongodb';
import  express  from 'express';
import mongoose from "mongoose"
import cors from "cors";

const PORT = 4000;
const app = express();

app.use(cors);

app.get('/',(req, res)=>{
  res.send("Hello World");
});

app.listen(PORT,()=>{
  console.log("SERVER is Running at http://localhost:4000")
});

// const uri = "mongodb+srv://kevin_shehan30:kevin_shehan30@cluster0.n2gbu.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect("mongodb+srv://kevin_shehan30:kevin_shehan30@cluster0.n2gbu.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("MongoDB Connection Successfull")).catch((err)=>console.error(err));

const uri = "mongodb+srv://kevin_shehan30:smcrcc2012@cluster0.n2gbu.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);