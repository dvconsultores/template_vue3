<template>
  <v-app id="layout">
    <v-main>
      <drawer></drawer>

      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import '@/assets/styles/layouts/default-layout.scss'
import drawer from '@/components/drawer.vue'
</script>
