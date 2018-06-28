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
            <div class="describe-title-wrap">
              <span class="title">{{$t('navs.contract')}}</span>
              <ul class="link-wrap">
                <li><a href="/">{{$t("navs.home")}}</a></li>
                <li><i class="el-icon-arrow-right"></i></li>
                <li class="current">{{$t('navs.contract')}}</li>
              </ul>
            </div>
            <ShardSelect></ShardSelect>
            <el-table
              class="list-wrap"
              :empty-text="$t('message.noData')"
              :data="contractList"
              style="width: 100%">
              <el-table-column
                prop="address"
                width="400"
                :label="$t('listHeader.address')">
                <template slot-scope="scope">
                  <router-link :to="{path: '/contract/detail', query: { address: scope.row.address }}">
                    <span class="table-link-color list-content">{{scope.row.address}}</span>
                  </router-link>
                </template>
              </el-table-column>
              <el-table-column
                prop="balance"
                :label="$t('listHeader.balance')"
                width="300">
                <template slot-scope="scope">
                    <span class="list-content">{{scope.row.balance | balanceValue}}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="percentage"
                :label="$t('listHeader.percentage')"
                width="300">
                  <template slot-scope="scope">
                    <span class="list-content">{{scope.row.percentage | filterPercent}}</span>
                  </template>
              </el-table-column>
              <el-table-column
                prop="txcount"
                :label="$t('listHeader.txcount')">
                <template slot-scope="scope">
                    <span class="list-content">{{scope.row.txcount | txcountValue}}</span>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
              class="el-pagination-wrap fr"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="page"
              :page-size="pageSize"
              layout="prev, pager, next"
              :total="total">
            </el-pagination>
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
@import "../../assets/css/list.less";
</style>
