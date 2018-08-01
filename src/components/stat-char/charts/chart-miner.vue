// template define
<template>
    <div class='grid-content bg-purple'>
      <div id='statChartsMiner' class="statChartsClass" :style="{ 'min-width': '300px', width: '835px', height: '500px'}"></div>
    </div>
</template>

// script define
<script>
import { mapActions } from 'vuex'
import _ from 'lodash'
import { formatNumber } from '../../../untils/format'
import echarts from 'echarts'
export default {
  mounted () {
    this.getMinerChart(this.shardCharValue)
    this.drawStatChartsMiner()
  },
  computed: {
    statData: {
      get () {
        return this.$store.state.chart.minerChart
      }
    },
    shardCharValue: {
      get () {
        return this.$store.state.shardChar.shardCharValue
      }
    }
  },
  watch: {
    statData: {
      handler: function (val, oldval) {
        this.drawStatChartsMiner()
      }
    },
    shardCharValue: {
      handler: function (val, oldval) {
        this.getMinerChart(this.shardCharValue)
        this.drawStatChartsMiner()
      }
    }
  },
  filters: {
    numberFilter (value) {
      return formatNumber(value)
    }
  },
  methods: {
    ...mapActions(['getMinerChart']),
    drawStatChartsMiner () {
      // charts locate
      var statChartsElement = document.getElementById('statChartsMiner')
      // charts instantiatte
      var statCharts = echarts.init(statChartsElement)
      // clean cache
      statCharts.clear()
      if (_.isUndefined(this.statData.code)) {
        statCharts.showLoading({
          text: this.$t('statcharts.common.loading')
        })
      } else {
        statCharts.hideLoading()
      }
      // method define:
      //    getting data
      //    tip display
      // define  charts option
      var option = {
        title: {
          text: '(' + (this.shardCharValue === '0' ? this.$t('statcharts.common.shardAll') : (this.$t('statcharts.common.shardTag') + this.shardCharValue)) + ')',
          x: 'left'
        },
        toolbox: {
          show: true,
          padding: [0, 35, 0, 0],
          feature: {
            mark: {show: true},
            dataView: {
              show: true,
              readOnly: true,
              textareaBorderColor: '#000',
              textColor: '#000',
              buttonColor: '#409EFF',
              buttonTextColor: '#fff',
              title: this.$t('statcharts.charts.dataView'),
              lang: [this.$t('statcharts.charts.dataView'), this.$t('statcharts.charts.close'), this.$t('statcharts.charts.refresh')],
              optionToContent: function (opt) {
                var axisData = opt.series[0].data
                var tableDom = document.createElement('table')
                tableDom.setAttribute('id', 'test')
                tableDom.setAttribute('class', 'table-data-table')
                tableDom.style.width = '100%'
                tableDom.style.paddingLeft = '20px'
                var table = '<tbody>'
                for (var i = 0, l = axisData.length; i < l; i++) {
                  table += '<tr>' + '<td>' + axisData[i].name + '</td>' + '<td>' + axisData[i].value + '</td>' + '</tr>'
                }
                table += '</tbody>'
                tableDom.innerHTML = table
                return tableDom
              }
            },
            magicType: {
              show: true,
              type: ['pie', 'funnel'],
              title: {
                pie: this.$t('statcharts.charts.pie'),
                funnel: this.$t('statcharts.charts.funnel')
              }
            },
            restore: {
              show: true,
              title: this.$t('statcharts.charts.restore')
            },
            saveAsImage: {
              show: true,
              title: this.$t('statcharts.charts.save')
            }
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b} ({d}%) <br/> ' + this.$t('statcharts.miner.minerByBlockTipname') + ': {c} '
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          x: 'left',
          right: 10,
          top: 20,
          bottom: 20,
          data: this.statData.legendData,
          selected: this.statData.selected
        },
        series: [
          {
            name: this.$t('statcharts.miner.minerByBlockName'),
            type: 'pie',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            sampling: 'average',
            radius: '40%',
            center: ['70%', '50%'],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            data: this.statData.seriesData
          }
        ]
      }
      // clean cache
      statCharts.clear()
      // setting charts option
      statCharts.setOption(option, true)
    }
  }
}
</script>
<style>
  @import "../../../assets/css/chars.less";
</style>
