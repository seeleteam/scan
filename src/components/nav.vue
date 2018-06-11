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
      <li :class="{'current': currentLink == 'transaction'}">
        <router-link :to="{path: '/transaction'}">
          {{$t('navs.transaction')}}
        </router-link>
      </li>
      <li :class="{'current': currentLink == 'contract'}">
        <router-link :to="{path: '/contract'}">
          {{$t('navs.contract')}}
        </router-link>
      </li>
      <!-- <li :class="{'current': currentLink == 'token'}">
        <router-link :to="{path: '/'}">
          {{$t('navs.token')}}
        </router-link>
      </li> -->
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
    <!-- <div class="sm-show nav-sm-wrap">
      <div class="sm-show fl">
        <img src="../assets/imgs/logo_s.png" alt="logo">
      </div>
      <div class="header-menu fr">
        <i v-if="menuVisible === false" @click="clickMenu" class="el-icon-menu"></i>
        <i v-else @click="clickMenu" class="el-icon-close"></i>
      </div>
    </div>
    <ul v-show="menuVisible" class="nav-wrap">
      <li :class="{'current': currentLink == ''}">
        <router-link :to="{path: '/'}">
          {{$t('navs.home')}}
        </router-link>
      </li>
      <li :class="{'current': currentLink == 'nodemap'}">
        <router-link :to="{path: 'nodemap'}">
          {{$t('navs.node')}}
        </router-link>
      </li>
      <li :class="{'current': currentLink == 'account'}">
        <router-link :to="{path: 'account'}">
          {{$t('navs.account')}}
        </router-link>
      </li>
      <li :class="{'current': currentLink == 'block'}">
        <router-link :to="{path: 'block'}">
          {{$t('navs.block')}}
        </router-link>
      </li>
      <li :class="{'current': currentLink == 'transaction'}">
        <router-link :to="{path: 'transaction'}">
          {{$t('navs.transaction')}}
        </router-link>
      </li>
      <li :class="{'current': currentLink == 'contract'}">
        <router-link :to="{path: 'contract'}">
          {{$t('navs.contract')}}
        </router-link>
      </li>
      <li :class="{'current': currentLink == 'token'}">
        <router-link :to="{path: 'token'}">
          {{$t('navs.token')}}
        </router-link>
      </li>
      <li :class="{'current': currentLink == 'statChar'}">
        <router-link :to="{path: 'statChar'}">
          {{$t('navs.statChar')}}
        </router-link>
      </li>
    </ul> -->
  </div>
</template>
<script>
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
        a{
          color: #23479c;
        }
        font-weight: bold;
        border-bottom: 2px solid #23479c;
      }
    }
    .current{
      a{
        color: #23479c;
      }
      font-weight: bold;
      border-bottom: 2px solid #23479c;
    }
  }
}
</style>
