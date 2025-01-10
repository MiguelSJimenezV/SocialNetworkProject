
<script>
import BaseHeading1 from "../components/BaseHeading1.vue";
import { register, login } from "../services/auth"; // Importar la función de registro desde auth.js

export default {
  name: "RegisterForm",
  components: { BaseHeading1 },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      profileImage: null, // Añadimos una propiedad para la imagen de perfil
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.profileImage = file;
    },
    async handleSubmit() {
      if (
        !this.name ||
        !this.email ||
        !this.password ||
        !this.confirmPassword ||
        !this.profileImage // Verificar que la imagen de perfil esté presente
      ) {
        alert("Por favor, completa todos los campos.");
        return;
      }

      if (this.password !== this.confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
      }

      try {
        // Lógica para subir la imagen de perfil y registrar al usuario
        await register(this.email, this.password, this.name, this.profileImage);

        login(this.email, this.password);

        // Redirigir al usuario a la página de inicio de sesión
        this.$router.push("/");
      } catch (error) {
        console.error("Error al registrar:", error);
        alert("Hubo un problema al registrar.");
      }
    },
  },
};
</script>

<template>
  <div class="my-16">
    <form
      action="#"
      class="max-w-2xl mx-auto bg-gray-100 p-16 rounded-xl shadow-xl my-44"
      @submit.prevent="handleSubmit"
    >
      <BaseHeading1 class="text-gray-950 ">Regístrate</BaseHeading1>
      <div class="mb-4">
        <label
          for="profileImage"
          class="block text-sm font-medium text-gray-700"
          >Foto de Perfil:</label
        >
        <input
          type="file"
          id="profileImage"
          @change="handleFileUpload"
          accept="image/*"
          class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          required
        />
      </div>
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700"
          >Nombre:</label
        >
        <input
          type="text"
          id="name"
          v-model="name"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email:</label
        >
        <input
          type="email"
          id="email"
          v-model="email"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700"
          >Contraseña:</label
        >
        <input
          type="password"
          id="password"
          v-model="password"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div class="mb-4">
        <label
          for="confirmPassword"
          class="block text-sm font-medium text-gray-700"
          >Confirmar Contraseña:</label
        >
        <input
          type="password"
          id="confirmPassword"
          v-model="confirmPassword"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      
      <button
        type="submit"
        class="w-full bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition duration-300"
      >
        Registrarse
      </button>
    </form>
  </div>
</template>
