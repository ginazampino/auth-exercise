/*

    'Import' Statements
    -------------------

    Import Vue and Vue Router for use
    by the Express application.

*/

import VueRouter from 'vue-router';

/*

    Export Vue Router
    -----------------

    Send Vue routes to the back end
    for use by the Express application.

*/

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/sample',
            component: require('./vue/containers/_sample.vue').default
        }
    ]
});