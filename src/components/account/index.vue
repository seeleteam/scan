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
            <ShardSelect></ShardSelect>
            <el-table
              class="list-wrap"
              :empty-text="$t('message.noData')"
              :data="accountList"
              style="width: 100%">
              <el-table-column
                prop="rank"
                width="120"
                :label="$t('listHeader.rank')">
              </el-table-column>
              <el-table-column
                prop="address"
                width="500"
                :label="$t('listHeader.address')">
                <template slot-scope="scope">
                  <router-link :to="{path: '/account/detail', query: { address: scope.row.address }}">
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
                width="120">
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
import AccountDescribe from '../describe'
import Footer from '../footer'
import { formatNumber } from '../../untils/format'
import ShardSelect from '../shard-select'

export default {
  data () {
    return {
      title: this.$t('navs.account'),
      content: 'Showing Block (#5466185 to #5466161) out of 5466211 total blocks',
      link: this.$t('navs.account'),
      pageSize: 25
    }
  },
  components: {
    Header,
    smHeader,
    searchInput,
    AccountDescribe,
    Footer,
    ShardSelect
  },
  mounted () {
    this.getList(1)
  },
  computed: {
    accountList: {
      get () {
        return this.$store.state.account.accountList
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
    },
    shardValue: {
      get () {
        return this.$store.state.shard.shardValue
      }
    }
  },
  methods: {
    ...mapActions(['getAccountList']),

    handleSizeChange (val) {
      this.getList(val, this.shardValue)
    },
    handleCurrentChange (val) {
      this.getList(val, this.shardValue)
    },
    getList (page) {
      this.getAccountList([page, this.shardValue])
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
