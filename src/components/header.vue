<template>
  <div class="header-bg">
    <div class="lg-nav">
      <div class="logo">
        <router-link :to="{path: '/'}">
          <img src="../assets/imgs/logo_s.png" alt="logo">
        </router-link>
      </div>
      <Nav></Nav>
      <div class="fr detail-search-wrap">
        <searchInput></searchInput>
      </div>
    </div>
  </div>
</template>
<script>
import Nav from './nav'
import Menu from './menu'
import searchInput from './search-input'
export default {
  data () {
    return {}
  },
  components: {
    Nav,
    Menu,
    searchInput
  },
  mounted () {},
  methods: {}
}
</script>
<style lang="less">
.header-bg{
  border-bottom: 1px solid #dcdfe6;
  background: #fff;
}
.lg-nav {
  width: 1200px;
  margin: 0 auto;
  padding: 0 10px 10px 10px;
}
.logo{
  width: 100%;
  border-bottom: 1px solid #dcdfe6;
}
.logo img{
  width: 246px;
  height: 28px;
  display: inherit;
  padding: 20px 0 15px 0;
}
.detail-search-wrap{
  // width: 460px;
  width: 440px;
  position: relative;
  margin-top: -48px;
}
@media screen and (max-width: 768px ) {
  .header-bg{
    display: none;
  }
}
</style>
<style scoped>
a{
  display: inherit;
}
</style>
