const mongoose=require("mongoose")
mongoose.connect(`mongodb://0.0.0.0/${process.env.NODE_MONGODB_NAME}`)
.then((response)=>{
if(response){
    console.log("DATABASE CONNECTED")
}
})
.catch((err)=>console.log(err))
