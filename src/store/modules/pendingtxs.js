import * as types from '../mutation-types'
import { pendingtxsList, pendingtxsDetail } from '../../service'

const state = {
  page: 1,
  total: 0,
  pendingtxsList: [],
  pendingtxsInfo: {}
}

// getters
// Gets the properties coming out from under this module
const getters = {
  pendingtxsList: state => state.pendingtxsList,
  pendingtxsInfo: state => state.pendingtxsInfo
}

// actions
const actions = {
  getPendingtxsList ({ commit, state }, params) {
    let data = {
      test: 1,
      p: params[0],
      s: params[1],
      ps: 25
    }
    pendingtxsList(data)
      .then(doc => {
        if (doc.success) {
          let dataList = doc.data
          commit(types.PENDINGTXS_LIST, dataList)
        }
      })
  },
  getPendingtxsDetail ({ commit, state }, params) {
    let data = params
    pendingtxsDetail(data)
      .then(doc => {
        if (doc.success) {
          let info = doc.data
          commit(types.PENDINGTXS_DETAIL, info)
        }
      })
  }
}

// mutations
// state modification
const mutations = {
  [types.PENDINGTXS_LIST] (state, dataList) {
    state.page = dataList.pageInfo.curPage
    state.total = dataList.pageInfo.totalCount
    state.pendingtxsList = dataList.list
  },
  [types.PENDINGTXS_DETAIL] (state, info) {
    state.pendingtxsInfo = info
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
