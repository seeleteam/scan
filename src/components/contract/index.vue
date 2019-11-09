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
          <span class="title">{{$t('navs.contract')}}</span>
          <ul class="link-wrap">
            <li>
              <a href="/">{{$t("navs.home")}}</a>
            </li>
            <li>
              <i class="el-icon-arrow-right"></i>
            </li>
            <li class="current">{{$t('navs.contract')}}</li>
          </ul>
        </div>
        <ShardSelect></ShardSelect>
        <el-table class="list-wrap" :empty-text="$t('message.noData')" :data="contractList" style="width: 100%">
          <el-table-column prop="address" width="400" :label="$t('listHeader.address')">
            <template slot-scope="scope">
              <router-link :to="{path: '/contract/detail', query: { address: scope.row.address }}">
                <span class="table-link-color list-content">{{scope.row.address}}</span>
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="balance" :label="$t('listHeader.balance')" width="300">
            <template slot-scope="scope">
              <span class="list-content">
                <span class="integerStyle">{{ scope.row.balance | balanceValueInteger }}</span>
                <span class="decimalStyle">{{ scope.row.balance | balanceValueDecimal }}</span>
                <span class="unit">Seele</span>
              </span>
            </template>
          </el-table-column>
          <el-table-column prop="percentage" :label="$t('listHeader.percentage')" width="300">
            <template slot-scope="scope">
              <span class="list-content">{{scope.row.percentage | filterPercent}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="txcount" :label="$t('listHeader.txcount')">
            <template slot-scope="scope">
              <span class="list-content">{{scope.row.txcount | txcountValue}}</span>
            </template>
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
import { formatNumber, formatAccountPercent } from '../../untils/format'
import ShardSelect from '../shard-select'
const BigNumber = require('bignumber.js')
export default {
  data () {
    return {
      content: '',
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
    contractList: {
      get () {
        return this.$store.state.contract.contractList
      }
    },
    page: {
      get () {
        return this.$store.state.contract.page
      }
    },
    total: {
      get () {
        return this.$store.state.contract.total
      }
    },
    shardValue: {
      get () {
        return this.$store.state.shard.shardValue
      }
    }
  },
  methods: {
    ...mapActions(['getContractList']),

    handleSizeChange (val) {
      this.getList(val, this.shardValue)
    },
    handleCurrentChange (val) {
      this.getList(val, this.shardValue)
    },
    getList (page) {
      this.getContractList([page, this.shardValue])
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
    },
    txcountValue (value) {
      return formatNumber(value)
    },
    filterPercent (value) {
      return formatAccountPercent(value)
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
