<template>
  <div>
    <HelloWorld />

    <h1 v-font:3,5="16">test</h1>
    <h2>{{test}}</h2>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { ref } from 'vue'

export default {
  name: "HomePage",
  components: {
    HelloWorld
  },
  setup() {
    return {
      test: ref("asd"),
    }
  },
  mounted() {
  }
}
</script>
