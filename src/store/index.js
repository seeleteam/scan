import Vue from 'vue'
import vuex from 'vuex'
import block from './modules/block.js'
import search from './modules/search.js'
import home from './modules/home.js'
import transaction from './modules/transaction.js'
import account from './modules/account.js'
import node from './modules/node.js'
import chart from './modules/chart.js'
// Change Logs
import createLogger from 'vuex/dist/logger'

Vue.use(vuex)
// True in the development environment, false otherwise
const debug = process.env.NODE_ENV !== 'production'

export default new vuex.Store({
  modules: {
    search,
    block,
    home,
    transaction,
    account,
    node,
    chart
  },
  // Displays status changes for vuex in a development environment
  plugins: debug ? [createLogger()] : []
})
