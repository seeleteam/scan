import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('@/components/home/index')
const account = () => import('@/components/account/index')
const accountDetail = () => import('@/components/account/detail')
const accountTxList = () => import('@/components/account/tx-list')
const contract = () => import('@/components/contract/index')
const contractDetail = () => import('@/components/contract/detail')
const contractTxList = () => import('@/components/contract/tx-list')
const transaction = () => import('@/components/transaction/index')
const transactionDetail = () => import('@/components/transaction/detail')
const pendingtxs = () => import('@/components/pendingtxs/index')
const pendingtxsDetail = () => import('@/components/pendingtxs/detail')
const block = () => import('@/components/block/index')
const blockDetail = () => import('@/components/block/detail')
const node = () => import('@/components/node/index')
const nodemap = () => import('@/components/node/nodemap')
const nodeDetail = () => import('@/components/node/detail')
const statChar = () => import('@/components/stat-char')
const api = () => import('@/components/api')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/account',
      name: 'account',
      component: account
    },
    {
      path: '/account/detail',
      name: 'accountDetail',
      component: accountDetail
    },
    {
      path: '/account/txlist',
      name: 'accountTxList',
      component: accountTxList
    },
    {
      path: '/contract',
      name: 'contract',
      component: contract
    },
    {
      path: '/contract/detail',
      name: 'contractDetail',
      component: contractDetail
    },
    {
      path: '/contract/txList',
      name: 'contractTxList',
      component: contractTxList
    },
    {
      path: '/nodemap',
      name: 'nodemap',
      component: nodemap
    },
    {
      path: '/node',
      name: 'node',
      component: node
    },
    {
      path: '/node/detail',
      name: 'nodeDetail',
      component: nodeDetail
    },
    {
      path: '/transaction',
      name: 'transaction',
      component: transaction
    },
    {
      path: '/transaction/detail',
      name: 'transactionDetail',
      component: transactionDetail
    },
    {
      path: '/pendingtxs',
      name: 'pendingtxs',
      component: pendingtxs
    },
    {
      path: '/pendingtxs/detail',
      name: 'pendingtxsDetail',
      component: pendingtxsDetail
    },
    {
      path: '/block',
      name: 'block',
      component: block
    },
    {
      path: '/block/detail',
      name: 'blockDetail',
      component: blockDetail
    },
    {
      path: '/statChar',
      name: 'statChar',
      component: statChar
    },
    {
      path: '/api',
      name: 'api',
      component: api
    }
  ]
})
