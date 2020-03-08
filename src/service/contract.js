import request from '../untils/request'
import config from '../untils/config'

const { API } = config
const { contractsUrl, contractUrl, verifyContractUrl } = API
async function contractList (data) {
  return request({
    url: contractsUrl,
    method: 'GET',
    data
  })
}
async function contractDetail (data) {
  return request({
    url: contractUrl,
    method: 'GET',
    data
  })
}
async function verifyRequest (data) {
  return request({
    url: verifyContractUrl,
    method: 'GET',
    data
  })
}
function compileContract (sourceCode) {
  var wrapper = require('solc/wrapper')
  var solc = wrapper(window.Module)
  var input = {
    language: 'Solidity',
    sources: {
      'mortal': {
        content: sourceCode
      }
    },
    settings: {
      metadata: {
        // Use only literal content and not URLs (false by default)
        useLiteralContent: true
      },
      outputSelection: {
        '*': {
          '*': ['*']
        }
      }
    }
  }
  var compileResult = solc.compile(JSON.stringify(input))
  var output = JSON.parse(compileResult)
  return output
}

export {
  contractList,
  contractDetail,
  compileContract,
  verifyRequest
}
