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
          <span class="title">{{$t('navs.transaction')}}</span>
          <span v-show="isShow" class="title-content">
            {{$t('forBlock')}} {{content}}
          </span>
          <ul class="link-wrap">
            <li>
              <a href="/">{{$t("navs.home")}}</a>
            </li>
            <li>
              <i class="el-icon-arrow-right"></i>
            </li>
            <li class="current">{{$t('navs.transaction')}}</li>
          </ul>
        </div>
        <ShardSelect></ShardSelect>
        <el-table class="list-wrap" :data="transactionList" :empty-text="$t('message.noData')" style="width: 100%">
          <el-table-column prop="txHash" width="340" :label="$t('listHeader.txHash')">
            <template slot-scope="scope">
              <router-link :to="{path: '/transaction/detail', query: { txhash: scope.row.txHash }}">
                <span class="table-link-color list-content">{{scope.row.txHash}}</span>
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="block" :label="$t('listHeader.block')" width="100">
            <template slot-scope="scope">
              <router-link :to="{path: '/block/detail', query: { height: scope.row.block, s: shardValue }}">
                <span class="table-link-color list-content">{{scope.row.block}}</span>
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="from" width="120" :label="$t('listHeader.from')">
            <template slot-scope="scope">
              <span :class="{'table-link-color': isLink(scope.row.from)}" class="list-content" @click="toFrom(scope.row.from)">{{[scope.row.from, 'from'] | setFormatAd}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="to" width="310" :label="$t('listHeader.to')">
            <template slot-scope="scope">
              <span :class="{'table-link-color': isLink(scope.row.to)}" class="list-content" @click="toFrom(scope.row.to)">{{[scope.row.to, 'to'] | setFormatAd}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="value" width="130" :label="$t('listHeader.value')">
            <template slot-scope="scope">
              <span class="integerStyle">{{ scope.row.value | balanceValueInteger }}</span>
              <span class="decimalStyle">{{ scope.row.value | balanceValueDecimal }}</span>
              <span class="unit">Seele</span>
            </template>
          </el-table-column>
          <!-- <el-table-column prop="nonce" :label="$t('listHeader.nonce')">
          </el-table-column> -->
          <el-table-column prop="debtHash" :label="$t('listHeader.debtHash')" width="100">
            <template slot-scope="scope">
              <router-link :to="{path: '/debt/detail', query: { debtHash: scope.row.debtHash }}">
                <span class="table-link-color list-content">{{scope.row.debtHash}}</span>
              </router-link>
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
import TransactionDescribe from '../describe'
import Footer from '../footer'
import ShardSelect from '../shard-select'
import { filtersAd, formatAd, formatNumber } from '../../untils/format'
const BigNumber = require('bignumber.js')
export default {
  data () {
    return {
      content: this.$route.query.block,
      linkColor: false,
      pageSize: 25
    }
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
  components: {
    Header,
    smHeader,
    searchInput,
    TransactionDescribe,
    Footer,
    ShardSelect
  },
  computed: {
    transactionList: {
      get () {
        return this.$store.state.transaction.transactionList
      }
    },
    page: {
      get () {
        return this.$store.state.transaction.page
      }
    },
    total: {
      get () {
        return this.$store.state.transaction.total
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
        return formatNumber(x)
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
    ...mapActions(['getTransactionList']),
    ...mapActions(['getTransactionBlock']),
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
      this.getTransactionBlock([page, params, params.s])
    },
    getList (page) {
      this.getTransactionList([page, this.shardValue])
    },
    toFrom (address) {
      return filtersAd(address) ? router.push({path: '/account/detail', query: {address: address}}) : ''
    },
    isLink (address) {
      return filtersAd(address)
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
<style scoped>
.table-link-color{
  min-width: 340px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
