<template>
    <div>
      <div class="fl home-nav-wrap">
        <Nav></Nav>
      </div>
      <div class="fr" style="display:none">
        <Menu></Menu>
      </div>
    </div>
</template>
<script>
import Nav from '../nav'
import Menu from '../menu'
export default {
  data () {
    return {}
  },
  components: {
    Nav,
    Menu
  },
  mounted () {},
  methods: {}
}
</script>
<style lang="less">
@media screen and (max-width: 768px ) {
  .home-nav-wrap{
    width: 100%;
  }
}
</style>
