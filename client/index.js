// Import all SCSS files through the root index:
import './scss/index.scss';

/*

    'Import' Statements
    -------------------

    Import Vue and Vue Router for use
    by the Express application.

*/

import { createApp } from 'vue';
import router from './router.js';
import App from './vue/App.vue';

/*
0
    Initialize Vue3
    ---------------

    Create a Vue application, use Vue Router,
    and mount the application to #app.

*/

createApp(App).use(router).mount('#app');