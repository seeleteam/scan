import request from '../untils/request'
import config from '../untils/config'

const { API } = config
const { debtUrl, debtDetailUrl } = API

async function debtList (data) {
  return request({
    url: debtUrl,
    method: 'GET',
    data
  })
}
async function debtDetail (data) {
  return request({
    url: debtDetailUrl,
    method: 'GET',
    data
  })
}

export {
  debtList,
  debtDetail
}
