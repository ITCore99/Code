const express=require("express");
const path=require("path");
//创建一个APP
const app=express();
//使用static中间件进行托管
app.use(express.static(path.join(__dirname,"public")))//注意这里的__dirname获取路径只能获取到文件夹层,在入库文件中对文件进行托管后在其他的页面使用这些静态资源就会可以使用托管资源的路径了。
app.get("/",(req,res)=>{
    res.render("index.ejs",{title:"static"});
});
app.listen(8848,(req,res,next)=>{
    console.log("server start 8848");
});