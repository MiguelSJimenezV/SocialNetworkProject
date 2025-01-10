<script>
import {
  subscribeToAllPosts,
  likePost as likePostService,
  commentPost,
} from "../services/user-posts";
import { subscribeToAuthChanges } from "../services/auth";
import { getAuth } from "firebase/auth";

let unsubscribeFromAuth = () => { };

export default {
  data() {
    return {
      posts: [],

      loggedUser: {
        id: null,
        email: null,
        displayName: null,
        bio: null,
        career: null,
        photoURL: null,
      },

      showCommentForm: null,

      newComment: null,
    };
  },
  mounted() {
    unsubscribeFromAuth = subscribeToAuthChanges(
      (newUserData) => (this.loggedUser = newUserData)
    );
  },
  created() {
    this.unsubscribe = subscribeToAllPosts((posts) => {
      this.posts = posts;
    });
  },
  beforeDestroy() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  },
  unmounted() {
    unsubscribeFromAuth();
  },
  methods: {
    formatDate(timestamp) {
      if (!timestamp || !timestamp.seconds) {
        return "Fecha desconocida";
      }
      const date = new Date(timestamp.seconds * 1000);
      return date.toLocaleDateString();
    },
    async likePost(postId) {
      try {
        const userId = this.loggedUser.displayName;
        await likePostService(postId, userId);
        const post = this.posts.find((post) => post.id === postId);
        if (post) {
          post.likes = (post.likes || 0) + 1;
        }
      } catch (error) {
        console.error("Error liking post:", error);
      }
    },
    async submitPost(postId) {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) {
          alert("Debes estar logueado para comentar.");
          return;
        }
        // Add the new comment to the post
        const newComment = {
          comment: this.newComment,
          createdBy: this.loggedUser.displayName,
          createdAt: new Date(),
        };

        await commentPost(postId, newComment);
        console.log("Nuevo comentario creado:", newComment);
        this.newComment = ""; // Clear the comment field after submission
        this.showCommentForm = null; // Hide the comment form after submission
      } catch (error) {
        console.error("Error al crear el comentario:", error);
        alert("Hubo un problema al crear el comentario.");
      }
    },
  },
};
</script>

<template>
  <div class="max-w-7xl mx-auto  mt-6 p-6 bg-gradient-to-r from-blue-500 to-purple-600 shadow-2xl rounded-lg">
    <h1 class="text-3xl font-bold text-white mb-8">Todas las Publicaciones</h1>
    <div v-if="posts.length" class="space-y-6">
      <div v-for="post in posts" :key="post.id" class="p-6 bg-white rounded-lg shadow-md w-full">
        <div class="flex items-start mb-4 w-full">
          <img :src="post.userPhoto || 'https://via.placeholder.com/150'" alt="User Photo"
            class="w-24  h-24 rounded-full mr-4 border-2 border-purple-500 object-cover" />
          <div class="w-full">
            <div class="flex gap-2 mb-3 ">
              <p class="font-bold text-xl text-gray-200 bg-slate-600 rounded-2xl px-5 py-2">{{ post.userName }}</p>
              <p class="text-gray-500 mt-1 px-2 py-2">{{ post.userEmail }}</p>
              <p class="text-gray-500 mt-1 px-2 py-2">
                {{ formatDate(post.createdAt) }}
              </p>
            </div>
            <div v-if="post.images && post.images.length" class="flex flex-wrap gap-2">
              <img v-for="(image, index) in post.images" :key="index" :src="image" alt="Post Image"
                class="w-full h-32 object-cover rounded-md border-2 border-gray-300" />
            </div>
            <div class="mt-2">
              <div class="p-5 bg-slate-900 rounded-lg">
                <h2 class="text-2xl font-bold text-white mb-2">{{ post.title }}</h2>
                <p class="text-white mb-4">{{ post.content }}</p>
              </div>
            </div>

            <div class="flex items-center justify-end mt-2 text-sm text-gray-600">
              <button @click="likePost(post.id)"
                class="mr-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300">
                Like
              </button>
              <span class="mr-4">{{ post.likes || 0 }} Likes</span>
            </div>
            <div class="items-center mt-4">
              <div class="mt-2 w-full">
                <form @submit.prevent="submitPost(post.id)" class="w-full bg-gray-200 py-10 px-5 rounded-xl shadow-2xl">

                  <label for="newComment" class="font-bold text-2xl">Comentario</label>

                  <input v-model="newComment" type="text" placeholder="Escribre un comentario..."
                    class="border rounded px-2 py-1 w-full mt-3" id="newComment" />
                  <button type="submit"
                    class="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300">
                    Submit
                  </button>
                </form>
              </div>
            </div>

            <div v-if="post.comments && post.comments.length" class="mt-4 p-5">
              <h3 class="text-lg font-semibold text-gray-800 mb-3">Comentarios:</h3>
              <ul class="list-disc list-inside">
                <li v-for="(comment, index) in post.comments" :key="index" class="text-white mb-2 p-2 rounded-md list-none   bg-slate-800">
                  <span class="font-semibold">{{ comment.createdBy }}:</span>
                  {{ comment.comment }} -
                  <span class="text-gray-500">{{
                    formatDate(comment.createdAt)
                  }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>




      </div>
    </div>
    <div v-else class="text-gray-200">No hay publicaciones para mostrar.</div>
  </div>
</template>
