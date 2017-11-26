import Vuex from 'vuex'
import getFilesystem from '~/utils/getFilesystem'

const store = () => new Vuex.Store({
  state: {
    filesystem: {}
  },
  actions: {
    async getFilesystem ({commit}) {
      const fs = await getFilesystem()
      commit('setFilesystem', fs)
    }
  },
  mutations: {
    setFilesystem: (state, object) => {
      state.filesystem = object
    }
  }
})

export default store
