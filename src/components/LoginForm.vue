<script>
import BaseHeading1 from "../components/BaseHeading1.vue";
import { login } from "../services/auth"; // Asegúrate de que la ruta sea correcta

export default {
  name: "LoginForm",
  components: { BaseHeading1 },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      if (!this.email || !this.password) {
        alert("Por favor, completa todos los campos.");
        return;
      }

      try {
        // Llamar al servicio de autenticación
        await login(this.email, this.password);
        // Redirigir al home si el inicio de sesión es exitoso
        this.$router.push("/");
      } catch (error) {
        // Manejar errores
        console.error("Error de autenticación:", error.message);
        alert("Error de autenticación: " + error.message);
      }
    },
  },
};
</script>

<template>
  <div class="my-16">
    <form
      action="#"
      class="max-w-2xl mx-auto bg-gray-100 p-16 rounded-xl shadow-xl my-44  "
      @submit.prevent="handleSubmit"
    >
      <BaseHeading1 class="text-gray-950 ">Ingresar a tu Cuenta</BaseHeading1>
      <div class="mb-5">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          v-model="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="email@example.com"
          required
        />
      </div>
      <div class="mb-5">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          v-model="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="•••••••••"
          required
        />
      </div>
      <div class="flex items-center mb-5">
        <input
          id="remember"
          type="checkbox"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="remember"
          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Remember me
        </label>
      </div>
      <button
        type="submit"
        class="w-full bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition duration-300"
      >
        Submit
      </button>
      <p
        id="helper-text-explanation"
        class="mt-2 text-sm text-gray-500 dark:text-gray-400"
      >
        ¿No tienes una cuenta?
        <router-link
          to="/register"
          class="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          ¡Regístrate ahora!
        </router-link>
      </p>
    </form>
  </div>
</template>
