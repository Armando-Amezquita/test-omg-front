import { createRouter, createWebHistory } from 'vue-router';
import Login from '../view/Login.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Login},
        { path: '/signup', component: () => import('../view/SignUp.vue')},
        { 
            path: '/dashboard', 
            component: () => import('../view/Dashboard.vue'),
            children: [
                {
                    path: ':id', component: import('../components/Card.vue')
                }
            ]
        },
       
    ]
})

export default router;