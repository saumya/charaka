<template>
  <div class="clinicSearchForm">
    <h4>{{ title }}</h4>
    <div class="field has-addons">
        <div class="control is-expanded">
            <input class="input is-info" type="text" placeholder="Find a clinic with Id." v-model="userSelectedClinicId">
        </div>
        <div class="control">
            <button class="button is-info" v-on:click="onSearch"> Search </button>
        </div>
    </div>
    <div>searched clinic details</div>
    <div class="buttons" v-if="(title==='DELETE')">
        <button class="button is-danger" v-on:click="onDelete"> Delete </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClinicSearchForm',
  props:['title'],
  data: function(){
      return({
        userSelectedClinicId : 0
      });
  },
  methods:{
      onSearch: function(){
        window.console.log('onSearch', this.userSelectedClinicId);
      },
      onDelete: function(){
        window.console.log('onDelete', this.userSelectedClinicId);
      }
  },
}
</script>

<style scoped>
/*
a {
  color: #42b983;
}
*/
</style>