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
        <BlockDescribe :title="title" :content="content" :link="link"></BlockDescribe>
        <div class="ul-wrap">
          <ul class="detail-wrap wrap-pad">
            <li>
              <div class="li-width">{{$t("listHeader.height")}}: </div>
              <div class="li-content-width">
                <button class="height-button prev" :class="{ grey: disabledPrev }" :disabled="disabledPrev" @click="getPrevDetail(blocksInfo.height, blocksInfo.minheight, blocksInfo.shardnumber)">{{$t("button.prev")}}</button>
                <span>{{blocksInfo.height}}</span>
                <button class="height-button next" :class="{ grey: disabledNext }" :disabled="disabledNext" @click="getNextDetail(blocksInfo.height, blocksInfo.maxheight-1, blocksInfo.shardnumber)">{{$t("button.next")}}</button>
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
              <!-- <li>
                <div class="li-width">{{$t("listHeader.nonce")}}: </div>
                <div class="li-content-width">{{blocksInfo.nonce}}</div>
              </li> -->
              <li>
                <div class="li-width">{{$t("listHeader.preBlockHash")}}: </div>
                <router-link :to="{path: '/block/detail', query: { hash: blocksInfo.preBlockHash }}">
                  <div class="li-content-width li-content-link">{{blocksInfo.preBlockHash}}</div>
                </router-link>
              </li>
              <li>
                <div class="li-width">{{$t("listHeader.txcount")}}: </div>
                <div class="li-content-width li-content-link" @click="toTxList(blocksInfo.height)">{{blocksInfo.txcount}}</div>
              </li>
              <li>
                <div class="li-width">{{$t("listHeader.debtcount")}}: </div>
                <div v-if="blocksInfo.debtCount == '0'" class="li-content-width">{{blocksInfo.debtCount}}</div>
                <div v-else class="li-content-width li-content-link" @click="toDebtList(blocksInfo.height)">{{blocksInfo.debtCount}}</div>
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
import { Message } from 'element-ui'
export default {
  data () {
    return {
      disabledPrev: false,
      disabledNext: false,
      isDetail: false,
      title: this.$t('navs.block'),
      content:
        'A total of more than > 10,000,000 blocks found (showing the last 100000 records only)',
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
          s: params.s
        }
        this.getBlocksDetail(data)
      } else if (params.hash) {
        let data = {
          hash: params.hash,
          s: params.s
        }
        this.getBlocksDetail(data)
      }
    },
    getPrevDetail (sedHeight, height, s) {
      let data = {}
      this.disabledPrev = true
      this.disabledNext = false
      if (sedHeight !== height) {
        data = {
          height: sedHeight - 1,
          s: s
        }
        this.getDetail(data)
        setTimeout(() => {
          this.disabledPrev = false
        }, 3000)
      } else if (sedHeight === height) {
        Message({
          showClose: true,
          message: this.$t('message.noPrev'),
          type: 'warning'
        })
      }
    },
    getNextDetail (sedHeight, height, s) {
      let data = {}
      this.disabledNext = true
      this.disabledPrev = false
      if (sedHeight !== height) {
        data = {
          height: sedHeight + 1,
          s: s
        }
        this.getDetail(data)
        setTimeout(() => {
          this.disabledNext = false
        }, 3000)
      } else if (sedHeight === height) {
        Message({
          showClose: true,
          message: this.$t('message.noNext'),
          type: 'warning'
        })
      }
    },
    toTxList (height) {
      router.push({
        path: '/transaction',
        query: { block: height, s: this.shardValue }
      })
      this.getHeightShow(true)
    },
    toDebtList (height) {
      router.push({
        path: '/debt',
        query: { block: height, s: this.shardValue }
      })
      this.getHeightShow(true)
    }
  },
  watch: {
    $route (to, from) {
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
.li-content-width span {
  float: left;
  line-height: 31px;
}
.li-content-width button {
  border: none;
}
.detail-wrap li:nth-child(1) .li-content-width {
  margin-top: -7px;
}
.detail-wrap li .li-content-width .grey {
  color: #fff;
  background: #b8b8b8;
  border-color: #b8b8b8;
}
.detail-wrap {
  padding-top: 10px;
  padding-bottom: 30px;
}
</style>
