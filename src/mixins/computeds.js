export default {
  data() {
    return {
      globalRules: {
        required: [(v) => !!v || "Field required"],
        email: [
          (v) => !!v || "Field required",
          v => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(v) || 'Invalid email.'
          },
        ],
      }
    }
  },
  computed: {
    isLogged() {
      return this.$wallet.isSignedIn()
    },
    user() {
      return this.$store.state.dataUser
    },
    appIsLaunched() {
      return localStorage.getItem("appIsLaunched")
    },
    baseDomainPath() {
      return this.axios.defaults.baseURL
    },
    getTheme() {
      return localStorage.getItem('theme')
    }
  },
  methods: {
    basePath(url, prefix = "/app") {
      return `${this.appIsLaunched ? prefix : ''}${url}`
    },
  }
}
