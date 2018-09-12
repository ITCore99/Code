const express=require("express");

const app=express();
const bodyParser=require("body-parser");
//使用表单获取数据的插件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extened:false}));
//引入session中间件
const session=require("express-session");
//使用session插件
app.use(session({
    secret:"fzn",
    resave:false,
    saveUninitialized:true,
    cookie:{},
}))

//首页
app.get("/",(req,res)=>{
    res.render("home.ejs");
});
//列表页
app.get("/list",(req,res)=>{
    res.send("<h2>列表页面</h2>");
});
//登录页面
app.get("/login",(req,res)=>{
    res.render("login.ejs")
});
//用户界面
app.get("/user",(req,res)=>{

    if(req.session.isLogin)
    {
        res.send("<h2>用户中心</h2><a href='/logout'>注销</a>");
    }else
    {
        res.redirect("/login");
    }
});
//处理用户登录
app.post("/signIn",(req,res)=>{
    console.log("进来了")
    console.log(req.body);
    let username=req.body.username.trim();
    let password=req.body.password.trim();
    if(username==="admin"&& password==="admin")
    {
        //登录成功设置session
        req.session.isLogin=true;
        req.session.username=username;
        res.redirect("/user");
    }else
    {
        res.redirect("/login");
    }
})
//注销处理
app.get("/logout",(req,res)=>{
    //req.session={},
    req.session.destroy(err=>{
        if(err)
        {
            throw err;
        }
        res.redirect("/login");
    })
    console.log(req.session)


})
app.listen(4000,(req,res)=>{
    console.log("server start 4000");
});