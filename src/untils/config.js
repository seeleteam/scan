// const URL = 'http://172.17.7.37:8888/api/v1'
const URL = 'http://106.75.171.117:3003/api/v1'
module.exports = {
  name: 'seele-scan',
  CORS: ['http://106.75.171.117:3003'],
  YQL: [''],
  API: {
    txcountUrl: `${URL}/txcount`,
    lastblockUrl: `${URL}/lastblock`,
    bestblockUrl: `${URL}/bestblock`,
    avgblocktimeUrl: `${URL}/avgblocktime`,
    hashrateUrl: `${URL}/hashrate`,
    networkdifficultyUrl: `${URL}/difficulty`,

    blocksUrl: `${URL}/blocks`,
    blocksDetailUrl: `${URL}/block`,
    searchUrl: `${URL}/search`,

    txsUrl: `${URL}/txs`,
    txUrl: `${URL}/tx`,

    accountsUrl: `${URL}/accounts`,
    accountUrl: `${URL}/account`,

    nodesUrl: `${URL}/nodes`,
    nodeUrl: `${URL}/node`,
    nodemapUrl: `${URL}/nodemap`,

    chartTxUrl: `${URL}/chart/tx`,
    chartDifficultyUrl: `${URL}/chart/difficulty`,
    chartAddressUrl: `${URL}/chart/address`,
    chartBlocksUrl: `${URL}/chart/blocks`,
    chartHashRateUrl: `${URL}/chart/hashrate`,
    chartBlockTimeUrl: `${URL}/chart/blocktime`,
    chartMinerUrl: `${URL}/chart/miner`
  }
}
