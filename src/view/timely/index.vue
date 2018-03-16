<template>
  <div class="timely">
    <input type="text" class="change-input" placeholder="请输入你想说的话，例如: 你好" v-model="words">
    <a href="javascript:;" class="btn-play" @click="handleSpeak">说</a>
    <iframe :src="palySrc" frameborder="0" style="width:0;height: 0;"></iframe>
  </div>
</template>
<script>
export default {
  data () {
    return {
      words: '',
      palySrc: ''
    }
  },
  methods: {
    handleSpeak () {
      this.palySrc = `https://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=2&text=${this.words}`
    }
  }
}
</script>
<style>
  .change-input {
    display: block;
    padding: 0.2rem;
    font-size: 0.16rem;
    width: 80%;
    margin: 35% auto 20%;
  }
  .btn-play {
    display: block;
    width: 1.4rem;
    height: 1.4rem;
    margin: 0 auto;
    line-height: 1.4rem;
    text-align: center;
    font-size: .7rem;
    color: #fff;
    text-decoration: none;
    border-radius: 50%;
    background-color: #efff49;
  }
</style>
