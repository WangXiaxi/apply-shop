import Vue from 'vue'
import Router from 'vue-router'
import artApply from '@/components/art-apply/art-apply'
import artApplyDetail from '@/components/art-apply-detail/art-apply-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'artApply',
      component: artApply
    },
    {
      path: '/detail/:id',
      name: 'artApplyDetail',
      component: artApplyDetail
    }
  ]
})
