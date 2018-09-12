//引入express
const express=require("express");
const app=express();
//引入路由解析插件
const cookieParser=require("cookie-parser");
//使用路由解析中间件
app.use(cookieParser());
//引入表单获取数据插件
const bodyParser=require("body-parser");
//使用表单获取数据的插件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extened:false}));
//登录路由的实现
//首页
app.get("/",(req,res,next)=>{
    res.render("home.ejs");
});
//列表页
app.get("/list",(req,res,next)=>{
    res.send("<h2>列表页面</h2>");
});
//登录页
app.get("/user",(req,res,next)=>{
    //由于这个是由多个路由共同使用的所以必须要使用会话机制用cookie就可以了。
    if(req.cookies.isLogin)
    {
        res.send("<h2>用户中心</h2><a href='/logout'>注销账户</a>");
    }else
    {
        res.redirect("/login")
    }
});
app.get("/login",(req,res,next)=>{
    res.render("login.ejs");
});
app.post("/signIn",(req,res,next)=>{

    let account=req.body.username;
    let password=req.body.password;
    if(account==="admin"&&password==="admin")
    {
        //登陆成功需要设置cookie
        res.cookie("isLogin",true);
        res.redirect("/user");
    }else
    {
        res.redirect("/login");
    }
});
app.get("/logout",(req,res,next)=>{
    res.cookie("isLogin",true,{maxAge:-1});
    res.redirect("/login");
});
app.listen(7412,()=>{
    console.log("server start 7412");
})