<template>
  <div class="char-content-wrap">
    <div class="char-title">
      {{$t("char.mining")}}
    </div>
    <ShardCharSelect></ShardCharSelect>
    <el-row :gutter="20" class="char-el-row">
      <el-col :xs="24" :span="6" class="char-el-col">
        <div class="char-content" @click="showMinerTopByBlock">
          <div class="char-content-title">{{$t('charMark.miner.title')}}</div>
          <div class="char-content-img">
            <img src="../../assets/imgs/char/pie.png" alt="line char">
          </div>
           <div class="char-content-mask">
            <div class="char-content-title">{{$t('charMark.miner.title')}}</div>
            <div class="char-content-content">{{$t('charMark.miner.content')}}</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-dialog :title="$t('statcharts.miner.minerByBlockName')" :visible.sync=" minerTopByBlockVisible">
      <div class="lg-show">
        <MinerTopByBlockChart></MinerTopByBlockChart>
      </div>
      <div class="sm-show">
        <MinerTopByBlockPhoneChart></MinerTopByBlockPhoneChart>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="minerTopByBlockVisible = false">{{$t('button.confirm')}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import MinerTopByBlockChart from './charts/chart-miner'
import ShardCharSelect from '../shard-char-select'
import MinerTopByBlockPhoneChart from './charts/chart-miner-phone'
export default {
  data () {
    return {
      minerTopByBlockVisible: false
    }
  },
  components: {
    MinerTopByBlockChart,
    MinerTopByBlockPhoneChart,
    ShardCharSelect
  },
  methods: {
    showMinerTopByBlock () {
      this.minerTopByBlockVisible = true
    }
  }
}
</script>

<style lang="less">
  @import "../../assets/css/char.less";
</style>
