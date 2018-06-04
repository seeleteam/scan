import request from '../untils/request'
import config from '../untils/config'

const { API } = config
const { nodesUrl, nodeUrl, nodemapUrl } = API

async function nodeList (data) {
  return request({
    url: nodesUrl,
    method: 'GET',
    data
  })
}
async function nodeDetail (data) {
  return request({
    url: nodeUrl,
    method: 'GET',
    data
  })
}
async function nodeMapList (data) {
  return request({
    url: nodemapUrl,
    method: 'GET',
    data
  })
}

export {
  nodeList,
  nodeDetail,
  nodeMapList
}
