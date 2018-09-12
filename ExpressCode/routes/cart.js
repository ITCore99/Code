//这是二级路由实现
//引入express
const express=require("express");
//创建路由插件
let cart=express.Router();
cart.get("/",(req,res,next)=>{
    res.send("<h2>显示分类</h2>");
});
cart.get("/add",(req,res,next)=>{
    res.send("<h2>产品添加</h2>");
});
cart.get("/delete",(req,res,next)=>{
    res.send("<h2>产品删除</h2>");
});
cart.get("/update",(req,res,next)=>{
    res.send("<h2>产品修改</h2>'");
});
//导出二级路由
module.exports={cart};
