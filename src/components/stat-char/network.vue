<template>
  <div class="char-content-wrap">
    <div class="char-title">
      {{$t("char.network")}}
    </div>
    <ShardCharSelect></ShardCharSelect>
    <el-row :gutter="20" class="char-el-row">
      <el-col :xs="24" :span="6" class="char-el-col">
        <div class="char-content" @click="showHashRate">
          <div class="char-content-title">{{$t('charMark.network.hashTitle')}}</div>
          <div class="char-content-img">
            <img src="../../assets/imgs/char/line1.png" alt="line char">
          </div>
          <div class="char-content-mask">
            <div class="char-content-title">{{$t('charMark.network.hashTitle')}}</div>
            <div class="char-content-content">{{$t('charMark.network.hashContent')}}</div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :span="6" class="char-el-col">
        <div class="char-content" @click="showDifficulty">
          <div class="char-content-title">{{$t('charMark.network.diffTitle')}}</div>
          <div class="char-content-img">
            <img src="../../assets/imgs/char/line3.png" alt="line char">
          </div>
          <div class="char-content-mask">
            <div class="char-content-title">{{$t('charMark.network.diffTitle')}}</div>
            <div class="char-content-content">{{$t('charMark.network.diffContent')}}</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-dialog :title="$t('statcharts.network.hashrateName')" :visible.sync="hashRateVisible">
      <NetworkHashRateChart></NetworkHashRateChart>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="hashRateVisible = false">{{$t('button.confirm')}}</el-button>
      </div>
    </el-dialog>
    <el-dialog :title="$t('statcharts.network.difficultyName')" :visible.sync="difficultyVisible">
      <NetworkDifficultyChart></NetworkDifficultyChart>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="difficultyVisible = false">{{$t('button.confirm')}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import NetworkHashRateChart from './charts/chart-hashrate'
import NetworkDifficultyChart from './charts/chart-difficulty'
import ShardCharSelect from '../shard-char-select'

export default {
  data () {
    return {
      hashRateVisible: false,
      difficultyVisible: false
    }
  },
  components: {
    NetworkHashRateChart,
    NetworkDifficultyChart,
    ShardCharSelect
  },
  methods: {
    showHashRate () {
      this.hashRateVisible = true
    },
    showDifficulty () {
      console.log(96)
      this.difficultyVisible = true
    }
  }
}
</script>

<style lang="less">
  @import "../../assets/css/char.less";
</style>
