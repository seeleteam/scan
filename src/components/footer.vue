<template>
  <div class="footer">
    <div class="footer-copyright">
      Copyright © 2019 Seele Foundation
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
    .footer-copyright {
      height: 40px;
      line-height: 40px;
      color: #ccc;
      font-size: 12px;
      background: #282828;
      text-align: center;
    }
  }
  @media screen and (max-width: 768px ) {
    .footer {
      .footer-copyright {
        height: 30px;
        font-size: 12px;
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
