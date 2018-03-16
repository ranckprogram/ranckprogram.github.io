<template>
  <div class="Menu">
    <div class="bottom-space"></div>
    <div class="bottom-menu">
      <ul>
        <li v-for="(item, index) in menu" @click="handleTabMenu(index, item)" :key="index" :class="{active: index === curActive}">{{item.label}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      curActive: 4,
      menu: [
        {
          label: '首页',
          route: 'Index'
        },
        {
          label: '常用语',
          route: 'Common'
        },
        {
          label: '随时说',
          route: 'Timely'
        },
        {
          label: '今天我说',
          route: 'Today'
        },
        {
          label: '个人中心',
          route: 'UserCenter'
        }
      ]
    }
  },
  methods: {
    handleTabMenu (index, item) {
      this.curActive = index
      this.$emit('change', item)
    }
  }
}
</script>
<style>
  .bottom-space {
    height: .4rem;
  }
  .bottom-menu {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 200;
    box-shadow: 0px -5px 10px #DDD;
  }
  .bottom-menu ul {
    display: flex;
  }
  .bottom-menu li {
    flex: 1;
    text-align: center;
    line-height: .4rem;
    padding: .2rem 0;
    cursor: pointer;
  }
  .bottom-menu li.active {
    color: #8dff12;
  }
</style>
