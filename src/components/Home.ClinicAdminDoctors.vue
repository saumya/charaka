<template>
    <div>
        <section class="section">
            <label  class="title">Clinic Application | Doctors | {{ getSeletedClinic.group_name }}</label>
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
                        <!-- <a class="navbar-item"> Dashboard </a> -->
                    </div>
                </div>
            </nav>
            <section class="section">
                <!--
                {{ getWhetherFoundDoctorIdsForTheClinic }} - {{ getDoctorsForTheClinicId }}
                {{ (getDoctorsForTheClinicId.length>0 ? 'Please wait. Getting the details of '+getDoctorsForTheClinicId.length+' doctors.' : 'No doctors found for the clinic.') }}
                -->
                <TableDoctors :tableData=getDoctorsForTheClinicId></TableDoctors>
            </section>
        </section>
    </div>
</template>
<script>
window.console.log('Hello: Home.ClinicAdmin.Patients');

import {mapGetters,mapActions} from 'vuex'
import TableDoctors from './TableDoctors';

export default {
    name: "HomeClinicAdminDoctors",
    components: { TableDoctors },
    computed:{
        ...mapGetters([ 'getSeletedClinic','getAllDoctorsData', 
                        'getWhetherFoundDoctorIdsForTheClinic', 'getDoctorsForTheClinicId']),
    },
    methods:{
        ...mapActions(['getAllDoctors', 'getAllDoctorsInClinicId']),
    },
    created: function(){
        window.console.log('created : Home.ClinicAdmin.Patients');
    },
    mounted: function(){
        window.console.log('mounted : Home.ClinicAdmin.Patients');
        //window.console.log( 'this.$store.getSeletedClinic', this.$store.getters.getSeletedClinic )
        //this.$store.dispatch('getAllDoctors');
        
        //window.console.log('seletedClinic', this.$store.getters.getSeletedClinic );
        window.console.log( JSON.stringify(this.$store.getters.getSeletedClinic) );

        this.$store.dispatch('getAllDoctorsInClinicId', this.getSeletedClinic.id );
    },
}
</script>