import * as types from '../mutation-types'

const state = {
  shardCharValue: '0'
}

// getters
// Gets the properties coming out from under this module
const getters = {
  shardCharValue: state => state.shardCharValue
}

// actions
const actions = {
  setShardCharValue ({ commit, state }, params) {
    commit(types.SHARD_CHAR_VALUE, params)
  }
}

// mutations
// state modification
const mutations = {
  [types.SHARD_CHAR_VALUE] (state, params) {
    state.shardCharValue = params
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
