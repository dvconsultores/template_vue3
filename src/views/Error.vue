<template>
  <section id="error-page" class="center divcol">
    <h1 class="p bold">{{error.title}}</h1>
    <span class="bold">{{error.description}}</span>
    <v-btn :to="error.to" class="bold">{{error.button}}</v-btn>
  </section>
</template>

<script>
import '@/assets/styles/views/Error.scss'

export default {
  name: "ErrorPage",
  layout: 'auth-layout',
  props: {
    error: {
      type: Object,
      default: {
        title: "Error",
        description: "Page not found",
        button: "Go home",
        to: "/",
      },
    },
  },
}
</script>
