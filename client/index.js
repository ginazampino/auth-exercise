// Import all SCSS files through the root index:
import './scss/index.scss';

// Import the base Vue file for the application:
import App from './vue/App.vue';

// Import Vue and Vue Router:
import Vue from 'vue';
import Router from './router';

// Initialize and configure Vue:
new Vue ({
    components: { App },
    el: '#app',
    router: Router,
    template: '<App></App>'
});
