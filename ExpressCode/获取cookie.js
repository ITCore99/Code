const express=require("express");
const app=express();
//引入中间件cookie-parse
const cookieParse=require("cookie-parse");
//使用中间件
app.use(cookieParse());
app.get("/",(req,res)=>{
    //获取cookie
    console.log(req.cookies);
    res.cookie("username","jack",{maxAge:10000});//设置cookie10s钟有效。
    res.send("<h2>获取cookie</h2>");
});
app.listen(8521,()=>{
    console.log("Server start 8521");
});