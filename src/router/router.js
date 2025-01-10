import { createRouter, createWebHashHistory } from "vue-router";
import { subscribeToAuthChanges } from "../services/auth";
import Home from "../pages/Home.vue";
import Chat from "../pages/Chat.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Post from "../pages/Post.vue";
import UserProfile from "../pages/UserProfile.vue";
import UserProfileEdit from "../pages/UserProfileEdit.vue";

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/register", component: Register, name: "Register" },
  { path: "/login", component: Login, name: "Login" },
  { path: "/post", component: Post, name: "Post" },
  {
    path: "/user-profile",
    component: UserProfile,
    meta: { requiresAuth: true },
  },
  {
    path: "/user-profile/edit",
    component: UserProfileEdit,
    meta: { requiresAuth: true },
  },
  {
    path: "/chat",
    component: Chat,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

let loggedUser = {
  id: null,
  email: null,
};

subscribeToAuthChanges((newUserData) => (loggedUser = newUserData));

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && loggedUser.id === null) {
    return {
      path: "/login",
    };
  }
});

export default router;
