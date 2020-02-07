<template>
  <div
    ref="map"
    :style="{width: width, height: height}">
  </div>
</template>

<script>
import echarts from 'echarts'
import chinaGeo from 'echarts/map/json/china.json'

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
      map: null
    }
  },
  computed: {
    mapData () {
      if (this.data) {
        const data = []
        this.data.forEach((obj) => {
          data.push({
            name: obj.name,
            value: parseInt(obj.value),
            sus: parseInt(obj.susNum),
            cure: parseInt(obj.cureNum),
            death: parseInt(obj.deathNum)
          })
        })
        return data
      }
      return []
    }
  },
  watch: {
    mapData (newVal, oldVal) {
      this.render()
    }
  },
  mounted () {
    echarts.registerMap('china', chinaGeo)
    this.map = echarts.init(this.$refs.map)
    this.map.setOption({
      tooltip: {
        show: true,
        backgroundColor: 'rgba(255, 255, 255, .85)',
        borderColor: '#ddd',
        borderWidth: 1,
        textStyle: {
          color: '#333'
        },
        padding: 10,
        formatter: (params, tickert, callback) => {
          const data = params.data
          if (data) {
            let html = `
              <b>${params.name}</b><br>
              确诊: ${data.value}<br>
              治愈: ${data.cure}<br>
              死亡: ${data.death}
            `
            return html
          }
          return `<b>${params.name}</b><br> 暂无数据`
        }
      },
      visualMap: {
        type: 'piecewise',
        showLabel: true,
        pieces: [
          { gte: 1, lte: 9 },
          { gte: 10, lte: 99 },
          { gte: 100, lte: 499 },
          { gte: 500, lte: 1000 },
          { gt: 1000 }
        ],
        right: '10px',
        bottom: '30%',
        padding: 0,
        textStyle: {
          fontSize: 10
        },
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 5
      },
      series: [
        {
          type: 'map',
          map: 'china'
        }
      ]
    })
  },
  methods: {
    render () {
      this.map.setOption({
        series: [
          {
            type: 'map',
            map: 'china',
            zoom: 1.1,
            label: {
              show: true,
              fontSize: 8
            },
            data: this.mapData
          }
        ]
      })
    }
  }
}
</script>

<style>

</style>
