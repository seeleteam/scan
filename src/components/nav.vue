<template>
  <div class="lg-nav">
    <ul class="nav-wrap lg-show">
      <li :class="{'current': currentLink == ''}">
        <router-link :to="{path: '/'}">
          {{$t('navs.home')}}
        </router-link>
      </li>
      <li :class="{'current': currentLink == 'nodemap'}">
        <router-link :to="{path: '/nodemap'}">
          {{$t('navs.node')}}
        </router-link>
      </li>
      <li :class="{'current': currentLink == 'account'}">
        <router-link :to="{path: '/account'}">
          {{$t('navs.account')}}
        </router-link>
      </li>
      <li :class="{'current': currentLink == 'block'}">
        <router-link :to="{path: '/block'}">
          {{$t('navs.block')}}
        </router-link>
      </li>
      <li :class="{'current': currentLink == 'transaction' || currentLink == 'pendingtxs'}">
        <div trigger="click" class="dropd-title-wrap menu-li">
          <span class="el-dropdown-link">
            {{$t('navs.transaction')}}
          </span>
          <div class="dropd-content-wrap">
            <div :class="{'dropd-current':currentLink == 'transaction' }" class="dropd" @click="linkTo('transaction')">
              {{$t('navs.transaction')}}
            </div>
            <div :class="{'dropd-current':currentLink == 'pendingtxs' }" class="dropd" @click="linkTo('pendingtxs')">
              {{$t('navs.pendingtxs')}}
            </div>
          </div>
        </div>
      </li>
      <li :class="{'current': currentLink == 'contract'}">
        <router-link :to="{path: '/contract'}">
          {{$t('navs.contract')}}
        </router-link>
      </li>
      <li :class="{'current': currentLink == 'statChar'}">
        <router-link :to="{path: '/statChar'}">
          {{$t('navs.statChar')}}
        </router-link>
      </li>
      <li :class="{'current': currentLink == 'api'}">
        <router-link :to="{path: '/api'}">
          {{$t('navs.api')}}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import router from '../router'

export default {
  data () {
    return {
      currentLink: '',
      menuVisible: false
    }
  },
  mounted () {
    this.currentLink = window.location.href.split('/')[4]
  },
  methods: {
    handleChange (val) {
    },
    txIsShow () {
      if (this.menuVisible === true) {
        setTimeout(() => {
          this.menuVisible = !this.menuVisible
        }, 100)
      } else {
        this.menuVisible = !this.menuVisible
      }
    },
    txShow () {
      this.menuVisible = true
    },
    txHid () {
      this.menuVisible = false
    },
    linkTo (path) {
      router.push({path: path})
      this.menuVisible = false
    }
  }
}
</script>

<style lang="less">
.lg-nav{
  .nav-wrap {
    line-height: 60px;
    li{
      display: inline-block;
      margin-right: 30px;
      border-bottom: 2px solid #fff;
      font-size: 16px;
      a{
        display: inline-block;
        width: 100%;
        color: #666;
      }
      &:hover{
        a, .menu-li{
          cursor: pointer;
          color: #23479c;
          font-weight: bold;
        }
        border-bottom: 2px solid #23479c;
      }
      .dropd-title-wrap{
        position: relative;
        .dropd-content-wrap{
          position: absolute;
          top: 62px;
          left: -5px;
          height: 0;
          min-width: 80px;
          opacity: 0;
          padding-bottom: 10px;
          padding-right: 10px;
          background: #fff;
          border-top: 1px solid #f0f0f0;
          border-radius: 5px;
          line-height: 20px;
          z-index: 1000;
          transition: all 0.2s ease-out;
          font-weight: 400;
          color: #666;
          .dropd{
            padding: 10px 0 0 10px;
            &:hover{
              color: #23479c;
              font-weight: 600;
            }
          }
          .dropd-current{
            color: #23479c;
            font-weight: 600;
          }
        }
        &:hover{
          .dropd-content-wrap{
            height: 60px;
            opacity: 1;
            transition: all 0.3s ease-in
          }
        }
      }
    }
    .current{
      a, .menu-li{
        color: #23479c;
      }
      font-weight: bold;
      border-bottom: 2px solid #23479c;
    }
  }
}
</style>
