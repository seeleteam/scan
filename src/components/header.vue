<template>
    <div class="header-wrap wrap">
      <div class="detail-header-logo-wrap">
        <div class="fl header-logo-wrap">
          <router-link :to="{path: '/'}">
            <img src="../assets/imgs/logo_s.png" alt="logo">
            <span class="logo-title">
              {{$t("blockExplore")}}
            </span>
          </router-link>
        </div>
        <div class="fr">
          <Menu></Menu>
        </div>
      </div>
      <div class="detail-header-content-wrap">
        <div class="fl">
          <Nav></Nav>
        </div>
        <div class="fr detail-search-wrap">
          <searchInput></searchInput>
        </div>
      </div>
    </div>
</template>
<script>
import Menu from './menu'
import Nav from './nav'
import Header from './home/header'
import searchInput from './search-input'
export default {
  data () {
    return {}
  },
  components: {
    Menu,
    Nav,
    searchInput,
    Header
  },
  mounted () {},
  methods: {}
}
</script>
<style lang="less">
.header-wrap{
  flex: 0 0 auto;
}
.detail-header-logo-wrap{
  border-bottom: 1px solid #dcdfe6;
}
.detail-header-content-wrap{
  margin-top: 10px;
}
.detail-header-logo-wrap, .detail-header-content-wrap{
  height: 60px;
}
.header-logo-wrap {
  height: 60px;
  position: relative;
  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    &:hover{
      cursor: pointer;
    }
  }
  .logo-title{
    position: absolute;
    left: 126px;
    bottom: 18px;
    color: #999;
    font-size: 16px;
    display: inline-block;
    width: 200px;
  }
}
.detail-search-wrap{
  // width: 460px;
  width: 440px;
  margin-top: 10px;
}

@media screen and (max-width: 768px ) {
  .sm-header-wrap{
    width: 100%;
  }
  .detail-sm-search-wrap{
    width: 90%;
    margin: 0 auto;
  }
}
</style>
