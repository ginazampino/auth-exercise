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

import Login from './vue/containers/unauth/login.vue';

const routes = [
    {
        path: '/',
        redirect: { name: 'Login' }
    },
    {
        path: '/login',
        name: 'Login', // Names must be unique.
        component: Login,
        children: [
            {
                path: '/login/help',
                name: 'Help',
                component: () => import('./vue/containers/unauth/help.vue')
            }
        ]
    }
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

/*

    Export Vue Router
    -----------------

    Send Vue routes to the back end
    for use by the Express application.

*/

export default router;