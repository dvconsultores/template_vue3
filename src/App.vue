<template>
  <Navbar></Navbar>

  <RouterView />
</template>

<script setup>
// import { useStore as store } from 'vuex'
import { createApp, onMounted } from 'vue'
// import { useRouter as router } from 'vue-router'
import Navbar from '../src/components/Navbar.vue'

createApp({
  components: {
    Navbar,
  },
})

onMounted(() => {
})
</script>
