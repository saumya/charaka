<template>
    <div>
        Insights
        <section class="section">
            <div class="buttons has-addons">
                <button class="button" v-on:click="onClinics">Clinics</button>
                <button class="button" v-on:click="onDoctors">Doctors</button>
                <button class="button" v-on:click="onPatients">Patients</button>
                <button class="button" v-on:click="onSchedules">Schedules</button>
            </div>
        </section>
        <section class="section">
            <TableClinics :tableData=getAllClinicsData></TableClinics>
            <TableDoctors :tableData=getAllDoctorsData></TableDoctors>
            <TablePatients :tableData=getAllPatientsData></TablePatients>
            <TableSchedule :tableData=getAllSchedulesData></TableSchedule>
        </section>
        <section class="section">
            <article class="message">
                <div class="message-header">
                    <p>Message</p>
                </div>
                <div class="message-body">
                    <!-- TO be filled by App -->
                    <div> {{ get_general_message }} </div>
                </div>
            </article>
        </section>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

//import TableGeneral from './TableGeneral';
import TableClinics from './TableClinics';
import TableDoctors from './TableDoctors';
import TablePatients from './TablePeople';
import TableSchedule from './TableSchedules';

export default {
    name: 'HomeReport',
    components: { TableClinics, TableDoctors, TablePatients, TableSchedule },
    computed: {
        ...mapGetters([ 'get_general_message', 
                        'getAllClinicsData', 'getAllDoctorsData', 'getAllPatientsData', 
                        'getAllSchedulesData']),
    },
    methods:{
        ...mapActions([ 'searchClinicWithId', 
                        'getAllClinics', 'getAllDoctors' ]),
        onClinics: function(){
            window.console.log('onClinics');
            //window.console.log( this.$store ) // Arrow function throws error for "this" !!
            //window.console.log( this )
            this.$store.dispatch('getAllClinics');
        },
        onDoctors: function(){
            window.console.log('onDoctors');
            this.$store.dispatch('getAllDoctors');
        },
        onPatients: function(){
            window.console.log('onPatients');
            this.$store.dispatch('getAllPatients');
        },
        onSchedules: function(){
            window.console.log('onSchedules');
            this.$store.dispatch('getAllSchedules');
        }
    }
}
</script>