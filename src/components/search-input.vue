<template>
  <div class="search-wrap">
    <el-input :placeholder="$t('placeholder.searchInput')" v-model.trim="input5" @keyup.enter.native="search"></el-input>
    <span class="icon-search-wrap" @click="search()">
      <i class="el-icon-search"></i>
    </span>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      input5: ''
    }
  },
  methods: {
    ...mapActions(['getSearch']),
    search () {
      this.getSearch([this.input5.replace(/^\s+|\s+$/g, ''), this.$i18n.locale])
    }
  }
}
</script>

<style lang="less">
.search-wrap {
  position: relative;
  .icon-search-wrap {
    display: inline-block;
    width: 30px;
    height: 20px;
    line-height: 20px;
    font-size: 20px;
    color: #999;
    text-align: center;
    position: absolute;
    right: 16px;
    top: 10px;
    &:hover {
      cursor: pointer;
    }
  }
  .el-icon-search{
    font-weight: 600;
  }
  .el-input__inner{
    background: #fafafa;
    border: 1px solid #999;
    border-radius: 2px;
  }
  .el-input__inner::-webkit-input-placeholder{
      color: #ccc;
      font-size: 12px;
  }
}
@media screen and (max-width: 768px ) {
  .search-wrap {
    top: 10px;
  }
}
</style>
