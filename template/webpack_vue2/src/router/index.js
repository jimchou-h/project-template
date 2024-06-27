import Vue from 'vue'
import Router from 'vue-router'
import RouterPlugin from './routerPlugin'
import PageRouter from './pages/'

Vue.use(Router)

export const createRouter = () =>
  new Router({
    mode: 'history',
    routes: [...PageRouter],
  })

const router = createRouter()

RouterPlugin.install(Vue, {
  router,
})

console.log(router._routerPlugin.formatRoutes())

export function resetRouter() {
  const newRouter = createRouter()
  Router.matcher = newRouter.matcher // reset router
  RouterPlugin.install(Vue, {
    router: Router,
  })
}

export default router
