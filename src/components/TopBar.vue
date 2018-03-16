<template>
  <div class="TopBar">
    <div class="top-head">
      <span class="back"><</span>
      <span class="title">标题</span>
      <span class="deal">操作</span>
    </div>
    <div class="top-place"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style>
  .top-head {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: .8rem;
    line-height: .8rem;
    text-align: center;
  }
  .top-head .back {
    position: absolute;
    left: 0;
    top: 0;
    width: .8rem;
    height: .8rem;
  }
  .top-place {
    height: .8rem;
  }
</style>
