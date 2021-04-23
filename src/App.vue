<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import { Overlay } from "vant";
export default {
  name: 'App',
  components: {
    // HelloWorld
    // Overlay
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
}
.toast-class {
  background-color: rgba(50, 50, 51, 0);
}
.toast-class .van-loading__spinner {
  /* color: rgb(201, 201, 201) !important; */
  color: #9d9d9d !important;
}
.toast-class .van-toast__text {
  /* color: rgb(201, 201, 201); */
  color: #9d9d9d;
}
</style>
