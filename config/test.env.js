'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  NEW_WORK_ID: 2,
  SCAN_SHARD: 4,
  SCAN_API_URL: '"https://api.seelescan.net"',   // http://106.75.86.27:8888
  SCAN_API_PATH: '"/api/v1"'
})
