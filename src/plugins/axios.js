import axios from 'axios'
import VueAxios from 'vue-axios'

export default (app) => app
  .use(VueAxios, axios)
  .provide('axios', app.config.globalProperties.axios)

// export default function ({ $axios, redirect }) {
//   $axios.onError(err => {
//     if (err.response.status === 500) {
//       redirect('/sorry')
//     }
//   })
// }
