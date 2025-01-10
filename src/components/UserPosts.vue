
<script>
import {
  subscribeToUserPosts,
  deletePost,
  updatePost,
} from "../services/user-posts";
import { subscribeToAuthChanges } from "../services/auth"; // Asegúrate de importar esta función

export default {
  data() {
    return {
      userPosts: [], // Aquí se almacenarán los posteos del usuario
      loggedUser: null, // Inicializa loggedUser como null
      showEditPopup: false, // Controla la visibilidad del popup de edición
      editPostData: {
        id: null,
        title: "",
        content: "",
      }, // Datos del post a editar
    };
  },
  mounted() {
    this.unsubscribeFromAuth = subscribeToAuthChanges((newUserData) => {
      this.loggedUser = newUserData;
      if (this.loggedUser && this.loggedUser.id) {
        this.unsubscribe = subscribeToUserPosts(this.loggedUser.id, (posts) => {
          this.userPosts = posts;
        });
      }
    });
  },
  unmounted() {
    if (this.unsubscribeFromAuth) {
      this.unsubscribeFromAuth();
    }
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  },
  methods: {
    formatDate(timestamp) {
      if (!timestamp || !timestamp.seconds) {
        return "Fecha desconocida";
      }
      const date = new Date(timestamp.seconds * 1000);
      return date.toLocaleDateString();
    },
    openEditPopup(post) {
      this.editPostData = { ...post };
      this.showEditPopup = true;
    },
    closeEditPopup() {
      this.showEditPopup = false;
    },
    async updatePost() {
      try {
        await updatePost(this.editPostData.id, {
          title: this.editPostData.title,
          content: this.editPostData.content,
        });
        this.userPosts = this.userPosts.map((post) =>
          post.id === this.editPostData.id
            ? { ...post, ...this.editPostData }
            : post
        );
        this.closeEditPopup();
      } catch (error) {
        console.error("Error actualizando el post:", error);
      }
    },
    async deletePost(postId) {
      try {
        await deletePost(postId);
        this.userPosts = this.userPosts.filter((post) => post.id !== postId);
      } catch (error) {
        console.error("Error eliminando el post:", error);
      }
    },
  },
};
</script>

<template>
  <div
    class="max-w-7xl mx-auto p-6 bg-gradient-to-r from-blue-500 to-purple-600 shadow-2xl rounded-lg"
  >
    <h1 class="text-3xl font-bold text-white mb-8">Mis Publicaciones</h1>
    <div v-if="userPosts.length" class="space-y-6">
      <div
        v-for="post in userPosts"
        :key="post.id"
        class="p-6 bg-white rounded-lg shadow-md"
      >
        <div class="mb-4">
          <h2 class="text-2xl font-bold text-gray-800">{{ post.title }}</h2>
          <p class="text-gray-700">{{ post.content }}</p>
          <p class="text-gray-500 text-sm">
            Publicado el: {{ formatDate(post.createdAt) }}
          </p>
          <p class="text-gray-500 text-sm">
            Likes: {{ post.likes || 0 }} | Comentarios:
            {{ post.comments ? post.comments.length : 0 }}
          </p>
        </div>
        <div class="flex space-x-4">
          <button
            @click="openEditPopup(post)"
            class="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Editar
          </button>
          <button
            @click="deletePost(post.id)"
            class="bg-red-500 text-white px-4 py-2 rounded"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
    <div v-else class="text-gray-500">No hay posteos para mostrar.</div>

    <!-- Popup para editar post -->
    <div
      v-if="showEditPopup"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 class="text-2xl font-bold mb-4">Editar Publicación</h2>
        <form @submit.prevent="updatePost">
          <div class="mb-4">
            <label class="block text-gray-700">Título</label>
            <input
              v-model="editPostData.title"
              type="text"
              class="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Contenido</label>
            <textarea
              v-model="editPostData.content"
              class="w-full px-4 py-2 border rounded-lg"
              required
            ></textarea>
          </div>
          <div class="flex justify-end space-x-4">
            <button
              @click="closeEditPopup"
              type="button"
              class="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancelar
            </button>
            <button
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
