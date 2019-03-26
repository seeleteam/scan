'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  NEW_WORK_ID: 2,
  SCAN_SHARD: 4,
  SCAN_API_URL: '"https://api.seelescan.net"',   // http://106.75.86.27:8888
  SCAN_API_PATH: '"/api/v1"'
})