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
            <BlockDescribe
              :title="title"
              :content="content"
              :link="link"
            ></BlockDescribe>
            <ShardSelect></ShardSelect>
            <el-table
              class="list-wrap"
              :data="blocksList"
              :empty-text="$t('message.noData')"
              style="width: 100%">
              <el-table-column
                prop="height"
                :label="$t('listHeader.height')"
                min-width="120">
                <template slot-scope="scope" class="">
                  <router-link :to="{path: '/block/detail', query: { height: scope.row.height }}">
                    <span class="table-link-color height">{{scope.row.height}}</span>
                  </router-link>
                </template>
              </el-table-column>
              <el-table-column
                prop="age"
                :label="$t('listHeader.age')"
                min-width="120">
                <template slot-scope="scope">
                  <span class="age">{{scope.row.age}}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="txn"
                min-width="100"
                :label="$t('listHeader.txn')">
                <template slot-scope="scope">
                  <router-link :to="{path: '/transaction', query: { block: scope.row.height }}">
                    <span class="table-link-color">{{scope.row.txn}}</span>
                  </router-link>
                </template>
              </el-table-column>
              <!-- <el-table-column
                prop="address"
                :label="$t('listHeader.uncles')">
              </el-table-column> -->
              <el-table-column
                prop="miner"
                min-width="600"
                :label="$t('listHeader.miner')">
                <template slot-scope="scope">
                  <span class="list-content miner">{{scope.row.miner}}</span>
                </template>
              </el-table-column>
              <!-- <el-table-column
                prop="address"
                :label="$t('listHeader.gasLimit')">
              </el-table-column>
              <el-table-column
                prop="address"
                :label="$t('listHeader.difficulty')">
              </el-table-column>
              <el-table-column
                prop="address"
                :label="$t('listHeader.hashRate')">
              </el-table-column>
              <el-table-column
                prop="address"
                :label="$t('listHeader.reward')">
              </el-table-column> -->
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
import BlockDescribe from '../describe'
import Footer from '../footer'
import ShardSelect from '../shard-select'

export default {
  data () {
    return {
      isDetail: false,
      title: this.$t('navs.block'),
      content: 'A total of more than > 10,000,000 blocks found (showing the last 100000 records only)',
      link: this.$t('navs.block'),

      pageSize: 25
    }
  },
  components: {
    Header,
    smHeader,
    searchInput,
    BlockDescribe,
    Footer,
    ShardSelect
  },
  mounted () {
    this.getList(1)
  },
  computed: {
    blocksList: {
      get () {
        return this.$store.state.block.blocksList
      }
    },
    page: {
      get () {
        return this.$store.state.block.page
      }
    },
    total: {
      get () {
        return this.$store.state.block.total
      }
    },
    shardValue: {
      get () {
        return this.$store.state.shard.shardValue
      }
    }
  },
  methods: {
    ...mapActions(['getBlocksList']),

    handleSizeChange (val) {
      this.getList(val, this.shardValue)
    },
    handleCurrentChange (val) {
      this.getList(val, this.shardValue)
    },
    getList (page) {
      this.getBlocksList([page, this.shardValue])
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
