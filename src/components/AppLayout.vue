<script>
import AppNavbar from './AppNavbar.vue';
import AppFooter from './AppFooter.vue';

export default {
    name: 'AppLayout',
    components: { AppNavbar, AppFooter },
}
</script>

<template>
    <AppNavbar />
    <main class="content h-full">
        <slot />
    </main>
    <AppFooter />
</template>