<script>
import AllPosts from "../components/AllPosts.vue";
import CreatePostForm from "../components/CreatePostForm.vue";
import { subscribeToAuthChanges } from "../services/auth";

let unsubscribeFromAuth = () => { };

export default {
  name: "Home",
  components: { AllPosts, CreatePostForm },
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
  <div class="max-w-7xl mx-auto my-16 h-1/3">
    <CreatePostForm></CreatePostForm>
    <AllPosts></AllPosts>
  </div>
</template>
