// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import VueI18n from 'vue-i18n'
import vuex from 'vuex'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.use(vuex)
Vue.use(VueI18n)
Vue.use(ElementUI)
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    'zh': require('./locale/zh'),
    'en': require('./locale/en')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
