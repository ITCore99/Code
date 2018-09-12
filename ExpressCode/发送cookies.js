const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    //设置发送一个cookies
    //使用node的原生方法
    // res.setHeader("set-cookies","username=andy");
    // res.send("<h2>cookies的发送</h2>");
    //使用express方法来进行设置cookies
    res.cookie("name","jack");
    res.send("<h2>cookies的发送</h2>");
});
app.listen(7894,()=>{
    console.log("Server start 7894");
});