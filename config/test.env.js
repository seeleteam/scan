'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  NEW_WORK_ID: 2,
  SCAN_API_URL: '"http://106.75.171.117:3003"',
  SCAN_API_PATH: '"/api/v1"'
})
