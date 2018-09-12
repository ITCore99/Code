const express=require('express');

const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extened:false}));
const users=[{name:'yao',password:'123456'},{name:'江疏影',password:'52123'}];
app.post("/login",(req,res)=>{
    console.log(req.body);
    const {username,password}=req.body;
    let isLogin=false;
    users.forEach(item=>{
        if(item.name===username&&password===item.password)
        {
            isLogin=true;
        }
    });
    if(isLogin)
    {
        res.json({code:'200',msg:'登陆成功'})
    }else
    {
        res.json({code:'500',msg:'登陆失败'})
    }
})
app.listen(4569,()=>{
    console.log('服务器启动成功！4569')
})