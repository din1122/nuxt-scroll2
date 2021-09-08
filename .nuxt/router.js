import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7c6e0ec6 = () => interopDefault(import('..\\pages\\Comp.vue' /* webpackChunkName: "pages/Comp" */))
const _57df08da = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _7af38122 = () => interopDefault(import('..\\pages\\oldindex.vue' /* webpackChunkName: "pages/oldindex" */))
const _7ea06c6a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Comp",
    component: _7c6e0ec6,
    name: "Comp"
  }, {
    path: "/inspire",
    component: _57df08da,
    name: "inspire"
  }, {
    path: "/oldindex",
    component: _7af38122,
    name: "oldindex"
  }, {
    path: "/",
    component: _7ea06c6a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
