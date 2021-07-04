import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
import Home from '../views/home/home'
import Mqtt from '../views/mqtt/mqtt'
import PageA from '../views/page/pageA'

const router = new Router({
  // mode: "history",
  // base: "/",
  // mode: "history",
  // base:'/shzs_test/static',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/mqtt",
      name: "mqtt",
      component: Mqtt
    },
    {
      path: "/pagea",
      name: "pagea",
      component: PageA
    },
    // {
    //   path: "",
    //   component: Home,
    //   children: [
    //     {
    //       path: "/home",
    //       name: "首页",
    //       component: () =>
    //         import(/* webpackChunkName: "home" */ "../views/home/home.vue")
    //     },
    //     {
    //       path: "/user",
    //       name: "个人中心",
    //       component: () =>
    //         import(/* webpackChunkName: "user" */ "../views/user/index")
    //     }
    //   ]
    // },
    // {
    //   path: "/login",
    //   name: "登录",
    //   meta: { hasBack: true },
    //   component: () =>
    //     import(/* webpackChunkName: "login" */ "../views/login/index")
    // }
  ]
});

// routerEach(router);
export default router;
