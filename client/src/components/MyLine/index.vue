<template>
  <div
    ref="chart"
    :style="{ width: width, height: height }">
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      chart: null
    }
  },
  computed: {
    chartData () {
      return this.data ? this.data.slice(0, this.data.length).reverse() : []
    }
  },
  watch: {
    chartData () {
      this.render()
    }
  },
  mounted () {
    this.chart = echarts.init(this.$refs.chart)
    this.render()
  },
  methods: {
    render () {
      this.chart.setOption({
        legend: {},
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '5%',
          containLabel: true
        },
        dataset: {
          dimensions: ['date', 'cn_conNum', 'cn_susNum', 'cn_deathNum', 'cn_cureNum'],
          source: this.chartData
        },
        xAxis: {
          name: '日期',
          type: 'category',
          nameGap: 10
        },
        yAxis: {
          name: '人数',
          nameGap: 10
        },
        series: [
          {
            name: '确诊',
            type: 'line',
            itemStyle: {
              color: '#ff3b30'
            }
          },
          {
            name: '疑似',
            type: 'line',
            itemStyle: {
              color: '#ff9500'
            }
          },
          {
            name: '死亡',
            type: 'line',
            itemStyle: {
              color: '#8e8e93'
            }
          },
          {
            name: '治愈',
            type: 'line',
            itemStyle: {
              color: '#4cd964'
            }
          }
        ]
      })
    }
  }
}
</script>

<style>

</style>
