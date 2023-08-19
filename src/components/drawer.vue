<template>
  <v-navigation-drawer
    id="drawer"
    v-model="$store.state.drawer"
    :permanent="!isMobile"
    class="py-8 px-2"
  >
    <v-list nav>
      <div v-if="isMobile" class="jstart" style="gap: 10px">
        <v-btn icon elevation="0" size="30">
          <v-icon size="20">mdi-cog-outline</v-icon>
        </v-btn>

        <v-btn icon elevation="0" size="30">
          <v-icon size="20">mdi-bell-outline</v-icon>
        </v-btn>
      </div>


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
        block
        class="bg-primary"
        style="--fw: 500"
        @click="logOut()"
      >Cerrar sesión</v-btn>

      <div class="center">
        <img
          src="@/assets/sources/logos/logo.svg"
          alt="logo"
          class="mt-6"
          style="width: min(130px, 100%)"
        >
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import isMobile from '@/mixins/isMobile';

export default {
  name: "DrawerComponent",
  mixins: [isMobile],
  setup() {
    return {
      data: [
        {
          icon: "mdi-currency-usd",
          name: "Mi perfil",
          to: "/profile"
        },
        {
          icon: "mdi-home-outline",
          name: "Dashboard",
          to: "/"
        },
        {
          icon: "mdi-file-document-outline",
          name: "Mis casos",
        },
      ],
    }
  },
  methods: {
    logOut() {
      this.$router.push('/login')
    },
  }
}
</script>

<style lang="scss">
#drawer {
  background-image: linear-gradient(#0b3f6b, #2a8ada);

  .v-list-item {
    &-title {
      font-size: 15px;
    }
  }
}
</style>
