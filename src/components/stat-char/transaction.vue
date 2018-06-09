<template>
  <div class="char-content-wrap">
    <div class="char-title">
      {{$t("char.transactions")}}
    </div>
    <ShardCharSelect></ShardCharSelect>
    <el-row :gutter="20" class="char-el-row">
      <el-col :xs="24" :span="6" class="char-el-col">
        <div class="char-content" @click="showTxHistory">
          <div class="char-content-title">{{$t('charMark.transactions.title')}}</div>
          <div class="char-content-img">
            <img src="../../assets/imgs/char/line2.png" alt="line char">
          </div>
          <div class="char-content-mask" @click="showTxHistory">
            <div class="char-content-title">{{$t('charMark.transactions.title')}}</div>
            <div class="char-content-content">{{$t('charMark.transactions.content')}}</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-dialog :title="$t('statcharts.transaction.historyTxName')" :visible.sync="txHistoryVisible">
      <TxHistoryChart></TxHistoryChart>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="txHistoryVisible = false">{{$t('button.confirm')}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import TxHistoryChart from './charts/chart-txhistory'
import ShardCharSelect from '../shard-char-select'

export default {
  data () {
    return {
      txHistoryVisible: false
    }
  },
  components: {
    TxHistoryChart,
    ShardCharSelect
  },
  methods: {
    showTxHistory () {
      this.txHistoryVisible = true
    }
  }
}
</script>

<style lang="less">
  @import "../../assets/css/char.less";
</style>
