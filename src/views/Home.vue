<template>
  <div>
    <HelloWorld />

    <h1 v-font:3,5="16">test</h1>
    <h2>{{data.test}}</h2>
  </div>
</template>

<script setup>
  import HelloWorld from '@/components/HelloWorld.vue'
  import { createApp, onMounted, ref } from 'vue'
  
  createApp({ name: "HomePage" })

  const data = ref({
    test: "",
  })

  onMounted(() => {
  })
</script>
