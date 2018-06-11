<template>
  <div class="char-content-wrap">
    <div class="char-title">
      {{$t("char.nodes")}}
    </div>
    <el-row :gutter="20" class="char-el-row">
      <el-col :xs="24" :span="6" class="char-el-col">
        <div class="char-content" @click="showNodesByShard">
          <div class="char-content-title">{{$t('charMark.node.shardTitle')}}</div>
          <div class="char-content-img">
            <img src="../../assets/imgs/char/pie.png" alt="line char">
          </div>
           <div class="char-content-mask">
            <div class="char-content-title">{{$t('charMark.node.shardTitle')}}</div>
            <div class="char-content-content">{{$t('charMark.node.shardContent')}}</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-dialog :title="$t('statcharts.node.nodesByShard')" :visible.sync=" nodesByShardVisible">
      <NodesByShardChart></NodesByShardChart>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="nodesByShardVisible = false">{{$t('button.confirm')}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import NodesByShardChart from './charts/chart-nodes'

export default {
  data () {
    return {
      nodesByShardVisible: false
    }
  },
  components: {
    NodesByShardChart
  },
  methods: {
    showNodesByShard () {
      this.nodesByShardVisible = true
    }
  }
}
</script>

<style lang="less">
  @import "../../assets/css/char.less";
</style>
