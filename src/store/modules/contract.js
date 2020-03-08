import * as types from '../mutation-types'
import { contractList, contractDetail } from '../../service'
// import doc from './data'
import { verifyRequest } from '../../service/contract'

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
          commit(types.CONTRACT_LIST, dataList)
        }
      })
  },
  getContractDetail ({ commit, state }, params) {
    return contractDetail(params)
      .then(doc => {
        if (doc.success) {
          let info = doc.data
          commit(types.CONTRACT_DETAIL, info)
          return info
        }
      })
  },
  verifyContract ({ commit, state }, params) {
    return verifyRequest(params)
      .then(doc => {
        return doc
      })
  }
}

// mutations
// state modification
const mutations = {
  [types.CONTRACT_LIST] (state, dataList) {
    state.page = dataList.pageInfo.curPage
    state.total = dataList.pageInfo.totalCount
    state.contractList = dataList.list
  },
  [types.CONTRACT_DETAIL] (state, info) {
    state.contractInfo = info
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
