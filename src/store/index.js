import { createStore } from 'vuex'

const store = createStore({
  state: {
    drawer: true,
    loader: false,
    profile: {
      uid: undefined,
      username: undefined,
      email: undefined,
      avatar: undefined,
    },
  },
  mutations: {
    setDrawer(state, value) { state.drawer = value },
    setLoader(state, value) { state.loader = value },
    setProfile(state, profile) { state.profile = profile },
  },
  actions: {
    // modalConnect() {
    //   const layout = this.$router.app.$children
    //     .find(data => data.$el === document.getElementById("layout"));

    //   layout.$refs.connect.modalConnect = true
    // },
  },
  getters: {
    pagination: () => ({items, currentPage, itemsPerPage, search, filterA}) => {
      let filters = [...items]
  
      // search
      if (search) filters = filters.filter(data => data.name.includes(search))
      // filter A (tier)
      if (filterA) filters = filters.filter(data => data.tier === filterA)
  
      return filters.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    }
  },
  modules: {},
})

export default store
