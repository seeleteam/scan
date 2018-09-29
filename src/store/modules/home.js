import * as types from '../mutation-types'
import _ from 'lodash'
import { lastBlockTime, transactionTotal, blockTxsTps, accountTotal, contractTotal, chartData, accountRanking, minerRanking } from '../../service'

const state = {
  lastBlockList: [],
  transactionTotal: 0,
  blockTxsTps: 0,
  accountTotal: 0,
  contractTotal: 0,
  chartDataList: [],
  accountRanking: [],
  minerRanking: []
}

// getters
// Gets the properties coming out from under this module
const getters = {
  lastBlockList: state => state.lastBlockList,
  transactionTotal: state => state.transactionTotal,
  blockTxsTps: state => state.blockTxsTps,
  accountTotal: state => state.accountTotal,
  contractTotal: state => state.contractTotal,
  chartDataList: state => state.chartDataList,
  accountRanking: state => state.accountRanking,
  minerRanking: state => state.minerRanking
}

// actions
const actions = {
  getLastBlockTime ({ commit, state }, params) {
    let data = {
      test: 1
    }
    lastBlockTime(data)
      .then(doc => {
        if (doc.success) {
          let lastBlockList = doc.data
          commit(types.LASTBLOCKLIST, lastBlockList)
        }
      })
  },
  getTransactionTotal ({ commit, state }, params) {
    let data = {
      test: 1
    }
    transactionTotal(data)
      .then(doc => {
        if (doc.success) {
          let transactionTotal = doc.data
          commit(types.TRANSACTIONTOTAL, transactionTotal)
        }
      })
  },
  getBlockTxsTps ({ commit, state }, params) {
    let data = {
      test: 1
    }
    blockTxsTps(data)
      .then(doc => {
        if (doc.success) {
          let blockTxsTps = doc.data
          commit(types.BLOCKTXSTPS, blockTxsTps)
        }
      })
  },
  getAccountTotal ({ commit, state }, params) {
    let data = {
      test: 1
    }
    accountTotal(data)
      .then(doc => {
        if (doc.success) {
          let accountTotal = doc.data
          commit(types.ACCOUNTTOTAL, accountTotal)
        }
      })
  },
  getContractTotal ({ commit, state }, params) {
    let data = {
      test: 1
    }
    contractTotal(data)
      .then(doc => {
        if (doc.success) {
          let contractTotal = doc.data
          commit(types.CONTRACTTOTAL, contractTotal)
        }
      })
  },
  getChartData ({ commit, state }, params) {
    let data = {
      test: 1,
      s: params
    }
    chartData(data)
      .then(doc => {
        if (doc.success) {
          let chartDataList = doc.data
          let chartDataCode = doc.code
          var stime = []
          var txcount = []
          if (!_.isUndefined(chartDataList) && chartDataList !== null) {
            for (var i = 0; i < chartDataList.length; i++) {
              var time = new Date(chartDataList[i].stime * 1000)
              stime[i] = (time.getMonth() + 1) + '/' + time.getDate()
              txcount[i] = chartDataList[i].txcount
            }
          }
          chartDataList = {
            'stime': stime.reverse(),
            'txcount': txcount.reverse(),
            'code': chartDataCode
          }
          commit(types.CHARTDATALIST, chartDataList)
        }
      })
  },
  getAccountRanking ({ commit, state }, params) {
    let data = {
      test: 1
    }
    accountRanking(data)
      .then(doc => {
        if (doc.success) {
          let accountRanking = doc.data
          commit(types.ACCOUNTRANKING, accountRanking)
        }
      })
  },
  getMinerRanking ({ commit, state }, params) {
    let data = {
      test: 1
    }
    minerRanking(data)
      .then(doc => {
        if (doc.success) {
          let minerRanking = doc.data
          commit(types.MINERANKING, minerRanking)
        }
      })
  }
}

// mutations
// state modification
const mutations = {
  [types.LASTBLOCKLIST] (state, lastBlockList) {
    state.lastBlockList = lastBlockList
  },
  [types.TRANSACTIONTOTAL] (state, transactionTotal) {
    state.transactionTotal = transactionTotal
  },
  [types.BLOCKTXSTPS] (state, blockTxsTps) {
    state.blockTxsTps = blockTxsTps
  },
  [types.ACCOUNTTOTAL] (state, accountTotal) {
    state.accountTotal = accountTotal
  },
  [types.CONTRACTTOTAL] (state, contractTotal) {
    state.contractTotal = contractTotal
  },
  [types.CHARTDATALIST] (state, chartDataList) {
    state.chartDataList = chartDataList
  },
  [types.ACCOUNTRANKING] (state, accountRanking) {
    state.accountRanking = accountRanking
  },
  [types.MINERANKING] (state, minerRanking) {
    state.minerRanking = minerRanking
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
