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
            <el-row :gutter="20" class="layout-wrap lg-show">
              <el-col :span="4">
                <div class="layout-left-wrap bg-layout">
                  <ul class="charts-title-wrap">
                    <li @click="showApi(1)" :class="{'current-li':isShow === 1}">
                      <span>{{$t("api.nodepai")}}</span>
                    </li>
                    <li @click="showApi(2)" :class="{'current-li':isShow === 2}">
                      <span>{{$t("api.accountapi")}}</span>
                    </li>
                    <li @click="showApi(3)" :class="{'current-li':isShow === 3}">
                      <span>{{$t("api.blocksapi")}}</span>
                    </li>
                    <li @click="showApi(4)" :class="{'current-li':isShow === 4}">
                      <span>{{$t("api.transactionapi")}}</span>
                    </li>
                    <li @click="showApi(5)" :class="{'current-li':isShow === 5}">
                      <span>{{$t("api.searchapi")}}</span>
                    </li>
                    <li @click="showApi(6)" :class="{'current-li':isShow === 6}">
                      <span>{{$t("api.statapi")}}</span>
                    </li>
                    <li @click="showApi(7)" :class="{'current-li':isShow === 7}">
                      <span>{{$t("api.chartapi")}}</span>
                    </li>
                  </ul>
                </div>
              </el-col>
              <el-col :xs="24" :span="20">
                <div class="layout-right-wrap bg-layout">
                  <div v-show="isShow === 1"><NodeApi></NodeApi></div>
                  <div v-show="isShow === 2"><AccountApi></AccountApi></div>
                  <div v-show="isShow === 3"><BlockApi></BlockApi></div>
                  <div v-show="isShow === 4"><TransactionApi></TransactionApi></div>
                  <div v-show="isShow === 5"><SearchApi></SearchApi></div>
                  <div v-show="isShow === 6"><StatApi></StatApi></div>
                  <div v-show="isShow === 7"><ChartApi></ChartApi></div>
                </div>
              </el-col>
            </el-row>
            <div class="layout-wrap sm-show">
              <div class="layout-right-wrap bg-layout">
                <NodeApi></NodeApi>
                <AccountApi></AccountApi>
                <BlockApi></BlockApi>
                <TransactionApi></TransactionApi>
                <SearchApi></SearchApi>
                <StatApi></StatApi>
                <ChartApi></ChartApi>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '../header'
import Footer from '../footer'
import smHeader from '../sm-header'
import searchInput from '../search-input'

import BlockApi from './blockapi'
import TransactionApi from './transactionapi'
import AccountApi from './accountapi'
import SearchApi from './searchapi'
import StatApi from './statapi'
import NodeApi from './nodeapi'
import ChartApi from './chartapi'

export default {
  data () {
    return {
      isShow: 1
    }
  },
  components: {
    Header,
    smHeader,
    Footer,
    searchInput,

    BlockApi,
    TransactionApi,
    AccountApi,
    SearchApi,
    StatApi,
    NodeApi,
    ChartApi
  },
  methods: {
    showApi (index) {
      this.isShow = index
    }
  }
}
</script>
<style lang="less">
@import "../../assets/css/page.less";
@import "../../assets/css/list.less";
@import "../../assets/css/char.less";
</style>
