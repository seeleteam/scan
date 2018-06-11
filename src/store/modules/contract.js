import * as types from '../mutation-types'
import { contractList, contractDetail } from '../../service'
// import doc from './data'

const state = {
  page: 1,
  total: 0,
  contractList: [],
  contractInfo: {}
}
// getters
// Gets the properties coming out from under this module
const getters = {
  contractList: state => state.contractList,
  contractInfo: state => state.contractInfo
}

// actions
const actions = {
  getContractList ({ commit, state }, params) {
    let data = {
      test: 1,
      p: params[0],
      s: params[1],
      ps: 25
    }
    contractList(data)
      .then(doc => {
        if (doc.success) {
          let dataList = doc.data
          commit(types.ACCOUNT_LIST, dataList)
        }
      })
  },
  getContractDetail ({ commit, state }, params) {
    contractDetail(params)
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
    state.contractList = dataList.list
  },
  [types.ACCOUNT_DETAIL] (state, info) {
    state.contractInfo = info
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
