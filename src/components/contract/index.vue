<template>
    <el-container class="page-wrap">
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
            <el-table
              class="list-wrap"
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="name"
                :label="$t('listHeader.address')"
                width="180">
                <template slot-scope="scope">
                  <span class="table-link-color">{{scope.row.name}}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="name"
                :label="$t('listHeader.contractName')"
                width="180">
                <template slot-scope="scope">
                  <span class="table-link-color">{{scope.row.name}}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="name"
                :label="$t('listHeader.compiler')"
                width="180">
                <template slot-scope="scope">
                  <span class="table-link-color">{{scope.row.name}}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                :label="$t('listHeader.balance')">
              </el-table-column>
              <el-table-column
                prop="address"
                :label="$t('listHeader.txCount')">
              </el-table-column>
              <el-table-column
                prop="address"
                :label="$t('listHeader.settings')">
              </el-table-column>
              <el-table-column
                prop="address"
                :label="$t('listHeader.dateVerified')">
              </el-table-column>
            </el-table>
            <el-pagination
              class="el-pagination-wrap fr"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-size="pageSize"
              layout="prev, pager, next"
              :total="total">
            </el-pagination>
          </div>
        </div>
        <Footer></Footer>
    </el-container>
</template>
<script>
import Header from '../header'
import smHeader from '../sm-header'
import searchInput from '../search-input'
import ContractDescribe from '../describe'
import Footer from '../footer'
export default {
  data () {
    return {
      title: this.$t('navs.contract'),
      content: 'Showing Block (#5466185 to #5466161) out of 5466211 total blocks',
      link: 'contract',

      currentPage: 1,
      pageSize: 10,
      total: 200,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  components: {
    Header,
    smHeader,
    searchInput,
    ContractDescribe,
    Footer
  },
  methods: {
    handleSizeChange (val) {
    },
    handleCurrentChange (val) {
    }
  }
}
</script>
<style lang="less">
@import "../../assets/css/page.less";
@import "../../assets/css/list.less";
</style>
