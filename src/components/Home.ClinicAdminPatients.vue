<template>
    <div>
        <section class="section">
            <label  class="title">Clinic Application | {{ getSeletedClinic.group_name }}</label>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-menu is-active">
                    <div class="navbar-start">
                        <router-link class="navbar-item" to="/clinic_admin">Home</router-link>
                        <!-- <router-link class="navbar-item" to="/clinic_employees">Employees</router-link> -->
                        <!-- <router-link class="navbar-item" to="/clinic_patients">Patients</router-link> -->
                        <router-link class="navbar-item" to="/clinic_doctors">Doctors</router-link>
                        <!-- <router-link class="navbar-item" to="/clinic_approvals">Approvals</router-link> -->
                        <router-link class="navbar-item" to="/clinic_schedules">Schedules</router-link>
                        
                    </div>
                    <div class="navbar-end">
                        <!--
                        <a class="navbar-item"> Notice Board </a>
                        <a class="navbar-item"> Dashboard </a>
                        -->
                        <a class="navbar-item"> Dashboard </a>
                    </div>
                </div>
            </nav>
            <section class="section">
                coming soon
            </section>
        </section>
    </div>
</template>
<script>
window.console.log('Hello: Home.ClinicAdmin.Patients');

import {mapGetters} from 'vuex'

export default {
    name: "HomeClinicAdminPatients",
    computed:{
        ...mapGetters(['getSeletedClinic']),
    }
}
</script>