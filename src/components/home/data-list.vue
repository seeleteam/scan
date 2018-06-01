<template>
  <div>
    <div class="el-row-wrap lg-show">
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <el-container>
              <el-aside class="img-wrap">
                <img src="../../assets/imgs/data/BESTBLOCK.png" :alt="$t('blockStat.bestBlock')">
              </el-aside>
              <div class="data-wrap">
                <div class="data-title">{{$t("blockStat.bestBlock")}}</div>
                <div class="data-content"># {{bestBlock | bastBlockValue}}</div>
              </div>
            </el-container>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <el-container>
              <el-aside class="img-wrap">
                <img src="../../assets/imgs/data/LASTBLOCK.png" :alt="$t('blockStat.lastBlock')">
              </el-aside>
              <div class="data-wrap">
                <div class="data-title">{{$t("blockStat.lastBlock")}}</div>
                <div class="data-content">{{lastBlock}}</div>
              </div>
            </el-container>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <el-container>
              <el-aside class="img-wrap">
                <img src="../../assets/imgs/data/AVGBLOCKTIME.png" :alt="$t('blockStat.avgBLockTime')">
              </el-aside>
              <div class="data-wrap">
                <div class="data-title">{{$t("blockStat.avgBLockTime")}}</div>
                <div class="data-content">{{avgBlockTime | avgValue}}</div>
              </div>
            </el-container>
          </div>
        </el-col>
        <!-- <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-container>
              <el-aside class="img-wrap">
                <img src="../../assets/imgs/data/ACTIVENODES.png" :alt="$t('blockStat.activeNodes')">
              </el-aside>
              <div class="data-wrap">
                <div class="data-title">{{$t("blockStat.activeNodes")}}</div>
                <div class="data-content">0</div>
              </div>
            </el-container>
          </div>
        </el-col> -->
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <el-container>
              <el-aside class="img-wrap">
                <img src="../../assets/imgs/data/TRANSACTIONS.png" :alt="$t('blockStat.tranSactions')">
              </el-aside>
              <div class="data-wrap">
                <div class="data-title">{{$t("blockStat.tranSactions")}}</div>
                <div class="data-content">{{txCount | tranSactionsValue}}</div>
              </div>
            </el-container>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <el-container>
              <el-aside class="img-wrap">
                <img src="../../assets/imgs/data/HASHRATE.png" :alt="$t('blockStat.tranSactions')">
              </el-aside>
              <div class="data-wrap">
                <div class="data-title">{{$t("blockStat.hashRate")}}</div>
                <div class="data-content">{{hashRate | hashRateFilter}}</div>
              </div>
            </el-container>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <el-container>
              <el-aside class="img-wrap">
                <img src="../../assets/imgs/data/DIFFICULTY.png" :alt="$t('blockStat.tranSactions')">
              </el-aside>
              <div class="data-wrap">
                <div class="data-title">{{$t("blockStat.networkDifficulty")}}</div>
                <div class="data-content">{{networkDifficulty | networkDifficultyFilter}}</div>
              </div>
            </el-container>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-row class="row-bg sm-el-row-wrap sm-show">
      <el-col :span="24" class="el-col-wrap el-col-best">
        <div class="grid-content bg-purple">
          <el-container>
            <el-aside class="img-wrap">
              <img src="../../assets/imgs/sm-data/BESTBLOCK.png" :alt="$t('blockStat.bestBlock')">
            </el-aside>
            <div class="data-wrap">
              <div class="data-title"># {{bestBlock | bastBlockValue}}</div>
              <div class="data-content">{{$t("blockStat.bestBlock")}}</div>
            </div>
          </el-container>
        </div>
      </el-col>
      <el-col :span="24" class="el-col-wrap el-col-last">
        <div class="grid-content bg-purple">
          <el-container>
            <el-aside class="img-wrap">
              <img src="../../assets/imgs/sm-data/LASTBLOCK.png" :alt="$t('blockStat.lastBlock')">
            </el-aside>
            <div class="data-wrap">
              <div class="data-title">{{lastBlock}}</div>
              <div class="data-content">{{$t("blockStat.lastBlock")}}</div>
            </div>
          </el-container>
        </div>
      </el-col>
      <el-col :span="24" class="el-col-wrap el-col-avg">
        <div class="grid-content bg-purple">
          <el-container>
            <el-aside class="img-wrap">
              <img src="../../assets/imgs/sm-data/AVGBLOCKTIME.png" :alt="$t('blockStat.avgBLockTime')">
            </el-aside>
            <div class="data-wrap">
              <div class="data-title">{{avgBlockTime | avgValue}}</div>
              <div class="data-content">{{$t("blockStat.avgBLockTime")}}</div>
            </div>
          </el-container>
        </div>
      </el-col>
      <!-- <el-col :span="24" class="el-col-wrap el-col-active">
        <div class="grid-content bg-purple">
          <el-container>
            <el-aside class="img-wrap">
              <img src="../../assets/imgs/sm-data/ACTIVENODES.png" :alt="$t('blockStat.activeNodes')">
            </el-aside>
            <div class="data-wrap">
              <div class="data-title">0</div>
              <div class="data-content">{{$t("blockStat.activeNodes")}}</div>
            </div>
          </el-container>
        </div>
      </el-col> -->
      <el-col :span="24" class="el-col-wrap el-col-tran">
        <div class="grid-content bg-purple">
          <el-container>
            <el-aside class="img-wrap">
              <img src="../../assets/imgs/sm-data/TRANSACTIONS.png" :alt="$t('blockStat.tranSactions')">
            </el-aside>
            <div class="data-wrap">
              <div class="data-title">{{txCount | tranSactionsValue}}</div>
              <div class="data-content">{{$t("blockStat.tranSactions")}}</div>
            </div>
          </el-container>
        </div>
      </el-col>
      <el-col :span="24" class="el-col-wrap el-col-hashrate">
        <div class="grid-content bg-purple">
          <el-container>
            <el-aside class="img-wrap">
              <img src="../../assets/imgs/sm-data/HASHRATE.png" :alt="$t('blockStat.hashRate')">
            </el-aside>
            <div class="data-wrap">
              <div class="data-title">{{hashRate | hashRateFilter}}</div>
              <div class="data-content">{{$t("blockStat.hashRate")}}</div>
            </div>
          </el-container>
        </div>
      </el-col>
      <el-col :span="24" class="el-col-wrap el-col-difficulty">
        <div class="grid-content bg-purple">
          <el-container>
            <el-aside class="img-wrap">
              <img src="../../assets/imgs/sm-data/DIFFICULTY.png" :alt="$t('blockStat.networkDifficulty')">
            </el-aside>
            <div class="data-wrap">
              <div class="data-title">{{networkDifficulty | networkDifficultyFilter}}</div>
              <div class="data-content">{{$t("blockStat.networkDifficulty")}}</div>
            </div>
          </el-container>
        </div>
      </el-col>
    </el-row>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import { formatNumber, formatTime, formatCount, formatDifficulty, formatAvgNetHashRate } from '../../untils/format'

export default {
  data () {
    return {
    }
  },
  mounted () {
    this.dataList()
  },
  computed: {
    txCount: {
      get () {
        return this.$store.state.home.txCount
      }
    },
    lastBlock: {
      get () {
        return this.$store.state.home.lastBlock
      }
    },
    bestBlock: {
      get () {
        return this.$store.state.home.bestBlock
      }
    },
    avgBlockTime: {
      get () {
        return this.$store.state.home.avgBlockTime
      }
    },
    hashRate: {
      get () {
        return this.$store.state.home.hashRate
      }
    },
    networkDifficulty: {
      get () {
        return this.$store.state.home.networkDifficulty
      }
    }
  },
  filters: {
    bastBlockValue (value) {
      return formatNumber(value)
    },
    tranSactionsValue (value) {
      return formatCount(value)
    },
    avgValue (value) {
      return formatTime(value)
    },
    hashRateFilter (value) {
      return formatAvgNetHashRate(value)
    },
    networkDifficultyFilter (value) {
      return formatDifficulty(value)
    }
  },
  methods: {
    ...mapActions(['getTxCount', 'getLastBlock', 'getBestBlock', 'getAvgBlockTime', 'getHashRate', 'getNetworkDifficulty']),
    dataList () {
      this.getTxCount()
      this.getLastBlock()
      this.getBestBlock()
      this.getAvgBlockTime()
      this.getHashRate()
      this.getNetworkDifficulty()
    }
  }
}
</script>

<style lang="less">
.el-row-wrap {
  width: 1200px;
  margin: 0 10px;
  .img-wrap {
    position: relative;
    width: 40px !important;
    img {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
    }
  }
  .data-wrap {
    padding: 0;
    // padding-left: 10px;
    color: #23479c;
    text-align: right;
    .data-title {
      margin-bottom: 10px;
      font-size: 12px;
    }
    .data-content {
      font-size: 18px;
    }
  }
}
@media screen and (max-width: 768px ) {
  .sm-el-row-wrap{
    color: #fff;
    margin: 0 20px 40px 20px;
    .el-col-wrap {
      position: relative;
      width: 100%;
      margin: 5px 0;
      padding: 20px 22px;
      border-radius: 10px;
      .img-wrap {
        position: relative;
        width: 60px !important;
        height: 60px;
        img {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
        }
      }
      .data-wrap {
        position: absolute;
        right: 22px;
        top: 50%;
        transform: translateY(-50%);
        text-align: right;
        .data-title {
          font-weight: 600;
          font-size: 28px;
          margin-bottom: 10px;
        }
        .data-content {
          font-size: 12px;
        }
      }
    }
    .el-col-best{
      background: #1bce5a;
    }
    .el-col-last{
      background: #0fb6da;
    }
    .el-col-avg{
      background: #daad0f;
    }
    .el-col-active{
      background: #6b23bc;
    }
    .el-col-tran{
      background: #d2257f;
    }
    .el-col-hashrate{
      background: #6b23bc;
    }
    .el-col-difficulty{
      background: #254ad2;
    }
  }
}
</style>
