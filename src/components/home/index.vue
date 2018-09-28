<template>
  <div class="el-home-wrap">
    <!-- pc header -->
    <Header></Header>
    <!-- mobile header -->
    <div class="sm-show page-sm-header-wrap">
      <smHeader :isLogo="isLogo"></smHeader>
    </div>
    <!-- main start -->
    <div class="main-wrap main-bg">
      <div class="wrap">
        <!-- pc start -->
        <div class="pc-main">
          <!-- total data show -->
          <div class="data-show">
            <dl>
              <dt><img src="../../assets/imgs/lastblock.png"></dt>
              <dd>
                <span>Last Block</span>
                <span>9,951,173</span>
                <span>(31s)</span>
              </dd>
            </dl>
            <dl>
              <dt><img src="../../assets/imgs/transaction.png"></dt>
              <dd>
                <span>Transaction</span>
                <span>{{ transactionTotal | balanceValue }} M</span>
                <span>({{ blockTxsTps }} TPS)</span>
              </dd>
            </dl>
            <dl>
              <dt><img src="../../assets/imgs/account.png"></dt>
              <dd>
                <span>Accounts</span>
                <span>658</span>
              </dd>
            </dl>
            <dl>
              <dt><img src="../../assets/imgs/contract.png"></dt>
              <dd>
                <span>Contracts</span>
                <span>229</span>
              </dd>
            </dl>
          </div>
          <!-- chart -->
          <div class="data-chart">
            <indexChart></indexChart>
          </div>
          <!-- rank list -->
          <div class="data-list">
            <div class="accountRank">
              <h3>
                <span>Account Balance Leaderboard</span>
                <router-link :to="{path: '/account'}">
                  <span class="more">More
                    <i class="el-icon-arrow-right"></i>
                  </span>
                </router-link>
              </h3>
              <div class="accountList" v-for="(item, index) in accountRanking" :key="index + 1">
                <span class="number">NO.{{ index + 1 }}</span>
                <ul>
                  <li>
                    <span>Hash</span>
                    <el-popover placement="top-start" trigger="hover" :content="item.address">
                      <el-button style="none" slot="reference">
                        <router-link :to="{path: '/account/detail', query: { address: item.address }}">
                          {{ item.address }}
                        </router-link>
                      </el-button>
                    </el-popover>
                  </li>
                  <!-- <li>
                    <span>Percebtage</span>
                    <span>{{ item.percentage }}</span>
                  </li> -->
                  <li>
                    <span>Balance</span>
                    <span>{{ item.balance | balanceValue }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="minerRank">
              <h3>
                <span>Miner Revenue Rankings</span>
              </h3>
              <el-table :data="minerRanking" stripe style="width: 100%" :empty-text="$t('message.noData')">
                <el-table-column label="Rank" width="70" align="center">
                  <template slot-scope="scope">
                    <span>NO.{{ scope.$index + 1 }}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="Address" label="Address" width="150" align="center">
                  <template slot-scope="scope">
                    <el-popover placement="top-start" trigger="hover" :content="scope.row.Address">
                      <el-button style="none" slot="reference">
                        <router-link :to="{path: '/account/detail', query: { address: scope.row.Address }}">
                          {{ scope.row.Address }}
                        </router-link>
                      </el-button>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column prop="Reward" label="Miner Reward" width="124" align="center">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" :content="scope.row.Reward | balanceValue">
                      <el-button style="none" slot="reference">
                        {{ scope.row.Reward | balanceValue }}
                      </el-button>
                  </el-popover>
                </template>
                </el-table-column>
                <el-table-column prop="TxFee" label="TxFee" width="80" align="center">
                  <template slot-scope="scope">
                    <span>{{ scope.row.TxFee | balanceValue }}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="Balance" label="Total Mining Awards" width="166" align="center">
                  <template slot-scope="scope">
                    <span>{{ scope.row.Balance | balanceValue }}</span>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
        <!-- pc end -->
        <!-- mobile start -->
        <div class="main-content-wrap">
          <div class='home-logo-wrap lg-show'>
            <img src="../../assets/imgs/logo.png" alt="logo">
          </div>
          <div class="home-search-wrap">
            <div class='sm-home-logo-wrap sm-show'>
              <img src="../../assets/imgs/logo.png" alt="logo">
            </div>
            <searchInput></searchInput>
          </div>
          <div class="home-data-list-wrap">
            <dataList></dataList>
          </div>
        </div>
        <!-- mobile end -->
      </div>
    </div>
    <!-- main end -->
    <!-- footer -->
    <Footer></Footer>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import Header from '../header'
import smHeader from '../sm-header'
import searchInput from '../search-input'
import indexChart from './index-chart'
import { formatNumber, formatAccountPercent } from '../../untils/format'
import Footer from '../footer'
export default {
  data () {
    return {
      isLogo: true
    }
  },
  components: {
    Header,
    smHeader,
    searchInput,
    indexChart,
    Footer
  },
  computed: {
    lastBlockList: {
      get () {
        return this.$store.state.home.lastBlockList
      }
    },
    transactionTotal: {
      get () {
        return this.$store.state.home.transactionTotal
      }
    },
    blockTxsTps: {
      get () {
        return this.$store.state.home.blockTxsTps
      }
    },
    accountTotal: {
      get () {
        return this.$store.state.home.accountTotal
      }
    },
    contractTotal: {
      get () {
        return this.$store.state.home.contractTotal
      }
    },
    chartData: {
      get () {
        return this.$store.state.home.chartData
      }
    },
    accountRanking: {
      get () {
        return this.$store.state.home.accountRanking
      }
    },
    minerRanking: {
      get () {
        return this.$store.state.home.minerRanking
      }
    }
  },
  filters: {
    balanceValue (value) {
      return formatNumber(value)
    },
    filterPercent (value) {
      return formatAccountPercent(value)
    }
  },
  mounted () {
    this.dataShowList()
  },
  methods: {
    ...mapActions([
      'getLastBlockTime',
      'getTransactionTotal',
      'getBlockTxsTps',
      'getAccountTotal',
      'getContractTotal',
      'getChartData',
      'getAccountRanking',
      'getMinerRanking'
    ]),
    dataShowList () {
      this.getLastBlockTime()
      this.getTransactionTotal()
      this.getBlockTxsTps()
      this.getAccountTotal()
      this.getContractTotal()
      this.getChartData()
      this.getAccountRanking()
      this.getMinerRanking()
    }
  }
}
</script>
<style lang='less'>
.el-home-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 1200px;
  .main-content-wrap {
    display: none;
    position: relative;
    margin-top: 220px;
    min-height: 370px;
    .home-logo-wrap {
      width: 100%;
      text-align: center;
      margin-bottom: 40px;
    }
    .home-search-wrap {
      margin: 0 270px;
    }
  }
  .home-data-list-wrap {
    position: absolute;
    bottom: 30px;
  }
  .main-wrap {
    flex: 1 0 auto;
  }
}
.pc-main {
  width: 1200px;
  .data-show {
    margin: 20px 0;
    padding: 45px 50px;
    background: #fff;
    dl {
      width: calc(25% - 4px);
      height: 60px;
      display: inline-block;
      dt {
        width: 60px;
        float: left;
      }
      dd {
        width: calc(100% - 79px);
        float: left;
        padding: 0 0 0 19px;
        span {
          color: #3498db;
          float: left;
          font-size: 18px;
        }
        span:first-child {
          width: 100%;
          float: left;
          color: #333;
          font-size: 16px;
          font-weight: bold;
          margin: 6px 0 14px 0;
        }
        span:nth-child(2) {
          margin-right: 10px;
        }
      }
    }
  }
  .data-chart {
    background: #fff;
  }
  .data-list{
    width: 100%;
    margin: 20px 0;
    display: inline-block;
    .accountRank{
      width: 590px;
      min-height: 970px;
      background: #fff;
      float: left;
      h3{
        width: calc(100% - 40px);
        padding: 0 20px;
        line-height: 50px;
        display: table;
        font-weight: normal;
        span{
          font-size: 16px;
          float: left;
          color: #333;
        }
        a{
          float: right;
          span.more{
            font-size: 12px;
            color: #9b9b9b;
          }
        }
        :hover{
          span.more{
            color: #3498db;
          }
        }
      }
      .accountList{
        height: 80px;
        margin-bottom: 10px;
        background: #f6f6f6;
        span.number{
          width: 80px;
          height: 80px;
          display: block;
          float: left;
          font-size:14px;
          line-height: 80px;
          text-align: center;
          background: #ccc;
          color: #fff;
        }
        ul{
          width: 470px;
          max-height: 80px;
          overflow: hidden;
          padding: 19px 20px 14px 20px;
          float: left;
          li{
            width: 100%;
            display: inline-block;
            font-size: 14px;
            color: #666;
            span{
              display: block;
              float: left;
              color: #666;
              padding-left: 20px;
              &:nth-child(2){
                color: #333;
              }
              .el-button {
                height: 25px;
                display: inline-block;
                font-size: 14px;
                line-height:unset;
                white-space: nowrap;
                cursor: pointer;
                background: none;
                border: none;
                color: #3498db;
                text-align: unset;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                margin: -2px 0 0 0;
                -webkit-transition: none;
                transition: none;
                font-weight: unset;
                padding: 0;
                border-radius: 0;
              }
              a{
                display: inline-block;
                color: #3498db;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              :hover{
                text-decoration: underline;
              }
            }
          }
          li:nth-child(3){
            width: 100%;
            padding-top: 7px;
          }
        }
      }
    }
    .accountList:nth-child(2) span.number{
      background: #d8645e;
    }
    .accountList:nth-child(3) span.number{
      background: #d8b75e;
    }
    .accountList:nth-child(4) span.number{
      background: #8fc31f;
    }
    .minerRank{
      width: 590px;
      min-height: 970px;
      background: #fff;
      float: right;
      h3{
        width: calc(100% - 40px);
        padding: 0 20px;
        line-height: 50px;
        display: table;
        font-weight: normal;
        span{
          font-size: 16px;
          float: left;
          color: #333;
        }
      }
      a{
        color: #3498db;
        display: inherit;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .unit{
    color:#23479c;
  }
  .el-table td div{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .el-table .el-table__row td:nth-child(2) div.cell .el-button {
      height: 14px;
      display: inline-block;
      font-size: 14px;
      line-height:unset;
      white-space: nowrap;
      cursor: pointer;
      background: none;
      border: none;
      color: #3498db;
      text-align: unset;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      margin: 0;
      -webkit-transition: none;
      transition: none;
      font-weight: unset;
      padding: 0;
      border-radius: 0;
      span{
        display: grid;
        a{
          width: 140px;
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
  }
  .el-table .el-table__row td:nth-child(3) div.cell .el-button {
      height: 14px;
      display: inline-block;
      font-size: 14px;
      line-height:unset;
      white-space: nowrap;
      cursor: pointer;
      background: none;
      border: none;
      color: #333;
      text-align: unset;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      margin: 4px 0 0 0;
      -webkit-transition: none;
      transition: none;
      font-weight: unset;
      padding: 0;
      border-radius: 0;
      span{
        display: grid;
        width: 114px;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
  }
  .el-table td, .el-table th{
    padding: 5px 0 3px 0;
  }
  .el-table .cell, .el-table th div{
    padding-right: 5px;
  }
  .el-table .cell, .el-table th div, .el-table--border td:first-child .cell, .el-table--border th:first-child .cell{
    padding-left: 5px;
  }
  .has-gutter .el-table td, .el-table th.is-leaf{
    background: #f6f6f6;
    font-weight: lighter;
    color: #333;
    font-size:14px;
    border: none;
  }
  .el-table--striped .el-table__body tr.el-table__row--striped.el-table__row--striped.el-table__row--striped td {
    background-color: #f6f6f6;
  }
  .el-table__body tr.el-table__row td:nth-child(1) span{
    color: #999;
  }
  .el-table__body tr.el-table__row:nth-child(1) td:nth-child(1) span{
    color: #d8645e;
  }
  .el-table__body tr.el-table__row:nth-child(2) td:nth-child(1) span{
    color: #c3a963;
  }
  .el-table__body tr.el-table__row:nth-child(3) td:nth-child(1) span{
    color: #8fc31f;
  }
}
@media screen and (max-width: 768px) {
  .el-home-wrap {
    position: static;
    height: 100%;
    height: 100%;
    min-width: 100%;
    .main-content-wrap {
      display: block;
      height: 100%;
      margin-top: 40px;
      .sm-home-logo-wrap {
        position: relative;
        top: -20px;
        width: 100%;
        text-align: center;
      }
      .home-search-wrap {
        margin: 0 20px;
        margin-top: 130px;
      }
    }
    .home-data-list-wrap {
      position: static;
      margin-top: 100px;
    }
    .main-bg {
      background: none;
    }
    .pc-main {
      display: none;
    }
  }
}
</style>
