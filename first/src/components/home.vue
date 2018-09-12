<template>
  <div>
    <h1>我是首页</h1>
    <router-link :to="{path:'/login',query:{userinfo:'username is sanmu'}}">跳转到登录里面携带了查询字符串</router-link>
  </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style>

</style>
