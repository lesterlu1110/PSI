import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router = new Router({
  routes: [
    // {
    //   path: "/",
    //   redirect: "/login"
    // },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/login"),
      meta: {
        title: "登录"
      }

    },
    {
      path: '/index',
      name: 'Index',
      component: () => import("../views/index"),
      children:[
        {
          path: "/home",
          name: "Home",
          component: () => import("../views/home"),
          meta: {
            title: '进销存'
          },
        },
        
      ]
    },
   
  ]
})

export default router;