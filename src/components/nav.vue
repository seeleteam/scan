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
            {{$t('navs.tx')}}
          </span>
          <div class="dropd-content-wrap">
            <div :class="{'dropd-current':currentLink == 'transaction' }" class="dropd dropd1" @click="linkTo('/transaction')">
              {{$t('navs.transaction')}}
            </div>
            <div :class="{'dropd-current':currentLink == 'pendingtxs' }" class="dropd" @click="linkTo('/pendingtxs')">
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
          font-size: 14px;
          position: absolute;
          top: 63px;
          left: -5px;
          height: 0px;
          min-width: 100px;
          opacity: 0;
          padding-bottom: 10px;
          background: #fff;
          border: 1px solid #dcdfe6;
          border-radius: 3px;
          line-height: 20px;
          z-index: 1000;
          transition: all 0.2s ease-out;
          font-weight: 400;
          color: #666;
          .dropd{
            padding: 10px;
            border-radius: 3px;
            &:hover{
              color: #409EFF;
              font-weight: 600;
              background: #f5f7fa;
              // border-left: 2px solid #23479c;
            }
          }
          .dropd1{
            border-bottom: 1px solid #dcdfe6;
            padding-bottom: 10px;
          }
          .dropd-current{
            color: #409EFF;
            font-weight: 600;
            background: #f5f7fa;
            // #f5fffa
            // border-left: 2px solid #23479c;
          }
        }
        &:hover{
          .dropd-content-wrap{
            height: 71px;
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
