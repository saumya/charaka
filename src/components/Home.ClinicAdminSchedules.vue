<template>
    <div>
        Home.ClinicAdminSchedules
        <section class="section">
            <label  class="title">Clinic Application | Schedules | {{ getSeletedClinic.group_name }}</label>
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

            <TableSchedules :tableData=getDataAllSchedulesByClinicId></TableSchedules>
        </section>
        
        
    </div>
</template>
<script>
window.console.log('Hello: Home.ClinicAdmin.Schedules');

import { mapGetters, mapActions } from 'vuex';

import TableSchedules from './TableSchedules';


export default {
    name: 'HomeClinicAdminSchedules',
    components: { TableSchedules },
    computed: {
        ...mapGetters([ 'getSeletedClinic', 'getDataAllSchedulesByClinicId']),
    },
    methods: {
        ...mapActions([ 'getAllSchedulesByClinicId' ]),
    },
    created: function(){
        window.console.log('created : Home.ClinicAdmin.Schedules');
    },
    mounted: function(){
        window.console.log('mounted : Home.ClinicAdmin.Schedules');
        window.console.log( 'SeletedClinic', JSON.stringify(this.$store.getters.getSeletedClinic) );
        this.$store.dispatch('getAllSchedulesByClinicId', this.getSeletedClinic.id );
    },
}
</script>