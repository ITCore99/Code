//引入express
const express=require("express");
const path=require("path");
//实例化一个app对象就是服务器
let app=express();
let isLoading=false;
//处理路由
app.get("/",(req,res,next)=>{
    res.send("<h1>这是我的第一个Express程序</h1>");
   next();
},(req,res,next)=>{
    console.log("我是第二个回调函数");
});
//首页面路由
app.get("/page",(req,res)=>{
    res.send("<h1>这是首页面</h1>");
    //req的属性学习
    console.log(req.originalUrl);//得到原始的url路径
    console.log(req.protocol);//得到协议
    console.log(req.ip);//得到访问的ip地址
    console.log(req.path);//得到url的路径部分
    console.log(req.host);//得到请求的主机名
    console.log(req.method);//得到请求的方法
    console.log(req.query);//得到一个对象里面放的是请求的参数。
    console.log(req.secure);//得到一个布尔值当建立tls连接是为true
    console.log(req.headers);//得到一个请求标头的对象。

});
//列表路由
app.get("/list",(req,res)=>{
    //res.send("<h1>列表路由聪明的send方法可以自动的识别文件类型向浏览器进行相应</h1>");
    //学习res的属性和方法
    // res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    // res.write("<h1>res的原生方法</h1>");
    // res.write("<h2>原生方法都是可以使用的</h2>");
    // res.end();
    // res.send({a:100,b:200});习大大可还镇的住你？
    // 杨宇(535152057)  18:40:09
    // 怕了怕了
    // res.sendFile(path.resolve(__dirname,"111.html"));
    //   res.json({"name":"sds","age":"14"});
});
app.get("/login",(req,res)=>{
    // res.send("<h1>这是一个login界面</h1>");
    res.render("tips.ejs",{title:"render方法"});
});
//定义
app.get("/cart",(req,res)=>{
    if(isLoading)
    {
        res.send("<h1>这是一个购物车界面</h1>");
    }else
    {
        res.redirect("/login");
    }
});

//服务器监听一个端口
app.listen(3300,()=>{
    console.log("sever start 3300")
});