// Plugins
import Vue3Storage from './vue3-storage-secure'
import polyfills from './polyfills'
import injects from './injects'
import axiosConfig from './axios'
import directives from './directives'
import vueDebounce from './vue-debounce'
import vuetify from './vuetify'
import router from '../router'
import store from '../store'
import { loadFonts } from './webfontloader'
import vueToastification from './vue-toastification'
import vueI18n from './vue-i18n'
import vueApexChart from './apexchart'
import googleMaps from './google-maps'
import VueHtml2Canvas from 'vue-html2canvas'
import VueRecaptcha from 'vue3-recaptcha2'
import VOtpInput from "vue3-otp-input";

import mixins from './mixins-import'

// Services
import firebaseApi from '@/services/firebase-api'
import nearApi from '@/services/near-api'

export function registerPlugins (app) {
  // Use principals
  Vue3Storage(app)
  polyfills()
  injects(app)
  axiosConfig(app)
  directives(app)
  vueDebounce(app)

  // Use plugins
  app
    .use(vuetify)
    .use(router)
    .use(store)
    .use(VueHtml2Canvas)
    .component('VOtpInput', VOtpInput)
    .component('VueRecaptcha', VueRecaptcha)

  // Use services
  firebaseApi(app)
  nearApi(app)

  // Use custom plugins
  loadFonts()
  vueI18n(app)
  vueToastification(app)
  vueApexChart(app)
  googleMaps(app)

  mixins(app) // this should be the last one
}
