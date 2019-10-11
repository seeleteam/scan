var common = require('lodash')

/**
 * @method formatNumber
 * @param {number} data
 * @returns {string}
 * @desc
 */
function formatNumber (data) {
  if (!common.isUndefined(data) && data !== null) {
    return data.toString().replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
  }
}

/**
 * @method getTime
 * @param {number} data
 * @returns {number}
 * @desc
 */
function getTime (date) {
  let myDate = common.now()
  var result = (myDate - date) / 1000
  return result.toFixed(0)
}

/**
 * @method formatTime
 * @param {number} data time value(default data unit is ms)
 * @returns {string}  <br/>
 * ex:
 *    xx ms
 *    xx s
 *    xx min
 *    xx h
 *    xx days
 * @desc
 */
function formatTime (data) {
  var result = 0

  if (common.isUndefined(data)) {
    data = 0
  }

  if (data < 1000) {
    return data + ' ms'
  }

  if (data < 1000 * 60) {
    result = data / 1000
    return result.toFixed(2) + ' s'
  }

  if (data < 1000 * 60 * 60) {
    result = data / 1000 / 60
    return Math.round(result) + ' min'
  }

  if (data < 1000 * 60 * 60 * 24) {
    result = data / 1000 / 60 / 60
    return Math.round(result) + ' h'
  }

  result = data / 1000 / 60 / 60 / 24
  return Math.round(result) + ' days'
}

/**
 * @method formatAvgBlockTime
 * @param {number} data time value(default data unit is ms)
 * @returns {string}  <br/>
 * ex:
 *    xx ms
 *    xx s
 *    xx min
 *    xx h
 *    xx days
 * @desc
 */
function formatAvgBlockTime (data) {
  // deal problem: json auto change float type to string type
  // avgBlockTime has been multi 1000
  data = data / 1000
  return formatTime(data)
}

/**
 * @method formatCount
 * @param {number} data
 * @returns {string}  <br/>
 * ex:
 *    xx K
 *    xx M
 *    xx G
 *    xx T
 * @desc
 */
function formatCount (data) {
  var result = 0
  var unit = ''

  if (common.isUndefined(data)) {
    result = data
    unit = ''
    return result + ' ' + unit
  }

  if (data < 1000) {
    result = data
    unit = ''
    return result + ' ' + unit
  }

  if (data >= 1000 && data < Math.pow(1000, 2)) {
    result = data / 1000
    unit = 'K'
  }

  if (data >= Math.pow(1000, 2) && data < Math.pow(1000, 3)) {
    result = data / Math.pow(1000, 2)
    unit = 'M'
  }

  if (data >= Math.pow(1000, 3) && data < Math.pow(1000, 4)) {
    result = data / Math.pow(1000, 3)
    unit = 'G'
  }

  if (data >= Math.pow(1000, 4) && data < Math.pow(1000, 5)) {
    result = data / Math.pow(1000, 4)
    unit = 'T'
  }

  return result.toFixed(2) + ' ' + unit
}

/**
 * @method formatActiveNodeInfoClass
 * @param {number} activeNum
 * @param {number} totalNum
 * @returns {string}  <br/>
 * ex:
 *    text-danger
 *    text-success
 *    text-info
 *    text-warning
 * @desc
 */
function formatActiveNodeInfoClass (activeNum, totalNum) {
  if (common.isUndefined(totalNum) || totalNum === 0) {
    return 'text-danger'
  }
  var ratio = activeNum / totalNum

  if (ratio >= 0.9) {
    return 'text-success'
  }

  if (ratio >= 0.75) {
    return 'text-info'
  }

  if (ratio >= 0.5) {
    return 'text-warning'
  }

  return 'text-danger'
}

/**
 * @method formatNodeLatency
 * @param {number} latency
 * @param {number} state
 * @returns {string}  <br/>
 * @desc
 */
function formatNodeLatency (latency, state) {
  if (state === 0) {
    return 'offline'
  } else {
    return latency + ' ms'
  }
}

/**
 * @method formatNodeLatencyCLass
 * @param {number} latency
 * @param {number} state
 * @returns {string}  <br/>
 * ex:
 *    text-danger
 *    text-success
 *    text-info
 *    text-warning
 * @desc
 */
function formatNodeLatencyCLass (latency, state) {
  if (state === 0) {
    return 'text-danger'
  }
  if (latency <= 100) {
    return 'text-success'
  }
  if (latency <= 1000) {
    return 'text-warning'
  }
  return 'text-danger'
}

/**
 * @method formatDifficulty
 * @param {number} difficulty
 * @returns {string}  <br/>
 * ex:
 *    xx KH
 *    xx MH
 *    xx GH
 *    xx TH
 * @desc
 */
function formatDifficulty (difficulty) {
  var result = 0
  var unit = 'K'
  if (difficulty !== 0 && difficulty < 1000) {
    result = difficulty
    unit = ''
  }
  if (difficulty >= 1000 && difficulty < Math.pow(1000, 2)) {
    result = difficulty / 1000
    unit = 'K'
  }
  if (difficulty >= Math.pow(1000, 2) && difficulty < Math.pow(1000, 3)) {
    result = difficulty / Math.pow(1000, 2)
    unit = 'M'
  }
  if (difficulty >= Math.pow(1000, 3) && difficulty < Math.pow(1000, 4)) {
    result = difficulty / Math.pow(1000, 3)
    unit = 'G'
  }
  if (difficulty >= Math.pow(1000, 4) && difficulty < Math.pow(1000, 5)) {
    result = difficulty / Math.pow(1000, 4)
    unit = 'T'
  }
  return (parseFloat(result).toFixed(2)) + unit + 'H'
}

/**
 * @method formatAvgNetHashRate
 * @param {number} avgNetHashRate
 * @returns {string}  <br/>
 * ex:
 *    xx KH/s
 *    xx MH/s
 *    xx GH/s
 *    xx TH/s
 * @desc
 */
function formatAvgNetHashRate (avgNetHashRate) {
  // deal problem: json auto change float type to string type
  // avgNetHashRate has been multi 1000
  avgNetHashRate = avgNetHashRate / 1000
  var result = 0
  var unit = 'K'
  if (avgNetHashRate !== 0 && avgNetHashRate < 1000) {
    result = avgNetHashRate
    unit = ''
  }
  if (avgNetHashRate >= 1000 && avgNetHashRate < Math.pow(1000, 2)) {
    result = avgNetHashRate / 1000
    unit = 'K'
  }
  if (avgNetHashRate >= Math.pow(1000, 2) && avgNetHashRate < Math.pow(1000, 3)) {
    result = avgNetHashRate / Math.pow(1000, 2)
    unit = 'M'
  }
  if (avgNetHashRate >= Math.pow(1000, 3) && avgNetHashRate < Math.pow(1000, 4)) {
    result = avgNetHashRate / Math.pow(1000, 3)
    unit = 'G'
  }
  if (avgNetHashRate >= Math.pow(1000, 4) && avgNetHashRate < Math.pow(1000, 5)) {
    result = avgNetHashRate / Math.pow(1000, 4)
    unit = 'T'
  }
  return (parseFloat(result).toFixed(2)) + unit + 'H/s'
}

/**
 * @method formatNodeGeo
 * @param {object} nodeGeo
 * @returns {string}  <br/>
 * @desc
 */
function formatNodeGeo (nodeGeo) {
  var result = ''
  if (common.isUndefined(nodeGeo)) {
    return result
  }
  if (nodeGeo.continentCode !== '' || nodeGeo.countryCode !== '' || nodeGeo.regionCode !== '') {
    result = nodeGeo.continentCode + '/' + nodeGeo.countryCode + '/' + nodeGeo.regionCode
  }
  return result
}

/**
 * @method formatNodePercent
 * @param {number} nodeCount
 * @param {number} nodePercent
 * @returns {string}  <br/>
 * @desc
 */
function formatNodePercent (nodeCount, nodePercent) {
  var result = '0 (0%)'
  if (common.isUndefined(nodeCount)) {
    nodeCount = 0
  }
  if (common.isUndefined(nodePercent)) {
    nodePercent = 0
  }
  result = nodeCount + ' (' + nodePercent.toFixed(2) + '%)'
  return result
}

function checkTime (i) {
  if (i < 10) {
    i = '0' + i
  }
  return i
}

/**
 * @method formatDateFromTimestamps
 * @param {number} timestamps
 * @returns {string}  <br/>
 * @desc
 */
function formatDateFromTimestamps (timestamps) {
  if (common.isUndefined(timestamps) || typeof (timestamps) !== 'number') {
    return ''
  }
  var strTimestamps = timestamps.toString()
  if (strTimestamps.length === 10) {
    timestamps = timestamps * 1000
  }
  var date = new Date(timestamps)
  var Y = date.getFullYear() + '-'
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  var D = checkTime(date.getDate()) + ' '
  var h = checkTime(date.getHours()) + ':'
  var m = checkTime(date.getMinutes()) + ':'
  var s = checkTime(date.getSeconds())
  return Y + M + D + h + m + s
}

/**
 * @method formatAccountPercent
 * @param {number} value
 * @returns {string}  <br/>
 * @desc
 */
function formatAccountPercent (value) {
  var retStr = '0'
  if (common.isUndefined(value) || value < 0.00000001) {
    return retStr + '%'
  }
  retStr = value.toFixed(8)
  return retStr + '%'
}
/**
 * @method filtersAd
 * @param {string} value
 * @returns {boolean}  <br/>
 * @desc
 */
const address = '0x0000000000000000000000000000000000000000'
function filtersAd (value) {
  if (value === address || value === '') {
    return false
  } else {
    return true
  }
}
function formatAd (params) {
  if (params[0]) {
    if (params[0] === address) {
      return 'Miner Reward'
    } else {
      return params[0]
    }
  } else {
    if (params[1] === 'to') {
      return 'Contract Creation'
    } else if (params[1] === 'from') {
      return 'Miner Reward'
    }
  }
}
export {
  formatNumber,
  getTime,
  formatTime,
  formatCount,
  formatActiveNodeInfoClass,
  formatNodeLatency,
  formatNodeLatencyCLass,
  formatDifficulty,
  formatAvgNetHashRate,
  formatNodeGeo,
  formatAvgBlockTime,
  formatNodePercent,
  formatDateFromTimestamps,
  formatAccountPercent,
  filtersAd,
  formatAd
}
