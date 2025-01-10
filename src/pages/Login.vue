<script>
import LoginForm from "../components/LoginForm.vue";

export default {
  name: "login",
  components: { LoginForm },
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      loading: false,
    };
  },
};
</script>

<template>
  <LoginForm></LoginForm>
</template>
