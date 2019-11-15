import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes'
import NProgress from 'nprogress'

const router = new Router({
  mode: 'history',
  base: '/',
  linkActiveClass: 'selected',
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

Vue.use(Router)

export default router
