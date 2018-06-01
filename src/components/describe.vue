<template>
  <div class="describe-title-wrap">
    <span class="title">{{changeTitle}}</span>
    <!-- <span class="title-content">
      {{content}}
    </span> -->
    <ul class="link-wrap">
      <li><a href="/">{{$t("navs.home")}}</a></li>
      <li><i class="el-icon-arrow-right"></i></li>
      <li class="current">{{link}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    content: String,
    link: String
  },
  mounted () {
  },
  computed: {
    changeTitle () {
      return this.title
    }
  }
}
</script>

<style lang="less">
  @import "../assets/css/describe.less";
</style>
