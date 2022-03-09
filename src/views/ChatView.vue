<template>
  <center>
    <div style="width: 100%; overflow: hidden;">
      <div style="width: 700px; float: left;">
  <h2>Send chat</h2>
  <InputText v-model="txtChatInput" style="margin-bottom: 10px" placeholder="Enter chat" /> <br />
  <InputText v-model="txtRoomInput" style="margin-bottom: 10px" placeholder="Enter room" /> <br />
  <Button @click="sendChat">Send</Button>
      </div>
      <div style="margin-left: 620px;">
  <h2>All chats:</h2>
  <InputText v-model="txtRoomListener" style="margin-bottom: 10px" placeholder="Enter room name" /> <br />
  <Button  @click="listenToRoom">Connect to room!</Button>

      </div>
    </div>
    <ScrollPanel style="width: 50%; height: 200px; overflow: hidden">
      <div style="text-align: center" v-for="(chat, index) in chatStore.chats" v-bind:key="index">
        {{ chat.text }}
      </div>
    </ScrollPanel>
  </center>
</template>

<script setup lang="ts">

import { ChatStore } from "@/stores/chatStore";
import { ref } from "vue";

const chatStore = ChatStore();
const txtChatInput = ref("");
const txtRoomInput = ref("");
const txtRoomListener = ref("");

function listenToRoom() {
  chatStore.setRoom(txtRoomListener.value);
}

function sendChat() {
  chatStore.createChat({ text: txtChatInput.value, room: txtRoomInput.value });
}
</script>

<style scoped>

</style>
