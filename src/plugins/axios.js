import axios from 'axios'
import VueAxios from 'vue-axios'
import { useStorage } from 'vue3-storage-secure'

export default (app) => {
  // set default baseURL
  axios.defaults.baseURL = process.env.API_URL || 'DEFAULT_DOMAIN_API';

  // set default header
  const tokenAuth = useStorage().getStorageSync("tokenAuth")
  if (tokenAuth) axios.defaults.headers.common['Authorization'] = `Token ${tokenAuth}`

  app
  .use(VueAxios, axios)
  .provide('axios', app.config.globalProperties.axios)
}
