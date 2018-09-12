<template>
    <div>
      <h1>我是一个登陆页面</h1>
      用户名：<input type="text" v-model="username"/>
      <br>
      密码：<input type="password" v-model="password"/>
      <br>
      <button @click="handleSumbit">点击进行注册</button>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: 'login',
        data(){
          return{
            username:'',
            password:'',
          }
        },
        created(){
          console.log(this.$router);
          console.log(this.$route);
          console.log(this.$route.query);                          /**router原生提供的一个方法用来进行去查询字符串*/
        },
        methods:{
          handleSumbit()
          {
            axios.post('http://localhost:4569/login',{username:this.username,password:this.password}).then(res=>{
              if(res.data.code=='200')
              {
                alert('登陆成功');
                this.$router.push('/');/**编程式路由的跳转特别需要注意的是这里的是$router而不是$route在使用取路由参数时是$route*/
              }else
                {
                  alert('登陆失败');
                }

            })
          }
        },
    }
</script>

<style scoped>

</style>
