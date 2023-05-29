const AuthRouter=require("express").Router
AuthRouter.get("/",function (req,res,next){
    res.status(200).json({
        message:"Working",
    })
})
AuthRouter.get("/",function (req,res,next){
    res.status(200).json({
        message:"Working",
    })
})
AuthRouter.get("/",function (req,res,next){
    res.status(200).json({
        message:"Working",
    })
})
module.exports=AuthRouter