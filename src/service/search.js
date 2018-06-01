import request from '../untils/request'
import config from '../untils/config'

const { API } = config
const { searchUrl } = API

async function search (data) {
  return request({
    url: searchUrl,
    method: 'GET',
    data: {
      content: data
    }
  })
}

export {
  search
}
