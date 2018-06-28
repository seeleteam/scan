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
                <router-link :to="{path: '/account/detail', query: { address: pendingtxsInfo.from }}">
                  <div class="li-content-width li-content-link">{{pendingtxsInfo.from}}</div>
                </router-link>
              </li>
              <li>
                <div class="li-width">{{$t("listHeader.to")}}: </div>
                <router-link :to="{path: '/account/detail', query: { address: pendingtxsInfo.to }}">
                  <div class="li-content-width li-content-link">{{pendingtxsInfo.to}}</div>
                </router-link>
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

import Header from '../header'
import smHeader from '../sm-header'
import searchInput from '../search-input'
import TransactionDescribe from '../describe'
import Footer from '../footer'
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
  methods: {
    ...mapActions(['getPendingtxsDetail']),
    getDetail (height) {
      this.getPendingtxsDetail(height)
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
