import request from '../untils/request'
import config from '../untils/config'

const { API } = config
const { txsUrl, txUrl } = API

async function txList (data) {
  return request({
    url: txsUrl,
    method: 'GET',
    data
  })
}
async function txDetail (data) {
  return request({
    url: txUrl,
    method: 'GET',
    data
  })
}

export {
  txList,
  txDetail
}
