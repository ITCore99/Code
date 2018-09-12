//进行文章的二级目录实现
//引入express
const express=require("express");
//创建一个路由中间件
const posts=express.Router();

//创建下面的二级路由
posts.get("/",(req,res,next)=>{
   res.send("<h2>显示文章</h2>");
});
posts.get("/add",(req,res,next)=>{
    res.send("<h2>添加文章</h2>");
});
posts.get("/delete",(req,res,next)=>{
    res.send("<h2>删除文章</h2>");
});
posts.get("/update",(req,res,next)=>{
    res.send("<h2>修改文章</h2>");
});
//导出二级路由
module.exports={
    posts
};