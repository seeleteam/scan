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
            <AccountDescribe
              :title="title"
              :content="content"
              :link="link"
            ></AccountDescribe>
            <div class="ul-wrap">
              <ul class="detail-wrap wrap-pad">
                <li>
                  <div class="li-width">{{$t("listHeader.address")}}: </div>
                  <div class="li-content-width">{{accountInfo.address}}</div>
                </li>
                <li>
                  <div class="li-width">{{$t("listHeader.shardnumber")}}: </div>
                  <div class="li-content-width">{{accountInfo.shardnumber}}</div>
                </li>
                <li>
                  <div class="li-width">{{$t("listHeader.balance")}}: </div>
                  <div class="li-content-width">{{accountInfo.balance | balanceValue}}</div>
                </li>
                <li>
                  <div class="li-width">{{$t("listHeader.percentage")}}: </div>
                  <div class="li-content-width">{{accountInfo.percentage | filterPercent}}</div>
                </li>
                <li>
                  <div class="li-width">{{$t("listHeader.txcount")}}: </div>
                  <div class="li-content-width li-content-link" @click="getShardValue(accountInfo.address)">{{accountInfo.txcount | txcountValue}}</div>
                </li>
              </ul>
              <el-tabs type="border-card" class="el-tab-wrap">
                <el-tab-pane :label="$t('tab.Tx')">
                  <ul class="el-tab-detail-wrap wrap-pad">
                    <li>
                      <div class="li-content-width" style="color: #999;">{{$t("listHeader.listDescription")}} {{accountInfo.txcount | txcountValue}})</div>
                    </li>
                    <li>
                      <el-table
                        class="list-wrap"
                        :empty-text="$t('message.noData')"
                        :data="accountInfo.txs"
                        style="width: 100%; background: transparent">
                        <el-table-column
                          prop="hash"
                          width="200"
                          :label="$t('listHeader.hash')">
                          <template slot-scope="scope">
                            <span class="list-content">{{scope.row.hash}}</span>
                          </template>
                        </el-table-column>
                        <el-table-column
                          prop="age"
                          width="120"
                          :label="$t('listHeader.age')">
                        </el-table-column>
                        <!-- <el-table-column
                          prop="amount"
                          width="100"
                          :label="$t('listHeader.amount')">
                        </el-table-column> -->
                        <el-table-column
                          prop="block"
                          :label="$t('listHeader.block')"
                          width="120">
                        </el-table-column>
                        <el-table-column
                          prop="from"
                          :label="$t('listHeader.from')"
                          width="200">
                          <template slot-scope="scope">
                            <span v-if="scope.row.inorout === true" class="list-content table-link-color" @click="toTx(scope.row.from)">{{scope.row.from}}</span>
                            <span v-else class="list-content">{{scope.row.from}}</span>
                          </template>
                        </el-table-column>
                        <el-table-column
                          prop="inorout"
                          width="100"
                          :label="$t('listHeader.inorout')">
                          <template slot-scope="scope">
                            <span v-if="scope.row.inorout === true" class="list-content list-content-in">{{$t('tx.in')}}</span>
                            <span v-else class="list-content list-content-out">{{$t('tx.out')}}</span>
                          </template>
                        </el-table-column>
                        <el-table-column
                          prop="to"
                          width="200"
                          :label="$t('listHeader.to')">
                          <template slot-scope="scope">
                            <span v-if="scope.row.inorout === false" class="list-content table-link-color" @click="toTx(scope.row.to)">{{scope.row.to}}</span>
                            <span v-else class="list-content">{{scope.row.to}}</span>
                          </template>
                        </el-table-column>
                        <el-table-column
                          prop="value"
                          :label="$t('listHeader.value')">
                        </el-table-column>
                        <el-table-column
                          prop="fee"
                          :label="$t('listHeader.txfee')">
                        </el-table-column>
                      </el-table>
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
import AccountDescribe from '../describe'
import Footer from '../footer'
import { formatNumber, formatAccountPercent } from '../../untils/format'
export default {
  data () {
    return {
      title: this.$t('navs.account'),
      content: 'Showing Block (#5466185 to #5466161) out of 5466211 total blocks',
      link: this.$t('navs.account')
    }
  },
  components: {
    Header,
    smHeader,
    searchInput,
    AccountDescribe,
    Footer
  },
  mounted () {
    this.getDetail(this.$route.query)
  },
  computed: {
    accountInfo: {
      get () {
        return this.$store.state.account.accountInfo
      }
    }
  },
  filters: {
    balanceValue (value) {
      return formatNumber(value)
    },
    txcountValue (value) {
      return formatNumber(value)
    },
    filterPercent (value) {
      return formatAccountPercent(value)
    }
  },
  methods: {
    ...mapActions(['getAccountDetail']),
    getDetail (height) {
      this.getAccountDetail(height)
    },
    getShardValue (address) {
      router.push({path: '/account/txlist', query: {address: address}})
    },
    toTx (txHash) {
      router.push({path: '/account/detail', query: { address: txHash }})
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
@import "../../assets/css/list.less";
</style>
