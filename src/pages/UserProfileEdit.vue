
<script>
import { editUserProfile } from "../services/user-profiles";
import { subscribeToAuthChanges } from "../services/auth";

let unsubscribeFromAuth = () => {};

export default {
  data() {
    return {
      editData: {
        id: "", // Asegúrate de que el ID del usuario esté aquí
        displayName: "",
        bio: "",
        career: "",
      },
      saving: false,
    };
  },
  methods: {
    async handleSubmit() {
      if (this.saving) return;

      this.saving = true;

      try {
        await editUserProfile(this.editData.id, {
          displayName: this.editData.displayName,
          bio: this.editData.bio,
          career: this.editData.career,
        });
      } catch (error) {
        console.error("Error al editar el perfil:", error);
      }

      this.saving = false;
      console.log("Perfil editado con éxito");

      this.$router.push("/user-profile");
    },
  },
  mounted() {
    unsubscribeFromAuth = subscribeToAuthChanges(
      (newUserData) => (this.editData = newUserData)
    );
  },
  unmounted() {
    unsubscribeFromAuth();
  },
};
</script>

<template>
  <div class="max-w-2xl mx-auto my-16 p-6 bg-white shadow-2xl rounded-lg">
    <h1 class="text-3xl font-bold text-gray-800 mb-8">Editar Perfil</h1>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label class="block text-gray-700">Nombre</label>
        <input
          v-model="editData.displayName"
          type="text"
          class="w-full px-4 py-2 border rounded-lg"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Biografía</label>
        <textarea
          v-model="editData.bio"
          class="w-full px-4 py-2 border rounded-lg"
          required
        ></textarea>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Carrera</label>
        <input
          v-model="editData.career"
          type="text"
          class="w-full px-4 py-2 border rounded-lg"
          required
        />
      </div>
      <div class="flex justify-end space-x-4">
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded"
          :disabled="saving"
        >
          {{ saving ? "Guardando..." : "Guardar" }}
        </button>
      </div>
    </form>
  </div>
</template>
