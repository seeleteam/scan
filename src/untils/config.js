// localhost:3003
const URL = (process.env.SCAN_API_URL || 'https://localhost:3003') + (process.env.SCAN_API_PATH || '/api/v1')
module.exports = {
  name: 'seele-scan',
  CORS: [process.env.SCAN_API_URL || 'https://localhost:3003'],
  YQL: [''],
  API: {

    // // last block time
    // lastBlockTimeUrl: `${URL}/blockprotime`,
    // // transaction total
    // transactionTotalUrl: `${URL}/txcount?test=1`,
    // // index tps
    // blockTxsTpsUrl: `${URL}/blockTxsTps`,
    // // account total
    // accountTotalUrl: `${URL}/accountcount?test=1`,
    // // contract total
    // contractTotalUrl: `${URL}/contractcount?test=1`,
    // // chart data
    // chartDataUrl: `${URL}/Txstat`,
    // // account balance ranking
    // accountRankingUrl: `${URL}/Homeaccounts`,
    // // miner ranking
    // minerRankingUrl: `${URL}/miners?test=1`,

    txcountUrl: `${URL}/txcount`,
    lastblockUrl: `${URL}/lastblock`,
    bestblockUrl: `${URL}/bestblock`,
    avgblocktimeUrl: `${URL}/avgblocktime`,
    hashrateUrl: `${URL}/hashrate`,
    networkdifficultyUrl: `${URL}/difficulty`,
    blocksCountUrl: `${URL}/blockcount`,
    transactionsCountUrl: `${URL}/txcount`,
    accountsCountUrl: `${URL}/accountcount`,
    contractsCountUrl: `${URL}/contractcount`,

    blocksUrl: `${URL}/blocks`,
    blocksDetailUrl: `${URL}/block`,
    searchUrl: `${URL}/search`,

    txsUrl: `${URL}/txs`,
    txUrl: `${URL}/tx`,

    pendingtxsUrl: `${URL}/pendingtxs`,
    pendingtxUrl: `${URL}/tx`,

    accountsUrl: `${URL}/accounts`,
    accountUrl: `${URL}/account`,

    contractsUrl: `${URL}/contracts`,
    contractUrl: `${URL}/contract`,

    nodesUrl: `${URL}/nodes`,
    nodeUrl: `${URL}/node`,
    nodemapUrl: `${URL}/nodemap`,

    chartTxUrl: `${URL}/chart/tx`,
    chartDifficultyUrl: `${URL}/chart/difficulty`,
    chartAddressUrl: `${URL}/chart/address`,
    chartBlocksUrl: `${URL}/chart/blocks`,
    chartHashRateUrl: `${URL}/chart/hashrate`,
    chartBlockTimeUrl: `${URL}/chart/blocktime`,
    chartMinerUrl: `${URL}/chart/miner`,
    chartNodeByShardUrl: `${URL}/chart/node`
  }
}
