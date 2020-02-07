<template>
  <div class="list">
    <div class="list__head">
      <van-row type="flex" class="list__item">
        <van-col span="6" class="list__label">{{ isChina ? '省份' : '国家' }}</van-col>
        <van-col span="6" class="list__label">确诊</van-col>
        <van-col span="6" class="list__label">治愈</van-col>
        <van-col span="6" class="list__label">死亡</van-col>
      </van-row>
    </div>
    <div class="list__body">
      <van-row
        v-for="item in data"
        type="flex"
        :key="item.ename"
        class="list__item">
        <van-col span="6" class="list__label">{{ item.name }}</van-col>
        <van-col span="6" class="list__label c-red">{{ item.value }}</van-col>
        <van-col span="6" class="list__label c-gray">{{ item.deathNum }}</van-col>
        <van-col span="6" class="list__label c-green">{{ item.cureNum }}</van-col>
      </van-row>
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
  computed: {
    isChina () {
      if (this.data && this.data.length) {
        return this.data[0].city !== undefined
      }
      return false
    }
  }
}
</script>

<style>
  .list__label{ text-align: center; font-size: 12px; }
  .list__item{ padding: 5px 0; }
  .list__head .list__item{ color: #444; }
  .list__body .list__label{ font-size: 14px; }
  .list__body .list__item:not(:last-child){ border-bottom: 1px solid #eee; }
</style>
