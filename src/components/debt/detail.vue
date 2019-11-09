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
          <span class="title">{{$t('navs.debt')}}</span>
          <ul class="link-wrap">
            <li>
              <a href="/">{{$t("navs.home")}}</a>
            </li>
            <li>
              <i class="el-icon-arrow-right"></i>
            </li>
            <li>
              <a href="/block">{{$t("navs.block")}}</a>
            </li>
            <li>
              <i class="el-icon-arrow-right"></i>
            </li>
            <li class="current">{{$t('navs.debt')}}</li>
          </ul>
        </div>
        <div class="ul-wrap">
          <ul class="detail-wrap wrap-pad">
            <li>
              <div class="li-width">{{$t("listHeader.debtHash")}}: </div>
              <div class="li-content-width">{{debtInfo.hash}}</div>
            </li>
            <li>
              <div class="li-width">{{$t("listHeader.txHash")}}: </div>
              <span :class="{'li-content-link': isLink(debtInfo.txhash)}" class="list-content-width" @click="toFrom(debtInfo.txhash)">{{[debtInfo.txhash, 'txhash'] | setFormatAd}}</span>
            </li>
            <li>
              <div class="li-width">{{$t("listHeader.shardnumber")}}: </div>
              <div class="li-content-width">{{debtInfo.shardNumber}}</div>
            </li>
            <li>
              <div class="li-width">{{$t("listHeader.block")}}: </div>
              <router-link :to="{path: '/block/detail', query: { height: debtInfo.height, s:debtInfo.shardNumber }}">
                <div class="li-content-width li-content-link">{{debtInfo.height}}</div>
              </router-link>
            </li>
            <!-- <li>
                <div class="li-width">{{$t("listHeader.age")}}: </div>
                <div class="li-content-width">{{debtInfo.age}}</div>
              </li>
            <li>
              <div class="li-width">{{$t("listHeader.from")}}: </div>
              <span :class="{'li-content-link': isLink(debtInfo.from)}" class="list-content-width" @click="toFrom(debtInfo.from)">{{[debtInfo.from, 'from'] | setFormatAd}}</span>
            </li> -->
            <li>
              <div class="li-width">{{$t("listHeader.to")}}: </div>
              <span :class="{'li-content-link': isLink(debtInfo.to)}" class="list-content-width" @click="toFrom(debtInfo.to)">{{[debtInfo.to, 'to'] | setFormatAd}}</span>
            </li>
            <li>
              <div class="li-width">{{$t("listHeader.value")}}: </div>
              <div class="li-content-width">
                <span class="integerStyle">{{ debtInfo.amount | balanceValueInteger }}</span>
                <span class="decimalStyle">{{ debtInfo.amount | balanceValueDecimal }}</span>
                <span class="unit">Seele</span>
              </div>
            </li>
            <li>
              <div class="li-width">{{$t("listHeader.txfee")}}: </div>
              <div class="li-content-width">{{debtInfo.fee}}</div>
            </li>
            <li>
              <div class="li-width">{{$t("listHeader.payload")}}: </div>
              <div class="li-content-width">
                <el-input type="textarea" :rows="5" v-model="debtInfo.payload" disabled></el-input>
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
import Footer from '../footer'
import { filtersAd, formatAd, formatNumber } from '../../untils/format'
const BigNumber = require('bignumber.js')
export default {
  data () {
    return {
      title: this.$t('navs.debt'),
      content: '',
      link: this.$t('navs.debt')
    }
  },
  components: {
    Header,
    smHeader,
    searchInput,
    Footer
  },
  mounted () {
    this.getDetail(this.$route.query)
  },
  computed: {
    debtInfo: {
      get () {
        return this.$store.state.debt.debtInfo
      }
    }
  },
  filters: {
    setFormatAd (params) {
      return formatAd(params)
    },
    balanceValueInteger (value) {
      var x = new BigNumber(value / 100000000)
      var stringVal = x.toFixed()
      if (!/^\d+$/.test(stringVal)) {
        var valueSplit = stringVal.split('.')
        var integer = valueSplit[0]
        return formatNumber(integer)
      } else if (/^\d+$/.test(stringVal)) {
        return formatNumber(value / 100000000)
      } else {
        return formatNumber(value)
      }
    },
    balanceValueDecimal (value) {
      var x = new BigNumber(value / 100000000)
      var stringVal = x.toFixed()
      if (!/^\d+$/.test(stringVal)) {
        var valueSplit = stringVal.split('.')
        var decimal = valueSplit[1]
        return '.' + decimal
      } else if (/^\d+$/.test(stringVal)) {
        return ''
      } else {
        return ''
      }
    }
  },
  methods: {
    ...mapActions(['getDebtDetail']),
    getDetail (hash) {
      this.getDebtDetail(hash)
    },
    toFrom (txhash) {
      return filtersAd(txhash)
        ? router.push({ path: '/transaction/detail', query: { txHash: txhash } })
        : ''
    },
    isLink (txhash) {
      return filtersAd(txhash)
    }
  }
}
</script>
<style lang="less">
@import "../../assets/css/detail.less";
@import "../../assets/css/page.less";
@import "../../assets/css/describe.less";
@import "../../assets/css/list.less";
</style>
<style scoped>
.transaction-wrap {
  height: 100%;
}
.detail-wrap li:nth-child(3) {
  padding-top: 5px;
}
.detail-wrap li:nth-child(5) {
  margin:0;
  padding-bottom: 5px;
}
.detail-wrap {
  padding-top: 20px;
}
.detail-wrap li:last-child {
  display: inline-block;
}
</style>
