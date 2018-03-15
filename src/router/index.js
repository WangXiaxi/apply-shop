import Vue from 'vue'
import Router from 'vue-router'
import artApply from '@/components/art-apply/art-apply'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'artApply',
      component: artApply
    }
  ]
})
