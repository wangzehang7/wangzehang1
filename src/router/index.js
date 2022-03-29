import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        children: [
            {
                path: "",
                name: "shouye",
                meta: ["首页"],
                component: () => import("../views/home/HomeIndex.vue")
            },
            {
                path: "2-1",
                name: "wen",
                meta: ["文章列表"],
                component: () => import("../views/home/HomeWen.vue")
            },
            {
                path: "2-2",
                meta: ["多层级路由示例"],
                component: () => import("../views/home/HomeDuo.vue")
            },

        ]
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
    }, {
        path: "/login",
        name: "login",
        component: () => import("../views/MyLogin.vue")
    }
]

const router = new VueRouter({
    routes
})
router.beforeEach(function (to, from, next) {
    console.log(to, from)
    if (to.path === "/login") {
        next()
    } else {
        let token = localStorage.getItem("token")
        if (token) {
            next()
        } else {
            return next({ path: "/login" })
        }
    }
})
export default router
