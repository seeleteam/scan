<template>
  <div class="char-content-wrap">
    <div class="char-title">
      {{$t("char.blockchain")}}
    </div>
    <ShardCharSelect></ShardCharSelect>
    <el-row :gutter="20" class="char-el-row">
      <el-col :xs="24" :span="6" class="char-el-col">
        <div class="char-content" @click="showBlockCount">
          <div class="char-content-title">{{$t('charMark.block.countTitle')}}</div>
          <div class="char-content-img">
            <img src="../../assets/imgs/char/line3.png" alt="line char">
          </div>
          <div class="char-content-mask">
            <div class="char-content-title">{{$t('charMark.block.countTitle')}}</div>
            <div class="char-content-content">{{$t('charMark.block.countContent')}}</div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :span="6" class="char-el-col">
        <div class="char-content" @click="showBlockavgtime">
          <div class="char-content-title">{{$t('charMark.block.timeTitle')}}</div>
          <div class="char-content-img">
            <img src="../../assets/imgs/char/line1.png" alt="line char">
          </div>
          <div class="char-content-mask">
            <div class="char-content-title">{{$t('charMark.block.timeTitle')}}</div>
            <div class="char-content-content">{{$t('charMark.block.timeContent')}}</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-dialog :title="$t('statcharts.block.countName')" :visible.sync="blockCountVisible">
      <BlockCountChart></BlockCountChart>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="blockCountVisible = false">{{$t('button.confirm')}}</el-button>
      </div>
    </el-dialog>
    <el-dialog :title="$t('statcharts.block.avgTimeName')" :visible.sync="blockavgtimeVisible">
      <BlockAvgTimeChart></BlockAvgTimeChart>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="blockavgtimeVisible = false">{{$t('button.confirm')}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import BlockCountChart from './charts/chart-blockcount'
import BlockAvgTimeChart from './charts/chart-blockavgtime'
import ShardCharSelect from '../shard-char-select'

export default {
  data () {
    return {
      blockCountVisible: false,
      blockavgtimeVisible: false
    }
  },
  components: {
    BlockCountChart,
    BlockAvgTimeChart,
    ShardCharSelect
  },
  methods: {
    showBlockCount () {
      this.blockCountVisible = true
    },
    showBlockavgtime () {
      this.blockavgtimeVisible = true
    }
  }
}
</script>

<style lang="less">
  @import "../../assets/css/char.less";
</style>
