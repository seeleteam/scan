'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  NEW_WORK_ID: 2,
  SCAN_SHARD: 20,
  // api.seelescan.net
  SCAN_API_URL: '"http://106.75.77.247:3002"',
  SCAN_API_PATH: '"/api/v1"'
})
