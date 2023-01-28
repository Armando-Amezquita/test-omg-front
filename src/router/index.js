import { createRouter, createWebHistory } from 'vue-router';
import Login from '../view/Login.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Login},
        { path: '/dashboard', component: () => import('../view/Dashboard.vue')},
        { path: '/signup', component: () => import('../view/SignUp.vue')},
       
    ]
})

export default router;