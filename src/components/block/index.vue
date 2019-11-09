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
          <span class="title">{{$t('navs.block')}}</span>
          <ul class="link-wrap">
            <li>
              <a href="/">{{$t("navs.home")}}</a>
            </li>
            <li>
              <i class="el-icon-arrow-right"></i>
            </li>
            <li class="current">{{$t('navs.block')}}</li>
          </ul>
        </div>
        <ShardSelect></ShardSelect>
        <el-table class="list-wrap" :data="blocksList" :empty-text="$t('message.noData')" style="width: 100%">
          <el-table-column prop="height" :label="$t('listHeader.height')" min-width="120">
            <template slot-scope="scope" class="">
              <router-link :to="{path: '/block/detail', query: { height: scope.row.height, s: shardValue }}">
                <span class="table-link-color height">{{scope.row.height}}</span>
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="age" :label="$t('listHeader.age')" min-width="120">
            <template slot-scope="scope">
              <span class="age">{{scope.row.age}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="txn" min-width="100" :label="$t('listHeader.txn')">
            <template slot-scope="scope">
              <span>{{scope.row.txn}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="miner" min-width="280" :label="$t('listHeader.miner')">
            <template slot-scope="scope">
              <router-link :to="{path: '/account/detail', query: { address: scope.row.miner }}">
                <span class="list-content miner table-link-color">{{scope.row.miner}}</span>
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="reward" :label="$t('listHeader.reward')">
            <template slot-scope="scope">
              <span class="integerStyle">{{ scope.row.reward | balanceValueInteger }}</span>
              <span class="decimalStyle">{{ scope.row.reward | balanceValueDecimal }}</span>
              <span class="unit">Seele</span>
            </template>
          </el-table-column>
          <el-table-column prop="fee" :label="$t('listHeader.fee')">
            <template slot-scope="scope">{{scope.row.fee}}</template>
          </el-table-column>
        </el-table>
        <div class="page">
          <el-pagination class="el-pagination-wrap fr" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page" :page-size="pageSize" layout="prev, pager, next" :total="total">
          </el-pagination>
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
import ShardSelect from '../shard-select'
import { formatNumber } from '../../untils/format'
const BigNumber = require('bignumber.js')
export default {
  data () {
    return {
      isDetail: false,
      title: this.$t('navs.block'),
      content: 'A total of more than > 10,000,000 blocks found (showing the last 100000 records only)',
      link: this.$t('navs.block'),
      pageSize: 25
    }
  },
  components: {
    Header,
    smHeader,
    searchInput,
    Footer,
    ShardSelect
  },
  mounted () {
    this.getList(1)
  },
  computed: {
    blocksList: {
      get () {
        return this.$store.state.block.blocksList
      }
    },
    page: {
      get () {
        return this.$store.state.block.page
      }
    },
    total: {
      get () {
        return this.$store.state.block.total
      }
    },
    shardValue: {
      get () {
        return this.$store.state.shard.shardValue
      }
    }
  },
  filters: {
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
    ...mapActions(['getBlocksList']),
    ...mapActions(['getHeightShow']),

    handleSizeChange (val) {
      this.getList(val, this.shardValue)
    },
    handleCurrentChange (val) {
      this.getList(val, this.shardValue)
    },
    getList (page) {
      this.getBlocksList([page, this.shardValue])
    },
    toTxList (height) {
      router.push({path: '/transaction', query: { block: height, s: this.shardValue }})
      this.getHeightShow(true)
    }
  },
  watch: {
    shardValue: {
      handler: function (val, oldval) {
        this.getList(1, this.shardValue)
      }
    }
  }
}
</script>
<style lang="less">
@import "../../assets/css/page.less";
@import "../../assets/css/describe.less";
@import "../../assets/css/list.less";
</style>
