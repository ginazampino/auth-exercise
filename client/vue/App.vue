<template>
    <main>
        <div id="nav">
            <router-link :to="{ name: 'Login' }">Login</router-link> |
            <router-link to="/profile">Profile</router-link>
        </div>
        <router-view></router-view>
    </main>
</template>

<script>
    import containerLogin from './pages/login.vue';

    export default {
        components: {
            'container-login': containerLogin
        }
    };
</script>
