<template>
  <div class="sm-header-wrap">
    <div class="sm-header-icon-wrap">
      <!-- <div class="sm-show sm-header-menu-wrap"> -->
      <div class="sm-header-menu-wrap">
        <div v-show="!isLogo" class="fl sm-header-logo">
          <router-link :to="{path: '/'}">
            <img src="../assets/imgs/logo_s.png" alt="logo">
             <span class="logo-title">
              {{$t("blockExplore")}}
            </span>
          </router-link>
        </div>
        <div class="fr">
          <span class="sm-header-nav-wrap">
            <!-- <i v-if="menuVisible === false" @click="clickMenu" class="el-icon-menu"></i> -->
            <img v-if="menuVisible === false" @click="clickMenu" src="../assets/imgs/nav.png"/>
            <i v-else @click="clickMenu" class="el-icon-close"></i>
          </span>
          <span class="sm-setting-menu">
            <Menu></Menu>
          </span>
        </div>
      </div>
    </div>
    <ul v-show="menuVisible" class="nav-wrap">
      <li :class="{'current': currentLink == ''}">
        <div class="sm-anv-img-wrap">
          <img v-show="currentLink != ''" src="../assets/imgs/navs/Home_H.png" alt="">
          <img v-show="currentLink == ''" src="../assets/imgs/navs/Home_B.png" alt="">
        </div>
        <router-link :to="{path: '/'}">
          {{$t('navs.home')}}
        </router-link>
      </li>
      <li :class="{'current': currentLink == 'nodemap'}">
        <div class="sm-anv-img-wrap">
          <img v-show="currentLink != 'node'" src="../assets/imgs/navs/Node_H.png" alt="">
          <img v-show="currentLink == 'node'" src="../assets/imgs/navs/node_B.png" alt="">
        </div>
        <router-link :to="{path: '/nodemap'}">
          {{$t('navs.node')}}
        </router-link>
      </li>
      <li :class="{'current': currentLink == 'account'}">
        <div class="sm-anv-img-wrap">
          <img v-show="currentLink != 'account'" src="../assets/imgs/navs/Account_H.png" alt="">
          <img v-show="currentLink == 'account'" src="../assets/imgs/navs/Account_B.png" alt="">
        </div>
        <router-link :to="{path: '/account'}">
          {{$t('navs.account')}}
        </router-link>
      </li>
      <li :class="{'current': currentLink == 'block'}">
        <div class="sm-anv-img-wrap">
          <img v-show="currentLink != 'block'" src="../assets/imgs/navs/block_H.png" alt="">
          <img v-show="currentLink == 'block'" src="../assets/imgs/navs/block_B.png" alt="">
        </div>
        <router-link :to="{path: '/block'}">
          {{$t('navs.block')}}
        </router-link>
      </li>
      <li :class="{'current': currentLink == 'transaction'}">
        <div class="sm-anv-img-wrap">
          <img v-show="currentLink != 'transaction'" src="../assets/imgs/navs/Transaction_H.png" alt="">
          <img v-show="currentLink == 'transaction'" src="../assets/imgs/navs/Transaction_B.png" alt="">
        </div>
        <router-link :to="{path: '/transaction'}">
          {{$t('navs.transaction')}}
        </router-link>
      </li>
      <li :class="{'current': currentLink == 'contract'}">
        <div class="sm-anv-img-wrap">
          <img v-show="currentLink != 'contract'" src="../assets/imgs/navs/Contract_H.png" alt="">
          <img v-show="currentLink == 'contract'" src="../assets/imgs/navs/Contract_B.png" alt="">
        </div>
        <router-link :to="{path: '/contract'}">
          {{$t('navs.contract')}}
        </router-link>
      </li>
      <!-- <li :class="{'current': currentLink == 'token'}">
        <div class="sm-anv-img-wrap">
          <img v-show="currentLink != 'token'" src="../assets/imgs/navs/Token_H.png" alt="">
          <img v-show="currentLink == 'token'" src="../assets/imgs/navs/Token_B.png" alt="">
        </div>
        <router-link :to="{path: '/'}">
          {{$t('navs.token')}}
        </router-link>
      </li> -->
      <li :class="{'current': currentLink == 'statChar'}">
        <div class="sm-anv-img-wrap">
          <img v-show="currentLink != 'statChar'" src="../assets/imgs/navs/StatChar_H.png" alt="">
          <img v-show="currentLink == 'statChar'" src="../assets/imgs/navs/StatChar_B.png" alt="">
        </div>
        <router-link :to="{path: '/statChar'}">
          {{$t('navs.statChar')}}
        </router-link>
      </li>
      <li :class="{'current': currentLink == 'api'}">
        <div class="sm-anv-img-wrap">
          <img v-show="currentLink != 'api'" src="../assets/imgs/navs/API_H.png" alt="">
          <img v-show="currentLink == 'api'" src="../assets/imgs/navs/API_B.png" alt="">
        </div>
        <router-link :to="{path: '/api'}">
          {{$t('navs.api')}}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import Menu from './menu'
export default {
  props: {
    isLogo: Boolean
  },
  data () {
    return {
      currentLink: '',
      menuVisible: false
    }
  },
  components: {
    Menu
  },
  mounted () {
    this.currentLink = window.location.href.split('/')[4]
  },
  methods: {
    clickMenu () {
      if (this.menuVisible === true) {
        setTimeout(() => {
          this.menuVisible = !this.menuVisible
        }, 100)
      } else {
        this.menuVisible = !this.menuVisible
      }
    }
  }
}
</script>

<style lang="less">
.sm-header-wrap{
  .sm-header-icon-wrap{
    position: relative;
    height: 60px;
    padding: 0 10px;
    .sm-header-menu-wrap {
      .sm-header-logo{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        .logo-title{
          position: absolute;
          left: 126px;
          bottom: 5px;
          color: #999;
          font-size: 16px;
          display: inline-block;
          width: 200px;
        }
      }
      .sm-header-nav-wrap{
        position: absolute;
        right: 60px;
        top: 50%;
        transform: translateY(-50%);
        img{
          position: absolute;
          right: 0px;
          top: 50%;
          transform: translateY(-50%);
          &:hover{
            cursor: pointer;
          }
        }
        i{
          font-size: 18px;
        }
      }
      .sm-setting-menu{
        position: relative;
      }
    }
  }
  .nav-wrap {
    position: absolute;
    background: #fff;
    z-index: 1000;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    transform: translate(0,0);
    transition:all .2s ease-in 0s;
    width: 100%;
    line-height: 30px;
    li{
      position: relative;
      display: block;
      width: 100%;
      height: 40px;
      line-height: 40px;
      margin: 0;
      padding: 0 20px;
      border-bottom: 1px solid #ebeef5;
      font-size: 14px;
      a{
        display: inline-block;
        margin-left: 30px;
        width: 80%;
        color: #666;
      }
      &:hover{
        background: #f5f7fa;
        a{
          color: #23479c;
        }
        font-weight: bold;
        border-bottom: 1px solid #23479c;
      }
    }
    .current{
      background: #f5f7fa;
      a{
        color: #23479c;
      }
      font-weight: bold;
      border-bottom: 1px solid #23479c;
    }
  }
  .sm-anv-img-wrap{
    display: inline-block;
    img{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      margin-right: 8px;
    }
  }
}
</style>
