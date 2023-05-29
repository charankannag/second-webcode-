const express=require("express")
const appserver=express()
appserver.use("/api/auth",require("./Controllers/Authentication.controller"))
module.exports=appserver