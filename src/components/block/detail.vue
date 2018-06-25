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
            <BlockDescribe
              :title="title"
              :content="content"
              :link="link"
            ></BlockDescribe>
            <div class="ul-wrap">
              <ul class="detail-wrap wrap-pad">
                <li>
                  <div class="li-width">{{$t("listHeader.height")}}: </div>
                  <div class="li-content-width">
                    <span class="height-button prev" @click="getPrevDetail(blocksInfo.height, blocksInfo.minheight, blocksInfo.shardnumber)">{{$t("button.prev")}}</span>
                    {{blocksInfo.height}}
                    <span class="height-button next" @click="getNextDetail(blocksInfo.height, blocksInfo.maxheight-1, blocksInfo.shardnumber)">{{$t("button.next")}}</span>
                  </div>
                </li>
                <li>
                  <div class="li-width">{{$t("listHeader.shardnumber")}}: </div>
                  <div class="li-content-width">{{blocksInfo.shardnumber}}</div>
                </li>
                <li>
                  <div class="li-width">{{$t("listHeader.age")}}: </div>
                  <div class="li-content-width">{{blocksInfo.age}}</div>
                </li>
                <li>
                  <div class="li-width">{{$t("listHeader.difficulty")}}: </div>
                  <div class="li-content-width">{{blocksInfo.difficulty | difficultyValue}}</div>
                </li>
                <li>
                  <div class="li-width">{{$t("listHeader.headHash")}}: </div>
                  <div class="li-content-width">{{blocksInfo.headHash}}</div>
                <li>
                  <div class="li-width">{{$t("listHeader.miner")}}: </div>
                  <!-- <router-link :to="{path: '/block'}"> -->
                  <div class="li-content-width">{{blocksInfo.miner}}</div>
                  <!-- </router-link> -->
                </li>
                <li>
                  <div class="li-width">{{$t("listHeader.nonce")}}: </div>
                  <div class="li-content-width">{{blocksInfo.nonce}}</div>
                </li>
                <li>
                  <div class="li-width">{{$t("listHeader.preBlockHash")}}: </div>
                  <router-link :to="{path: '/block/detail', query: { hash: blocksInfo.preBlockHash }}">
                    <div class="li-content-width li-content-link">{{blocksInfo.preBlockHash}}</div>
                  </router-link>
                </li>
                <li>
                  <div class="li-width">{{$t("listHeader.txcount")}}: </div>
                  <div class="li-content-width li-content-link" @click="toTxList(blocksInfo.height)" >{{blocksInfo.txcount}}</div>
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
import { formatNumber } from '../../untils/format'
import Header from '../header'
import smHeader from '../sm-header'
import searchInput from '../search-input'
import BlockDescribe from '../describe'
import Footer from '../footer'
export default {
  data () {
    return {
      isDetail: false,
      title: this.$t('navs.block'),
      content: 'A total of more than > 10,000,000 blocks found (showing the last 100000 records only)',
      link: this.$t('navs.block')
    }
  },
  components: {
    Header,
    smHeader,
    searchInput,
    BlockDescribe,
    Footer
  },
  mounted () {
    this.getDetail(this.$route.query)
  },
  computed: {
    blocksInfo: {
      get () {
        return this.$store.state.block.blocksInfo
      }
    },
    shardValue: {
      get () {
        return this.$store.state.shard.shardValue
      }
    }
  },
  filters: {
    difficultyValue (value) {
      return formatNumber(value)
    }
  },
  methods: {
    ...mapActions(['getBlocksDetail']),
    ...mapActions(['getHeightShow']),

    getDetail (params) {
      if (params.height) {
        let data = {
          height: params.height,
          s: this.shardValue
        }
        this.getBlocksDetail(data)
      } else if (params.hash) {
        let data = {
          hash: params.hash,
          s: this.shardValue
        }
        this.getBlocksDetail(data)
      }
    },
    getPrevDetail (sedHeight, height, s) {
      let data = {}
      if (sedHeight !== height) {
        data = {
          height: sedHeight - 1,
          s: s
        }
        this.getDetail(data)
      } else if (sedHeight === height) {
        this.$message({
          showClose: true,
          message: this.$t('message.noPrev'),
          type: 'warning'
        })
      }
    },
    getNextDetail (sedHeight, height, s) {
      let data = {}
      if (sedHeight !== height) {
        data = {
          height: sedHeight + 1,
          s: s
        }
        this.getDetail(data)
      } else if (sedHeight === height) {
        this.$message({
          showClose: true,
          message: this.$t('message.noNext'),
          type: 'warning'
        })
      }
    },
    toTxList (height) {
      router.push({path: '/transaction', query: { block: height, s: this.shardValue }})
      this.getHeightShow(true)
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
