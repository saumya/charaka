<template>
  <div id="app">
    <!--
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to " appName="Charaka"/>
    -->

    <!-- <HelloWorld msg="Welcome to " appName="Charaka" /> -->
    <WelcomeHome greet="Hi" message="enjoy the demo" />
    <MenuTop />

    <!--
    <router-link :to="{ name:'HelloWorld', params:{ msg:'YoYoYo!', appName:'Charaka' } }">Home</router-link>
    -->
    <!-- <router-link to="/">Home</router-link> -->
    <!--
    <router-link to="/one">First</router-link>
    <router-link to="/two">Second</router-link>

    <router-link to="/vue">Vue Help</router-link>
    -->

    <div> =============== vvvvvvvv =============== </div>
    <router-view></router-view>  
    <div> =============== ^^^^^^ =============== </div>  
    
  </div>
</template>
<!-- code -->
<script>

//import HelloWorld from './components/HelloWorld'
import WelcomeHome from './components/WelcomeHome.comp'
import MenuTop from './components/MenuTop.comp'

export default {
  name: 'app',
  components: {
    WelcomeHome, MenuTop
  }
}

</script>
<!-- style -->
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
  background-color: rgb(248, 215, 215);
}
a{
  /*
  background-color: brown;
  color: aliceblue;
  */
  background-color: rgb(218, 255, 193);
  padding: 0.1em;
  margin-right: 0.1em;
}
</style>
