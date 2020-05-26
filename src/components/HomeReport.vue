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

export default {
    name: 'HomeReport',
    components: { TableClinics },
    computed: {
        ...mapGetters(['get_general_message', 'getAllClinicsData']),
    },
    methods:{
        ...mapActions([ 'searchClinicWithId', 'getAllClinics' ]),
        onClinics: function(){
            window.console.log('onClinics');
            //window.console.log( this.$store ) // Arrow function throws error for "this" !!
            //window.console.log( this )
            this.$store.dispatch('getAllClinics');
        },
        onDoctors: function(){},
        onPatients: function(){},
        onSchedules: function(){}
    }
}
</script>