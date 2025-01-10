<script>
import { getAuth } from "firebase/auth";
import { createPost } from "../services/user-posts";
import BaseHeading1 from "../components/BaseHeading1.vue";
import ProfileCard from "../components/ProfileCard.vue";

export default {
  components: { BaseHeading1, ProfileCard },
  data() {
    return {
      title: "",
      content: "",
      images: [],
      userProfileImage: "",
    };
  },
  async mounted() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      this.userProfileImage =
        user.photoURL || "public/img/default-profile.jpg";
    }
  },
  methods: {
    async submitPost() {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) {
          alert("Debes estar logueado para crear una publicación.");
          return;
        }
        const postId = await createPost({
          title: this.title,
          content: this.content,
          images: this.images,
          createdBy: user.uid,
        });
        console.log("Nueva publicación creada con ID:", postId);
        this.title = "";
        this.content = "";
        this.images = [];
      } catch (error) {
        console.error("Error al crear la publicación:", error);
        alert("Hubo un problema al crear la publicación.");
      }
    },
    handleFileUpload(event) {
      const files = event.target.files;
      if (files.length > 1) {
        alert("Solo puedes subir hasta 1 imagen.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        this.images = [e.target.result];
      };
      reader.readAsDataURL(files[0]);
    },
  },
};
</script>

<template>
  <div class="w-full max-w-7xl mx-auto flex">
    <div class="w-1/3">
      <ProfileCard />
    </div>
    <div class="w-2/3 p-8 bg-white shadow-2xl rounded-lg">
      <BaseHeading1>Crear Nueva Publicación</BaseHeading1>
      <form @submit.prevent="submitPost" class="space-y-6">
        <div>
          <label for="title" class="block text-lg font-semibold">Título</label>
          <input
            type="text"
            id="title"
            v-model="title"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label for="content" class="block text-lg font-semibold"
            >Contenido</label
          >
          <textarea
            id="content"
            v-model="content"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          ></textarea>
        </div>
        <div>
          <label for="images" class="block text-lg font-semibold"
            >Imágenes</label
          >
          <input
            type="file"
            id="images"
            @change="handleFileUpload"
            class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            accept="image/*"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition duration-300"
        >
          Publicar
        </button>
      </form>
    </div>
  </div>
</template>
