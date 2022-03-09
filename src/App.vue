<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { UserStore } from "@/stores/userStore";

const userStore = UserStore();
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/createUser">Create User</router-link> |
    <router-link to="/chat">Chat</router-link>
    <span v-if="userStore.userName.length > 0">
      | Logged in as: {{ userStore.userName }}</span
    >
  </nav>
  <br />
  <RouterView />
</template>
