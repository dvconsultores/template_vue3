import { createStore } from 'vuex'

const store = createStore({
  state: {
    user: {
      uid: undefined,
      username: undefined,
      email: undefined,
      avatar: undefined,
    },
  },
  mutations: {
    setData(state, data) {
      // MUTATE USER STATE
    },
    signIn(state, key) {
      // LOG IN
    },
    signOut() {
      // LOG OUT
      test
    },
  },
  actions: {
    modalConnect() {
      const layout = this.$router.app.$children
        .find(data => data.$el === document.getElementById("layout"));

      layout.$refs.connect.modalConnect = true
    },
    getData({commit}) {
      // GET USER DATA TO SET DATA
      commit("setData", {});
    },
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
