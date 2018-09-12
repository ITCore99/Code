<template>
    <div>
      <h1>我是详情页面</h1>
      <h2>我是动态路由参数是：{{$route.params.id}}</h2>
      <!--通过$route.params.id来获取传过来的id值 -->
    </div>
</template>

<script>
    export default {
        name: "about",
        created(){/**是生命周期函数当vue实例准备好之后组件被挂载之前执行*/
            console.log(this.$route.params.id);
            console.log(this.$route);
        }

    }
</script>

<style scoped>

</style>
