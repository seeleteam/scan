import request from '../untils/request'
import config from '../untils/config'

const { API } = config
const { accountsUrl, accountUrl } = API

async function accountList (data) {
  return request({
    url: accountsUrl,
    method: 'GET',
    data
  })
}
async function accountDetail (data) {
  return request({
    url: accountUrl,
    method: 'GET',
    data
  })
}

export {
  accountList,
  accountDetail
}
