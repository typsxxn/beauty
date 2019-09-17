import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/indexpage'
import BrandPage from '../pages/brandpage'
import OlayPage from '../pages/brandpages/olay'
import TheOrdinaryPage from '../pages/brandpages/theordinary'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/brand',
      component: BrandPage,
      redirect: '/brand/olay',
      children: [
        {
          path: 'olay',
          component: OlayPage
        },
        {
          path: 'theordinary',
          component: TheOrdinaryPage
        }
      ]
    }
  ]
})
