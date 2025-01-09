import mongoose from "mongoose";

export async function connect(){
try{
    mongoose.connect(process.env.MONGO_URL!)
    const connection = mongoose.connection;

    connection.on("connected", ()=>{
        console.log("MongoDB connected successfully :3");
    })
    connection.on("error",(err)=>{
        console.log("MongoDB connection error, please make sure if MongoDB is running."+ err);
        process.exit();
    })
}catch(err){
    console.log("oops something went wrong :c")
    console.log(err);
}
}