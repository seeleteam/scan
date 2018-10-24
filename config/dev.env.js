'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  NEW_WORK_ID: 2,
  SCAN_SHARD: 20,
  SCAN_API_URL: '"http://106.75.86.27:8888"',   // https://api.seelescan.net
  SCAN_API_PATH: '"/api/v1"'
})