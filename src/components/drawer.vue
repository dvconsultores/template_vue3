<template>
  <v-navigation-drawer
    id="drawer"
    v-model="$store.state.drawer"
    :permanent="!isMobile"
    class="py-8 px-2"
  >
    <v-list nav>
      <div class="acenter my-3 text-white" style="gap: 10px">
        <v-avatar image="@/assets/sources/images/avatar.png" alt="avatar" />

        <h6 class="p" style="--fw: 800">¡Hola detextre4!</h6>
      </div>

      <v-list-item
        v-for="item in data" :key="item"
        :title="item.name"
        @click="item.to ? $router.push(item.to) : null"
        class="text-white"
      >
        <template #prepend>
          <v-icon size="20" :icon="item.icon" />
        </template>
      </v-list-item>
    </v-list>

    <v-divider thickness="2" class="text-white mx-3 mb-4" />

    <v-list nav>
      <v-btn
        class="bg-primary mb-8"
        @click="logOut()"
      >Cerrar sesión</v-btn>

      <img src="@/assets/sources/logos/logo.svg" alt="logo" style="width: 100%">
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import '@/assets/styles/components/drawer.scss'
import { ref } from "vue";
import isMobile from '@/mixins/is-mobile';

export default {
  name: "DrawerComponent",
  mixins: [isMobile],
  setup() {
    return {
      drawer: ref(true),
      data: ref([
        {
          icon: "mdi-home-outline",
          name: "Dashboard",
        },
        {
          icon: "mdi-file-document-outline",
          name: "Mis casos",
        },
        {
          icon: "mdi-currency-usd",
          name: "Mi perfil",
        },
      ]),
    }
  },
  methods: {
    logOut() {
      this.$router.push('/login')
    },
  }
}
</script>
