import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Timely from '@/view/timely'
import UserCenter from '@/view/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Timely',
      component: Timely
    },
    {
      path: '/timely',
      name: 'Timely',
      component: Timely
    },
    {
      path: '/user/center',
      name: 'UserCenter',
      component: UserCenter
    }
  ]
})
