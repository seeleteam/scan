// Note: exports must be exports, not exports, otherwise an error will be reported. The error message is not a string in the following
module.exports = {
  blockExplore: '区块浏览器',
  message: {
    noData: '暂无数据',
    noPrev: '无上一区块',
    noNext: '无下一区块'
  },
  placeholder: {
    searchInput: '按 账户地址 / 交易哈希 / 区块哈希 / 合约地址等 搜索'
  },
  network: {
    title: '网络类型',
    main: '主网',
    test: '测试网'
  },
  language: {
    title: '语言切换',
    zh: '中文',
    en: '英文'
  },
  button: {
    cancel: '取 消',
    confirm: '确 定',
    prev: '上一区块',
    next: '下一区块'
  },
  navs: {
    home: '首页',
    node: '节点',
    account: '账户',
    block: '区块',
    debt: '债务',
    tx: '交易',
    transaction: '链上交易',
    pendingtxs: '待定交易',
    contract: '合约',
    verifyContract: '验证合约',
    token: '代币',
    statChar: '统计图',
    api: 'API',
    accountTx: '账户交易列表',
    accountAddress: '账户地址',
    contractTx: '合约交易列表',
    contractAddress: '合约地址'
  },
  blockStat: {
    blocksCount: '区块总数',
    transactionsCount: '交易总数',
    accountsCount: '账户总数',
    contractsCount: '合约总数',
    bestBlock: '最新区块',
    lastBlock: '上个区块',
    avgBLockTime: '平均区块时间',
    tranSactions: '交易数',
    activeNodes: '活跃节点',
    hashRate: '哈希速率',
    networkDifficulty: '网络难度'
  },
  listHeader: {
    shardnumber: '分片',
    rank: '序号',
    address: '地址',
    balance: '余额',
    percentage: '百分比',
    txCount: '交易数',
    debtcount: '债务数',
    listDescription: '账户交易列表 (仅展示最近的25条记录，共获取',

    txHash: '交易哈希',
    debtHash: '债务哈希',
    age: '年龄',
    from: '来源',
    to: '去向',
    value: '值',
    token: '代币',

    height: '高度',
    txn: '交易数',
    uncles: '叔伯块',
    miner: '挖矿工',
    gasLimit: '燃料限制',
    difficulty: '难度',
    hashRate: '哈希速率',
    reward: '奖励',

    contractName: '合约名称',
    compiler: '编译',
    version: '版本',
    settings: '设置',
    dateVerified: '数据',
    sourceCode: '源码',

    block: '区块',
    headHash: '哈希',
    nonce: '一次有效随机串',
    preBlockHash: '上一区块哈希',
    txcount: '交易数',

    amount: 'amountX',
    hash: '哈希',
    inorout: '转入/转出',
    txfee: '手续费 (Fan)',

    nodeRank: '排名',
    nodeRegion: '国家',
    nodeNumber: '数量',

    nodeId: '节点ID',
    host: '节点地址',
    port: '节点端口',
    country: '国家',
    region: '省份',
    city: '城市',
    client: '客户端',
    caps: '协议',
    lastSeen: '最后一次更新',

    payload: '负载',
    contractCreationCode: '合约创建编码'
  },
  char: {
    accounts: '账户统计图',
    blockchain: '区块链统计图',
    contracts: '合约统计图',
    macket: '市场统计图',
    mining: '挖矿者统计图',
    network: '网络统计图',
    nodes: '节点统计图',
    transactions: '交易统计图'
  },
  statcharts: {
    common: {
      loading: '正在努力的读取数据中...',
      shardTag: '分片',
      shardAll: '所有分片'
    },
    charts: {
      dataView: '数据视图',
      restore: '还原',
      save: '保存为图片',
      close: '关闭',
      refresh: '刷新',
      zoom: '区域缩放',
      back: '区域缩放还原',
      line: '切换为折线图',
      bar: '切换为柱状图',
      pie: '切换为饼图',
      funnel: '切换为漏斗图'
    },
    node: {
      nodesByShard: '按分片号分组统计节点数',
      nodesByShardTipname: '节点数'
    },
    network: {
      difficultyName: 'seele 挖矿难度趋势图',
      difficultyXname: '日期',
      difficultyYname: 'seele 挖矿难度',
      difficultyAverage: 'seele 挖矿平均难度',
      hashrateName: 'seele 网络哈希速率',
      hashrateXname: '日期',
      hashrateYname: '网络哈希速率',
      hashrateAverage: '日平均网络哈希速率'
    },
    account: {
      growthName: '账户增长趋势图',
      growthXname: '日期',
      growthYname: '账户数量',
      growthTotal: '账户总量',
      growthIncrease: '账户日增长量'
    },
    transaction: {
      historyTxName: 'Seele 历史交易量趋势图',
      historyTxXname: '日期',
      historyTxYname: '历史交易量',
      historyTipTotal: '总交易量',
      historyTipAvgDifficulty: '平均难度变化趋势图',
      historyTipHashRate: '网络哈希效率',
      historyTipAvgBlockTime: '平均区块时间',
      historyTipTotalBlockCount: '区块总数',
      historyTipNewAddressSeen: '新增账户'
    },
    block: {
      avgTimeName: '区块平均时间趋势图',
      avgTimeXname: '日期',
      avgTimeYname: '区块平均时间',
      avgTimeTipBlockTime: '区块时间 (秒)',
      countName: '区块数量增长趋势图',
      countXname: '日期',
      countYname: '区块数量',
      countTotal: '区块总量',
      countTotalDailyRewards: '每日区块总奖赏'
    },
    contract: {

    },
    miner: {
      minerByBlockName: '按区块数统计挖矿者排名',
      minerByBlockTipname: '挖出区块数'
    },
    market: {

    }
  },
  node: {
    nodeTitle: '个节点',
    nodeStat: '按国家分组统计',
    nodeMap: '节点分布图',
    nodeRank: '排名',
    nodeCountry: '国家',
    nodeCount: '节点数',
    nodeMapTitle: 'Seele节点分布',
    nodeMapFoot: '节点分布',
    nodeTip: '节点数'
  },
  api: {
    blocksapi: '区块 API',
    transactionapi: '交易 API',
    accountapi: '账户 API',
    searchapi: '搜索 API',
    statapi: '统计 API',
    nodepai: '节点 API',
    chartapi: '统计图表 API'
  },
  forBlock: '所在区块',
  charMark: {
    node: {
      shardTitle: '分片节点数统计图',
      shardContent: '按节点分片分组统计节点数'
    },
    miner: {
      title: '矿工排名统计图',
      content: '按挖出区块数统计排名前15的矿工'
    },
    account: {
      title: '账户增长趋势图',
      content: '统计账户地址增长趋势'
    },
    block: {
      countTitle: '区块数量增长趋势图',
      countContent: '统计区块数量以及增长趋势',
      timeTitle: '区块平均时间增长趋势图',
      timeContent: '统计历史区块的区块时间'
    },
    transactions: {
      title: '历史交易增长趋势图',
      content: '统计交易数量以及增长趋势'
    },
    network: {
      hashTitle: '哈希速率增长趋势图',
      hashContent: '统计网络哈希速率以及增长趋势',
      diffTitle: '区块难度增长趋势图',
      diffContent: '统计区块难度以及增长趋势'
    }
  },
  tx: {
    in: '转入',
    out: '转出'
  },
  tab: {
    Tx: '交易列表',
    Code: '编码'
  }
}
