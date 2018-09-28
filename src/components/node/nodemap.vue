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
        <div class="describe-title-wrap">
          <span class="title">{{$t('navs.node')}}</span>
          <ul class="link-wrap">
            <li>
              <a href="/">{{$t("navs.home")}}</a>
            </li>
            <li>
              <i class="el-icon-arrow-right"></i>
            </li>
            <li class="current">{{$t('navs.node')}}</li>
          </ul>
        </div>
        <el-row :gutter="20" class="layout-wrap">
          <el-col :xs="24" :md="7" :lg="7" class="lg-show hide-padding">
            <div class="layout-left-wrap bg-layout node-map-wrap">
              <div class="left-main-title">
                <router-link :to="{path: '/node', query: { test : 1, p: 1, ps: 25 }}">
                  <span class="table-link-color height">{{nodeSum | numberFilter}} {{$t("node.nodeTitle")}}</span>
                </router-link>
              </div>
              <div class="left-subtitle">{{$t("node.nodeStat")}}</div>
              <el-table class="list-wrap" :data="nodeListByCountry" height="500" :empty-text="$t('message.noData')" style="width: 100%; background: transparent">
                <el-table-column prop="nodeRank" :label="$t('node.nodeRank')" min-width="55">
                </el-table-column>
                <el-table-column prop="nodeCountry" min-width="110" :label="$t('node.nodeCountry')">
                </el-table-column>
                <el-table-column prop="nodeCount, nodePercent" min-width="110" :label="$t('node.nodeCount')">
                  <template slot-scope="scope">
                    <span class="list-content">{{scope.row.nodeCount | nodePercentFilter(scope.row.nodePercent)}}</span>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-col>
          <el-col :xs="24" :md="17" :lg="17" class="hide-padding">
            <div class="layout-right-wrap bg-layout">
              <div class="map-content-title">{{$t("node.nodeMap")}}</div>
              <div class="map-content">
              </div>
              <div class='grid-content bg-purple'>
                <div id='chartNodesDistribution' class="chartNodesDistribution" :style="{ 'min-width': '300px', width: '100%', 'max-height': '500px'}"></div>
              </div>
              <div class="border-bottom-style"></div>
            </div>
          </el-col>
          <el-col :xs="24" :md="7" :lg="7" class="sm-show hide-padding">
            <div class="layout-left-wrap bg-layout node-map-wrap">
              <div class="left-main-title">
                <router-link :to="{path: '/node', query: { test : 1, p: 1, ps: 25 }}">
                  <span class="table-link-color height">{{nodeSum | numberFilter}} {{$t("node.nodeTitle")}}</span>
                </router-link>
              </div>
              <div class="left-subtitle">{{$t("node.nodeStat")}}</div>
              <el-table class="list-wrap" :data="nodeListByCountry" height="500" :empty-text="$t('message.noData')" style="width: 100%; background: transparent">
                <el-table-column prop="nodeRank" :label="$t('node.nodeRank')" min-width="55">
                </el-table-column>
                <el-table-column prop="nodeCountry" min-width="130" :label="$t('node.nodeCountry')">
                </el-table-column>
                <el-table-column prop="nodeCount, nodePercent" min-width="90" :label="$t('node.nodeCount')">
                  <template slot-scope="scope">
                    <span class="list-content">{{scope.row.nodeCount | nodePercentFilter(scope.row.nodePercent)}}</span>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import Header from '../header'
import smHeader from '../sm-header'
import searchInput from '../search-input'
import Footer from '../footer'
// eslint-disable-next-line
// import world from 'echarts/map/js/world'
import { formatNumber, formatNodePercent } from '../../untils/format'
import echarts from 'echarts'
export default {
  data () {
    return {
      isShow: 1
    }
  },
  components: {
    Header,
    smHeader,
    searchInput,
    Footer
  },
  mounted () {
    this.getNodeListByCountry()
    this.getNodeListByCity()
    this.drawChartNodesDistribution('')
  },
  computed: {
    nodeListByCountry: {
      get () {
        return this.$store.state.node.nodeListByCountry
      }
    },
    nodeListByCity: {
      get () {
        return this.$store.state.node.nodeListByCity
      }
    },
    nodeSum: {
      get () {
        return this.$store.state.node.nodeSum
      }
    },
    nodeListCityGeo: {
      get () {
        return this.$store.state.node.nodeListCityGeo
      }
    }
  },
  watch: {
    nodeListByCity: {
      handler: function (val, oldval) {
        this.drawChartNodesDistribution('')
      }
    }
  },
  filters: {
    numberFilter (value) {
      return formatNumber(value)
    },
    nodePercentFilter (nodeCount, nodePercent) {
      return formatNodePercent(nodeCount, nodePercent)
    }
  },
  methods: {
    ...mapActions(['getNodeListByCountry', 'getNodeListByCity']),
    drawChartNodesDistribution () {
      var nodeDistributionChart = document.getElementById('chartNodesDistribution')
      var chartNodeDistribution = echarts.init(nodeDistributionChart)
      var self = this
      var convertData = function (data) {
        var cityGeo = self.nodeListCityGeo
        var res = []
        for (var i = 0; i < data.length; i++) {
          var tmpGeo = cityGeo[data[i].nodeCity]
          if (tmpGeo) {
            res.push({
              name: data[i].nodeCity,
              value: JSON.parse(tmpGeo).concat(data[i].nodeCount)
            })
          }
        }
        return res
      }
      if (this.nodeListByCity.length === 0) {
        chartNodeDistribution.showLoading({
          text: this.$t('statcharts.common.loading')
        })
      } else {
        chartNodeDistribution.hideLoading()
      }
      chartNodeDistribution.setOption({
        backgroundColor: '#404a59',
        title: {
          text: this.$t('node.nodeMapTitle'),
          x: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            return self.$t('node.nodeTip') + '</br>' + params.name + ' : ' + params.value[2]
          }
        },
        legend: {
          orient: 'vertical',
          y: 'bottom',
          x: 'right',
          data: [this.$t('node.nodeMapFoot')],
          textStyle: {
            color: '#fff'
          }
        },
        visualMap: {
          min: 1,
          max: 200,
          calculable: true,
          inRange: {
            color: ['#1bce5a', '#eac736', '#d94e5d']
          },
          textStyle: {
            color: '#fff'
          }
        },
        geo: {
          map: 'world',
          label: {
            emphasis: {
              show: false
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: '#323c48',
              borderColor: '#111'
            },
            emphasis: {
              areaColor: '#2a333d'
            }
          }
        },
        series: [{
          name: this.$t('node.nodeMapFoot'),
          type: 'scatter',
          data: convertData(this.nodeListByCity),
          coordinateSystem: 'geo',
          symbolSize: 12,
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: false
            },
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            emphasis: {
              label: {
                show: true
              },
              borderColor: '#fff',
              borderWidth: 1
            }
          }
        }]
      })
    }
  }
}
</script>
<style lang="less">
@import "../../assets/css/page.less";
@import "../../assets/css/describe.less";
@import "../../assets/css/char.less";
.chartNodesDistribution{
  width: 100%;
  height: 600px;
}
@media screen and (max-width: 768px ) {
  .chartNodesDistribution{
    width: 100%;
    height: 300px;
  }
}
</style>
