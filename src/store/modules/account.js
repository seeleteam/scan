import * as types from '../mutation-types'
import { accountList, accountDetail } from '../../service'
// import doc from './data'

const state = {
  page: 1,
  total: 0,
  accountList: [],
  accountInfo: {}
}
// getters
// Gets the properties coming out from under this module
const getters = {
  accountList: state => state.accountList,
  accountInfo: state => state.accountInfo
}

// actions
const actions = {
  getAccountList ({ commit, state }, params) {
    let data = {
      test: 1,
      p: params[0],
      s: params[1],
      ps: 25
    }
    accountList(data)
      .then(doc => {
        if (doc.success) {
          let dataList = doc.data
          commit(types.ACCOUNT_LIST, dataList)
        }
      })
  },
  getAccountDetail ({ commit, state }, params) {
    accountDetail(params)
      .then(doc => {
        if (doc.success) {
          let info = doc.data
          commit(types.ACCOUNT_DETAIL, info)
        }
      })
  }
}

// mutations
// state modification
const mutations = {
  [types.ACCOUNT_LIST] (state, dataList) {
    state.page = dataList.pageInfo.curPage
    state.total = dataList.pageInfo.totalCount
    state.accountList = dataList.list
  },
  [types.ACCOUNT_DETAIL] (state, info) {
    state.accountInfo = info
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
