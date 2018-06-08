<template>
  <el-select
    v-model="value"
    @change="selectShardChar(value)"
    placeholder="请选择"
    class="select-wrap"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
import { shardCharOptions } from '../untils/shardChar'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      options: shardCharOptions,
      value: '0'
    }
  },
  methods: {
    ...mapActions(['setShardCharValue']),
    selectShardChar (value) {
      console.log(value, 963000000)
      this.setShardCharValue(value)
    }
  }
}
</script>
<style lang="less">
  .select-wrap{
    margin-top: 20px;
  }
</style>
