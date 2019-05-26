import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import index from '@/components/index'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})