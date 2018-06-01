import request from '../untils/request'
import config from '../untils/config'

const { API } = config
const { txcountUrl, lastblockUrl, bestblockUrl, avgblocktimeUrl, hashrateUrl, networkdifficultyUrl } = API

async function txCount (data) {
  return request({
    url: txcountUrl,
    method: 'GET',
    data
  })
}
async function lastBlock (data) {
  return request({
    url: lastblockUrl,
    method: 'GET',
    data
  })
}
async function bestBlock (data) {
  return request({
    url: bestblockUrl,
    method: 'GET',
    data
  })
}
async function avgBlockTime (data) {
  return request({
    url: avgblocktimeUrl,
    method: 'GET',
    data
  })
}
async function hashRate (data) {
  return request({
    url: hashrateUrl,
    method: 'GET',
    data
  })
}
async function networkDifficulty (data) {
  return request({
    url: networkdifficultyUrl,
    method: 'GET',
    data
  })
}

export {
  txCount,
  lastBlock,
  bestBlock,
  avgBlockTime,
  hashRate,
  networkDifficulty
}
