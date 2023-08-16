<template>
  <section id="login">
    <img src="@/assets/sources/logos/logo.png" style="width: min(450px, 100%)">

    <v-form ref="form">
      <v-text-field
        v-model="dataLogin.email"
        variant="solo"
        placeholder="Correo electronico"
        append-inner-icon="mdi-email"
        :rules="globalRules.email"
        @keydown="e => e.key === 'Enter' ? $refs.password.focus() : null"
      ></v-text-field>

      <v-text-field
        ref="password"
        v-model="dataLogin.password" solo
        variant="solo"
        placeholder="Contraseña"
        :type="showPassword ? 'text' : 'password'"
        :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
        :rules="rules.password"
        @click:appendInner="showPassword = !showPassword"
        @keydown="e => e.key === 'Enter' ? handleLogin() : null"
      ></v-text-field>

      <div class="space">
        <v-checkbox
          label="Recuérdame"
          density="compact"
          color="var(--primary)"
          hide-details
          style="flex-grow: 0"
        ></v-checkbox>

        <a class="tend">¿Olvidaste tu contraseña?</a>
      </div>

      <v-btn
        class="my-2" color="var(--primary)"
        :disabled="isLoading"
        :loading="isLoading"
        @click="handleLogin()"
      >Iniciar Sesión</v-btn>
      
      <v-btn
        color="var(--secondary)"
        @click="handleRegister()"
      >Registrarse</v-btn>
    </v-form>
  </section>
</template>

<script>
import '@/assets/styles/views/Login.scss'
import { ref } from 'vue'

export default {
  name: "LoginPage",
  layout: "auth-layout",
  setup() {
    return {
      isLoading: ref(false),
      showPassword: ref(false),
      dataLogin: ref({
        email: undefined,
        password: undefined,
      }),
      rules: {
        password: [
          v => /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%&*-]).{6,}$/.test(v)
            || 'La contraseña debe tener al menos una mayúscula, una minúscula, un número y un caracter especial',
        ]
      },
    }
  },
  created() {
    if (this.$storage.getStorageSync("tokenAuth"))
      this.$storage.clearStorageSync("tokenAuth")
  },
  methods: {
    async handleLogin() {
      const validate = await this.$refs.form.validate()
      if (!validate.valid)
        return alert("verifica que los campos sean correctos");

      isLoading.value = true

      const {data} = await this.axios.post("signin/", this.dataLogin)
        .catch(error => console.error(error))

      isLoading.value = false

      if (data.check_login)
        return alert("verification required")

      this.$storage.setStorageSync("tokenAuth", data.token)
      this.$storage.setStorageSync("uid", data.id)
      this.$router.push('/')
    },
    handleRegister() {
      this.$router.push('/register')
    },
  }
}
</script>
