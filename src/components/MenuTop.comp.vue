<!-- HTML -->
<template>
        <!--
        <section class="section">
            <router-link class="button" to="/">Home</router-link>
            
            <router-link to="/app_basics"> Basics(Clinics)</router-link>
            <router-link to="/app_admin">App Admin</router-link>
            <router-link to="/clinic_admin">Clinics Admin </router-link>

            <router-link class="button" to="/clinic">Clinics</router-link>
            <router-link class="button" to="/doctor">Doctors</router-link>
            <router-link class="button" to="/patient">Patients</router-link>
            <router-link class="button" to="/schedule">Schedules</router-link>
            <router-link class="button" to="/assignments">Assignments</router-link>
            <router-link class="button" to="/report">Insights</router-link>
        </section>
        -->
        

        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-menu is-active">
                <div class="navbar-start">
                    <router-link class="navbar-item" to="/">Home</router-link>
                    <router-link class="navbar-item" to="/clinic">Clinics</router-link>
                    <router-link class="navbar-item" to="/doctor">Doctors</router-link>
                    <router-link class="navbar-item" to="/patient">Patients</router-link>
                    <router-link class="navbar-item" to="/schedule">Schedules</router-link> 
                    
                    <router-link class="navbar-item" to="/prescriptions">Prescriptions</router-link>
                    <router-link class="navbar-item" to="/bills">Bills</router-link>

                    <router-link class="navbar-item" to="/assignments">Assignments</router-link>
                </div>
                <div class="navbar-end">
                    <router-link class="navbar-item" to="/report">Insights</router-link>
                </div>
            </div>
        </nav>
    
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