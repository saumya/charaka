<template>
  <div id="app">
    <!--
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to " appName="Charaka"/>
    -->

    <HelloWorld msg="Welcome to " appName="Charaka"/>

    <router-link :to="{ name:'HelloWorld', params:{ msg:'YoYoYo!', appName:'Charaka' } }">Home</router-link>
    <router-link to="/one">First</router-link>
    <router-link to="/two">Second</router-link>
    
    <div> =============== Below Only ! =============== </div>
    <router-view></router-view>  
    <div> =============== Above Only ! =============== </div>  
    
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}

</script>

<style>
#app {
  /*
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  */
}
</style>
