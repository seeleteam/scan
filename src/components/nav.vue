<template>
  <ul class="nav-wrap lg-show">
    <li :class="{'current': currentLink == ''}">
      <a @click="linkTo('/')">
        {{$t('navs.home')}}
      </a>
    </li>
    <li :class="{'current': currentLink == 'node'}">
      <a @click="linkTo('/node')">
        {{$t('navs.node')}}
      </a>
    </li>
    <li :class="{'current': currentLink == 'account'}">
      <a @click="linkTo('/account')">
        {{$t('navs.account')}}
      </a>
    </li>
    <li :class="{'current': currentLink == 'block'}">
      <a @click="linkTo('/block')">
        {{$t('navs.block')}}
      </a>
    </li>
    <li :class="{'current': currentLink == 'transaction' || currentLink == 'pendingtxs'}">
      <div trigger="click" class="dropd-title-wrap menu-li">
        <span class="el-dropdown-link">
          {{$t('navs.tx')}}
        </span>
        <div class="dropd-content-wrap">
          <a :class="{'dropd-current':currentLink == 'transaction' }" class="dropd dropd1" @click="linkTo('/transaction')">
            {{$t('navs.transaction')}}
          </a>
          <a :class="{'dropd-current':currentLink == 'pendingtxs' }" class="dropd" @click="linkTo('/pendingtxs')">
            {{$t('navs.pendingtxs')}}
          </a>
        </div>
      </div>
    </li>
    <li :class="{'current': currentLink == 'contract'}">
      <a @click="linkTo('/contract')">
        {{$t('navs.contract')}}
      </a>
    </li>
    <li :class="{'current': currentLink == 'statChar'}">
      <a @click="linkTo('/statChar')">
        {{$t('navs.statChar')}}
      </a>
    </li>
    <li :class="{'current': currentLink == 'api'}" @click="linkTo('/api')">
      <a :to="{path: '/api'}">
        {{$t('navs.api')}}
      </a>
    </li>
  </ul>
</template>
<script>
import router from '../router'
import { mapActions } from 'vuex'
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
    ...mapActions(['setShardValue']),
    handleChange (val) {},
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
      router.push({ path: path })
      this.menuVisible = false
      this.setShardValue(1)
    }
  }
}
</script>

<style lang="less">
@media (min-width: 1200px) {
    .nav-wrap {
      li{
        &:nth-child(1) {
          width: 44px;
        }
        &:nth-child(2) {
          width: 48px;
        }
        &:nth-child(3) {
          width: 73px;
        }
        &:nth-child(4) {
          width: 52px;
        }
        &:nth-child(5) {
          width: 98px;
        }
        &:nth-child(6) {
          width: 74px;
        }
        &:nth-child(7) {
          width: 86px;
        }
        &:nth-child(8) {
          width: 26px;
        }
      }
    }
}
.nav-wrap {
    padding: 18px 0 0 0;
    li {
      line-height: 50px;
      display: inline-block;
      margin-right: 28px;
      border-bottom: 2px solid #fff;
      font-size: 16px;
      a,.el-dropdown-link {
        display: inline-block;
        // width: 100%;
        color: #666;
      }
      &:hover {
        a,
        .menu-li,.el-dropdown-link:hover {
          cursor: pointer;
          color: #23479c;
          font-weight: bold;
        }
        border-bottom: 2px solid #23479c;
      }
      .dropd-title-wrap {
        position: relative;
        .dropd-content-wrap {
          font-size: 14px;
          position: absolute;
          z-index: 1030;
          top: 63px;
          left: -5px;
          height: 0px;
          min-width: 125px;
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
          .dropd {
            padding: 10px;
            border-radius: 3px;
            &:hover {
              color: #409eff;
              font-weight: 600;
              background: #f5f7fa;
              width: calc(100% - 20px);
              // border-left: 2px solid #23479c;
            }
          }
          .dropd1 {
            width: calc(100% - 20px);
            border-bottom: 1px solid #dcdfe6;
            padding-bottom: 10px;
            border-radius: 0;
          }
          .dropd-current,.el-dropdown-link:hover {
            width: calc(100% - 20px);
            color: #409eff;
            font-weight: 600;
            background: #f5f7fa;
            // #f5fffa
            // border-left: 2px solid #23479c;
          }
        }
        &:hover {
          .dropd-content-wrap {
            height: 71px;
            opacity: 1;
            transition: all 0.3s ease-in;
            z-index: 1040;
          }
        }
      }
    }
    .current {
      a,
      .menu-li,.el-dropdown-link {
        color: #23479c;
      }
      font-weight: bold;
      border-bottom: 2px solid #23479c;
    }
}
</style>
