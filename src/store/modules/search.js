import * as types from '../mutation-types'
import router from '../../router'
import { search } from '../../service'
import { Message } from 'element-ui'
// import doc from './data'

const state = {
//   transactionInfo: {}
  searchType: false
}

// getters
// Gets the properties coming out from under this module
const getters = {
//   info: state => state.info
  searchType: state => state.searchType
}

// actions
const actions = {
  getSearch ({ commit, state }, params) {
    search(params)
      .then(doc => {
        if (doc.success && doc.code === 0) {
          let type = doc.data.type
          let info = doc.data.info
          let searchType = true
          switch (type) {
            case 'transaction':
              router.push({path: '/transaction/detail', query: {txhash: info.txHash}})
              commit(types.TRANSACTION_DETAIL, info)
              commit(types.SEARCH_TYPE, searchType)
              break
            case 'block':
              router.push({path: '/block/detail', query: { height: info.height }})
              commit(types.BLOCKS_DETAIL, info)
              commit(types.SEARCH_TYPE, searchType)
              break
            case 'account':
              router.push({path: '/account/detail', query: { address: info.address }})
              commit(types.ACCOUNT_DETAIL, info)
              commit(types.SEARCH_TYPE, searchType)
              break
            case 'contract':
              router.push({path: '/contract/detail', query: { address: info.address }})
              commit(types.CONTRACT_DETAIL, info)
              commit(types.SEARCH_TYPE, searchType)
              break
          }
        } else if (doc.success && doc.code !== 0) {
          Message({
            showClose: true,
            dangerouslyUseHTMLString: true,
            message: `<strong>There are no results for</strong> <br/><br/><span style="word-break:break-all;">${params}</span> <br/><br/> Check your spelling or try different keywords`,
            type: 'warning'
          })
        }
      })
  },
  setSearchType ({ commit, state }, params) {
    let searchType = params
    commit(types.SEARCH_TYPE, searchType)
  }
}

// mutations
// state modification
const mutations = {
//   [types.TRANSACTION_DETAIL] (state, info) {
//     state.transactionInfo = info
//   }
  [types.SEARCH_TYPE] (state, searchType) {
    state.searchType = searchType
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
