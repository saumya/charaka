<template>
  <div class="hello">
    <h1>{{ msg }} <strong>{{appName}}</strong> </h1>
    <section class="section">
      <h1 class="title">Functionalities</h1>
      <h2 class="subtitle">All the functionalities details are as follows.</h2>
      
      <div class="box">
        <h1 class="subtitle"> Administration Application </h1>
        <p>Clinics, Patients, Doctors, Schedules, Prescription, Bill </p>

        <p>Activate the clinic</p>
        <p>Assign Doctors to a clinic</p>

      </div>

      <div class="box">
        <h1 class="subtitle"> Dedicated Applications </h1>
        <!-- <a class="button" href="#/clinic_admin"> Clinic Only Application </a> -->
        <router-link class="button is-primary" to="/clinic_admin">Clinic Only Functionality</router-link>
        <router-link class="button is-primary" to="/clinic_ui"> Clinic UI </router-link>
        <router-link class="button is-primary" to="/doctor_ui"> Doctor UI </router-link>
        <router-link class="button is-primary" to="/patient_ui"> Patient UI </router-link>
        
      </div>

    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    appName: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
