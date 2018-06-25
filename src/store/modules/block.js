import * as types from '../mutation-types'
import router from '../../router'
import { blocksList, blocksDetail } from '../../service'
// import doc from './data'

const state = {
  page: 1,
  total: 0,
  blocksList: [],
  blocksInfo: {},
  heightShow: false
}

// getters
// Gets the properties coming out from under this module
const getters = {
  blocksList: state => state.blocksList,
  blocksInfo: state => state.blocksInfo,
  heightShow: state => state.heightShow
}

// actions
const actions = {
  getBlocksList ({ commit, state }, params) {
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
    blocksDetail(params)
      .then(doc => {
        if (doc.success) {
          let info = doc.data
          commit(types.BLOCKS_DETAIL, info)
          commit(types.SHARD_VALUE, info.shardnumber)
          router.push({path: '/block/detail', query: {height: info.height, s: info.shardnumber}})
        }
      })
  },
  getHeightShow ({ commit, state }, params) {
    let isShow = params
    commit(types.HEIGHT_SHOW, isShow)
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
  },
  [types.HEIGHT_SHOW] (state, isShow) {
    state.heightShow = isShow
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
