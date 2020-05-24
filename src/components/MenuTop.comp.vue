<!-- HTML -->
<template>
    <div>
        <router-link to="/">Home</router-link>
        
        <router-link to="/app_basics"> Basics(Clinics)</router-link>
        
        <!-- <router-link to="/app_admin">App Admin</router-link> -->
        <!-- <router-link to="/clinic_admin">Clinics Admin </router-link> -->

        <router-link to="/clinic">Clinics</router-link>
        <router-link to="/doctor">Doctors</router-link>
        <router-link to="/patient">Patients</router-link>
        <router-link to="/schedule">Schedules</router-link>
        
    </div>
</template>
<!-- Code -->
<script>
export default {
    name: 'MenuTop'
}
</script>
<!-- Style -->
<style scoped>
a {
  color: #007741;
}
</style>