<template>
  <div class="doctorForm">
    <!-- <h1>Doctor Form</h1> -->
    
    <!-- title = CREATE | UPDATE -->
    <div class="field" v-if="(title==='UPDATE')">
        <div class="control">
            <label>Clinic Id</label>
            <input class="input is-info" type="text" placeholder="Doctor Id" v-model="doctor.id"> 
        </div>
    </div>

    <div class="field">
        <div class="control">
            <label>Doctor Name</label>
            <input class="input is-info" type="text" placeholder="Doctor Name" v-model="doctor.name"> 
        </div>
    </div>
    <div class="field">
        <div class="control">
            <label> Password </label>
            <input class="input is-info" type="text" placeholder="Password" v-model="doctor.password"> 
        </div>
    </div>
    <div class="field">
        <div class="control">
            <label>Doctor Phone Number</label>
            <input class="input is-info" type="number" placeholder="9999999999" v-model="doctor.phone"> 
        </div>
    </div>
    <div class="field">
        <div class="control">
            <label>Doctor Email</label>
            <input class="input is-info" type="text" placeholder="doctor@email.com" v-model="doctor.email"> 
        </div>
    </div>
    <div class="field">
        <div class="control">
            <label>Doctor Specialization / Details</label>
            <input class="input is-info" type="text" placeholder="Medicine" v-model="doctor.specialization"> 
        </div>
    </div>
    <div class="field">
        <div class="control">
            <label>Doctor Address</label>
            <input class="input is-info" type="text" placeholder="Road Lane, Town, State,Pin" v-model="doctor.address"> 
        </div>
    </div>

    <div class="buttons" v-if="(title==='CREATE')">
        <button class="button is-info" v-on:click="onRegisterNewDoctor">Register A New Doctor</button>
    </div>
    <div class="buttons" v-if="(title==='UPDATE')">
        <button class="button is-info" v-on:click="onUpdateDoctor">Update Doctor Info</button>
    </div>

  </div>
</template>

<script>

import store from '../store'

export default {
  name: 'DoctorForm',
  data: function(){
      return({
          doctor:{
              id: 3,
              name: "Xyz Last",
              password: "pass",
              phone: "1111111111",
              email: "email@email.com",
              specialization: 'Nothing',
              address: "my address is this"
          }
      })
  },
  props:['title'],
  computed:{
      localDoctor: function(){
          return({

          })
      }
  },
  methods:{
      onRegisterNewDoctor: function(){
          window.console.log('Doctor : CREATE');
          window.console.log('doctor : ', JSON.stringify(this.doctor));

          store.dispatch( 'createDoctor', this.doctor);
      },
      onUpdateDoctor: function(){
          window.console.log('Doctor : UPDATE');
          window.console.log('doctor : ', JSON.stringify(this.doctor));

          store.dispatch('updateDoctor', this.doctor);
      }
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>