// Plugins
import { loadFonts } from './webfontloader'
import polyfills from './polyfills'
import injects from './injects'
import directives from './directives'
import vuetify from './vuetify'
import router from '../router'
import store from '../store'
import vueApexChart from './apexchart'
import axiosConfig from './axios'
import vueDebounce from './vue-debounce'
import googleMaps from './google-maps'
import mixins from './mixinsImport'
import VueHtml2Canvas from 'vue-html2canvas'

// Services
import firebaseApi from '@/services/firebase-api'
import nearApi from '@/services/near-api'

export function registerPlugins (app) {
  // Use plugins
  app
    .use(vuetify)
    .use(router)
    .use(store)
    .use(VueHtml2Canvas)

  // Use services
  firebaseApi(app)
  nearApi(app)

  // Use custom plugins
  loadFonts()
  polyfills()
  injects(app)
  directives(app)
  axiosConfig(app)
  vueApexChart(app)
  vueDebounce(app)
  googleMaps(app)

  mixins(app) // this need to be last one
}
