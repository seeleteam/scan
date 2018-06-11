import request from '../untils/request'
import config from '../untils/config'

const { API } = config
const { txcountUrl, lastblockUrl, bestblockUrl, avgblocktimeUrl, hashrateUrl, networkdifficultyUrl, blocksCountUrl, transactionsCountUrl, accountsCountUrl, contractsCountUrl } = API

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
async function blocksCount (data) {
  return request({
    url: blocksCountUrl,
    method: 'GET',
    data
  })
}
async function transactionsCount (data) {
  return request({
    url: transactionsCountUrl,
    method: 'GET',
    data
  })
}
async function accountsCount (data) {
  return request({
    url: accountsCountUrl,
    method: 'GET',
    data
  })
}
async function contractsCount (data) {
  return request({
    url: contractsCountUrl,
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
  networkDifficulty,
  blocksCount,
  transactionsCount,
  accountsCount,
  contractsCount
}
