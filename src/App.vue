<template>
  <router-view />
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

onBeforeMount(() => {
  // set theme
  const theme = localStorage.getItem('theme')
  if (theme) useStore().dispatch('setTheme', theme)
})
</script>
