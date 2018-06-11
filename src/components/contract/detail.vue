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
            <ContractDescribe
              :title="title"
              :content="content"
              :link="link"
            ></ContractDescribe>
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
                  <div class="li-content-width">{{contractInfo.balance | balanceValue}}</div>
                </li>
                <li>
                  <div class="li-width">{{$t("listHeader.percentage")}}: </div>
                  <div class="li-content-width">{{contractInfo.percentage}}</div>
                </li>
                <li>
                  <div class="li-width">{{$t("listHeader.txcount")}}: </div>
                  <router-link :to="{path: '/transaction'}">
                    <div class="li-content-width li-content-link">{{contractInfo.txcount | txcountValue}}</div>
                  </router-link>
                </li>
                <li>
                  <el-table
                    class="list-wrap"
                    :empty-text="$t('message.noData')"
                    :data="contractInfo.txs"
                    style="width: 100%; background: transparent">
                    <el-table-column
                      prop="age"
                      width="120"
                      :label="$t('listHeader.age')">
                    </el-table-column>
                    <el-table-column
                      prop="amount"
                      width="100"
                      :label="$t('listHeader.amount')">
                    </el-table-column>
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
                        <span class="list-content">{{scope.row.from}}</span>
                      </template>
                    </el-table-column>
                    <el-table-column
                      prop="hash"
                      width="200"
                      :label="$t('listHeader.hash')">
                      <template slot-scope="scope">
                        <span class="list-content">{{scope.row.hash}}</span>
                      </template>
                    </el-table-column>
                    <el-table-column
                      prop="inorout"
                      width="100"
                      :label="$t('listHeader.inorout')">
                      <template slot-scope="scope">
                        <span class="list-content">{{scope.row.inorout}}</span>
                      </template>
                    </el-table-column>
                    <el-table-column
                      prop="to"
                      width="200"
                      :label="$t('listHeader.to')">
                      <template slot-scope="scope">
                        <span class="list-content">{{scope.row.to}}</span>
                      </template>
                    </el-table-column>
                    <el-table-column
                      prop="txfee"
                      :label="$t('listHeader.txfee')">
                    </el-table-column>
                  </el-table>
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
import Header from '../header'
import smHeader from '../sm-header'
import searchInput from '../search-input'
import ContractDescribe from '../describe'
import Footer from '../footer'
import { formatNumber } from '../../untils/format'
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
    balanceValue (value) {
      return formatNumber(value)
    },
    txcountValue (value) {
      return formatNumber(value)
    }
  },
  methods: {
    ...mapActions(['getContractDetail']),
    getDetail (height) {
      this.getContractDetail(height)
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
