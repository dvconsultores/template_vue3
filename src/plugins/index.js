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
import firebaseApi from '@/services/firebase-api'
import vueDebounce from './vue-debounce'
import googleMaps from './google-maps'
import mixins from './mixinsImport'

export function registerPlugins (app) {
  // imports
  app
    .use(vuetify)
    .use(router)
    .use(store)

  // custom imports
  loadFonts()
  polyfills()
  injects(app)
  directives(app)
  axiosConfig(app)
  firebaseApi(app)
  vueApexChart(app)
  vueDebounce(app)
  googleMaps(app)
  mixins(app)
}
