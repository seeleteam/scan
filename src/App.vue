<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {}
  }
}
</script>

<style>
@import "./assets/css/clear.less";
@import "./assets/css/base.less";
#app {
  height: 100%;
  font-family: Helvetica;
  color: #333;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.loadingIcon{
  width: 100%;
  height: 600px;
  position: absolute;
  left: 55%;
  top: 50%;
  transform: translate(-50%,-67%);
  display: inline-block;
  background: url(./assets/imgs/loading.gif) center center no-repeat;
  background-size: 60% auto;
}
</style>
