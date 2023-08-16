<template>
  <section id="error-page" class="center divcol">
    <h1 class="p bold">{{error.title ?? $t("error.title")}}</h1>
    <span class="bold">{{error.description ?? $t("error.description")}}</span>
    <v-btn :to="error.to" class="bold">{{error.button ?? $t("error.button")}}</v-btn>
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
        title: undefined,
        description: undefined,
        button: undefined,
        to: "/",
      },
    },
  },
}
</script>
