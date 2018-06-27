import * as types from '../mutation-types'
import { txList, txDetail } from '../../service'

const state = {
  page: 1,
  total: 0,
  transactionList: [],
  transactionInfo: {}
}

// getters
// Gets the properties coming out from under this module
const getters = {
  transactionList: state => state.transactionList,
  transactionInfo: state => state.transactionInfo
}

// actions
const actions = {
  getTransactionList ({ commit, state }, params) {
    let data = {
      test: 1,
      p: params[0],
      s: params[1],
      ps: 25
    }
    txList(data)
      .then(doc => {
        if (doc.success) {
          let dataList = doc.data
          commit(types.TRANSACTION_LIST, dataList)
        }
      })
  },
  // block list
  getTransactionBlock ({ commit, state }, params) {
    let data = {
      test: 1,
      block: params[1].block,
      s: params[2],
      p: params[0],
      ps: 25
    }
    txList(data)
      .then(doc => {
        if (doc.success) {
          let dataList = doc.data
          commit(types.TRANSACTION_LIST, dataList)
        }
      })
  },
  getTransactionDetail ({ commit, state }, params) {
    let data = params
    txDetail(data)
      .then(doc => {
        if (doc.success) {
          let info = doc.data
          commit(types.TRANSACTION_DETAIL, info)
        }
      })
  }
}

// mutations
// state modification
const mutations = {
  [types.TRANSACTION_LIST] (state, dataList) {
    state.page = dataList.pageInfo.curPage
    state.total = dataList.pageInfo.totalCount
    state.transactionList = dataList.list
  },
  [types.TRANSACTION_DETAIL] (state, info) {
    state.transactionInfo = info
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
