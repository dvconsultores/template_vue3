<template>
  <div>
    <HelloWorld />

    <h1>test</h1>
    <h2>{{data}}</h2>
  </div>
</template>

<script setup>
  import HelloWorld from '@/components/HelloWorld.vue'
  import { createApp, onMounted, ref } from 'vue'

  const data = ref("")

  createApp({
    name: "HomePage",
  })

  onMounted(() => {
  })
</script>
