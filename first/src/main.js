import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,  /**将导入的router路由实例注入到vue实例的入口文件*/
  components: { App },
  template: '<App/>'
})
