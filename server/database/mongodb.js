import mongoose from "mongoose";


async function connect(){

    const uri = "mongodb+srv://kevin_shehan30:smcrcc2012@cluster0.n2gbu.mongodb.net/?retryWrites=true&w=majority";
    await mongoose.connect(uri).then(()=>console.log("MongoDB Connection Successfull"))
        .catch((err)=>console.error(err));
    
}
export default connect