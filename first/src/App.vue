<template>
  <div>    <!--注意这里的跟标签必须是唯一的-->
    <router-view></router-view>
    <!--<ul>-->
      <!--<li><router-link :to="{name:'home'}">首页</router-link></li>&lt;!&ndash;注意在router-link中是可以传递参数的如就是使用name来进行判断跳转使用to一个对象来进行传递参数&ndash;&gt;-->
      <!--<li><router-link :to="{name:'详情',params:{id:'我叫参数'}}">详情页</router-link></li>-->
      <!--<li><router-link to="/login">登陆</router-link></li>-->
    <!--</ul>-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
