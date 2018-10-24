import Vue from 'vue'
import vuex from 'vuex'
import block from './modules/block.js'
import debt from './modules/debt.js'
import search from './modules/search.js'
import home from './modules/home.js'
import transaction from './modules/transaction.js'
import pendingtxs from './modules/pendingtxs.js'
import account from './modules/account.js'
import contract from './modules/contract.js'
import node from './modules/node.js'
import chart from './modules/chart.js'
import shard from './modules/shard.js'
import shardChar from './modules/shardChar.js'
// Change Logs
import createLogger from 'vuex/dist/logger'

Vue.use(vuex)
// True in the development environment, false otherwise
const debug = process.env.NODE_ENV !== 'production'

export default new vuex.Store({
  modules: {
    search,
    block,
    debt,
    home,
    transaction,
    pendingtxs,
    account,
    contract,
    node,
    chart,
    shard,
    shardChar
  },
  // Displays status changes for vuex in a development environment
  plugins: debug ? [createLogger()] : []
})
