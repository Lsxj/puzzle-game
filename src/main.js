import Vue from 'vue'
import Vue_Router from 'vue-router'
import routerMap from './routers.js'
import App from './App'


Vue.use(Vue_Router)

var router = new Vue_Router({
    hashbang: true,
    history: false,
    saveScrollPosition: false,
    transitionOnLoad: true
})

// 独立出来的路由
routerMap(router)

router.start(App, '#puzzleApp')

///* eslint-disable no-new */
//new Vue({
//el: 'body',
//components: { App }
//})
