/*

    'Import' Statements
    -------------------

    Import Vue and Vue Router for use
    by the Express application. 

    Also import Axios for use in routes.

*/

import { createWebHistory, createRouter } from 'vue-router';
import axios from 'axios';

/*

    Create Routes
    -------------

    Creates routes to be consumed by
    Vue Router.

*/

const routes = [

    {
        path: '/',
        name: 'Home',
        component: () => import('./vue/containers/auth/home.vue')
    }

    // {
    //     path: '/',
    //     redirect: { name: 'Login' }
    // },
    // {
    //     path: '/login',
    //     name: 'Login', // Names must be unique.
    //     component: Login,
    //     children: [
    //         {
    //             path: '/login/help',
    //             name: 'Help',
    //             component: () => import('./vue/containers/unauth/help.vue')
    //         }
    //     ]
    // },
    // {
    //     path: '/home',
    //     name: 'Home',
    //     component: () => import('./vue/containers/auth/home.vue'),
    //     beforeEnter: (to, from, next) => {
    //         axios.get('/auth/user').then(resp => {
    //             const profile = resp.data;
    //             if (profile) {
    //                 next();
    //             } else {
    //                 console.log('No user found. Redirecting...')
    //                 window.location.replace('/auth/google');
    //             }
    //         })
    //     }
];

/*

    Create Router
    -------------

    Create a router and send to it
    the routes defined above.

*/

const router = createRouter({
    history: createWebHistory(), // Needs to be a call.
    routes: routes,
    linkActiveClass: 'active'
});

router.beforeEach((to, from, next) => {  
    if (to.matched.some(record => record.meta.requiresAuth)) {
        let isLoggedIn = false;
    
        if (!isLoggedIn) {
            next({
                name: "login",
                query: {redirect: to.fullPath}
            });           
        } else {
            next();
        }
    } else {
        next();
    }
});

/*

    Export Vue Router
    -----------------

    Send Vue routes to the back end
    for use by the Express application.

*/

export default router;