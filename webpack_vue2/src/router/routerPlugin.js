let RouterPlugin = function () {
  this.$router = null
}

const defaultMenus = [
  {
    name: 'Admin',
    path: '/admin',
    filePath: 'layout/admin/index',
    redirect: 'admin/testPage/index',
    children: [
      {
        name: 'TestPage',
        path: 'testPage/index',
        filePath: 'views/testPage/index',
        meta: {},
      },
      {
        name: 'TestPageEdit',
        path: 'testPage/edit',
        filePath: 'views/testPage/edit',
        meta: {},
      },
    ],
  },
]

RouterPlugin.install = function (Vue, option = {}) {
  this.$router = option.router

  this.$router._routerPlugin = {
    safe: this,
    formatRoutes: function (menus = defaultMenus, first = true) {
      if (!menus.length) return
      const menuRoutes = []
      menus.forEach((menu) => {
        const menuRoute = {
          name: menu.name,
          path: menu.path,
          meta: menu.meta,
          redirect: menu.redirect,
          component: (resolve) => require([`@/${menu.filePath}`], resolve),
          children: menu.children ? this.formatRoutes(menu.children, false) : [],
        }
        menuRoutes.push(menuRoute)
      })
      if (first) {
        this.safe.$router.addRoutes(menuRoutes)
      } else {
        return menuRoutes
      }
    },
  }
}

export default RouterPlugin
