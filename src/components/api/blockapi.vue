<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item :title="$t('api.blocksapi')" name="1">
      <div class="article" v-html="compiledMarkdown"></div>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import marked from 'marked'
import context from '../../assets/md/blockapi.md'
import encontext from '../../assets/md/blockapi[en].md'
var rendererMD = new marked.Renderer()
marked.setOptions({
  renderer: rendererMD,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})
export default {
  data () {
    return {
      activeNames: ['1'],
      context: context,
      encontext: encontext
    }
  },
  computed: {
    compiledMarkdown () {
      if (this.$i18n.locale === 'en') {
        return marked(this.encontext, { sanitize: true })
      } else {
        return marked(this.context, { sanitize: true })
      }
    }
  }
}
</script>
<style lang="less">
  @import "../../assets/css/char.less";
  @import "../../assets/css/md.less";
</style>
