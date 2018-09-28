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
        <NodeDescribe :title="title" :content="content" :link="link"></NodeDescribe>
        <div class="ul-wrap">
          <ul class="detail-wrap wrap-pad">
            <li>
              <div class="li-width">{{$t("listHeader.nodeId")}}: </div>
              <div class="li-content-width">{{nodeInfo.ID}}</div>
            </li>
            <li>
              <div class="li-width">{{$t("listHeader.shardnumber")}}: </div>
              <div class="li-content-width">{{nodeInfo.ShardNumber}}</div>
            </li>
            <li>
              <div class="li-width">{{$t("listHeader.host")}}: </div>
              <div class="li-content-width">{{nodeInfo.Host}}</div>
            </li>
            <li>
              <div class="li-width">{{$t("listHeader.port")}}: </div>
              <div class="li-content-width">{{nodeInfo.Port}}</div>
            </li>
            <li>
              <div class="li-width">{{$t("listHeader.country")}}: </div>
              <div class="li-content-width">{{nodeInfo.Country}}</div>
            </li>
            <li>
              <div class="li-width">{{$t("listHeader.region")}}: </div>
              <div class="li-content-width">{{nodeInfo.Region}}</div>
            </li>
            <li>
              <div class="li-width">{{$t("listHeader.city")}}: </div>
              <div class="li-content-width">{{nodeInfo.City}}</div>
            </li>
            <li>
              <div class="li-width">{{$t("listHeader.client")}}: </div>
              <div class="li-content-width">{{nodeInfo.Client}}</div>
            </li>
            <li>
              <div class="li-width">{{$t("listHeader.caps")}}: </div>
              <div class="li-content-width">{{nodeInfo.Caps}}</div>
            </li>
            <li>
              <div class="li-width">{{$t("listHeader.lastSeen")}}: </div>
              <div class="li-content-width">{{nodeInfo.LastSeen | filterDateTime}}</div>
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
import { formatDateFromTimestamps } from '../../untils/format'
import Header from '../header'
import smHeader from '../sm-header'
import searchInput from '../search-input'
import NodeDescribe from '../describe'
import Footer from '../footer'
export default {
  data () {
    return {
      isDetail: false,
      title: this.$t('navs.node'),
      content: 'Node Detail.',
      link: this.$t('navs.node')
    }
  },
  components: {
    Header,
    smHeader,
    searchInput,
    NodeDescribe,
    Footer
  },
  mounted () {
    this.getDetail(this.$route.query)
  },
  computed: {
    nodeInfo: {
      get () {
        return this.$store.state.node.nodeInfo
      }
    }
  },
  filters: {
    filterDateTime (value) {
      return formatDateFromTimestamps(value)
    }
  },
  methods: {
    ...mapActions(['getNodeDetail']),
    getDetail (nodeId) {
      this.getNodeDetail(nodeId)
    }
  },
  watch: {
    '$route' (to, from) {
      this.getDetail(this.$route.query)
    }
  }
}
</script>
<style lang="less">
@import "../../assets/css/page.less";
@import "../../assets/css/detail.less";
</style>
<style scoped>
.detail-wrap{
  padding-bottom:30px;
  padding-top:10px;
}
</style>
