import axios from 'axios'
import { Loading, MessageBox } from 'element-ui'

// http request interceptor
var loadinginstace
axios.interceptors.request.use(config => {
  // element ui Loading
  loadinginstace = Loading.service({
    lock: true,
    text: '',
    spinner: 'loadingIcon',
    background: 'rgba(255, 255, 255, 0.7)'
  })
  return config
}, error => {
  MessageBox({
    title: 'Tips',
    message: 'Load timeout',
    callback: action => {
      loadinginstace.close()
    }
  })
  return Promise.reject(error)
})
// http Response interceptor
axios.interceptors.response.use(data => {
  loadinginstace.close()
  return data
}, error => {
  MessageBox({
    title: 'Tips',
    message: 'request was aborted',
    callback: action => {
      loadinginstace.close()
    }
  })
  return Promise.reject(error)
})

export default axios
