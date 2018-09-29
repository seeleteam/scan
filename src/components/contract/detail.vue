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
        <ContractDescribe :title="title" :content="content" :link="link"></ContractDescribe>
        <div class="ul-wrap">
          <ul class="detail-wrap wrap-pad">
            <li>
              <div class="li-width">{{$t("listHeader.address")}}: </div>
              <div class="li-content-width">{{contractInfo.address}}</div>
            </li>
            <li>
              <div class="li-width">{{$t("listHeader.shardnumber")}}: </div>
              <div class="li-content-width">{{contractInfo.shardnumber}}</div>
            </li>
            <li>
              <div class="li-width">{{$t("listHeader.balance")}}: </div>
              <div class="li-content-width">{{contractInfo.balance | balanceValue}}
                <span class="unit">Seele</span>
              </div>
            </li>
            <li>
              <div class="li-width">{{$t("listHeader.percentage")}}: </div>
              <div class="li-content-width">{{contractInfo.percentage | filterPercent}}</div>
            </li>
            <li>
              <div class="li-width">{{$t("listHeader.txcount")}}: </div>
              <div class="li-content-width li-content-link" @click="getShardValue(contractInfo.address)">{{contractInfo.txcount | txcountValue}}</div>
            </li>
          </ul>
          <el-tabs type="border-card" class="el-tab-wrap">
            <el-tab-pane :label="$t('tab.Tx')">
              <ul class="el-tab-detail-wrap wrap-pad">
                <li>
                  <el-table class="list-wrap" :empty-text="$t('message.noData')" :data="contractInfo.txs" style="width: 100%; background: transparent">
                    <el-table-column prop="hash" width="230" :label="$t('listHeader.hash')">
                      <template slot-scope="scope">
                        <router-link :to="{path: '/transaction/detail', query: { txhash: scope.row.hash }}">
                          <span class="list-content table-link-color">{{scope.row.hash}}</span>
                        </router-link>
                      </template>
                    </el-table-column>
                    <el-table-column prop="block" :label="$t('listHeader.block')" width="120">
                    </el-table-column>
                    <el-table-column prop="from" :label="$t('listHeader.from')" width="230">
                      <template slot-scope="scope">
                        <span v-if="scope.row.inorout === true" :class="{'table-link-color': isLink(scope.row.from)}" class="list-content" @click="toTx(scope.row.from)">{{[scope.row.from, 'from'] | setFormatAd}}</span>
                        <span v-else class="list-content">{{[scope.row.from, 'from'] | setFormatAd}}</span>
                      </template>
                    </el-table-column>
                    <el-table-column prop="inorout" width="120">
                      <template slot-scope="scope">
                        <span v-if="scope.row.inorout === true" class="list-content list-content-in">{{$t('tx.in')}}</span>
                        <span v-else class="list-content list-content-out">{{$t('tx.out')}}</span>
                      </template>
                    </el-table-column>
                    <el-table-column prop="to" width="230" :label="$t('listHeader.to')">
                      <template slot-scope="scope">
                        <span v-if="scope.row.inorout === true" :class="{'table-link-color': isLink(scope.row.to)}" class="list-content" @click="toTx(scope.row.to)">{{[scope.row.to, 'to'] | setFormatAd}}</span>
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
                      <template slot-scope="scope">{{scope.row.fee}}
                        <span class="unit">Fan</span>
                      </template>
                    </el-table-column>
                  </el-table>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane :label="$t('tab.Code')">
              <ul class="detail-wrap wrap-pad">
                <li>
                  <div class="li-content-height">{{contractInfo.contractCreationCode}}</div>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
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
import ContractDescribe from '../describe'
import Footer from '../footer'
import { formatNumber, formatAccountPercent, filtersAd, formatAd } from '../../untils/format'

export default {
  data () {
    return {
      title: this.$t('navs.contract'),
      content: '',
      link: this.$t('navs.contract')
    }
  },
  components: {
    Header,
    smHeader,
    searchInput,
    ContractDescribe,
    Footer
  },
  mounted () {
    this.getDetail(this.$route.query)
  },
  computed: {
    contractInfo: {
      get () {
        return this.$store.state.contract.contractInfo
      }
    }
  },
  filters: {
    balanceValueInteger (value) {
      var stringVal = (value / 100000000).toString()
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
      var stringVal = (value / 100000000).toString()
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
    },
    setFormatAd (params) {
      return formatAd(params)
    }
  },
  methods: {
    ...mapActions(['getContractDetail']),
    ...mapActions(['setShardValue']),
    getDetail (height) {
      this.getContractDetail(height)
    },
    getShardValue (address) {
      router.push({path: '/contract/txList', query: {address: address}})
    },
    toTx (txHash) {
      return filtersAd(txHash) ? router.push({path: '/account/detail', query: { address: txHash }}) : ''
    },
    isLink (address) {
      return filtersAd(address)
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
@import "../../assets/css/describe.less";
@import "../../assets/css/detail.less";
@import "../../assets/css/list.less";
</style>
<style scoped>
.detail-wrap, .el-tab-detail-wrap{
  min-width: 1110px;
  padding-top: 0px;
}
</style>
