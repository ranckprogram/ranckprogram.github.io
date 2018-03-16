<template>
  <div class="MenuList">
    <ul class="menu-list">
      <li @click="handleEnter(item)" v-for="item in list" :key="item.label">
        <i>@</i>
        <label>{{item.label}}</label>
        <span>&</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['list'],
  data () {
    return {}
  },
  methods: {
    handleEnter (item) {
      console.dir(item)
      this.$emit('select', item)
    }
  }
}
</script>
<style>
  .menu-list {
    border-top: 1px solid #ddd;
  }
  .menu-list li {
    position: relative;
    padding: .2rem;
    height: .8rem;
    line-height: .4rem;
    font-size: .16rem;
    color: #555;
    border-bottom: 1px solid #ddd;
    overflow: hidden;
  }
  .menu-list li:hover {
    background-color: #f2f2f2;
  }
  .menu-list i {}
  .menu-list label {
    color: #333;
  }
  .menu-list span {
    position: absolute;
    right: .2rem;
    top: .2rem;
  }
</style>
