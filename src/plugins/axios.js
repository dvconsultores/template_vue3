import axios from 'axios'
import VueAxios from 'vue-axios'

export default {axios, VueAxios}

// export default function ({ $axios, redirect }) {
//   $axios.onError(err => {
//     if (err.response.status === 500) {
//       redirect('/sorry')
//     }
//   })
// }
