<template>
  <v-app id="empty">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { createApp } from 'vue'

createApp({
  name: "EmptyLayout",
})
</script>
