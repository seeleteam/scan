import request from '../untils/request'
import config from '../untils/config'

const { API } = config
const { contractsUrl, contractUrl } = API

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

export {
  contractList,
  contractDetail
}
