/**这里的router index是存放router实例的*/
import Vue from 'vue';
import Router from 'vue-router';
import home from '../components/home'; /**导入自定义组件*/
import  Nprogress from 'nprogress';/**引入进度条插件*/
import  'nprogress/nprogress.css';
Vue.use(Router)
let router=new Router({
  mode:'history',/**使用history模式可以消除地址栏的#，它使用的不是hash进行请求而是使用h5的一个api进行请求*/
  routes: [
    {
      path: '/',
      component:home,
      name:'home',
      meta:{
          title:'首页',
      }
    },
    {
      path:'/about/:id',
      name:'详情',
      component:()=>import('../components/about'),/**进行异步的引入*/
      meta:{
        title:'详情',
      }
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('../components/login'),
      meta:{
        title:'登陆',
      }
    },
    {
      path:'/main',
      name:'main',
      component:()=>import("../view/layout/index.vue"),
      redirect:'/main/home',
      children:[
        {
          path: 'home',
          component:home,
          name:'home1',
          meta:{
            title:'首页',
          }
        },
        {
          path:'about/:id',
          name:'详情1',
          component:()=>import('../components/about'),/**进行异步的引入*/
          meta:{
            title:'详情',
          }
        },
        {
          path:'login',
          name:'login1',
          component:()=>import('../components/login'),
          meta:{
            title:'登陆',
          }
        },
      ],
    }
  ]
})
/**这是一个全局的钩子函数是路由跳转之前使用执行必须要调用next()方法*/
router.beforeEach((to,from,next)=>{
  Nprogress.start();/**启动进度条*/
  if(to.meta&&to.meta.title)
  {
    document.title=to.meta.title;
  }
  next();
})
/**这个全局钩子是表示路由进入之后,注意这里是两个参数*/
router.afterEach((to,from)=>{
    Nprogress.done();/**关闭进度条*/
})
export default router;
