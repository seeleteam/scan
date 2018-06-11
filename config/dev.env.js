'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  NEW_WORK_ID: 2,
  SCAN_API_URL: '"http://106.75.171.117:3003"',
  SCAN_API_PATH: '"/api/v1"'
})
