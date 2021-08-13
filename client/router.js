/*

    'Import' Statements
    -------------------

    Import Vue and Vue Router for use
    by the Express application.

*/

import { createWebHistory, createRouter } from 'vue-router';

/*

    Create Routes
    -------------

    Creates routes to be consumed by
    Vue Router.

*/

import Login from './vue/pages/login.vue';

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/profile',
        name: 'userProfile',
        component: () => import('./vue/pages/profile.vue')
    }
]

/*

    Create Router
    -------------

    Create a router and send to it
    the routes defined above.

*/

const router = createRouter({
    history: createWebHistory(), // Needs to be a call.
    routes
});

/*

    Export Vue Router
    -----------------

    Send Vue routes to the back end
    for use by the Express application.

*/

export default router;