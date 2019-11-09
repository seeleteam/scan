<template>
  <div class="page-wrap">=
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
          <span class="title">{{$t("navs.contractTx")}}</span>
          <ul class="link-wrap">
            <li>
              <a href="/">{{$t("navs.home")}}</a>
            </li>
            <li>
              <i class="el-icon-arrow-right"></i>
            </li>
            <li class="current">{{$t("navs.contractTx")}}</li>
          </ul>
        </div>
        <div class="des-title">
          {{$t("navs.contractAddress")}}: {{title}}
        </div>
        <el-table class="list-wrap" :empty-text="$t('message.noData')" :data="accountTxList" style="width: 100%; background: transparent">
          <el-table-column prop="hash" width="230" :label="$t('listHeader.hash')">
            <template slot-scope="scope">
              <router-link :to="{path: '/transaction/detail', query: { txhash: scope.row.hash }}">
                <span class="list-content table-link-color">{{scope.row.hash}}</span>
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="block" :label="$t('listHeader.block')" width="120">
          </el-table-column>
          <el-table-column prop="from" :label="$t('listHeader.from')" width="240">
            <template slot-scope="scope">
              <span v-if="scope.row.inorout === true" :class="{'table-link-color': isLink(scope.row.from)}" class="list-content" @click="toTx(scope.row.from)">{{[scope.row.from, 'from'] | setFormatAd}}</span>
              <span v-else class="list-content">{{[scope.row.from, 'from'] | setFormatAd}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="inorout" width="100" :label="$t('listHeader.inorout')">
            <template slot-scope="scope">
              <span v-if="scope.row.inorout === true" class="list-content list-content-in">{{$t('tx.in')}}</span>
              <span v-else class="list-content list-content-out">{{$t('tx.out')}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="to" width="240" :label="$t('listHeader.to')">
            <template slot-scope="scope">
              <span v-if="scope.row.inorout === false" :class="{'table-link-color': isLink(scope.row.to)}" class="list-content" @click="toTx(scope.row.to)">{{[scope.row.to, 'to'] | setFormatAd}}</span>
              <span v-else class="list-content">{{[scope.row.to, 'to'] | setFormatAd}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="value" :label="$t('listHeader.value')">
            <template slot-scope="scope">
              <span class="list-content">
                <span class="integerStyle">{{ scope.row.value | balanceValueInteger }}</span>
                <span class="decimalStyle">{{ scope.row.value | balanceValueDecimal }}</span>
                <span class="unit">Seele</span>
              </span>
            </template>
          </el-table-column>
          <el-table-column prop="fee" :label="$t('listHeader.txfee')">
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
import { filtersAd, formatAd, formatNumber } from '../../untils/format'
const BigNumber = require('bignumber.js')
export default {
  data () {
    return {
      title: '',
      pageSize: 25
    }
  },
  components: {
    Header,
    smHeader,
    searchInput,
    Footer
  },
  mounted () {
    this.getList(1, this.$route.query)
    this.title = this.$route.query.address
  },
  computed: {
    accountTxList: {
      get () {
        return this.$store.state.account.accountTxList
      }
    },
    page: {
      get () {
        return this.$store.state.account.page
      }
    },
    total: {
      get () {
        return this.$store.state.account.total
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
    ...mapActions(['getAccountTxList']),

    handleSizeChange (val) {
      this.getList(val, this.$route.query)
    },
    handleCurrentChange (val) {
      this.getList(val, this.$route.query)
    },
    getList (page, address) {
      this.getAccountTxList([page, address])
    },
    toTx (txHash) {
      return filtersAd(txHash) ? router.push({path: '/account/detail', query: { address: txHash }}) : ''
    },
    isLink (address) {
      return filtersAd(address)
    }
  }
}
</script>
<style lang="less">
@import "../../assets/css/page.less";
@import "../../assets/css/list.less";
@import "../../assets/css/describe.less";
</style>
