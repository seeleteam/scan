import * as types from '../mutation-types'

const state = {
  shardValue: '1'
}

// getters
// Gets the properties coming out from under this module
const getters = {
  shardValue: state => state.shardValue
}

// actions
const actions = {
  setShardValue ({ commit, state }, params) {
    commit(types.SHARD_VALUE, params)
  }
}

// mutations
// state modification
const mutations = {
  [types.SHARD_VALUE] (state, params) {
    state.shardValue = params
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
