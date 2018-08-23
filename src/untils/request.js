import axios from 'axios'
import qs from 'qs'
import jsonp from 'jsonp'
import lodash from 'lodash'
import pathToRegexp from 'path-to-regexp'
import { YQL, CORS } from './config'
import { Message } from 'element-ui'

const fetch = (options) => {
  let {
    method = 'get',
    data,
    fetchType,
    url
  } = options
  const cloneData = lodash.cloneDeep(data)

  try {
    let domin = ''
    if (url.match(/[a-zA-Z]+:\/\/[^/]*/)) {
      domin = url.match(/[a-zA-Z]+:\/\/[^/]*/)[0]
      url = url.slice(domin.length)
    }
    const match = pathToRegexp.parse(url)
    url = pathToRegexp.compile(url)(data)
    for (const item of match) {
      if (item instanceof Object && item.name in cloneData) {
        delete cloneData[item.name]
      }
    }
    url = domin + url
  } catch (e) {
    throw e
  }
  if (fetchType === 'JSONP') {
    return new Promise((resolve, reject) => {
      jsonp(url, {
        param: `${qs.stringify(data)}&callback`,
        name: `jsonp_${new Date().getTime()}`
      }, (err, result) => {
        if (err) {
          reject(err)
        }
        resolve({ statusText: 'OK', status: 200, data: result })
      })
    })
  } else if (fetchType === 'YQL') {
    url = `${options.url}?${encodeURIComponent(qs.stringify(options.data))}&format=json`
    data = null
  }
  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, {
        params: cloneData
      })
    case 'delete':
      return axios.delete(url, {
        data: cloneData
      })
    case 'post':
      return axios.post(url, qs.stringify(cloneData)) // querystring
    case 'put':
      return axios.put(url, qs.stringify(cloneData)) // querystring
    case 'patch':
      return axios.patch(url, cloneData)
    default:
      return axios(options)
  }
}

export default function request (options) {
  if (options.url && options.url.indexOf('//') > -1) {
    const origin = `${options.url.split('//')[0]}//${options.url.split('//')[1].split('/')[0]}`
    if (window.location.origin !== origin) {
      if (CORS && CORS.indexOf(origin) > -1) {
        options.fetchType = 'CORS'
      } else if (YQL && YQL.indexOf(origin) > -1) {
        options.fetchType = 'YQL'
      } else {
        options.fetchType = 'JSONP'
      }
    }
  }
  return fetch(options)
    .then((response) => {
      const { statusText, status } = response
      let data = options.fetchType === 'YQL' ? response.data.query.results.json : response.data
      if (data instanceof Array) {
        data = {
          list: data
        }
      }
      return {
        success: true,
        message: statusText,
        statusCode: status,
        ...data
      }
    })
    .catch((error) => {
      const { response } = error
      let message
      let statusCode
      if (response && response instanceof Object) {
        const { data, statusText } = response
        statusCode = response.statusText
        message = data.text || statusText
      } else {
        statusCode = 600
        message = error.message || 'Network Error'
      }
      Message({ message, type: 'error' })
      return { success: false, statusCode, message }
    })
}
