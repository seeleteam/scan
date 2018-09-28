<template>
  <div class="describe-title-wrap">
    <vue-particles color="#fff" :particleOpacity="0.7" :particlesNumber="80" shapeType="circle" :particleSize="4"
    linesColor="#000" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3" :hoverEffect="true"
    hoverMode="grab" :clickEffect="true" clickMode="push" class="particles"></vue-particles>
    <span class="title">{{ changeTitle }}</span>
    <ul class="link-wrap">
      <li><a href="/">{{ $t("navs.home") }}</a></li>
      <li><i class="el-icon-arrow-right"></i></li>
      <li class="current">{{ link }}</li>
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
