<template>
    <div>
        <h1 class="title is-1"> {{ loggedInClinicData.data.group_name }} </h1>
        <h2 class="subtitle is-6">Active till {{loggedInClinicData.data.activated_to}}</h2>
        <TableDoctors v-bind:tableData='getDoctorsForTheClinicId'></TableDoctors>
        
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import TableDoctors from './TableDoctors';

export default {
    name: 'ClinicUIActiveHome',
    props: [ 'loggedInClinicData' ],
    components: { TableDoctors },
    created: function(){
        window.console.log('ClinicUIActiveHome : created');
        const payload = this.loggedInClinicData.data.id; 
        this.$store.dispatch('getAllDoctorsInClinicId', payload );
    },
    mounted: function(){
        window.console.log('ClinicUIActiveHome : mounted');
    },
    computed: {
        ...mapGetters(['getDoctorsForTheClinicId']),
    },
    methods: {
        ...mapActions(['getAllDoctorsInClinicId']),
    }
}
</script>