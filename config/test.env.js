'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  NEW_WORK_ID: 2,
  SCAN_API_URL: '"http://localhost:3003"',
  SCAN_API_PATH: '"/api/v1"'
})
