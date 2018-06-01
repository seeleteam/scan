<template>
    <div class="el-home-wrap">
        <div class="wrap lg-show home-header-border">
          <Header></Header>
        </div>
        <div class="sm-show page-sm-header-wrap">
          <smHeader :isLogo="isLogo"></smHeader>
        </div>
        <div class="main-wrap main-bg">
          <div class="wrap">
            <div class="main-content-wrap">
              <div class='home-logo-wrap lg-show'>
                <img src="../../assets/imgs/logo.png" alt="logo">
              </div>
              <div class="home-search-wrap">
                <div class='sm-home-logo-wrap sm-show'>
                  <img src="../../assets/imgs/logo.png" alt="logo">
                </div>
                <searchInput></searchInput>
              </div>
              <div class="home-data-list-wrap">
                <dataList></dataList>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from './header'
import smHeader from '../sm-header'
import searchInput from '../search-input'
import dataList from './data-list'
import Footer from '../footer'
export default {
  data () {
    return {
      isLogo: true
    }
  },
  components: {
    Header,
    smHeader,
    searchInput,
    dataList,
    Footer
  },
  methods: {}
}
</script>
<style lang="less">
.el-home-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 1200px;
  .home-header-border{
    border-bottom: 1px solid #dcdfe6;
  }
  .main-content-wrap {
    position: relative;
    margin-top: 220px;
    min-height: 370px;
    .home-logo-wrap {
      width: 100%;
      text-align: center;
      margin-bottom: 40px;
    }
    .home-search-wrap {
      margin: 0 270px;
    }
  }
  .home-data-list-wrap {
    position: absolute;
    bottom: 30px;
  }
  .main-wrap{
    flex: 1 0 auto;
  }
  .main-bg{
    background: url("../../assets/imgs/bg_01.png") no-repeat;
    background-position: bottom;
  }
}
@media screen and (max-width: 768px ) {
  .el-home-wrap {
    position: static;    height: 100%;
    height: 100%;
    min-width: 100%;
    .main-content-wrap {
      height: 100%;
      margin-top: 40px;
      .sm-home-logo-wrap{
        position: relative;
        top: -20px;
        width: 100%;
        text-align: center;
      }
      .home-search-wrap {
        margin: 0 20px;
        margin-top: 130px;
      }
    }
    .home-data-list-wrap {
      position: static;
      margin-top: 100px;
    }
    .main-bg{
      background: none;
    }
  }
}
</style>
