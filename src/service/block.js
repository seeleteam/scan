import request from '../untils/request'
import config from '../untils/config'

const { API } = config
const { blocksUrl, blocksDetailUrl } = API

async function blocksList (data) {
  return request({
    url: blocksUrl,
    method: 'GET',
    data
  })
}
async function blocksDetail (data) {
  return request({
    url: blocksDetailUrl,
    method: 'GET',
    data
  })
}

export {
  blocksList,
  blocksDetail
}
