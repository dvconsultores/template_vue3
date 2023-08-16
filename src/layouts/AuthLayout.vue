<template>
  <v-app id="auth-layout">
    <!-- decoration -->
    <img v-for="i in 2" :key="i" src="@/assets/sources/images/cube2.png" :class="`decoration-${i}`">
    <img v-for="i in 4" :key="i" src="@/assets/sources/images/cube.png" :class="`decoration2-${i}`">

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import '@/assets/styles/layouts/AuthLayout.scss'
import { createApp } from 'vue'

createApp({
  name: "AuthLayout",
})
</script>
