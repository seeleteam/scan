<!-- start here -->
<template>
  <div class="footer">
    <div class="wrap">
      <div class="footer-icons">
          <a href="https://medium.com/seeletech" target="_blank">
            <div class="footer-icons-icon"></div>
          </a>
          <a href="https://facebook.com/seeletech" target="_blank">
            <div class="footer-icons-icon"></div>
          </a>
          <a href="https://www.instagram.com/seeletech/" target="_blank">
            <div class="footer-icons-icon"></div>
          </a>
          <a href="https://www.linkedin.com/company/seeletech" target="_blank">
            <div class="footer-icons-icon"></div>
          </a>
          <a href="https://t.me/seeletech" target="_blank">
            <div class="footer-icons-icon"></div>
          </a>
          <a href="https://twitter.com/SeeleTech" target="_blank">
            <div class="footer-icons-icon"></div>
          </a>
          <a href="https://bitcointalk.org/index.php?topic=2820292.new#new" target="_blank">
            <div class="footer-icons-icon"></div>
          </a>
          <a href="https://www.reddit.com/r/IAmA/comments/7wb5no/this_is_seeleteam_block_chain_40_technologyask_us/" target="_blank">
            <div class="footer-icons-icon"></div>
          </a>
          <a href="https://github.com/seeleteam" target="_blank">
            <div class="footer-icons-icon"></div>
          </a>
          <a href="https://weibo.com/u/6561132287" target="_blank">
            <div class="footer-icons-icon"></div>
          </a>
      </div>
    </div>
    <div class="footer-copyright">
      Copyright © 2018 Seele Foundation
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="less">
  .footer {
    background: #202020;
    .footer-icons {
      padding: 40px 0;
      text-align: center;
      .footer-icons-icon {
        width: 30px;
        height: 30px;
      }
      a {
        display: inline-block;
        margin: 0 20px;
        &:nth-child(1) {
          .footer-icons-icon {
            background: url('../assets/imgs/footer/footer_icons.png') no-repeat 3px -45px;
            background-size: 40px;
          }
        }
        &:nth-child(2) {
          .footer-icons-icon {
            background: url('../assets/imgs/footer/footer_icons.png') no-repeat 3px -428px;
            background-size: 40px;
          }
        }
        &:nth-child(3) {
          .footer-icons-icon {
            background: url('../assets/imgs/footer/footer_icons.png') no-repeat 3px -380px;
            background-size: 40px;
          }
        }
        &:nth-child(3) {
          .footer-icons-icon {
            background: url('../assets/imgs/footer/footer_icons.png') no-repeat 3px -380px;
            background-size: 40px;
          }
        }
        &:nth-child(4) {
          .footer-icons-icon {
            background: url('../assets/imgs/footer/footer_icons.png') no-repeat 3px -285px;
            background-size: 40px;
          }
        }
        &:nth-child(5) {
          .footer-icons-icon {
            background: url('../assets/imgs/footer/footer_icons.png') no-repeat 3px 7px;
            background-size: 40px;
          }
        }
        &:nth-child(6) {
          .footer-icons-icon {
            background: url('../assets/imgs/footer/footer_icons.png') no-repeat 3px -183px;
            background-size: 40px;
          }
        }
        &:nth-child(7) {
          .footer-icons-icon {
            background: url('../assets/imgs/footer/footer_icons.png') no-repeat 3px -473px;
            background-size: 40px;
          }
        }
        &:nth-child(8) {
          .footer-icons-icon {
            background: url('../assets/imgs/footer/footer_icons.png') no-repeat 3px -90px;
            background-size: 40px;
          }
        }
        &:nth-child(9) {
          .footer-icons-icon {
            background: url('../assets/imgs/footer/footer_icons.png') no-repeat 3px -328px;
            background-size: 40px;
          }
        }
        &:nth-child(10) {
          .footer-icons-icon {
            background: url('../assets/imgs/footer/footer_icons.png') no-repeat 3px -235px;
            background-size: 40px;
          }
        }
      }
    }
    .footer-copyright {
      height: 50px;
      line-height: 50px;
      color: #6d6d6d;
      font-size: 16px;
      background: #282828;
      text-align: center;
    }
  }
  @media screen and (max-width: 768px ) {
    .footer {
      .footer-icons {
        padding: 10px 0;
        img {
          width: 20px;
          height: 20px;
          margin-bottom: 20px;
        }
      }
      .footer-copyright {
        height: 30px;
        font-size: 16px;
        line-height: 30px;
      }
    }
  }
  @media screen and (min-width: 900px ) {
    .footer {
      min-width: 1160px;
    }
  }
</style>
