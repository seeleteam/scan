// template define
<template>
  <div id='indexChart' :style="{ 'min-width': '1200px', width: '1200px', height: '280px'}"></div>
</template>

// script define
<script>
import { mapActions } from 'vuex'
import _ from 'lodash'
import { formatNumber } from '../../untils/format'
import echarts from 'echarts'
export default {
  mounted () {
    this.drawChartIndex()
    // this.getChartData()
  },
  computed: {
    chartDataList: {
      get () {
        return this.$store.state.home.chartDataList
      }
    }
  },
  watch: {
    chartDataList: {
      handler: function (val, oldval) {
        this.drawChartIndex()
      }
    }
  },
  filters: {
    numberFilter (value) {
      return formatNumber(value)
    }
  },
  methods: {
    ...mapActions([
      'getChartData'
    ]),
    drawChartIndex () {
      var self = this
      // charts locate
      var indexChartElement = document.getElementById('indexChart')
      // charts instantiatte
      var indexChart = echarts.init(indexChartElement)
      // clean cache
      indexChart.clear()
      if (_.isUndefined(this.chartDataList.code)) {
        indexChart.showLoading({
          text: 'Loading...'
        })
      } else {
        indexChart.hideLoading()
      }
      // method define:
      // getting data
      var indexChartDataTime = function () {
        return self.chartDataList.stime
      }
      var indexChartDataTxcount = function () {
        return self.chartDataList.txcount
      }
      // define  charts option
      var option = {
        title: {
          text: 'Seele Transaction History for the past 30 days',
          x: 'center',
          y: 25,
          textStyle: {
            fontFamily: 'Helvetica',
            fontSize: 16,
            fontWeight: 'lighter',
            color: '#333'
          }
        },
        tooltip: {
          show: true,
          showContent: true,
          trigger: 'axis',
          showDelay: 20,
          transitionDuration: 0.4,
          backgroundColor: '#e1e9ec',
          borderRadius: 4,
          borderColor: 'rgba(199,214,221,1)',
          padding: 10,
          textStyle: {
            color: '#333',
            fontSize: 12
          },
          axisPointer: {
            type: 'cross',
            crossStyle: {
              lineStyle: {
                type: 'dashed',
                width: 1,
                color: '#3498db'
              }
            }
          }
        },
        calculable: true,
        grid: {
          x: 113,
          y: 83,
          x2: 62,
          y2: 46
        },
        xAxis: [
          {
            type: 'category',
            splitLine: {
              show: true,
              onGap: false,
              lineStyle: {
                color: '#f2f6f8'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#999'
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: 'rgba(51,51,51,0.1)'
              }
            },
            boundaryGap: false,
            data: indexChartDataTime()
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitLine: {
              show: true,
              lineStyle: {
                color: '#f2f6f8'
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: 'rgba(51,51,51,0.1)'
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#999'
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: 'Transactions',
            type: 'line',
            smooth: true,
            symbol: 'none',
            itemStyle: {
              normal: {
                areaStyle: {
                  color: 'rgba(235,241,245,0.7)',
                  type: 'default'
                },
                lineStyle: {
                  color: 'rgba(52,152,219,1)',
                  type: 'solid',
                  width: 1
                }
              }
            },
            data: indexChartDataTxcount()
          }
        ]
      }
      // clean cache
      indexChart.clear()
      // setting charts option
      indexChart.setOption(option, true)
    }
  }
}
</script>
<style>
  @import "../../assets/css/chars.less";
</style>
