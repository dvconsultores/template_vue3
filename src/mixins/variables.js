import axios from "axios"
import store from "@/store"
import { useStorage } from "vue3-storage-secure"
import { useTheme } from "vuetify/lib/framework.mjs"
import { storageSecureCollection } from "@/plugins/vue3-storage-secure"

export default {
  // ? custom defines
  globalRules: {
    required: (v) => !!v || "Field required",
    listRequired: (v) => !!v?.length || "Field required",
    numericRequired: (v) => {
      if (!v || Number(v) < 1) return "Field required"
      return true
    },
    email: (v) => {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return pattern.test(v) || 'Invalid email.'
    },
    minLength: (v, l) => (v?.length || 0) > l || `Enter at least ${l} characters`,
    maxLength: (v, l) => (v?.length || 0) < l || `The limit is ${l} characters`,
    password: (v) => /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%&*-]).{6,}$/.test(v)
      || 'The password must have at least one uppercase letter, one lowercase letter, one number, and one special character',
    repeatPassword: (v, c) => {
      if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%&*-]).{6,}$/.test(v)) {
        return 'The password must have at least one uppercase letter, one lowercase letter, one number, and one special character'
      } else if (v !== c) {
        return 'Passwords must match'
      }

      return true
    },
    wallet: (v, b) => {
      const validation = () => {
        switch (b) {
          case "NEAR": {
            const ACCOUNT_ID_REGEX = /^(([a-z\d]+[-_])*[a-z\d]+\.)*([a-z\d]+[-_])*[a-z\d]+$/;
            return v?.length >= 2 && v?.length <= 64 && ACCOUNT_ID_REGEX.test(v)
          }

          case "TRON": {
            const ACCOUNT_ID_REGEX = /^T[A-Za-z1-9]{33}/
            return ACCOUNT_ID_REGEX.test(v)
          }

          default: return true
        }
      }

      return validation() || "The wallet address is not valid"
    }
  },
  isProduction: process.env.NODE_ENV === 'production',
  requestInterval: 10000,

  isLogged() {
    return !!useStorage().getSecureStorageSync(storageSecureCollection.tokenAuth)
  },
  profile() {
    return store.state.profile
  },
  appIsLaunched() {
    return useStorage().getStorageSync(storageSecureCollection.appIsLaunched)
  },
  baseDomainPath() {
    return axios.defaults.baseURL
  },
  getTheme() {
    return useTheme().name
  },
  getThemeSrc() {
    return `@/assets/sources/themes/${useTheme().name}/`
  },
  basePath(url, prefix = "/app") {
    return `${this.appIsLaunched() ? prefix : ''}${url}`
  },

  //?  life cycle
  // mounted() {},
}
