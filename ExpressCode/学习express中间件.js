//引入express
const express=require("express");
//创建一个服务器及APP应用
const app=express();
//标准形式的应用中间件
app.use("/",(req,res,next)=>{
    console.log("这是一个标准的形式");
    next();
});
app.use("*",(req,res,next)=>{
    console.log("*******");
    next();
})
//快捷方式
app.get("/",(req,res,next)=>{
   res.send("<h1>这是一个快捷方式的应用中间件</h1>");
});
//服务器监听一个端口
app.listen(3000,()=>{
    console.log("server start 3000");
});