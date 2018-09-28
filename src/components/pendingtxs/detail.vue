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
        <TransactionDescribe :title="title" :content="content" :link="link"></TransactionDescribe>
        <div class="ul-wrap">
          <ul class="detail-wrap wrap-pad">
            <li>
              <div class="li-width">{{$t("listHeader.txHash")}}: </div>
              <div class="li-content-width">{{pendingtxsInfo.txHash}}</div>
            </li>
            <li>
              <div class="li-width">{{$t("listHeader.shardnumber")}}: </div>
              <div class="li-content-width">{{pendingtxsInfo.shardnumber}}</div>
            </li>
            <!-- <li>
                <div class="li-width">{{$t("listHeader.age")}}: </div>
                <div class="li-content-width">{{pendingtxsInfo.age}}</div>
              </li> -->
            <li>
              <div class="li-width">{{$t("listHeader.from")}}: </div>
              <span :class="{'li-content-link': isLink(pendingtxsInfo.from)}" class="list-content-width" @click="toFrom(pendingtxsInfo.from)">{{[scope.row.from, 'from'] | setFormatAd}}</span>
            </li>
            <li>
              <div class="li-width">{{$t("listHeader.to")}}: </div>
              <span :class="{'li-content-link': isLink(pendingtxsInfo.to)}" class="list-content-width" @click="toFrom(pendingtxsInfo.to)">{{[scope.row.to, 'to'] | setFormatAd}}</span>
            </li>
            <li>
              <div class="li-width">{{$t("listHeader.value")}}: </div>
              <div class="li-content-width">{{pendingtxsInfo.value}}</div>
            </li>
            <li>
              <div class="li-width">{{$t("listHeader.payload")}}: </div>
              <div class="li-content-width">
                <el-input type="textarea" :rows="1" v-model="pendingtxsInfo.payload" disabled></el-input>
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
      title: this.$t('navs.pendingtxs'),
      content: '',
      link: this.$t('navs.pendingtxs')
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
    pendingtxsInfo: {
      get () {
        return this.$store.state.pendingtxs.pendingtxsInfo
      }
    }
  },
  filters: {
    setFormatAd (params) {
      return formatAd(params)
    }
  },
  methods: {
    ...mapActions(['getPendingtxsDetail']),
    getDetail (height) {
      this.getPendingtxsDetail(height)
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
.pendingtxs-wrap{
  height: 100%;
}
</style>
