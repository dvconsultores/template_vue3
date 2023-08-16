<template>
  <div id="home">
    <v-container class="fill-height">
      <v-responsive class="align-center text-center fill-height pb-4">
        <v-img height="300" src="@/assets/sources/logos/logo.svg" />

        <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

        <h1 class="text-h2 font-weight-bold">Vuetify</h1>

        <h2 v-font:3,5em="16" class="py-5">{{name}}</h2>

        <v-btn color="var(--primary)" rounded @click="$router.push('/login')">
          <span style="color: #fff">log out</span>
        </v-btn>
      </v-responsive>
    </v-container>
  </div>
</template>

<script>
import '@/assets/styles/views/Home.scss'
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
