<template>
  <div id="home" class="fill-height center">
    <v-container>
      <v-responsive class="align-center text-center pb-4">
        <v-img height="100" src="@/assets/sources/logos/logo.svg" />

        <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

        <h1 class="text-h2 font-weight-bold">Vuetify</h1>

        <h2 v-font:3,5em="16" class="py-5">{{name}}</h2>

        <v-btn
          class="bg-primary text-white"
          rounded @click="$router.push('/login')"
        >log out</v-btn>
      </v-responsive>
    </v-container>
  </div>
</template>

<script>
import '@/assets/styles/views/home.scss'
import { ref } from 'vue'

export default {
  name: "HomePage",
  setup() {
    return {
      name: ref("detextre4"),
    }
  },
}
</script>
