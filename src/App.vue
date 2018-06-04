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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #333;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
