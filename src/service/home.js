import request from '../untils/request'
import config from '../untils/config'

const { API } = config
const { lastBlockTimeUrl, transactionTotalUrl, blockTxsTpsUrl, accountTotalUrl, contractTotalUrl, chartDataUrl, accountRankingUrl, minerRankingUrl } = API

async function lastBlockTime (data) {
  return request({
    url: lastBlockTimeUrl,
    method: 'GET',
    data
  })
}
async function transactionTotal (data) {
  return request({
    url: transactionTotalUrl,
    method: 'GET',
    data
  })
}
async function blockTxsTps (data) {
  return request({
    url: blockTxsTpsUrl,
    method: 'GET',
    data
  })
}
async function accountTotal (data) {
  return request({
    url: accountTotalUrl,
    method: 'GET',
    data
  })
}
async function contractTotal (data) {
  return request({
    url: contractTotalUrl,
    method: 'GET',
    data
  })
}
async function chartData (data) {
  return request({
    url: chartDataUrl,
    method: 'GET',
    data
  })
}
async function accountRanking (data) {
  return request({
    url: accountRankingUrl,
    method: 'GET',
    data
  })
}
async function minerRanking (data) {
  return request({
    url: minerRankingUrl,
    method: 'GET',
    data
  })
}

export {
  lastBlockTime,
  transactionTotal,
  blockTxsTps,
  accountTotal,
  contractTotal,
  chartData,
  accountRanking,
  minerRanking
}
