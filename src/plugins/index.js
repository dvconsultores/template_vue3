// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from '../router'
import store from '../store'
import VueApexChart from './apexchart'
import axiosConfig from './axios'
import { firebaseApp } from '@/services/firebase-api'
import { VueFire, VueFireAuth } from 'vuefire'

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
    .use(VueFire, {
      // imported above but could also just be created here
      firebaseApp,
      modules: [
        // we will see other modules later on
        VueFireAuth(),
      ],
    })

    // injects
    .provide('axios', app.config.globalProperties.axios)
}
