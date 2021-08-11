// Import all SCSS files through the root index:
import './scss/index.scss';

// Import the base Vue file for the application:
import App from './vue/App.vue';

// Import Vue and Vue Router:
import { createApp } from 'vue';
import Router from './router';

// Initialize and configure Vue:
const app = createApp(App);

// Mount the Vue application to an HTML element:
app.mount('#app');
