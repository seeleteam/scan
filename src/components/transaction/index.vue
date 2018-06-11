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
              <span class="title">{{title}}</span>
              <span v-show="isShow" class="title-content">
              {{$t('forBlock')}} {{content}}
              </span>
              <ul class="link-wrap">
                <li><a href="/">{{$t("navs.home")}}</a></li>
                <li><i class="el-icon-arrow-right"></i></li>
                <li class="current">{{link}}</li>
              </ul>
            </div>
            <ShardSelect></ShardSelect>
            <el-table
              class="list-wrap"
              :data="transactionList"
              :empty-text="$t('message.noData')"
              style="width: 100%">
              <el-table-column
                prop="txHash"
                width="300"
                :label="$t('listHeader.txHash')">
                <template slot-scope="scope">
                  <router-link :to="{path: '/transaction/detail', query: { txhash: scope.row.txHash }}">
                    <span class="table-link-color list-content">{{scope.row.txHash}}</span>
                  </router-link>
                </template>
              </el-table-column>
              <el-table-column
                prop="age"
                :label="$t('listHeader.age')"
                width="100">
              </el-table-column>
              <el-table-column
                prop="block"
                :label="$t('listHeader.block')"
                width="100">
                <template slot-scope="scope">
                  <router-link :to="{path: '/block/detail', query: { height: scope.row.block, s: shardValue }}">
                    <span class="table-link-color list-content">{{scope.row.block}}</span>
                  </router-link>
                </template>
              </el-table-column>
              <el-table-column
                prop="from"
                width="300"
                :label="$t('listHeader.from')">
                <template slot-scope="scope">
                  <router-link :to="{path: '/account/detail', query: { address: scope.row.from }}">
                    <span class="table-link-color list-content">{{scope.row.from}}</span>
                  </router-link>
                </template>
              </el-table-column>
              <!-- <el-table-column
                prop="inorout"
                width="100"
                :label="$t('listHeader.inorout')">
                <template slot-scope="scope">
                  <span v-if="scope.row.inorout === true" class="list-content list-content-in">{{$t('tx.in')}}</span>
                  <span v-else class="list-content list-content-out">{{$t('tx.out')}}</span>
                </template>
              </el-table-column> -->
              <el-table-column
                prop="to"
                width="300"
                :label="$t('listHeader.to')">
                <template slot-scope="scope">
                  <router-link :to="{path: '/account/detail', query: { address: scope.row.to }}">
                    <span class="table-link-color list-content">{{scope.row.to}}</span>
                  </router-link>
                </template>
              </el-table-column>
              <el-table-column
                prop="value"
                width="100"
                :label="$t('listHeader.value')">
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
import TransactionDescribe from '../describe'
import Footer from '../footer'
import ShardSelect from '../shard-select'

export default {
  data () {
    return {
      title: this.$t('navs.transaction'),
      content: this.$route.query.block,
      isShow: false,
      link: this.$t('navs.transaction'),

      pageSize: 25
    }
  },
  mounted () {
    this.$route.query.block ? this.getBlockList(this.$route.query) : this.getList(1)
    this.isShow = this.$route.query.block ? !false : false
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
    shardValue: {
      get () {
        return this.$store.state.shard.shardValue
      }
    }
  },
  methods: {
    ...mapActions(['getTransactionList']),
    ...mapActions(['getTransactionBlock']),

    handleSizeChange (val) {
      this.getList(val, this.shardValue)
    },
    handleCurrentChange (val) {
      this.getList(val, this.shardValue)
    },
    getBlockList (blcok) {
      this.getTransactionBlock(blcok)
    },
    getList (page) {
      this.getTransactionList([page, this.shardValue])
    }
  },
  watch: {
    '$route' (to, from) {
      this.getList(1)
    },
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
