<template>
    <div class="container">
      <div class="header">
          <h1>我头部</h1>
      </div>
      <div class="nav">
        <ul>
          <li><router-link to="/main/home" class="common">首页</router-link></li>
          <li><router-link :to="{name:'详情1'}" class="common">详情</router-link></li>
          <li><router-link to="/main/login" class="common">登录</router-link></li>
        </ul>
      </div>
      <div class="main-content">
         <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
.header
{
  text-align:center;
  height:50px;
  padding-left:200px;
  position:fixed;
  top:0px;
  background: #3a8ee6;
  width: 100%;
}
.nav{
  position: fixed;
  top:0;
  left:0;
  bottom:0;
  width:200px;
  background: #273647;
  z-index: 998;

}
  .common
{
  color: #ffffff;
}
.main-content
{
  margin-top: 50px;
  padding-left:200px;
  width: 100%;
  background: #9a9a9a;
}
</style>
