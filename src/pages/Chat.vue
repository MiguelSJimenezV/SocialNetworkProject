<script>
import BaseHeading1 from "../components/BaseHeading1.vue";
import MsgForm from "../components/MsgForm.vue";
import { subscribeToPublicChatMessages } from "../services/public-chat";

import { subscribeToAuthChanges } from "../services/auth";

let unsubscribeFromAuth = () => {};

export default {
  name: "Chat",
  components: { BaseHeading1, MsgForm },
  data() {
    return {
      messages: [],
      loggedUser: {
        displayName: null,
      },
    };
  },
  methods: {
    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.chatContainer;
        if (container) {
          container.scrollTop = container.scrollHeight;
        }
      });
    },
  },

  async mounted() {
    unsubscribeFromAuth = subscribeToAuthChanges(
      (newUserData) => (this.loggedUser.displayName = newUserData)
    );
    subscribeToPublicChatMessages((newMessages) => {
      console.log(newMessages);
      this.messages = newMessages;
      this.scrollToBottom();
    });
  },
  unmounted() {
    unsubscribeFromAuth();
  },
};
</script>

<template>
  <div class="my-16">
    <div class="max-w-7xl mx-auto h-screen">
      <BaseHeading1 class="text-white">Chat Público</BaseHeading1>
      <div class="flex gap-5 h-full">
        <div class="md:w-1/4 mx-auto">
          <section class="w-full bg-gray-100 p-5 rounded-xl shadow-2xl">
            <h2 class="mb-4 text-xl">Enviar un mensaje</h2>
            <MsgForm></MsgForm>
          </section>
        </div>

        <div class="md:w-3/4 mx-auto h-3/4">
          <section
            class="h-full bg-white shadow-lg border border-gray-200 rounded-lg flex flex-col"
          >
            <header class="bg-blue-700 text-white p-4 rounded-t-lg">
              <h2 class="text-lg font-bold">Chat</h2>
            </header>

            <div
              class="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-50 h-full"
              ref="chatContainer"
            >
              <ul>
                <li
                  v-for="message in messages"
                  :key="message.id"
                  :class="{
                    'bg-blue-200 self-end text-right':
                      message.username === loggedUser?.email,
                    'bg-gray-200 self-start text-left':
                      message.username !== loggedUser?.email,
                  }"
                  class="p-3 rounded-lg mb-2 max-w-xs"
                >
                  <div>
                    <b>{{ message.username }}</b> escribió:
                  </div>
                  <div>{{ message.text }}</div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
