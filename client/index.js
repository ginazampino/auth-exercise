// Import all SCSS files through the root index:
import './scss/index.scss';

/*

    'Import' Statements
    -------------------

    Import Vue and Vue Router for use
    by the Express application.

*/

import { createApp } from 'vue';
import Router from './router.js';
import App from './vue/App.vue';

/*

    Initialize Vue3
    ---------------

    Create a Vue application, use Vue Router,
    and mount the application to #app.

*/

createApp(App).use(Router).mount('#app');