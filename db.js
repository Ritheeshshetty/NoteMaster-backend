const mongoose=require('mongoose');
// const mongoURI="mongodb://0.0.0.0:27017/inotebook"
require("dotenv").config();
const mongoURI=process.env.DATABASE_URI

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongo Sucessfully");
    })
}
module.exports=connectToMongo;