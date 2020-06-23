<template>
    <div>
        <h1 class="title is-1"> {{ loggedInClinicData.data.group_name }} </h1>
        <h2 class="subtitle is-6">Active till {{loggedInClinicData.data.activated_to}}</h2>
        
        <TableDoctors v-bind:tableData='getDoctorsForTheClinicId' />
        <TableClinicSchedules :info='loggedInClinicData.data.group_name' :tableData='modifiedSchedulesForRender' />
        
        

    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import TableDoctors from './TableDoctors'
import TableClinicSchedules from './TableClinicSchedules'

export default {
    name: 'ClinicUIActiveHome',
    props: [ 'loggedInClinicData' ],
    components: { TableDoctors, TableClinicSchedules },
    created: function(){
        window.console.log('ClinicUIActiveHome : created');
        const payload = this.loggedInClinicData.data.id; 
        this.$store.dispatch('getAllDoctorsInClinicId', payload )
        //this.$store.dispatch('getAllSchedulesByClinicId', payload)
    },
    mounted: function(){
        window.console.log('ClinicUIActiveHome : mounted');
    },
    computed: {
        ...mapGetters([ 'getDoctorsForTheClinicId', 
                        'getWhetherFoundDoctorIdsForTheClinic', 
                        'getDataAllSchedulesByClinicId' ]),
        modifiedSchedulesForRender: function(){
            // Modifying the Array to get the DoctorName from the id and show it in UI
            let newArray = this.getDataAllSchedulesByClinicId.map( item =>{
                //item.doctorId
                const foundDoctor = this.getDoctorsForTheClinicId.find(element => (element.id===item.doctorId) );
                const doctorName = foundDoctor.name;
                return { ...item, doctorName }
            } );
            return newArray
        }
    },
    watch: {
        getWhetherFoundDoctorIdsForTheClinic: function(newValue,oldValue){
            
            window.console.log('watch=================================')
            window.console.log('getWhetherFoundDoctorIdsForTheClinic');
            window.console.log('newValue', newValue,' :: oldValue', oldValue);
            window.console.log('watch================================ /');

            if(newValue){
                window.console.log('FETCH=========>')
                const payload = this.loggedInClinicData.data.id;
                this.$store.dispatch('getAllSchedulesByClinicId', payload)
            }
        }
    },
    methods: {
        ...mapActions(['getAllDoctorsInClinicId', 'getAllSchedulesByClinicId']),
    }
}
</script>