// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Tabs,
  TabPane,
  Table,
  TableColumn,
  Pagination,
  Collapse,
  CollapseItem,
  Row,
  Col,
  Container,
  Aside,
  Popover,
  Option,
  OptionGroup,
  Input,
  Button,
  Dialog,
  Select,
  Radio,
  RadioGroup
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import VueI18n from 'vue-i18n'
import vuex from 'vuex'
import axios from './untils/http'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

Vue.use(vuex)
Vue.use(VueI18n)

Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Popover)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Input)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.config.productionTip = false

// function getLocalLanguage() {
//   var localLanguage = navigator.language
//   var resLang = 'en'
//   if (localLanguage) {
//     var langArr = localLanguage.split('-')
//     if (langArr.length > 0) {
//       resLang = langArr[0]
//     }
//   }
//   return resLang
// }

const i18n = new VueI18n({
  // Change default lang settings from zh_cn to us_en
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
  axios,
  components: { App },
  template: '<app/>'
})
