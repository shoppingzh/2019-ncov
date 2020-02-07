<template>
  <div>
    <van-image
      :src="logoSrc"
      fill="cover"
      width="100%"
      height="200px">
    </van-image>
    <div class="container-y">
      <van-row type="flex">
        <van-col span="6" class="summary">
          <div v-if="data.add_daily" class="c-red add">+{{data.add_daily.addcon}}</div>
          <div class="c-red">{{ data.gntotal || '-' }}</div>
          <div class="label">确诊</div>
        </van-col>
        <van-col span="6" class="summary">
          <div v-if="data.add_daily" class="c-orange add">+{{data.add_daily.addsus}}</div>
          <div class="c-orange">{{ data.sustotal || '-' }}</div>
          <div class="label">疑似</div>
        </van-col>
        <van-col span="6" class="summary">
          <div v-if="data.add_daily" class="c-gray add">+{{data.add_daily.adddeath}}</div>
          <div class="c-gray">{{ data.deathtotal || '-' }}</div>
          <div class="label">死亡</div>
        </van-col>
        <van-col span="6" class="summary">
          <div v-if="data.add_daily" class="c-green add">+{{data.add_daily.addcure}}</div>
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
        <china-map
          :data="this.data.list">
        </china-map>
      </div>
      <div class="card">
        <van-row type="flex">
          <div class="container-xy c-blue">世界疫情地图</div>
        </van-row>
        <world-map :data="this.data.worldlist">
        </world-map>
      </div>
    </div>
  </div>
</template>

<script>
import logoSrc from '@/assets/logo.png'
import jsonp from 'jsonp'
import ChinaMap from '@/components/ChinaMap'
import WorldMap from '@/components/WorldMap'

export default {
  components: {
    ChinaMap,
    WorldMap
  },
  data () {
    return {
      data: {},
      logoSrc: logoSrc
    }
  },
  mounted () {
    jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json', {}, (err, data) => {
      if (!err) {
        this.data = data.data
      }
    })
  }
}
</script>

<style scoped>
  .card{ border-radius: 5px; margin-bottom: 15px; }
  .summary{ text-align: center; }
  .summary .add{ font-size: 12px; padding: 3px 0; opacity: .85; }
  .summary .label{ font-size: 12px;  color: #666; padding-top: 2px; }
</style>
