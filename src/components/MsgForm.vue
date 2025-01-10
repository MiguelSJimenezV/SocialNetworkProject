<template>
  <form @submit.prevent="handleSubmit" class="gri p-4">
    <div class="grid grid-cols-1 items-center gap-3">
      <span class="font-bold text-gray-700">{{ newMessage.username }}</span>
      <input
        v-model="newMessage.text"
        type="text"
        placeholder="Escribe tu mensaje..."
        class="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        class="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Enviar
      </button>
    </div>
  </form>
</template>

<script>
import { savePublicChatMessage } from "../services/public-chat";
import { subscribeToAuthChanges } from "../services/auth";

export default {
  name: "MsgForm",
  data() {
    return {
      newMessage: {
        username: "",
        text: "",
      },
    };
  },
  mounted() {
    subscribeToAuthChanges((user) => {
      if (user) {
        this.newMessage.username = user.displayName;
      }
    });
  },
  methods: {
    async handleSubmit() {
      if (this.newMessage.text.trim() === "") {
        return;
      }

      try {
        await savePublicChatMessage(this.newMessage);
        this.newMessage.text = "";
      } catch (error) {
        console.error("Error al enviar el mensaje:", error);
      }
    },
  },
};
</script>
