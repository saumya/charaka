# charaka

A VueJS Application. 
 
 - REST calls, Routers and State engines.

Application to use the API from another server and show UI here.

### wip

 - UX improvements
 - UI for Clinic / Patient / Doctor
 


Component boiler plate

```
<template>
  <div class="one">
    <h1>One</h1>
  </div>
</template>

<script>
export default {
  name: 'One',
  data: function(){ return({  }) },
  props:['title'],
  computed:{},
  methods:{}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
```

For Store Modules

```
const state = {};
const getters = {};
const actions = {};
const mutations = {};
export default { state, getters, actions, mutations }
```



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Reference

 - [My first vue app][1]
 - [Vue Router][v-2]

















[1]: https://github.com/saumya/Vue101
[v-2]: https://router.vuejs.org/