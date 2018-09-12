const express=require("express");

//创建一个APP副武器的应用
const app=express();
//导入二级路由插件
const {cart}=require("./routes/cart");
const {posts}=require("./routes/posts");
//将凡是以/cart开头的路径全部交由carts来进行处理
app.use("/cart",cart);
//将凡是以/posts开头的路径全有posts来进行处理
app.use("/posts",posts);
//设置服务器创建端口
app.listen(3434,()=>{
    console.log("start 3434");
});