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
                <span>{{ lastBlockList.lastblockHeight | balanceValueFilter }}</span>
                <span>({{ lastBlockList.lastblockTime }}s)</span>
              </dd>
            </dl>
            <dl>
              <dt><img src="../../assets/imgs/transaction.png"></dt>
              <dd>
                <span>Transactions</span>
                <span>{{ transactionTotal | balanceValueFilter }}</span>
                <span>({{ blockTxsTps }} TPS)</span>
              </dd>
            </dl>
            <dl>
              <dt><img src="../../assets/imgs/account.png"></dt>
              <dd>
                <span>Accounts</span>
                <span>{{ accountTotal | balanceValueFilter }}</span>
              </dd>
            </dl>
            <dl>
              <dt><img src="../../assets/imgs/contract.png"></dt>
              <dd>
                <span>Contracts</span>
                <span>{{ contractTotal | balanceValueFilter }}</span>
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
                <span>Account Balance Rankings</span>
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
                    <span class="integerStyle">{{ item.balance | balanceValueInteger }}</span>
                    <span class="decimalStyle">{{ item.balance | balanceValueDecimal }}</span>
                    <span class="unit">Seele</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="minerRank">
              <h3>
                <span>Miner Revenue Rankings</span>
                <router-link :to="{path: '/account'}">
                  <span class="more">More
                    <i class="el-icon-arrow-right"></i>
                  </span>
                </router-link>
              </h3>
              <table class="minerRankTable">
                <thead>
                  <th>Rank</th>
                  <th>Address</th>
                  <th>Miner Reward (Seele)</th>
                  <th>Tx Fee (Fan)</th>
                  <th>Revenue (Seele)</th>
                </thead>
                <tr v-for="(item, index) in minerRanking" :key="index + 1">
                  <td>NO.{{ index + 1 }}</td>
                  <td>
                    <el-popover placement="top" trigger="hover" :content="item.Address">
                      <el-button style="none" slot="reference">
                        <router-link :to="{path: '/account/detail', query: { address: item.Address }}">
                          {{ item.Address }}
                        </router-link>
                      </el-button>
                    </el-popover>
                  </td>
                  <td>
                    <el-popover trigger="hover" placement="top" :content="item.Reward | balanceValuePopup">
                      <el-button style="none" slot="reference">
                        <span class="integerStyle">{{ item.Reward | balanceValueInteger }}</span>
                        <span class="decimalStyle">{{ item.Reward | balanceValueDecimal }}</span>
                      </el-button>
                    </el-popover>
                  </td>
                  <td>
                    <el-popover trigger="hover" placement="top" :content="item.TxFee | balanceValueFilter">
                      <el-button style="none" slot="reference">
                        {{ item.TxFee | balanceValueFilter }}
                      </el-button>
                    </el-popover>
                  </td>
                  <td>
                    <el-popover trigger="hover" placement="top" :content="item.Revenue | balanceValuePopup">
                      <el-button style="none" slot="reference">
                        <span class="integerStyle">{{ item.Revenue | balanceValueInteger }}</span>
                        <span class="decimalStyle">{{ item.Revenue | balanceValueDecimal }}</span>
                      </el-button>
                    </el-popover>
                  </td>
                </tr>
              </table>
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
      isLogo: true,
      content: ''
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
    balanceValuePopup (value) {
      var stringVal = (value / 100000000).toString()
      if (!/^\d+$/.test(stringVal)) {
        var valueSplit = stringVal.split('.')
        var integer = valueSplit[0]
        var decimal = valueSplit[1]
        return integer + '.' + decimal
      } else if (/^\d+$/.test(stringVal)) {
        return formatNumber(value / 100000000)
      } else {
        return formatNumber(value)
      }
    },
    balanceValueFilter (value) {
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
      width: calc(27% - 4px);
      height: 60px;
      display: inline-block;
      &:nth-child(2){
        width: calc(30% - 4px);
      }
      &:nth-child(3){
        width: calc(23% - 4px);
      }
      &:last-child{
        width: calc(18% - 4px);
      }
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
                padding-left: 20px;
              }
              &:nth-child(3){
                padding-left: 3px;
                color: #999;
              }
              &:nth-child(4){
                color: #23479c;
                padding-left: 10px;
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
      a{
        color: #3498db;
        display: inherit;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .minerRankTable{
        width: 100%;
        font-size: 14px;
        border-collapse:collapse;
        thead th{
          font-weight: lighter;
          text-align: left;
          white-space: nowrap;
          padding: 13px 0;
          &:nth-child(3){
            font-size: 12px;
          }
        }
        tr:last-child td{
          padding: 9px 0 10px 0;
        }
        tr td{
          padding: 6px 0;
        }
        thead,tr:nth-child(odd){
          background: #f6f6f6;
        }
        thead th:nth-child(1),tr td:nth-child(1){
          width: 60px;
          padding-left: 20px;
        }
        thead th:nth-child(2),tr td:nth-child(2){
          width: 120px;
        }
        thead th:nth-child(3),tr td:nth-child(3){
          width: 130px;
          padding-left: 10px;
        }
        thead th:nth-child(4),tr td:nth-child(4){
          width: 100px;
        }
        thead th:nth-child(5),tr td:nth-child(5){
          width: 160px;
        }
      }
    }
  }
  .unit{
    color:#23479c;
  }
  .minerRankTable tr td:nth-child(2) .el-button,.minerRankTable tr td:nth-child(3) .el-button,
  .minerRankTable tr td:nth-child(4) .el-button,.minerRankTable tr td:nth-child(5) .el-button {
      height: 14px;
      display: inline-block;
      font-size: 14px;
      line-height:unset;
      white-space: nowrap;
      cursor: pointer;
      background: none;
      border: none;
      color: #3498db;
      text-align: center;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      margin: 0;
      -webkit-transition: none;
      transition: none;
      font-weight: unset;
      padding: 0;
      border-radius: 0;
      span{
        a{
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
  }
  .minerRankTable tr td:nth-child(2) .el-button{
    margin:2px 0 0 0;
    span{
        a{
          width: 120px;
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
    }
  }
  .minerRankTable tr td:nth-child(3) .el-button,
  .minerRankTable tr td:nth-child(4) .el-button,
  .minerRankTable tr td:nth-child(5) .el-button {
    color: #333;
      span{
        margin: 2px 0 0 0;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
  }
  .minerRankTable tr td:nth-child(3) .el-button,
  .minerRankTable tr td:nth-child(4) .el-button,
  .minerRankTable tr td:nth-child(5) .el-button {
    span:nth-child(2){
      margin-left: -3px;
    }
  }
  .minerRankTable tr th:nth-child(3){
     font-size: 12px;
  }
  .minerRankTable tr td:nth-child(1) span{
    color: #999;
  }
  .minerRankTable tr:nth-child(2) td:nth-child(1){
    color: #d8645e;
  }
  .minerRankTable tr:nth-child(3) td:nth-child(1){
    color: #c3a963;
  }
  .minerRankTable tr td:nth-child(2) .el-button{
    &:hover{
      text-decoration: underline;
    }
  }
  .minerRankTable tr:nth-child(4) td:nth-child(1){
    color: #8fc31f;
  }
}
.changeStyle{
  display: inline;
  margin: 0;
  padding: 0;
  font-family: Helvetica;
}
.decimalStyle{
  color: #999;
  margin-left:-2px;
}
.integerStyle{
  color: #333;
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
