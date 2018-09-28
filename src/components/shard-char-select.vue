<template>
  <div class="colorShard">
    <el-select v-model="value" @change="selectShardChar(value)" placeholder="请选择" class="select-wrap">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>
<script>
import { shardCharOptions } from '../untils/shardChar'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      options: shardCharOptions,
      value: this.$store.state.shardChar.shardCharValue + ''
    }
  },
  methods: {
    ...mapActions(['setShardCharValue']),
    selectShardChar (value) {
      this.setShardCharValue(value)
    }
  }
}
</script>
<style scoped>
.colorShard{
  width: 100%;
  margin-top: 10px;
  background: #fff;
}
.select-wrap{
  padding: 20px 0 0 20px;
}
</style>
