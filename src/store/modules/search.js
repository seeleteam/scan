import * as types from '../mutation-types'
import router from '../../router'
import { search } from '../../service'
// import doc from './data'

const state = {
//   transactionInfo: {}
}

// getters
// Gets the properties coming out from under this module
const getters = {
//   info: state => state.info
}

// actions
const actions = {
  getSearch ({ commit, state }, params) {
    search(params)
      .then(doc => {
        if (doc.success) {
          let type = doc.data.type
          let info = doc.data.info
          switch (type) {
            case 'transaction':
              router.push({path: '/transaction/detail', query: {txhash: info.txHash}})
              commit(types.TRANSACTION_DETAIL, info)
              break
            case 'block':
              router.push({path: '/block/detail', query: { height: info.height }})
              commit(types.BLOCKS_DETAIL, info)
              break
            case 'account':
              router.push({path: '/account/detail', query: { address: info.address }})
              commit(types.ACCOUNT_DETAIL, info)
              break
            case 'contract':
              router.push({path: '/contract/detail', query: { address: info.address }})
              commit(types.CONTRACT_DETAIL, info)
              break
          }
        }
      })
  }
}

// mutations
// state modification
const mutations = {
//   [types.TRANSACTION_DETAIL] (state, info) {
//     state.transactionInfo = info
//   }
}
export default {
  state,
  getters,
  actions,
  mutations
}
