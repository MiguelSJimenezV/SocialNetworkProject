<script>
import BaseHeading1 from "../components/BaseHeading1.vue";
import { subscribeToAuthChanges } from "../services/auth";

let unsubscribeFromAuth = () => {};

export default {
  name: "MyProfile",
  components: { BaseHeading1 },
  data() {
    return {
      loggedUser: {
        id: null,
        email: null,
        displayName: null,
        bio: null,
        career: null,
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
  <div class="flex items-end gap-4">
    <BaseHeading1>Mi Perfil</BaseHeading1>
    <router-link to="/mi-perfil/editar" class="mb-4 text-blue-700 underline"
      >Editar</router-link
    >
  </div>

  <div class="mb-4">
    {{ loggedUser.bio || "Acá va la biografía del usuario..." }}
  </div>

  <dl>
    <dt class="font-bold">Email</dt>
    <dd class="mb-3">{{ loggedUser.email }}</dd>
    <dt class="font-bold">Nombre de Usuario</dt>
    <dd class="mb-3">{{ loggedUser.displayName || "No especificado..." }}</dd>
    <dt class="font-bold">Carrera</dt>
    <dd class="mb-3">{{ loggedUser.career || "No especificada..." }}</dd>
  </dl>
</template>
