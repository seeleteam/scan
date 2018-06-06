import request from '../untils/request'
import config from '../untils/config'

const { API } = config
const {chartTxUrl, chartDifficultyUrl, chartAddressUrl, chartBlocksUrl, chartHashRateUrl, chartBlockTimeUrl, chartMinerUrl, chartNodeByShardUrl} = API

async function chartTx (data) {
  return request({
    url: chartTxUrl,
    method: 'GET',
    data
  })
}

async function chartDifficulty (data) {
  return request({
    url: chartDifficultyUrl,
    method: 'GET',
    data
  })
}

async function chartAddress (data) {
  return request({
    url: chartAddressUrl,
    method: 'GET',
    data
  })
}

async function chartBlocks (data) {
  return request({
    url: chartBlocksUrl,
    method: 'GET',
    data
  })
}

async function chartHashRate (data) {
  return request({
    url: chartHashRateUrl,
    method: 'GET',
    data
  })
}

async function chartBlockTime (data) {
  return request({
    url: chartBlockTimeUrl,
    method: 'GET',
    data
  })
}

async function chartMiner (data) {
  return request({
    url: chartMinerUrl,
    method: 'GET',
    data
  })
}

async function chartNodeByShard (data) {
  return request({
    url: chartNodeByShardUrl,
    method: 'GET',
    data
  })
}

export {
  chartTx,
  chartDifficulty,
  chartAddress,
  chartBlocks,
  chartHashRate,
  chartBlockTime,
  chartMiner,
  chartNodeByShard
}
