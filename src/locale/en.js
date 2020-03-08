module.exports = {
  blockExplore: 'Block Explorer',
  message: {
    noData: 'No Data',
    noPrev: 'No Prev',
    noNext: 'No Next'
  },
  placeholder: {
    searchInput: 'Search by Address / TxHash / BlockHash / Contract'
  },
  network: {
    title: 'Monitor Network',
    main: 'Main Network',
    test: 'Test Network'
  },
  language: {
    title: 'Language',
    zh: 'Chinese',
    en: 'English'
  },
  button: {
    cancel: 'Cancel',
    confirm: 'Ok',
    prev: 'Prev',
    next: 'Next'
  },
  navs: {
    home: 'Home',
    node: 'Nodes',
    account: 'Accounts',
    block: 'Blocks',
    debt: 'Debt',
    tx: 'Transactions',
    transaction: 'BlockChain Txs',
    pendingtxs: 'Pending Txs',
    contract: 'Contracts',
    verifyContract: 'Verify Contract',
    token: 'Token',
    statChar: 'Stat Charts',
    api: 'API',
    accountTx: 'AccountTxs',
    accountAddress: 'AccountAddress',
    contractTx: 'ContractTxs',
    contractAddress: 'ContractAddress'
  },
  blockStat: {
    blocksCount: 'BLOCKS',
    transactionsCount: 'TRANSACTIONS',
    accountsCount: 'ACCOUNTS',
    contractsCount: 'CONTRACTS',
    bestBlock: 'BEST BLOCK',
    lastBlock: 'LAST BLOCK',
    avgBLockTime: 'AVG BLOCK TIME',
    activeNodes: 'ACTIVE NODES',
    tranSactions: 'TRANSACTIONS',
    hashRate: 'HASH RATE',
    networkDifficulty: 'DIFFICULTY'
  },
  listHeader: {
    shardnumber: 'ShardNumber',
    rank: 'Rank',
    address: 'Address',
    balance: 'Balance',
    percentage: 'Percentage',
    txCount: 'Tx Count',
    debtcount: 'Debt Count',
    listDescription: 'Account Txs List (Showing the last 25 records of a total of ',
    listTotal: ' records',
    txHash: 'Tx Hash',
    debtHash: 'Debt Hash',
    age: 'Age',
    from: 'From',
    to: 'To',
    value: 'Value',
    nonce: 'Nonce',
    token: 'Token',

    height: 'Height',
    txn: 'Txns',
    uncles: 'Uncles',
    miner: 'Miner',
    gasLimit: 'GasLimit',
    fee: 'Fee (Fan)',
    difficulty: 'Difficulty',
    hashRate: 'HashRate',
    reward: 'Reward',

    contractName: 'ContractName',
    compiler: 'Compiler',
    version: 'Version',
    settings: 'Settings',
    dateVerified: 'DateVerified',
    sourceCode: 'SourceCode',

    block: 'Block',
    headHash: 'HeadHash',
    preBlockHash: 'PreBlockHash',
    txcount: 'Tx Count',

    amount: 'Amount',
    hash: 'Hash',
    inorout: 'In/Out',
    txfee: 'Tx Fee (Fan)',

    nodeRank: 'Rank',
    nodeRegion: 'Region',
    nodeNumber: 'Nodes',

    nodeId: 'Node ID',
    host: 'Host',
    port: 'Port',
    country: 'Country',
    city: 'City',
    region: 'Region',
    client: 'Client',
    caps: 'Caps',
    lastSeen: 'Last Seen',

    payload: 'Payload',
    contractCreationCode: 'Contract Creation Code'
  },
  char: {
    accounts: 'Accounts Charts',
    blockchain: 'Blockchain Charts',
    contracts: 'Contracts Charts',
    macket: 'Market Charts',
    mining: 'Miner Charts',
    network: 'Network Charts',
    nodes: 'Nodes Charts',
    transactions: 'Transactions Charts'
  },
  statcharts: {
    common: {
      loading: 'loading...',
      shardTag: 'Shard',
      shardAll: 'ALL'
    },
    charts: {
      dataView: 'Data view',
      restore: 'Restore',
      save: 'Save as picture',
      close: 'Close',
      refresh: 'Refresh',
      zoom: 'region scaling',
      back: 'region scaling reduction',
      line: 'switch to line chart',
      bar: 'switch to bar chart',
      pie: 'switch to pie chart',
      funnel: 'switch to funnel chart'
    },
    node: {
      nodesByShard: 'Nodes By Shard',
      nodesByShardTipname: 'Nodes Count'
    },
    network: {
      difficultyName: 'Seele Difficulty',
      difficultyXname: 'Date',
      difficultyYname: 'Difficulty',
      difficultyAverage: 'Average Difficluty',
      hashrateName: 'Seele Network HashRate',
      hashrateXname: 'Date',
      hashrateYname: 'Network HashRate',
      hashrateAverage: 'Avg Daily HashRate'
    },
    account: {
      growthName: 'Account Growth',
      growthXname: 'Date',
      growthYname: 'Address Number',
      growthTotal: 'Total Address',
      growthIncrease: 'Daily Increase'
    },
    transaction: {
      historyTxName: 'Seele Transaction History',
      historyTxXname: 'Date',
      historyTxYname: 'History Transactions Count',
      historyTipTotal: 'Total Transactions',
      historyTipAvgDifficulty: 'Avg Difficulty',
      historyTipHashRate: 'HashRate',
      historyTipAvgBlockTime: 'Avg BlockTime',
      historyTipTotalBlockCount: 'Total BlockCount',
      historyTipNewAddressSeen: 'New Address seen'
    },
    block: {
      avgTimeName: 'Block Avgtime',
      avgTimeXname: 'Date',
      avgTimeYname: 'Block AvgTime',
      avgTimeTipBlockTime: 'Block Time(secs)',
      countName: 'Block Count',
      countXname: 'Date',
      countYname: 'Blocks Count',
      countTotal: 'Total Blocks',
      countTotalDailyRewards: 'Total Daily Block Rewards'
    },
    contract: {

    },
    miner: {
      minerByBlockName: 'Top Miners By Blocks',
      minerByBlockTipname: 'Blocks Mined'
    },
    market: {

    }
  },
  node: {
    nodeTitle: 'Nodes',
    nodeStat: 'Stat By Country',
    nodeMap: 'Node Map',
    nodeRank: 'Rank',
    nodeCountry: 'Country',
    nodeCount: 'Nodes',
    nodeMapTitle: 'Seele Node Map',
    nodeMapFoot: 'Node Distribution Map',
    nodeTip: 'Node Number'
  },
  api: {
    blocksapi: 'Block API',
    transactionapi: 'Transaction API',
    accountapi: 'Account API',
    searchapi: 'Search API',
    statapi: 'Stat Metrics API',
    nodepai: 'Node API',
    chartapi: 'Stats Charts API'
  },
  forBlock: 'For Block',
  charMark: {
    node: {
      shardTitle: 'Nodes Count By Shard',
      shardContent: 'Stat the nodes count by node shard'
    },
    miner: {
      title: 'Top Miners',
      content: 'Stat the top 15 miners by blocks'
    },
    account: {
      title: 'Unique Address Growth Rate',
      content: 'Stat the growth rate of account address'
    },
    block: {
      countTitle: 'Block Count',
      countContent: 'Stat the count of block and growth rate',
      timeTitle: 'BlockTime History',
      timeContent: 'Stat the blocktime of history block'
    },
    transactions: {
      title: 'Seele Transaction History',
      content: 'Statistics of transactions and growth rate'
    },
    network: {
      hashTitle: 'HashRate Growth Rate',
      hashContent: 'Stat the network hashrate and growth rate',
      diffTitle: 'Block Difficulty Growth',
      diffContent: 'Stat the block difficulty and growth rate'
    }
  },
  tx: {
    in: 'IN',
    out: 'OUT'
  },
  tab: {
    Tx: 'Transactions',
    Code: 'Code'
  }
}
