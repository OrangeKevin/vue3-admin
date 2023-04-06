import { createStore } from 'vuex'
import app from './modules/app'
import user from './modules/user.js'
import getters from './getters'

export default createStore({
  getters,
  modules: {
    app,
    user
  }
})
