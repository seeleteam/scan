import request from '../untils/request'
import config from '../untils/config'

const { API } = config
const { pendingtxsUrl, pendingtxUrl } = API

async function pendingtxsList (data) {
  return request({
    url: pendingtxsUrl,
    method: 'GET',
    data
  })
}
async function pendingtxsDetail (data) {
  return request({
    url: pendingtxUrl,
    method: 'GET',
    data
  })
}

export {
  pendingtxsList,
  pendingtxsDetail
}
