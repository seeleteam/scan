import * as types from '../mutation-types'
import { txCount, lastBlock, bestBlock, avgBlockTime, hashRate, networkDifficulty } from '../../service'

const state = {
  txCount: '0',
  lastBlock: '0',
  bestBlock: '0',
  avgBlockTime: '0',
  hashRate: '0',
  networkDifficulty: '0'
}

// getters
// Gets the properties coming out from under this module
const getters = {
  txCount: state => state.txCount,
  lastBlock: state => state.lastBlock,
  bestBlock: state => state.bestBlock,
  avgBlockTime: state => state.avgBlockTime,
  hashRate: state => state.hashRate,
  networkDifficulty: state => state.networkDifficulty
}

// actions
const actions = {
  getTxCount ({ commit, state }, params) {
    let data = {
      test: 1
    }
    txCount(data)
      .then(doc => {
        if (doc.success) {
          let txCount = doc.data
          commit(types.TXCOUNT, txCount)
        }
      })
  },
  getLastBlock ({ commit, state }, params) {
    let data = {
      test: 1
    }
    lastBlock(data)
      .then(doc => {
        if (doc.success) {
          let lastBlock = doc.data
          commit(types.LASTBLOCK, lastBlock)
        }
      })
  },
  getBestBlock ({ commit, state }, params) {
    let data = {
      test: 1
    }
    bestBlock(data)
      .then(doc => {
        if (doc.success) {
          let bestBlock = doc.data
          commit(types.BESTBLOCK, bestBlock)
        }
      })
  },
  getAvgBlockTime ({ commit, state }, params) {
    let data = {
      test: 1
    }
    avgBlockTime(data)
      .then(doc => {
        if (doc.success) {
          let avgBlockTime = doc.data
          commit(types.AVGBLOCKTIME, avgBlockTime)
        }
      })
  },
  getHashRate ({ commit, state }, params) {
    let data = {
      test: 1
    }
    hashRate(data)
      .then(doc => {
        if (doc.success) {
          let hashRate = doc.data
          commit(types.HASHRATE, hashRate)
        }
      })
  },
  getNetworkDifficulty ({ commit, state }, params) {
    let data = {
      test: 1
    }
    networkDifficulty(data)
      .then(doc => {
        if (doc.success) {
          let networkDifficulty = doc.data
          commit(types.NETWORKDIFFICULTY, networkDifficulty)
        }
      })
  }
}

// mutations
// state modification
const mutations = {
  [types.TXCOUNT] (state, txCount) {
    state.txCount = txCount
  },
  [types.LASTBLOCK] (state, lastBlock) {
    state.lastBlock = lastBlock
  },
  [types.BESTBLOCK] (state, bestBlock) {
    state.bestBlock = bestBlock
  },
  [types.AVGBLOCKTIME] (state, avgBlockTime) {
    state.avgBlockTime = avgBlockTime
  },
  [types.HASHRATE] (state, hashRate) {
    state.hashRate = hashRate
  },
  [types.NETWORKDIFFICULTY] (state, networkDifficulty) {
    state.networkDifficulty = networkDifficulty
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
