<template>
  <el-select
    v-model="value"
    @change="selectShard(value)"
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
import { shardOptions } from '../untils/shard'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      options: shardOptions,
      value: this.$store.state.shard.shardValue + ''
    }
  },
  methods: {
    ...mapActions(['setShardValue']),
    selectShard (value) {
      this.setShardValue(value)
    }
  }
}
</script>
<style lang="less">
  .select-wrap{
    margin-top: 20px;
  }
</style>
