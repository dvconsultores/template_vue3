// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from '../router'
import store from '../store'
import VueApexChart from './apexchart'
import axiosConfig from './axios'

export function registerPlugins (app) {
  loadFonts()

  app
    // components
    .component('VueApexChart', VueApexChart)

    // uses
    .use(vuetify)
    .use(router)
    .use(store)
    .use(VueApexChart)
    .use(axiosConfig.VueAxios, axiosConfig.axios)

    // injects
    .provide('axios', app.config.globalProperties.axios)
}
