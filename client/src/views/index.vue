<template>
  <div class="index">
    <van-image
      :src="logoSrc"
      fill="cover"
      width="100%"
      height="200px">
    </van-image>
    <van-tag
      plain
      class="source-tag"
      @click="linkToSource">
        <van-icon name="home-o" />
        源码地址：https://github.com/shoppingzh/2019-ncov
    </van-tag>
    <van-row type="flex" justify="center" align="center">
        <van-tag type="primary">疫情数据分析</van-tag>
        <div class="container-x c-gray f10">{{ data.times }}</div>
    </van-row>
    <div class="container-y">
      <van-row type="flex">
        <van-col span="6" class="summary">
          <div v-if="data.add_daily" class="c-red add animated fadeInUp delay-1s">+{{data.add_daily.addcon}}</div>
          <div class="c-red">{{ data.gntotal || '-' }}</div>
          <div class="label">确诊</div>
        </van-col>
        <van-col span="6" class="summary">
          <div v-if="data.add_daily" class="c-orange add animated fadeInUp delay-1s">+{{data.add_daily.addsus}}</div>
          <div class="c-orange">{{ data.sustotal || '-' }}</div>
          <div class="label">疑似</div>
        </van-col>
        <van-col span="6" class="summary">
          <div v-if="data.add_daily" class="c-gray add animated fadeInUp delay-1s">+{{data.add_daily.adddeath}}</div>
          <div class="c-gray">{{ data.deathtotal || '-' }}</div>
          <div class="label">死亡</div>
        </van-col>
        <van-col span="6" class="summary">
          <div v-if="data.add_daily" class="c-green add animated fadeInUp delay-1s">+{{data.add_daily.addcure}}</div>
          <div class="c-green">{{ data.curetotal || '-' }}</div>
          <div class="label">治愈</div>
        </van-col>
      </van-row>
    </div>
    <van-tabs v-model="tabActive" scrollspy sticky>
      <van-tab title="中国疫情" class="container-xy">
        <div class="card">
          <van-row type="flex">
            <div class="container-xy c-blue">疫情地图</div>
          </van-row>
          <china-map
            :data="data.list">
          </china-map>
        </div>
        <div class="c-blue" style="margin-bottom: 8px;">各省份疫情数据</div>
        <my-list :data="data.list">
        </my-list>
      </van-tab>
      <van-tab title="世界疫情" class="container-xy">
        <div class="card">
          <van-row type="flex">
            <div class="container-xy c-blue">世界疫情地图</div>
          </van-row>
          <world-map :data="this.data.worldlist">
          </world-map>
        </div>
        <div class="c-blue" style="margin-bottom: 8px;">各国家疫情数据</div>
        <my-list :data="data.worldlist">
        </my-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import logoSrc from '@/assets/logo.png'
import jsonp from 'jsonp'
import ChinaMap from '@/components/ChinaMap'
import WorldMap from '@/components/WorldMap'
import MyList from '@/components/MyList'

export default {
  components: {
    ChinaMap,
    WorldMap,
    MyList
  },
  data () {
    return {
      data: {},
      tabActive: 0,
      logoSrc: logoSrc
    }
  },
  mounted () {
    jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json', {}, (err, data) => {
      if (!err) {
        this.data = data.data
      }
    })
  },
  methods: {
    linkToSource () {
      window.open('https://github.com/shoppingzh/2019-ncov')
    }
  }
}
</script>

<style scoped>
  .index{ position: relative; }
  .card{ border-radius: 5px; margin-bottom: 15px; }
  .summary{ text-align: center; }
  .summary .add{ font-size: 12px; padding: 3px 0; opacity: .85; }
  .summary .label{ font-size: 12px;  color: #666; padding-top: 2px; }
  .source-tag{ position: absolute; right: 2px; top: 170px;}
</style>
