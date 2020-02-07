<template>
  <div>
    <van-image
      :src="logoSrc"
      fill="cover"
      width="100%"
      height="200px">
    </van-image>
    <div class="container-y">
      <van-row type="flex" class="summary">
        <van-col span="6">
          <div class="c-red">{{ data.gntotal || '-' }}</div>
          <div class="label">确诊</div>
        </van-col>
        <van-col span="6">
          <div class="c-orange">{{ data.sustotal || '-' }}</div>
          <div class="label">疑似</div>
        </van-col>
        <van-col span="6">
          <div class="c-gray">{{ data.deathtotal || '-' }}</div>
          <div class="label">死亡</div>
        </van-col>
        <van-col span="6">
          <div class="c-green">{{ data.curetotal || '-' }}</div>
          <div class="label">治愈</div>
        </van-col>
      </van-row>
    </div>
    <div class="container-xy">
      <div class="card">
        <van-row type="flex">
          <div class="container-xy c-blue">疫情地图</div>
        </van-row>
        <div
          ref="chinaMap"
          style="width: 100%; height: 300px;">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import chinaGeo from 'echarts/map/json/china.json'
import logoSrc from '@/assets/logo.png'
import jsonp from 'jsonp'

export default {
  data () {
    return {
      chinaMap: null,
      data: {},
      logoSrc: logoSrc
    }
  },
  watch: {
    data (newVal, oldVal) {
      this.renderChart()
    }
  },
  mounted () {
    // 初始化图形
    echarts.registerMap('china', chinaGeo)
    this.chinaMap = echarts.init(this.$refs.chinaMap)
    this.chinaMap.setOption({
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
          { value: 0 },
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
      }
    })
    // 获取数据(jsonp)
    jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json', {}, (err, data) => {
      if (!err) {
        this.data = data.data
      }
    })
  },
  methods: {
    renderChart () {
      // 中国地图
      const chinaMapData = []
      this.data.list.forEach((obj) => {
        chinaMapData.push({
          name: obj.name,
          value: parseInt(obj.value),
          sus: parseInt(obj.susNum),
          cure: parseInt(obj.cureNum),
          death: parseInt(obj.deathNum)
        })
      })
      this.chinaMap.setOption({
        series: [
          {
            type: 'map',
            map: 'china',
            zoom: 1.1,
            label: {
              show: true,
              fontSize: 8
            },
            data: chinaMapData
          }
        ]
      })
    }
  }
}
</script>

<style scoped>
  .summary{ text-align: center; }
  .card{ border-radius: 5px; margin-bottom: 15px; }
  .label{ font-size: 12px;  color: #444; }
</style>
