//引入express
const express=require("express");
const cookieParser=require("cookie-parser");
//创建一个应用服务APP
const app=express();
app.use(cookieParser())
app.get("/",(req,res)=>{
    let last=req.cookies.last;
    res.cookie("last",new Date().toLocaleString(),{maxAge:365*24*3600*1000});
    if(last)
    {
        res.send(`<h2>你上次登陆的时间为${last}</h2>`);
    }else
    {
        res.send(`<h2>这是你的第一次登录</h2>`);
    }
})
app.listen(4561,()=>{
    console.log("server start 4561");
})