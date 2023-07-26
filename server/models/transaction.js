import mongoose from 'mongoose';
const { Schema } = mongoose;

const transactionSchema = new Schema({
    amount: Number, // String is shorthand for {type: String}
    description: String,
    date: { type: Date, default: new Date() },
    createdAt:{ type: Date, default: Date.now }
});

export default new mongoose.model("Transaction",transactionSchema)