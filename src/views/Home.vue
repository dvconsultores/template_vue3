<template>
  <HelloWorld />
</template>

<script setup>
  import HelloWorld from '@/components/HelloWorld.vue'
  import { createApp, onMounted } from 'vue'

  createApp({
    name: "HomePage",
  })

  onMounted(() => {
  })
</script>
