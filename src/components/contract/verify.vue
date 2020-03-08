<template>
  <div class="page-wrap">
    <Header></Header>
    <div class="sm-show page-sm-header-wrap">
      <smHeader></smHeader>
    </div>
    <div class="sm-show sm-search-input-wrap">
      <searchInput></searchInput>
    </div>
    <div class="main-wrap">
      <div class="wrap">
        <ContractDescribe :title="title" :content="content" :link="link"></ContractDescribe>
        <div class="ul-wrap">
          <ul class="detail-wrap wrap-pad">
            <li>
              <div class="li-width">{{$t("listHeader.address")}}: </div>
              <div class="li-content-width">{{contractInfo.address}}</div>
            </li>
            <li>
              <div class="li-width">{{$t("listHeader.shardnumber")}}: </div>
              <div class="li-content-width">{{contractInfo.shardnumber}}</div>
            </li>
            <li>
              <div class="li-width">{{$t("listHeader.compiler")}}: </div>
              <div class="colorShard">
                <select name="compiler" id="compiler" required="" >
                  <option value="">Solidity (Single file)</option>
                  <!-- <option value="1">Solidity (Multi-file)</option> -->
                </select>
              </div>
            </li>
            <li>
              <div class="li-width">{{$t("listHeader.version")}}: </div>
              <div class="colorShard">
                <select name="compilerVersion" id="compilerVersion" required="" @change="setCompilerVersion($event)">
                  <option value="">[Please Select]</option>
                  <!-- <option value="v0.6.3+commit.8dda9521">v0.6.3+commit.8dda9521</option>
                  <option value="v0.6.2+commit.bacdbe57">v0.6.2+commit.bacdbe57</option>
                  <option value="v0.6.1+commit.e6f7d5a4">v0.6.1+commit.e6f7d5a4</option>
                  <option value="v0.6.0+commit.26b70077">v0.6.0+commit.26b70077</option>
                  <option value="v0.5.16+commit.9c3226ce">v0.5.16+commit.9c3226ce</option>
                  <option value="v0.5.15+commit.6a57276f">v0.5.15+commit.6a57276f</option>
                  <option value="v0.5.14+commit.1f1aaa4">v0.5.14+commit.1f1aaa4</option>
                  <option value="v0.5.13+commit.5b0b510c">v0.5.13+commit.5b0b510c</option>
                  <option value="v0.5.12+commit.7709ece9">v0.5.12+commit.7709ece9</option>
                  <option value="v0.5.11+commit.c082d0b4">v0.5.11+commit.c082d0b4</option> -->
                  <!-- <option value="v0.5.10+commit.5a6ea5b1">v0.5.10+commit.5a6ea5b1</option>
                  <option value="v0.5.9+commit.e560f70d">v0.5.9+commit.e560f70d</option>
                  <option value="v0.5.8+commit.23d335f2">v0.5.8+commit.23d335f2</option>
                  <option value="v0.5.7+commit.6da8b019">v0.5.7+commit.6da8b019</option> -->
                  <option value="v0.5.6+commit.b259423e">v0.5.6+commit.b259423e</option>
                  <option value="v0.5.5+commit.47a71e8f">v0.5.5+commit.47a71e8f</option>
                  <option value="v0.5.4+commit.9549d8ff">v0.5.4+commit.9549d8ff</option>
                  <option value="v0.5.3+commit.10d17f24">v0.5.3+commit.10d17f24</option>
                  <option value="v0.5.2+commit.1df8f40c">v0.5.2+commit.1df8f40c</option>
                  <option value="v0.5.1+commit.c8a2cb62">v0.5.1+commit.c8a2cb62</option>
                  <option value="v0.5.0+commit.1d4f565a">v0.5.0+commit.1d4f565a</option>
                  <option value="v0.4.26+commit.4563c3fc">v0.4.26+commit.4563c3fc</option>
                  <option value="v0.4.25+commit.59dbf8f1">v0.4.25+commit.59dbf8f1</option>
                  <option value="v0.4.24+commit.e67f0147">v0.4.24+commit.e67f0147</option>
                  <option value="v0.4.23+commit.124ca40d">v0.4.23+commit.124ca40d</option>
                  <option value="v0.4.22+commit.4cb486ee">v0.4.22+commit.4cb486ee</option>
                  <option value="v0.4.21+commit.dfe3193c">v0.4.21+commit.dfe3193c</option>
                  <option value="v0.4.20+commit.3155dd80">v0.4.20+commit.3155dd80</option>
                  <option value="v0.4.19+commit.c4cbbb05">v0.4.19+commit.c4cbbb05</option>
                  <option value="v0.4.18+commit.9cf6e910">v0.4.18+commit.9cf6e910</option>
                  <option value="v0.4.17+commit.bdeb9e52">v0.4.17+commit.bdeb9e52</option>
                  <option value="v0.4.16+commit.d7661dd9">v0.4.16+commit.d7661dd9</option>
                  <option value="v0.4.15+commit.bbb8e64f">v0.4.15+commit.bbb8e64f</option>
                  <option value="v0.4.14+commit.c2215d46">v0.4.14+commit.c2215d46</option>
                  <option value="v0.4.13+commit.fb4cb1a">v0.4.13+commit.fb4cb1a</option>
                  <option value="v0.4.12+commit.194ff033">v0.4.12+commit.194ff033</option>
                  <option value="v0.4.11+commit.68ef5810">v0.4.11+commit.68ef5810</option>
                  </select>
              </div>
            </li>
            <li>
              <div class="li-width">{{$t("listHeader.sourceCode")}}: </div>
              <div class="li-content-width">
                <div id="showBtn" class="height-button" onclick="document.getElementById('fileinput').click();">
                  click to upload a file
                </div>
                <div style='height: 0px;width: 0px; overflow:hidden;'>
                   <input type="file" id="fileinput" @change="readFile($event)"/>
                </div>
              </div>
              <textarea readonly class="li-content-height" id="fileContent">
              </textarea>
            </li>
            <li>
              <div class="li-content-width">
                <button class="height-button" @click="startVerfication()"> Click to Verify </button>
              </div>
            </li>
            <li>
              <div class="li-content-height" id='creationCode'>{{contractInfo.contractCreationCode}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import Header from '../header'
import router from '../../router'
import smHeader from '../sm-header'
import searchInput from '../search-input'
import ContractDescribe from '../describe'
import Footer from '../footer'
import { readSingleFile, asyncLoadJs } from '../../untils/file.js'
// import { compileContract } from '../../service/contract'
var wrapper = require('solc/wrapper')
var isCompilerLoaded = false
export default {
  data () {
    return {
      title: this.$t('navs.verifyContract'),
      content: '',
      link: this.$t('navs.verifyContract'),
      fileContent: 'aaaa'
    }
  },
  components: {
    Header,
    smHeader,
    searchInput,
    ContractDescribe,
    Footer
  },
  // mounted () {
  //   this.getDetail(this.$route.query)
  // },
  computed: {
    contractInfo: {
      get () {
        return this.$store.state.contract.contractInfo
      }
    }
  },
  methods: {
    ...mapActions(['verifyContract']),
    readFile (evt) {
      var f = evt.target.files[0]
      if (f) {
        readSingleFile(f).then((contents) => {
          document.getElementById('fileContent').innerHTML = contents
        })
      } else {
        alert('Failed to load file')
      }
    },
    setCompilerVersion (evt) {
      console.log('selected version:' + evt.target.value)
      isCompilerLoaded = false
      var srcUrl = 'https://solc-bin.ethereum.org/bin/soljson-' + evt.target.value + '.js'
      asyncLoadJs(srcUrl).then(() => {
        isCompilerLoaded = true
      }).catch((errMsg) => {
        alert(errMsg)
      })
    },
    compileContract (sourceCode) {
      var solc = wrapper(window.Module)
      var input = {
        language: 'Solidity',
        sources: {
          'mortal': {
            content: sourceCode
          }
        },
        settings: {
          metadata: {
            // Use only literal content and not URLs (false by default)
            useLiteralContent: true
          },
          outputSelection: {
            '*': {
              '*': ['*']
            }
          }
        }
      }
      var compileResult = solc.compile(JSON.stringify(input))
      var output = JSON.parse(compileResult)
      return output
    },
    handleCompileOutput () {
      var output = this.compileContract(document.getElementById('fileContent').value)
      for (var i in output.contracts) {
        var contracts = output.contracts[i]
        var deployedBytecode = '0x'
        var abi = ''
        for (var c in contracts) {
          deployedBytecode = deployedBytecode + contracts[c].evm.bytecode.object
          abi = JSON.stringify(contracts[c].abi)
          break
        }
        if (deployedBytecode.substr(0, deployedBytecode.length - 68) ===
        this.contractInfo.contractCreationCode.substr(0, this.contractInfo.contractCreationCode.length - 68)) {
          alert('Source code verification passed!')
          this.verifyContract({'address': this.contractInfo.address,
            'sourceCode': document.getElementById('fileContent').value,
            'abi': abi}).then((result) => {
            console.log(result)
            if (result.success) {
              router.push({path: '/contract/detail', query: {address: this.contractInfo.address}})
            } else {
              alert('Save verification info failed,msg:' + result.message)
            }
          })
        } else {
          alert('Source code verification failed')
        }
      }
    },
    startVerfication () {
      var compilerVersion = document.getElementById('compilerVersion').value
      if (compilerVersion === '') {
        alert('Compiler version missed')
        return
      }
      if (document.getElementById('fileContent') == null) {
        alert('no source code')
        return
      }
      if (!isCompilerLoaded) {
        var srcUrl = 'https://solc-bin.ethereum.org/bin/soljson-' + compilerVersion + '.js'
        asyncLoadJs(srcUrl).then(() => {
          isCompilerLoaded = true
          this.handleCompileOutput()
        }).catch((errMsg) => {
          alert(errMsg)
        })
      } else {
        this.handleCompileOutput()
      }
    }
  },
  watch: {
    '$route' (to, from) {
      this.getDetail(this.$route.query)
    }
  }
}
</script>
<style lang="less">
@import "../../assets/css/page.less";
@import "../../assets/css/describe.less";
@import "../../assets/css/detail.less";
@import "../../assets/css/list.less";
// @import "../../assets/css/button.less";
</style>
<style scoped>
.detail-wrap, .el-tab-detail-wrap{
  min-width: 1110px;
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>
