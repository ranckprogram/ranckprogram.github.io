<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
    <v-menu></v-menu>
  </div>
</template>

<script>
import menu from '@/components/menu'
export default {
  name: 'App',
  components: {
    'v-menu': menu
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  html {
    /*font-size: calc(100vw/3.75);*/
    font-size: 50px;
  }
  ul,li {
    list-style: none;
  }
  input {
    font-size: .14rem;
    border-radius: 0.05rem;
    color: #555;
    padding: 0.1rem;
    border: 1px solid #ddd;
    outline: none;
  }
  #app {
    font-size: .14rem;
  }
  .container {
    margin-bottom: .4rem;
  }

</style>
