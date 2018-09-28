<template>
  <div class="menu-wrap">
    <el-popover placement="bottom" width="100" trigger="click">
      <div class="menu-content-wrap">
        <div class="menu-language">
          <div class="title">{{$t("language.title")}}</div>
          <div class="contnet-wrap">
            <el-radio-group v-model="radio2" @change="changeLanguage()">
              <div>
                <el-radio :label="1" class="el-radio-wrap">{{$t("language.zh")}}</el-radio>
              </div>
              <div>
                <el-radio :label="2" class="el-radio-wrap">{{$t("language.en")}}</el-radio>
              </div>
            </el-radio-group>
          </div>
        </div>
      </div>
      <img src="../assets/imgs/set.png" slot="reference" alt="set">
    </el-popover>
  </div>
</template>
<script>
export default {
  data () {
    return {
      radio1: process.env.NEW_WORK_ID || 1,
      radio2: this.$i18n.locale === 'zh' ? 1 : 2
    }
  },
  mounted () {
    sessionStorage.setItem('Network', this.radio1)
  },
  methods: {
    changeNetwork () {
      sessionStorage.setItem('Network', this.radio1)
    },
    changeLanguage () {
      this.$i18n.locale = this.radio2 === 2 ? 'en' : this.radio2 === 1 ? 'zh' : ''
    }
  }
}
</script>
<style lang="less">
.menu-wrap {
  height: 60px;
  position: relative;
  img {
    position: absolute;
    cursor: pointer;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
.menu-content-wrap {
  .menu-network,
  .menu-language {
    .title {
      padding: 5px 0;
      border-bottom: 1px solid #ccc;
      &:hover {
        cursor: pointer;
      }
    }
    .contnet-wrap {
      color: #333;
      padding: 5px 0;
      div {
        padding: 5px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .menu-wrap {
    height: 60px;
    position: relative;
    img {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
