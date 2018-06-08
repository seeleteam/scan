import * as types from '../mutation-types'
import { blocksList, blocksDetail } from '../../service'
// import doc from './data'

const state = {
  page: 1,
  total: 0,
  blocksList: [],
  blocksInfo: {}
}

// getters
// Gets the properties coming out from under this module
const getters = {
  blocksList: state => state.blocksList,
  blocksInfo: state => state.blocksInfo
}

// actions
const actions = {
  getBlocksList ({ commit, state }, params) {
    console.log(params, 9630)
    let data = {
      test: 1,
      p: params[0],
      s: params[1],
      ps: 25
    }
    blocksList(data)
      .then(doc => {
        if (doc.success) {
          let dataList = doc.data
          commit(types.BLOCKS_LIST, dataList)
        }
      })
  },
  getBlocksDetail ({ commit, state }, params) {
    let data = params
    blocksDetail(data)
      .then(doc => {
        if (doc.success) {
          let info = doc.data
          commit(types.BLOCKS_DETAIL, info)
        }
      })
  }
}

// mutations
// state modification
const mutations = {
  [types.BLOCKS_LIST] (state, dataList) {
    state.page = dataList.pageInfo.curPage
    state.total = dataList.pageInfo.totalCount
    state.blocksList = dataList.list
  },
  [types.BLOCKS_DETAIL] (state, info) {
    state.blocksInfo = info
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
