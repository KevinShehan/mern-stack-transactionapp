import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {type:String , required},
    lastName:  {type:String , required},
    email: {type:String , required},
    password:  {type:String , required}, // String is shorthand for {type: String}
    createdAt:{ type: Date, default: Date.now }
});

export default new mongoose.model("User",userSchema)