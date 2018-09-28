<template>
  <div class="sm-header-wrap">
    <div class="sm-header-icon-wrap">
      <!-- <div class="sm-show sm-header-menu-wrap"> -->
      <div class="sm-header-menu-wrap">
        <div v-show="!isLogo" class="fl sm-header-logo">
          <a @click="linkTo('/')">
            <img src="../assets/imgs/logo_s.png" alt="logo">
            <span class="logo-title">
              {{$t("blockExplore")}}
            </span>
          </a>
        </div>
        <div class="fr">
          <span class="sm-header-nav-wrap">
            <!-- <i v-if="menuVisible === false" @click="clickMenu" class="el-icon-menu"></i> -->
            <img v-if="menuVisible === false" @click="clickMenu" src="../assets/imgs/nav.png" />
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
        <a @click="linkTo('/')">
          {{$t('navs.home')}}
        </a>
      </li>
      <li :class="{'current': currentLink == 'nodemap'}">
        <div class="sm-anv-img-wrap">
          <img v-show="currentLink != 'node'" src="../assets/imgs/navs/Node_H.png" alt="">
          <img v-show="currentLink == 'node'" src="../assets/imgs/navs/node_B.png" alt="">
        </div>
        <a @click="linkTo('/nodemap')">
          {{$t('navs.node')}}
        </a>
      </li>
      <li :class="{'current': currentLink == 'account'}">
        <div class="sm-anv-img-wrap">
          <img v-show="currentLink != 'account'" src="../assets/imgs/navs/Account_H.png" alt="">
          <img v-show="currentLink == 'account'" src="../assets/imgs/navs/Account_B.png" alt="">
        </div>
        <a @click="linkTo('/account')">
          {{$t('navs.account')}}
        </a>
      </li>
      <li :class="{'current': currentLink == 'block'}">
        <div class="sm-anv-img-wrap">
          <img v-show="currentLink != 'block'" src="../assets/imgs/navs/block_H.png" alt="">
          <img v-show="currentLink == 'block'" src="../assets/imgs/navs/block_B.png" alt="">
        </div>
        <a @click="linkTo('/block')">
          {{$t('navs.block')}}
        </a>
      </li>
      <li :class="{'current': currentLink == 'transaction' || currentLink == 'pendingtxs', 'tx-link': txLink}">
        <div class="sm-anv-img-wrap">
          <img v-show="currentLink != 'transaction' || currentLink != 'pendingtxs'" src="../assets/imgs/navs/Transaction_H.png" alt="">
          <img v-show="currentLink == 'transaction' || currentLink == 'pendingtxs'" src="../assets/imgs/navs/Transaction_B.png" alt="">
        </div>
        <a @click="TxShowLink">
          {{$t('navs.tx')}}
        </a>
        <div v-show="txLink" class="tx-link-current">
          <div class="tx-link-current-img">
            <img v-show="currentLink != 'transaction'" src="../assets/imgs/navs/Tx_H.png" alt="">
            <img v-show="currentLink == 'transaction'" src="../assets/imgs/navs/Tx_B.png" alt="">
            <a @click="linkTo('/transaction')" :class="{'link-current': currentLink == 'transaction'}">
              {{$t('navs.transaction')}}
            </a>
          </div>
          <div class="tx-link-current-img">
            <img v-show="currentLink != 'pendingtxs'" src="../assets/imgs/navs/Tx_H.png" alt="">
            <img v-show="currentLink == 'pendingtxs'" src="../assets/imgs/navs/Tx_B.png" alt="">
            <a @click="linkTo('/pendingtxs')" :class="{'link-current': currentLink == 'pendingtxs'}">
              {{$t('navs.pendingtxs')}}
            </a>
          </div>
        </div>
      </li>
      <li :class="{'current': currentLink == 'contract'}">
        <div class="sm-anv-img-wrap">
          <img v-show="currentLink != 'contract'" src="../assets/imgs/navs/Contract_H.png" alt="">
          <img v-show="currentLink == 'contract'" src="../assets/imgs/navs/Contract_B.png" alt="">
        </div>
        <a @click="linkTo('/contract')">
          {{$t('navs.contract')}}
        </a>
      </li>
      <li :class="{'current': currentLink == 'statChar'}">
        <div class="sm-anv-img-wrap">
          <img v-show="currentLink != 'statChar'" src="../assets/imgs/navs/StatChar_H.png" alt="">
          <img v-show="currentLink == 'statChar'" src="../assets/imgs/navs/StatChar_B.png" alt="">
        </div>
        <a @click="linkTo('/statChar')">
          {{$t('navs.statChar')}}
        </a>
      </li>
      <li :class="{'current': currentLink == 'api'}">
        <div class="sm-anv-img-wrap">
          <img v-show="currentLink != 'api'" src="../assets/imgs/navs/API_H.png" alt="">
          <img v-show="currentLink == 'api'" src="../assets/imgs/navs/API_B.png" alt="">
        </div>
        <a @click="linkTo('/api')">
          {{$t('navs.api')}}
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import Menu from './menu'
import router from '../router'
import { mapActions } from 'vuex'

export default {
  props: {
    isLogo: Boolean
  },
  data () {
    return {
      currentLink: '',
      menuVisible: false,
      txLink: false
    }
  },
  components: {
    Menu
  },
  mounted () {
    this.currentLink = window.location.href.split('/')[4]
  },
  methods: {
    ...mapActions(['setShardValue']),
    clickMenu () {
      if (this.menuVisible === true) {
        setTimeout(() => {
          this.menuVisible = !this.menuVisible
        }, 100)
      } else {
        this.menuVisible = !this.menuVisible
      }
    },
    TxShowLink () {
      if (this.txLink === true) {
        setTimeout(() => {
          this.txLink = !this.txLink
        }, 100)
      } else {
        this.txLink = !this.txLink
      }
    },
    linkTo (path) {
      router.push({path: path})
      this.setShardValue(1)
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
      // height: 40px;
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
      .tx-link{
        height: 60px;
        margin-bottom: 30px;
        a{
          color: #666;
        }
      }
      .tx-link-current{
        .tx-link-current-img{
          position: relative;
          padding-left: 35px;
        }
        a{
          color: #666;
          margin-left: 30px;
        }
        img{
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 20px;
        }
        .link-current{
          color: #23479c;
        }
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
      // top: 50%;
      // transform: translateY(-50%);
      top: 10px;
      width: 20px;
      margin-right: 8px;
    }
  }
}
</style>
