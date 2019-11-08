import * as types from '../mutation-types'
import router from '../../router'
import { search } from '../../service'
import { Message, Loading } from 'element-ui'
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
    if (params[0] !== '') {
      let loading = Loading.service({
        lock: false,
        target: document.querySelector('.search-wrap')
      })
      search(params[0])
        .then(doc => {
          if (doc.success && doc.code === 0) {
            let type = doc.data.type
            let info = doc.data.info
            let searchType = true
            loading.close()
            switch (type) {
              case 'transaction':
                router.push({path: '/transaction/detail', query: {txhash: info.txHash}})
                commit(types.TRANSACTION_DETAIL, info)
                commit(types.SEARCH_TYPE, searchType)
                break
              case 'block':
                router.push({path: '/block/detail', query: { height: info.height, s: info.shardnumber }})
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
            // Todo
            // Internationalization, passed in through params
            if (params[1] === 'zh') {
              Message({
                showClose: true,
                dangerouslyUseHTMLString: true,
                message: `<strong>没有与此相关的结果:<br/><br/><span style="word-break:break-all;">${params[0]}</span>`,
                type: 'warning'
              })
              loading.close()
            } else if (params[1] === 'en') {
              Message({
                showClose: true,
                dangerouslyUseHTMLString: true,
                message: `<strong>There are no results for<br/><br/><span style="word-break:break-all;">${params[0]}</span><br/><br/>Check your spelling or try different keywords`,
                type: 'warning'
              })
              loading.close()
            }
          }
        })
    } else {
      return false
    }
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
