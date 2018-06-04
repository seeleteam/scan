<template>
    <div class="search-wrap">
        <el-input :placeholder="$t('placeholder.searchInput')" v-model="input5"></el-input>
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
      this.getSearch(this.input5)
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
    text-align: center;
    background: #fff;
    position: absolute;
    right: 16px;
    top: 10px;
    &:hover {
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 768px ) {
  .search-wrap {
    top: 10px;
    .icon-search-wrap {
    }
  }
}
</style>
