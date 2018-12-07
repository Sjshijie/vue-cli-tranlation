import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Parent from './views/Parent'
import Foo from './views/Foo'
import Home from './views/Home'
import Default from './views/Default'
import Bar from './views/Bar'
import animate from 'animate.css'

Vue.use(VueRouter)
Vue.use(animate)


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/parent', component: Parent,
      children: [
        { path: '', component: Default },
        { path: 'foo', component: Foo },
        { path: 'bar', component: Bar }
      ]
    }
  ]
})

new Vue({
  el:'#app',
  router,
  render: h => h(App)
})