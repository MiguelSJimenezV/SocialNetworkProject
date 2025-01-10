<script>
import { RouterLink } from "vue-router";
import { subscribeToAuthChanges } from "../services/auth";

let unsubscribeFromAuth = () => {};

export default {
  data() {
    return {
      loggedUser: {
        id: "",
        email: "",
        displayName: "",
        bio: "",
        career: "",
        photoURL: "",
      },
    };
  },
  mounted() {
    unsubscribeFromAuth = subscribeToAuthChanges(
      (newUserData) => (this.loggedUser = newUserData)
    );
  },
  unmounted() {
    unsubscribeFromAuth();
  },
  components: { RouterLink },
};
</script>

<template>
  <div
    class="w-full h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex justify-center p-6 my-10">
      <div class="flex flex-col items-center">
        <img
          class="w-40 h-40 mb-3 rounded-full shadow-lg object-cover"
          :src="loggedUser.photoURL || 'https://i.pravatar.cc/300'"
          alt="Profile image"
        />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {{ loggedUser.displayName || "Usuario no registrado" }}
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{{
          loggedUser.email || "No tiene email"
        }}</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">{{
          loggedUser.career   || "No tiene carrera"
        }}</span>
        <div class="flex mt-4 md:mt-6">
          <RouterLink
            to="user-profile"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none transition duration-300"
            >Mis Posteos</RouterLink
          >
          <RouterLink
            to="chat"
            class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >Chat</RouterLink
          >
          
        </div>
      </div>
    </div>
  </div>
</template>
