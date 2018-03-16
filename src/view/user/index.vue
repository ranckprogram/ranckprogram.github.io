<template>
  <div class="UserCenter">
    <div class="user-info">userCenter</div>
    <List :list="list"></List>
  </div>
</template>
<script>
import List from '@/components/MenuList'
export default {
  components: {
    List
  },
  data () {
    return {
      list: [{
        label: '收藏',
        route: ''
      }, {
        label: '设置',
        route: ''
      }, {
        label: '记录',
        route: ''
      }]
    }
  }
}
</script>
<style>
  .user-info {
    height: 3.2rem;
    line-height: 3.2rem;
    text-align: center;
    border: 1px dashed #ddd;
    margin: .2rem;
  }
</style>
