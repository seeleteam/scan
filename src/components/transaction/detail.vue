<template>
    <div class="page-wrap">
        <div class="wrap lg-show">
          <Header></Header>
        </div>
        <div class="sm-show page-sm-header-wrap">
          <smHeader></smHeader>
        </div>
        <div class="sm-show sm-search-input-wrap">
          <searchInput></searchInput>
        </div>
        <div class="main-wrap">
          <div class="wrap">
            <TransactionDescribe
              :title="title"
              :content="content"
              :link="link"
            ></TransactionDescribe>
          <div class="ul-wrap">
            <ul class="detail-wrap wrap-pad">
              <li>
                <div class="li-width">{{$t("listHeader.txHash")}}: </div>
                <div class="li-content-width">{{transactionInfo.txHash}}</div>
              </li>
              <li>
                <div class="li-width">{{$t("listHeader.shardnumber")}}: </div>
                <div class="li-content-width">{{transactionInfo.shardnumber}}</div>
              </li>
              <li>
                <div class="li-width">{{$t("listHeader.block")}}: </div>
                <router-link :to="{path: '/block/detail', query: { height: transactionInfo.block, s:transactionInfo.shardnumber }}">
                  <div class="li-content-width li-content-link">{{transactionInfo.block}}</div>
                </router-link>
              </li>
              <!-- <li>
                <div class="li-width">{{$t("listHeader.age")}}: </div>
                <div class="li-content-width">{{transactionInfo.age}}</div>
              </li> -->
              <li>
                <div class="li-width">{{$t("listHeader.from")}}: </div>
                <router-link :to="{path: '/account/detail', query: { address: transactionInfo.from }}">
                  <div class="li-content-width li-content-link">{{transactionInfo.from}}</div>
                </router-link>
              </li>
              <li>
                <div class="li-width">{{$t("listHeader.to")}}: </div>
                <router-link :to="{path: '/account/detail', query: { address: transactionInfo.to }}">
                  <div class="li-content-width li-content-link">{{transactionInfo.to}}</div>
                </router-link>
              </li>
              <li>
                <div class="li-width">{{$t("listHeader.value")}}: </div>
                <div class="li-content-width">{{transactionInfo.value}}</div>
              </li>
              <li>
                <div class="li-width">{{$t("listHeader.txfee")}}: </div>
                <div class="li-content-width">{{transactionInfo.fee}}</div>
              </li>
              <li>
                <div class="li-width">{{$t("listHeader.payload")}}: </div>
                <div class="li-content-width">
                  <el-input type="textarea" :rows="1" v-model="transactionInfo.payload" disabled></el-input>
                </div>
              </li>
            </ul>
          </div>
          </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

import Header from '../header'
import smHeader from '../sm-header'
import searchInput from '../search-input'
import TransactionDescribe from '../describe'
import Footer from '../footer'
export default {
  data () {
    return {
      title: this.$t('navs.transaction'),
      content: '',
      link: this.$t('navs.transaction')
    }
  },
  components: {
    Header,
    smHeader,
    searchInput,
    TransactionDescribe,
    Footer
  },
  mounted () {
    this.getDetail(this.$route.query)
  },
  computed: {
    transactionInfo: {
      get () {
        return this.$store.state.transaction.transactionInfo
      }
    }
  },
  methods: {
    ...mapActions(['getTransactionDetail']),
    getDetail (height) {
      this.getTransactionDetail(height)
    }
  }
}
</script>
<style lang="less">
@import "../../assets/css/page.less";
@import "../../assets/css/detail.less";
.transaction-wrap{
  height: 100%;
}
</style>
