import  express  from 'express';
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import TransactionApi from "./routes/TransactionApi.js";
import AuthApi from "./routes/AuthApi.js";

import Transaction from "./models/transaction.js";
import connect from "./database/mongodb.js";

const PORT = 4000;
connect();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/",TransactionApi);
app.use("/auth",AuthApi);




app.listen(PORT,()=>{
  console.log("SERVER is Running at http://localhost:4000")
});



