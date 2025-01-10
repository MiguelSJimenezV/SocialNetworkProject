<script>
import { subscribeToAllPosts } from "../services/user-posts";
import { subscribeToAuthChanges } from "../services/auth";
import { likePostService, commentPostService } from "../services/user-posts";

let unsubscribeFromAuth = () => {};

export default {
  data() {
    return {
      posts: [],

      loggedUser: {
        id: "",
        email: "",
        displayName: "",
        bio: "",
        career: "",
        photoURL: "",
      },

      newComment: {
        comment: null,
        postId: null,
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
        const userId = this.loggedUser.displayName; // Reemplaza con el ID del usuario actual
        await likePostService(postId, userId);
        const post = this.posts.find((post) => post.id === postId);
        if (post) {
          post.likes = (post.likes || 0) + 1;
        }
      } catch (error) {
        console.error("Error liking post:", error);
      }
    },
    async commentPost(postId) {
      try {
        const commentText = prompt("Enter your comment:");
        if (commentText) {
          const userId = this.loggedUser.displayName;
          const newComment = {
            text: commentText,
            createdBy: userId,
            createdAt: { seconds: Math.floor(Date.now() / 1000) },
          };
          await commentPostService(postId, newComment);
          const post = this.posts.find((post) => post.id === postId);
          if (post) {
            post.comments = post.comments || [];
            post.comments.push(newComment);
          }
        }
      } catch (error) {
        console.error("Error commenting on post:", error);
      }
    },
  },
};
</script>

<template>
  <div
    class="max-w-7xl mx-auto my-16 p-6 bg-gradient-to-r from-blue-500 to-purple-600 shadow-2xl rounded-lg"
  >
    <h1 class="text-3xl font-bold text-white mb-8">Todas las Publicaciones</h1>
    <div v-if="posts.length" class="space-y-6">
      <div
        v-for="post in posts"
        :key="post.id"
        class="p-6 bg-white rounded-lg shadow-md"
      >
        <div class="flex items-center mb-4">
          <img
            v-if="post.userPhotoURL"
            :src="post.userPhotoURL"
            alt="User Photo"
            class="w-12 h-12 rounded-full mr-4 border-2 border-purple-500"
          />
          <div>
            <div class="flex gap-2 mb-3">
              <p class="font-bold text-lg text-gray-800">{{ post.userName }}</p>
              <p class="text-gray-500">{{ post.userEmail }}</p>
              <p class="text-gray-500">
                {{ formatDate(post.createdAt) }}
              </p>
            </div>
            <div class="mb-2">
              <h2 class="text-2xl font-bold text-gray-800">{{ post.title }}</h2>
              <p class="text-gray-700">{{ post.content }}</p>
            </div>
            <div
              v-if="post.images && post.images.length"
              class="flex flex-wrap gap-2"
            >
              <img
                v-for="(image, index) in post.images"
                :key="index"
                :src="image"
                alt="Post Image"
                class="w-32 h-32 object-cover rounded-md border-2 border-gray-300"
              />
            </div>
          </div>
        </div>

        <div class="flex items-center mt-4">
          <button
            @click="likePost(post.id)"
            class="mr-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300"
          >
            Like
          </button>
        </div>
        <div class="flex items-center mt-2 text-sm text-gray-600">
          <span class="mr-4">{{ post.likes || 0 }} Likes</span>
        </div>
        <div v-if="post.comments && post.comments.length" class="mt-4">
          <h3 class="text-lg font-semibold text-gray-800">Comentarios:</h3>
          <ul class="list-disc list-inside">
            <li
              v-for="(comment, index) in post.comments"
              :key="index"
              class="text-gray-700"
            >
              <span class="font-semibold">{{ comment.createdBy }}:</span>
              {{ comment.text }} -
              <span class="text-gray-500">{{
                formatDate(comment.createdAt)
              }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else class="text-gray-200">No hay publicaciones para mostrar.</div>
  </div>
</template>
