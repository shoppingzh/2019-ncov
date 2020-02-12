<template>
  <div class="list">
    <div class="list__head">
      <van-row type="flex" class="list__item">
        <van-col span="6" class="list__label">
          {{ isChina ? '省份' : '国家'}}
        </van-col>
        <van-col span="6" class="list__label">确诊</van-col>
        <van-col span="6" class="list__label">死亡</van-col>
        <van-col span="6" class="list__label">治愈</van-col>
      </van-row>
    </div>
    <div class="list__body">
      <div v-for="(item, index) in sortedData" :key="item.name">
        <van-row
          type="flex"
          align="center"
          class="list__item"
          @click="provinceIndex = (provinceIndex === index) ? -1 : index">
          <van-col span="6" class="list__label">
              <van-icon
                v-if="item.city && item.city.length"
                name="play"
                class="list__label__icon c-pink"
                :class="{ 'list__label__icon--active' : provinceIndex === index }"/> {{ item.name }}
          </van-col>
          <van-col span="6" class="list__label c-red">{{ item.value }}</van-col>
          <van-col span="6" class="list__label c-gray">{{ item.deathNum }}</van-col>
          <van-col span="6" class="list__label c-green">{{ item.cureNum }}</van-col>
        </van-row>
        <div
          v-if="item.city && item.city.length"
          v-show="provinceIndex === index"
          class="list__sub-list" >
          <van-row
            v-for="city in item.city"
            :key="city.name"
            type="flex"
            align="center"
            class="list__item">
            <van-col span="6" class="list__label">{{ city.name }}</van-col>
            <van-col span="6" class="list__label c-red">{{ city.conNum }}</van-col>
            <van-col span="6" class="list__label c-gray">{{ city.deathNum }}</van-col>
            <van-col span="6" class="list__label c-green">{{ city.cureNum }}</van-col>
          </van-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      provinceIndex: -1
    }
  },
  computed: {
    isChina () {
      if (this.data && this.data.length) {
        return this.data[0].city !== undefined
      }
      return false
    },
    sortedData () {
      const data = this.data
      if (!data || !data.length) {
        return []
      }
      data.sort((a, b) => {
        return parseInt(b.value) - parseInt(a.value)
      })
      data.forEach((obj) => {
        if (obj.city && obj.city.length) {
          obj.city.forEach((city) => {
            obj.city.sort((a, b) => {
              return parseInt(b.conNum) - parseInt(a.conNum)
            })
          })
        }
      })
      return data
    }
  }
}
</script>

<style scoped>
  .list__label{ text-align: center; font-size: 12px; }
  .list__item{ padding: 10px 0; }
  .list__head .list__item{ color: #444; }
  .list__body .list__label{ font-size: 14px; }
  .list__body .list__item:not(:last-child){ border-bottom: 1px solid #eee; }
  .list__sub-list .list__label{ font-size: 12px; }
  .list__label__icon{ transition: all .3s; }
  .list__label__icon--active{ transform: rotate(90deg); }
</style>
