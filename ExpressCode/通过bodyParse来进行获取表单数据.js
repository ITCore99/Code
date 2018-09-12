const express =require("express");
const app=express();
//引入插件body-parser
const bodyParser=require("body-parser");
//使用bodyParser插件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extened:false}));
app.get("/",(req,res,next)=>{
    res.render("login.ejs");
});
app.post("/signIn",(req,res)=>{
    //我们使用nodejs原生的方法进行获取,
    // console.log("我进来了");
    //  let str="";
    //
    // req.on("data",(chunk)=>{
    //    str=str+chunk;
    // });
    // //当数据流完会触发end的方法
    // req.on("end",()=>{
    //     console.log(str);
    // });
    //通过插件来进行获取数据
    console.log(req.body);
});
app.listen(9638,()=>{
    console.log("Server start 9638");
});
