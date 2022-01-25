import Vue from 'vue'
import VueRouter from 'vue-router'

import Default from '@/layouts/Default'
import Blank from '@/layouts/Blank'
import Comunidades from '../components/Comunidades'
import home from './../components/Home.vue'
import Login from '../components/Login.vue'
import Sobre from './../components/Sobrenos'
import { auth } from '../plugins/firebase'

Vue.use(VueRouter)
const router = new VueRouter({
    
})


export default new VueRouter({
    routes: [{
        path: '/', name:'default', component: Default,
        meta:{
            requiresAuth: true    
        }, children: [{
            path:'', name: 'home', component:home
        },{
            name:'comunidades', component:Comunidades, path:'comunidades'
        },{
            name:'sobre', component:Sobre, path:'sobre'
        }]
    }, {path: '/', name:'blank', component:Blank, children: [{
        path:'/login', component:Login, name:'login'
    }]

    }],
    mode: 'history'
})

router.beforeEach((to, from, next) =>{
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

    if(requiresAuth && !auth.currentUser){
        next('login')
    } else {
        next()
    }
})

