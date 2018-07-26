<template>
  <div class="char-content-wrap">
    <div class="char-title">
      {{$t("char.accounts")}}
    </div>
    <ShardCharSelect></ShardCharSelect>
    <el-row :gutter="20" class="char-el-row">
      <el-col :xs="24" :span="6" class="char-el-col">
        <div class="char-content" @click="showAddress">
          <div class="char-content-title">{{$t('charMark.account.title')}}</div>
          <div class="char-content-img">
            <img src="../../assets/imgs/char/line.png" alt="line char">
          </div>
          <div class="char-content-mask">
            <div class="char-content-title">{{$t('charMark.account.title')}}</div>
            <div class="char-content-content">{{$t('charMark.account.content')}}</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-dialog :title="$t('statcharts.account.growthName')" :visible.sync="addressVisible">
      <AddressChart></AddressChart>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addressVisible = false">{{$t('button.confirm')}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import AddressChart from './charts/chart-account'
import ShardCharSelect from '../shard-char-select'

export default {
  data () {
    return {
      addressVisible: false
    }
  },
  components: {
    AddressChart,
    ShardCharSelect
  },
  methods: {
    showAddress () {
      this.addressVisible = true
    }
  }
}
</script>

<style lang="less">
  @import "../../assets/css/char.less";
</style>
