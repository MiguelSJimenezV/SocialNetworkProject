<script>
import Home from "./pages/Home.vue";
import AppNavbar from "./components/AppNavbar.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: { Home, AppNavbar, AppFooter },
};
</script>

<template>
  <div class="bg-gradient-to-b from-purple-500 to-blue-900">
    <AppNavbar />
    <main class="container p-5 mx-auto">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>
