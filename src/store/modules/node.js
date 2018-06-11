import * as types from '../mutation-types'
import { nodeList, nodeDetail, nodeMapList } from '../../service'
import _ from 'lodash'
// import doc from './data'

const state = {
  page: 1,
  total: 0,
  nodeList: [],
  nodeListByCountry: [],
  nodeListByCity: [],
  nodeSum: 0,
  nodeInfo: {},
  nodeListCityGeo: {}
}
// getters
// Gets the properties coming out from under this module
const getters = {
  nodeList: state => state.nodeList,
  nodeInfo: state => state.nodeInfo,
  nodeListByCountry: state => state.nodeListByCountry,
  nodeListByCity: state => state.nodeListByCity,
  nodeSum: state => state.nodeSum,
  nodeListCityGeo: state => state.nodeListCityGeo
}

// actions
const actions = {
  getNodeList ({ commit, state }, params) {
    let data = {
      test: 1,
      p: params[0],
      s: params[1],
      ps: 25
    }
    nodeList(data)
      .then(doc => {
        if (doc.success) {
          let dataList = doc.data
          commit(types.NODE_LIST, dataList)
        }
      })
  },
  getNodeDetail ({ commit, state }, params) {
    let data = params
    nodeDetail(data)
      .then(doc => {
        if (doc.success) {
          let info = doc.data
          commit(types.NODE_DETAIL, info)
        }
      })
  },
  getNodeListByCountry ({ commit, state }, params) {
    let data = {
      test: 1
    }
    nodeMapList(data)
      .then(doc => {
        if (doc.success) {
          let dataList = doc.data
          var dataListCountry = _(dataList).countBy('Country').toPairs().sortBy(1).reverse()
          let nodesSum = _(dataListCountry).map(1).sum()
          let resCountryList = []
          var index = 1
          var tmpItem = {}
          _.forEach(dataListCountry.value(), function (item) {
            if (_.isUndefined(item[0]) || item[0] === '' || item[0].length === 0) {
              return
            }
            tmpItem = {
              nodeRank: index++,
              nodeCountry: item[0],
              nodeCount: item[1],
              nodePercent: nodesSum === 0 ? 0 : (item[1] / nodesSum) * 100
            }
            resCountryList.push(tmpItem)
          })
          commit(types.NODE_LIST_BYCOUNTRY, resCountryList)
          commit(types.NODE_SUM, nodesSum)
        }
      })
  },
  getNodeListByCity ({ commit, state }, params) {
    let data = {
      test: 1
    }
    nodeMapList(data)
      .then(doc => {
        if (doc.success) {
          let dataList = doc.data
          var dataListCity = _(dataList).countBy('City').toPairs()
          let dataListCityGeo = _(dataList).map(function (o) {
            return o.City + '#' + o.LongitudeAndLatitude
          }).uniq()
          let resCityList = []
          var index = 1
          var tmpItem = {}
          let resGeo = {}
          var splitItem = []
          _.forEach(dataListCity.value(), function (item) {
            tmpItem = {
              nodeRank: index++,
              nodeCity: item[0] === '' ? 'Other' : item[0],
              nodeCount: item[1]
            }
            resCityList.push(tmpItem)
          })
          _.forEach(dataListCityGeo.value(), function (item) {
            splitItem = item.split('#')
            if (_.isUndefined(splitItem[0]) || splitItem[0] === '' || splitItem[0].length === 0) {
              return
            }
            resGeo[splitItem[0]] = splitItem[1]
          })
          commit(types.NODE_LIST_BYCITY, resCityList)
          commit(types.NODE_LIST_CITY_GEO, resGeo)
        }
      })
  }
}

// mutations
// state modification
const mutations = {
  [types.NODE_LIST] (state, dataList) {
    state.page = dataList.pageInfo.curPage
    state.total = dataList.pageInfo.totalCount
    state.nodeList = dataList.list
  },
  [types.NODE_DETAIL] (state, info) {
    state.nodeInfo = info
  },
  [types.NODE_LIST_BYCOUNTRY] (state, resCountryList) {
    state.nodeListByCountry = resCountryList
  },
  [types.NODE_SUM] (state, nodesSum) {
    state.nodeSum = nodesSum
  },
  [types.NODE_LIST_BYCITY] (state, resCityList) {
    state.nodeListByCity = resCityList
  },
  [types.NODE_LIST_CITY_GEO] (state, resGeo) {
    state.nodeListCityGeo = resGeo
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
