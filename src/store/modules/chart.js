import * as types from '../mutation-types'
import _ from 'lodash'
import { chartTx, chartDifficulty, chartAddress, chartBlocks, chartHashRate, chartBlockTime, chartMiner, chartNodeByShard } from '../../service'
// import {} from '../../untils/format'

const state = {
  txChart: [],
  difficultyChart: [],
  addressChart: [],
  blocksChart: [],
  hashrateChart: [],
  blocktimeChart: [],
  minerChart: [],
  nodesChart: []
}

// getters
// Gets the properties coming out from under this module
const getters = {
  txChart: state => state.txChart,
  difficultyChart: state => state.difficultyChart,
  addressChart: state => state.addressChart,
  blocksChart: state => state.blocksChart,
  hashrateChart: state => state.hashrateChart,
  blocktimeChart: state => state.blocktimeChart,
  minerChart: state => state.minerChart,
  nodesChart: state => state.nodesChart
}

// actions
const actions = {
  getTxChart ({ commit, state }, params) {
    let data = {
      test: 1,
      s: params
    }
    chartTx(data)
      .then(doc => {
        if (doc.success) {
          let dataList = doc.data
          let dataCode = doc.code
          var xAxis = []
          var yAxis = []
          var toolTip = []
          if (!_.isUndefined(dataList) && dataList !== null) {
            for (var i = 0; i < dataList.length; i++) {
              var time = new Date(dataList[i].TimeStamp * 1000)
              xAxis[i] = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate()
              yAxis[i] = dataList[i].TotalTxs
              toolTip[i] = {
                AvgDifficulty: dataList[i].Difficulty,
                HashRate: dataList[i].HashRate,
                AvgBlockTime: dataList[i].AvgTime,
                TotalBlocks: dataList[i].TotalBlocks,
                NewAddress: dataList[i].TodayIncrease,
                TotalTxs: dataList[i].TotalTxs,
                TimeStamp: dataList[i].TimeStamp
              }
            }
          }
          dataList = {
            'x': xAxis,
            'y': yAxis,
            'tooltip': toolTip,
            'code': dataCode
          }
          commit(types.TX_CHART, dataList)
        }
      })
  },
  getDifficultyChart ({ commit, state }, params) {
    let data = {
      test: 1,
      s: params
    }
    chartDifficulty(data)
      .then(doc => {
        if (doc.success) {
          let dataList = doc.data
          let dataCode = doc.code
          var xAxis = []
          var yAxis = []
          var toolTip = []
          if (!_.isUndefined(dataList) && dataList !== null) {
            for (var i = 0; i < dataList.length; i++) {
              var time = new Date(dataList[i].TimeStamp * 1000)
              xAxis[i] = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate()
              yAxis[i] = dataList[i].Difficulty
              toolTip[i] = {
                Difficulty: dataList[i].Difficulty,
                TimeStamp: dataList[i].TimeStamp
              }
            }
          }
          dataList = {
            'x': xAxis,
            'y': yAxis,
            'tooltip': toolTip,
            'code': dataCode
          }
          commit(types.DIFFICULTY_CHART, dataList)
        }
      })
  },
  getAddressChart ({ commit, state }, params) {
    let data = {
      test: 1,
      s: params
    }
    chartAddress(data)
      .then(doc => {
        if (doc.success) {
          let dataList = doc.data
          let dataCode = doc.code
          var xAxis = []
          var yAxis = []
          var toolTip = []
          if (!_.isUndefined(dataList) && dataList !== null) {
            for (var i = 0; i < dataList.length; i++) {
              var time = new Date(dataList[i].TimeStamp * 1000)
              xAxis[i] = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate()
              yAxis[i] = dataList[i].TotalAddresss
              toolTip[i] = {
                TotalAddresss: dataList[i].TotalAddresss,
                DailyIncrease: dataList[i].TodayIncrease,
                TimeStamp: dataList[i].TimeStamp
              }
            }
          }
          dataList = {
            'x': xAxis,
            'y': yAxis,
            'tooltip': toolTip,
            'code': dataCode
          }
          commit(types.ADDRESS_CHART, dataList)
        }
      })
  },
  getBlocksChart ({ commit, state }, params) {
    let data = {
      test: 1,
      s: params
    }
    chartBlocks(data)
      .then(doc => {
        if (doc.success) {
          let dataList = doc.data
          let dataCode = doc.code
          var xAxis = []
          var yAxis = []
          var toolTip = []
          if (!_.isUndefined(dataList) && dataList !== null) {
            for (var i = 0; i < dataList.length; i++) {
              var time = new Date(dataList[i].TimeStamp * 1000)
              xAxis[i] = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate()
              yAxis[i] = dataList[i].TotalBlocks
              toolTip[i] = {
                TotalBlocks: dataList[i].TotalBlocks,
                TimeStamp: dataList[i].TimeStamp,
                DailyBlockRewards: dataList[i].Rewards
              }
            }
          }
          dataList = {
            'x': xAxis,
            'y': yAxis,
            'tooltip': toolTip,
            'code': dataCode
          }
          commit(types.BLOCKS_CHART, dataList)
        }
      })
  },
  getHashRateChart ({ commit, state }, params) {
    let data = {
      test: 1,
      s: params
    }
    chartHashRate(data)
      .then(doc => {
        if (doc.success) {
          let dataList = doc.data
          let dataCode = doc.code
          var xAxis = []
          var yAxis = []
          var toolTip = []
          if (!_.isUndefined(dataList) && dataList !== null) {
            for (var i = 0; i < dataList.length; i++) {
              var time = new Date(dataList[i].TimeStamp * 1000)
              xAxis[i] = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate()
              yAxis[i] = dataList[i].HashRate
              toolTip[i] = {
                HashRate: dataList[i].HashRate,
                TimeStamp: dataList[i].TimeStamp
              }
            }
          }
          dataList = {
            'x': xAxis,
            'y': yAxis,
            'tooltip': toolTip,
            'code': dataCode
          }
          commit(types.HASHRATE_CHART, dataList)
        }
      })
  },
  getBlockTimeChart ({ commit, state }, params) {
    let data = {
      test: 1,
      s: params
    }
    chartBlockTime(data)
      .then(doc => {
        if (doc.success) {
          let dataList = doc.data
          let dataCode = doc.code
          var xAxis = []
          var yAxis = []
          var toolTip = []
          if (!_.isUndefined(dataList) && dataList !== null) {
            for (var i = 0; i < dataList.length; i++) {
              var time = new Date(dataList[i].TimeStamp * 1000)
              xAxis[i] = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate()
              yAxis[i] = dataList[i].AvgTime
              toolTip[i] = {
                HashRate: dataList[i].HashRate,
                AvgTime: dataList[i].AvgTime
              }
            }
          }
          dataList = {
            'x': xAxis,
            'y': yAxis,
            'tooltip': toolTip,
            'code': dataCode
          }
          commit(types.BLOCKTIME_CHART, dataList)
        }
      })
  },
  getMinerChart ({ commit, state }, params) {
    let data = {
      test: 1,
      s: params
    }
    chartMiner(data)
      .then(doc => {
        if (doc.success) {
          let dataList = doc.data
          let dataCode = doc.code
          var legendData = []
          var seriesData = []
          var selected = {}
          if (!_.isUndefined(dataList) && dataList !== null && dataList.length > 0) {
            let rankArray = dataList[0].Rank
            for (var i = 0; i < rankArray.length; i++) {
              var address = rankArray[i].Address
              address = address.substring(0, 30) + '...'
              legendData.push(address)
              seriesData.push({
                name: address,
                value: rankArray[i].Mined
              })
              selected[address] = i < 15
            }
          }
          dataList = {
            'legendData': legendData,
            'seriesData': seriesData,
            'selected': selected,
            'code': dataCode
          }
          commit(types.MINER_CHART, dataList)
        }
      })
  },
  getNodesByShardChart ({ commit, state }, params) {
    let data = {
      test: 1,
      s: params
    }
    chartNodeByShard(data)
      .then(doc => {
        if (doc.success) {
          let dataList = doc.data
          let dataCode = doc.code
          var legendData = []
          var seriesData = []
          var selected = {}
          if (!_.isUndefined(dataList) && dataList !== null) {
            var i = 0
            for (var key in dataList) {
              i++
              var shardInfo = 'shard-' + key
              legendData.push(shardInfo)
              seriesData.push({
                name: shardInfo,
                value: dataList[key]
              })
              selected[shardInfo] = i < 20
            }
          }
          dataList = {
            'legendData': legendData,
            'seriesData': seriesData,
            'selected': selected,
            'code': dataCode
          }
          commit(types.NODES_CHART, dataList)
        }
      })
  }
}

// mutations
// state modification
const mutations = {
  [types.TX_CHART] (state, dataList) {
    state.txChart = dataList
  },
  [types.DIFFICULTY_CHART] (state, dataList) {
    state.difficultyChart = dataList
  },
  [types.ADDRESS_CHART] (state, dataList) {
    state.addressChart = dataList
  },
  [types.BLOCKS_CHART] (state, dataList) {
    state.blocksChart = dataList
  },
  [types.HASHRATE_CHART] (state, dataList) {
    state.hashrateChart = dataList
  },
  [types.BLOCKTIME_CHART] (state, dataList) {
    state.blocktimeChart = dataList
  },
  [types.MINER_CHART] (state, dataList) {
    state.minerChart = dataList
  },
  [types.NODES_CHART] (state, dataList) {
    state.nodesChart = dataList
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
