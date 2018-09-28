<template>
  <div class="page-wrap">
    <Header></Header>
    <div class="sm-show page-sm-header-wrap">
      <smHeader></smHeader>
    </div>
    <div class="sm-show sm-search-input-wrap">
      <searchInput></searchInput>
    </div>
    <div class="main-wrap">
      <div class="wrap">
        <div class="describe-title-wrap">
          <vue-particles color="#fff" :particleOpacity="0.7" :particlesNumber="80" shapeType="circle" :particleSize="4" linesColor="#000" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push" class="particles"></vue-particles>
          <span class="title">{{$t('navs.statChar')}}</span>
          <ul class="link-wrap">
            <li>
              <a href="/">{{$t("navs.home")}}</a>
            </li>
            <li>
              <i class="el-icon-arrow-right"></i>
            </li>
            <li class="current">{{$t('navs.statChar')}}</li>
          </ul>
        </div>
        <el-row :gutter="20" class="layout-wrap lg-show">
          <el-col :span="5" class="lg-show">
            <div class="layout-left-wrap bg-layout">
              <ul class="charts-title-wrap">
                <li @click="showChar(1)" :class="{'current-li':isShow === 1}">
                  <img src="../../assets/imgs/statChar/Nodes.png" alt="Nodes">
                  <span class="charts-title">{{$t("char.nodes")}}</span>
                </li>
                <li @click="showChar(2)" :class="{'current-li':isShow === 2}">
                  <img src="../../assets/imgs/statChar/Network.png" alt="Network">
                  <span class="charts-title">{{$t("char.network")}}</span>
                </li>
                <li @click="showChar(3)" :class="{'current-li':isShow === 3}">
                  <img src="../../assets/imgs/statChar/Transactions.png" alt="Transactions">
                  <span class="charts-title">{{$t("char.transactions")}}</span>
                </li>
                <li @click="showChar(4)" :class="{'current-li':isShow === 4}">
                  <img src="../../assets/imgs/statChar/Blockchain.png" alt="Blockchain">
                  <span class="charts-title">{{$t("char.blockchain")}}</span>
                </li>
                <li @click="showChar(5)" :class="{'current-li':isShow === 5}">
                  <img src="../../assets/imgs/statChar/Accounts.png" alt="Accounts">
                  <span class="charts-title">{{$t("char.accounts")}}</span>
                </li>
                <li @click="showChar(6)" :class="{'current-li':isShow === 6}">
                  <img src="../../assets/imgs/statChar/Contracts.png" alt="Contracts">
                  <span class="charts-title">{{$t("char.contracts")}}</span>
                </li>
                <li @click="showChar(7)" :class="{'current-li':isShow === 7}">
                  <img src="../../assets/imgs/statChar/Mining.png" alt="Mining">
                  <span class="charts-title">{{$t("char.mining")}}</span>
                </li>
                <!-- <li  @click="showChar(8)" :class="{'current-li':isShow === 8}">
                      <img src="../../assets/imgs/statChar/Macket.png" alt="Macket">
                      <span class="charts-title">{{$t("char.macket")}}</span>
                    </li> -->
              </ul>
            </div>
          </el-col>
          <el-col :span="19">
            <div class="layout-right-wrap bg-layout">
              <div v-show="isShow === 1">
                <Nodes></Nodes>
              </div>
              <div v-show="isShow === 2">
                <Network></Network>
              </div>
              <div v-show="isShow === 3">
                <Transaction></Transaction>
              </div>
              <div v-show="isShow === 4">
                <Block></Block>
              </div>
              <div v-show="isShow === 5">
                <Account></Account>
              </div>
              <div v-show="isShow === 6">
                <Contract></Contract>
              </div>
              <div v-show="isShow === 7">
                <Miner></Miner>
              </div>
              <div v-show="isShow === 8">
                <Market></Market>
              </div>
            </div>
          </el-col>
        </el-row>
        <div class="layout-wrap sm-show">
          <div class="layout-right-wrap bg-layout">
            <el-collapse v-model="activeNames">
              <el-collapse-item name="1">
                <template slot="title">
                  <div class="char-collapse-wrap">
                    <img src="../../assets/imgs/statChar/Nodes.png" alt="Nodes">
                    <span>{{$t('char.nodes')}}</span>
                  </div>
                </template>
                <Nodes></Nodes>
              </el-collapse-item>
              <el-collapse-item name="2">
                <template slot="title">
                  <div class="char-collapse-wrap">
                    <img src="../../assets/imgs/statChar/Network.png" alt="Network">
                    <span>{{$t('char.network')}}</span>
                  </div>
                </template>
                <Network></Network>
              </el-collapse-item>
              <el-collapse-item name="3">
                <template slot="title">
                  <div class="char-collapse-wrap">
                    <img src="../../assets/imgs/statChar/Transactions.png" alt="Transactions">
                    <span>{{$t('char.transactions')}}</span>
                  </div>
                </template>
                <Transaction></Transaction>
              </el-collapse-item>
              <el-collapse-item name="4">
                <template slot="title">
                  <div class="char-collapse-wrap">
                    <img src="../../assets/imgs/statChar/Blockchain.png" alt="Blockchain">
                    <span>{{$t('char.blockchain')}}</span>
                  </div>
                </template>
                <Block></Block>
              </el-collapse-item>
              <el-collapse-item name="5">
                <template slot="title">
                  <div class="char-collapse-wrap">
                    <img src="../../assets/imgs/statChar/Accounts.png" alt="Accounts">
                    <span>{{$t('char.accounts')}}</span>
                  </div>
                </template>
                <Account></Account>
              </el-collapse-item>
              <el-collapse-item name="6">
                <template slot="title">
                  <div class="char-collapse-wrap">
                    <img src="../../assets/imgs/statChar/Contracts.png" alt="Contracts">
                    <span>{{$t('char.contracts')}}</span>
                  </div>
                </template>
                <Contract></Contract>
              </el-collapse-item>
              <el-collapse-item name="7">
                <template slot="title">
                  <div class="char-collapse-wrap">
                    <img src="../../assets/imgs/statChar/Mining.png" alt="Mining">
                    <span>{{$t('char.mining')}}</span>
                  </div>
                </template>
                <Miner></Miner>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
// import { mapActions } from 'vuex'
import Header from '../header'
import smHeader from '../sm-header'
import searchInput from '../search-input'
import Footer from '../footer'

import Nodes from './nodes'
import Network from './network'
import Transaction from './transaction'
import Block from './block'
import Account from './account'
import Miner from './miner'
import Contract from './contracts'
import Market from './market'
export default {
  data () {
    return {
      tabPosition: 'left',
      content: '',
      isShow: 1,
      activeNames: ['1', '2', '3', '4', '5', '6', '7', '8']
    }
  },
  components: {
    Header,
    smHeader,
    searchInput,
    Footer,

    Nodes,
    Network,
    Transaction,
    Block,
    Account,
    Contract,
    Miner,
    Market
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    showChar (index) {
      this.isShow = index
    }
  }
}
</script>
<style lang="less">
@import "../../assets/css/page.less";
@import "../../assets/css/describe.less";
@import "../../assets/css/char.less";
</style>
