import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/index'
import account from '@/components/account/index'
import accountDetail from '@/components/account/detail'
import accountTxList from '@/components/account/tx-list'
import contract from '@/components/contract/index'
import contractDetail from '@/components/contract/detail'
import contractTxList from '@/components/contract/tx-list'
import transaction from '@/components/transaction/index'
import transactionDetail from '@/components/transaction/detail'
import pendingtxs from '@/components/pendingtxs/index'
import pendingtxsDetail from '@/components/pendingtxs/detail'
import block from '@/components/block/index'
import blockDetail from '@/components/block/detail'
import node from '@/components/node/index'
import nodemap from '@/components/node/nodemap'
import nodeDetail from '@/components/node/detail'
import statChar from '@/components/stat-char'
import api from '@/components/api'

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
