<template>
    <main>
        This is Vue.js
        <container-login></container-login>
    </main>
</template>

<script>
    import containerLogin from './containers/_login.vue';

    export default {
        components: {
            'container-login': containerLogin
        }
    };
</script>
