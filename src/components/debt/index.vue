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
        <ShardSelect></ShardSelect>
        <el-table class="list-wrap" :data="debtList" :empty-text="$t('message.noData')" style="width: 100%">
          <el-table-column prop="hash" :label="$t('listHeader.debtHash')" min-width="330" show-overflow-tooltip>
            <template slot-scope="scope" class="">
              <router-link :to="{path: '/debt/detail', query: { debtHash: scope.row.hash }}">
                <span class="table-link-color height">{{scope.row.hash}}</span>
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="height" :label="$t('listHeader.height')" min-width="70">
            <template slot-scope="scope">
              <router-link :to="{path: '/block/detail', query: { height: scope.row.height, s: shardValue }}">
                <span class="table-link-color height">{{scope.row.height}}</span>
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="to" min-width="330" :label="$t('listHeader.to')" show-overflow-tooltip>
            <template slot-scope="scope">
              <router-link :to="{path: '/account/detail', query: { address: scope.row.to }}">
                <span class="table-link-color list-content">{{scope.row.to}}</span>
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="amount" min-width="100" :label="$t('listHeader.amount')">
            <template slot-scope="scope">
              <span class="integerStyle">{{ scope.row.amount | balanceValueInteger }}</span>
              <span class="decimalStyle">{{ scope.row.amount | balanceValueDecimal }}</span>
              <span class="unit">Seele</span>
            </template>
          </el-table-column>
          <el-table-column prop="txhash" :label="$t('listHeader.txHash')" min-width="200" show-overflow-tooltip>
            <template slot-scope="scope">
              <router-link :to="{path: '/transaction/detail', query: { txhash: scope.row.txhash }}">
                <span class="table-link-color list-content">{{scope.row.txhash}}</span>
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="fee" :label="$t('listHeader.fee')" min-width="90">
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
      title: this.$t('navs.debt'),
      content: this.$route.query.block,
      link: this.$t('navs.debt'),
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
    if (this.$route.query.block) {
      this.getHeightShow(true)
      this.getBlockList(1, this.$route.query)
    } else {
      this.getList(1)
      this.getHeightShow(false)
    }
  },
  computed: {
    debtList: {
      get () {
        return this.$store.state.debt.debtList
      }
    },
    page: {
      get () {
        return this.$store.state.debt.page
      }
    },
    total: {
      get () {
        return this.$store.state.debt.total
      }
    },
    isShow: {
      get () {
        return this.$store.state.block.heightShow
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
    ...mapActions(['getDebtList']),
    ...mapActions(['getBlockDebt']),
    ...mapActions(['getHeightShow']),

    handleSizeChange (val) {
      this.getList(val, this.shardValue)
    },
    handleCurrentChange (val) {
      if (this.isShow) {
        this.getBlockList(val, this.$route.query, this.shardValue)
      } else {
        this.getList(val, this.shardValue)
      }
    },
    getBlockList (page, params) {
      this.getBlockDebt([page, params, this.shardValue])
    },
    getList (page) {
      this.getDebtList([page, this.shardValue])
    }
  },
  watch: {
    '$route' (to, from) {
      this.getList(1)
      this.getHeightShow(false)
    },
    shardValue: {
      handler: function (val, oldval) {
        if (this.isShow) {
          this.getBlockList(1, this.$route.query, this.shardValue)
        } else {
          this.getList(1, this.shardValue)
        }
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
