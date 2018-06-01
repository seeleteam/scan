<template>
    <el-container class="page-wrap">
        <div class="wrap lg-show">
          <Header></Header>
        </div>
        <div class="sm-show page-sm-header-wrap">
          <smHeader></smHeader>
        </div>
        <div class="sm-show sm-search-input-wrap">
          <searchInput></searchInput>
        </div>
        <div class="mian-wrap">
          <div class="wrap">
            <AccountDescribe
              :title="title"
              :content="content"
              :link="link"
            ></AccountDescribe>
            <ul class="detail-wrap wrap-pad">
              <li>
                <span class="li-width">{{$t("detail.balance")}}: </span>
                <span>{{Balance}}</span>
              </li>
              <li>
                <span class="li-width">{{$t("detail.addressWatch")}}: </span>
                <span>{{AddressWatch}}</span>
              </li>
              <li>
                <span class="li-width">{{$t("detail.usdValue")}}: </span>
                <span>{{USDValue}}</span>
              </li>
              <li>
                <span class="li-width">{{$t("detail.tokenBalances")}}: </span>
                <span>{{TokenBalances}}</span>
              </li>
              <li>
                <span class="li-width">{{$t("detail.mined")}}: </span>
                <span>{{Mined}}</span>
              </li>
              <li>
                <span class="li-width">{{$t("detail.transactions")}}: </span>
                <span>{{Transactions}}</span>
              </li>
            </ul>
          </div>
        </div>
        <Footer></Footer>
    </el-container>
</template>
<script>
import Header from '../header'
import smHeader from '../sm-header'
import searchInput from '../search-input'
import AccountDescribe from '../describe'
import Footer from '../footer'
export default {
  data () {
    return {
      title: this.$t('navs.account'),
      content: 'Showing Block (#5466185 to #5466161) out of 5466211 total blocks',
      link: 'account',

      Balance: 1,
      AddressWatch: 4,
      USDValue: 2,
      TokenBalances: 5,
      Mined: 6,
      Transactions: 3
    }
  },
  components: {
    Header,
    smHeader,
    searchInput,
    AccountDescribe,
    Footer
  },
  methods: {
  }
}
</script>
<style lang="less">
@import "../../assets/css/page.less";
@import "../../assets/css/detail.less";
</style>
