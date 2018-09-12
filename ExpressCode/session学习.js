const express=require("express");
//引入express-session中间件
const session=require("express-session");

const  app=express();
//使用app的中间件
app.use(session({
    secret:"test",
    resave:false,
    saveUninitialized:true,
    cookie:{MaxAge:60000}
}));
app.get("/",(req,res)=>{
    console.log("进来了");
    //设置session
    req.session.username="tom";
    console.log(req.session.username)
    res.send("<h2>session的基本使用</h2>");
});
app.listen(4563,()=>{
    console.log("server start 4563");
})
