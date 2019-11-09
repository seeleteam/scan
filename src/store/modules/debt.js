import * as types from '../mutation-types'
import router from '../../router'
import { debtList, debtDetail } from '../../service'
// import doc from './data'

const state = {
  page: 1,
  total: 0,
  debtList: [],
  debtInfo: {}
}

// getters
// Gets the properties coming out from under this module
const getters = {
  debtList: state => state.debtList,
  debtInfo: state => state.debtInfo
}

// actions
const actions = {
  getDebtList ({ commit, state }, params) {
    let data = {
      test: 1,
      p: params[0],
      s: params[1],
      ps: 25
    }
    debtList(data)
      .then(doc => {
        if (doc.success) {
          let dataList = doc.data
          commit(types.DEBT_LIST, dataList)
        }
      })
  },
  // block list
  getBlockDebt ({ commit, state }, params) {
    let data = {
      test: 1,
      block: params[1].block,
      s: params[2],
      p: params[0],
      ps: 25
    }
    debtList(data)
      .then(doc => {
        if (doc.success) {
          let dataList = doc.data
          commit(types.DEBT_LIST, dataList)
        }
      })
  },
  getDebtDetail ({ commit, state }, params) {
    debtDetail(params)
      .then(doc => {
        if (doc.success) {
          let info = doc.data
          commit(types.DEBT_DETAIL, info)
          commit(types.SHARD_VALUE, info.shardnumber)
          router.push({path: '/debt/detail', query: {height: info.height, s: info.shardNumber}})
        }
      })
  }
}

// mutations
// state modification
const mutations = {
  [types.DEBT_LIST] (state, dataList) {
    state.page = dataList.pageInfo.curPage
    state.total = dataList.pageInfo.totalCount
    state.debtList = dataList.list
  },
  [types.DEBT_DETAIL] (state, info) {
    state.debtInfo = info
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
