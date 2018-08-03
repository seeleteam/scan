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
                <span :class="{'li-content-link': isLink(transactionInfo.from)}" class="list-content-width" @click="toFrom(transactionInfo.from)">{{[transactionInfo.from, 'from'] | setFormatAd}}</span>
              </li>
              <li>
                <div class="li-width">{{$t("listHeader.to")}}: </div>
                <span :class="{'li-content-link': isLink(transactionInfo.to)}" class="list-content-width" @click="toFrom(transactionInfo.to)">{{[transactionInfo.to, 'to'] | setFormatAd}}</span>
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
import router from '../../router'
import Header from '../header'
import smHeader from '../sm-header'
import searchInput from '../search-input'
import TransactionDescribe from '../describe'
import Footer from '../footer'
import { filtersAd, formatAd } from '../../untils/format'
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
  filters: {
    setFormatAd (params) {
      return formatAd(params)
    }
  },
  methods: {
    ...mapActions(['getTransactionDetail']),
    getDetail (height) {
      this.getTransactionDetail(height)
    },
    toFrom (address) {
      return filtersAd(address) ? router.push({path: '/account/detail', query: {address: address}}) : ''
    },
    isLink (address) {
      return filtersAd(address)
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
