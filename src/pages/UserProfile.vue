<script>
import BaseHeading1 from "../components/BaseHeading1.vue";
import UserPosts from "../components/UserPosts.vue";
import { subscribeToAuthChanges } from "../services/auth";

let unsubscribeFromAuth = () => { };

export default {
  name: "UserProfile",
  components: { BaseHeading1, UserPosts },
  data() {
    return {
      loggedUser: {
        id: null,
        email: null,
        displayName: null,
        bio: null,
        career: null,
        photoURL: null,
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
};
</script>
<template>
  <div class="">
    <div class="max-w-7xl mx-auto mt-16 mb-4 h-1/3 p-6 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-lg">
      <div class="flex items-center justify-between mb-2">
        <BaseHeading1 class="text-white">Mi Perfil</BaseHeading1>

        <router-link to="/user-profile/edit"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Editar</router-link>
      </div>

      <div class="flex items-center space-x-6">
        <h3 class="sr-only">Foto de perfil</h3>
        <img v-if="loggedUser.photoURL" :src="loggedUser.photoURL" alt="Foto de perfil"
          class="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover" />
        <span v-else class="text-gray-200">Acá va la imagen de perfil del usuario...</span>
        <div>
          <div class="flex gap-3 mb-2">
            <h3 class="sr-only">Nombre de Usuario</h3>
            <p class="text-2xl  font-bold text-white">
              {{ loggedUser.displayName || "No especificado..." }}
            </p>
            <h3 class="sr-only">Correo Electrónico</h3>
            <p class=" text-xl text-gray-200 mt-1 ">{{ loggedUser.email }}</p>
          </div>



          <h3 class="sr-only">biografía</h3>
          <p class="text-gray-200 mb-2">
            {{ loggedUser.bio || "El usuario no a definido su biografía" }}
          </p>

          <h3 class="sr-only">carrera</h3>
          <p class="text-gray-200 mb-2">
            {{ loggedUser.career || "Carrera no especificada..." }}
          </p>
        </div>
      </div>
    </div>
    <UserPosts></UserPosts>
  </div>
</template>
