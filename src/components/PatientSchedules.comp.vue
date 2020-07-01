<template>
    <div class="box">
        
        <p class="control">
            <span class="title has-text-black is-family-secondary is-size-3"> Schedules </span>
            <button class="button" @click="onGetSchedules"> Get </button>
            
            <TableSchedules :info="profileObj.name" 
                            :tableData='getFilteredSchedulesForPatientId' />
            
        </p>
    </div>
</template>
<script>
import { mapGetters,mapActions } from 'vuex'
import TableSchedules from './TableSchedules'

export default {
    name: "PatientSchedulesComponent",
    components: {
        TableSchedules
    },
    props: [ 'profileObj' ],
    computed: {
        ...mapGetters([ 'getFilteredSchedulesForPatientId' ])
    },
    methods:{
        ...mapActions([ 'getAllSchedulesByPatientId' ]),
        onGetSchedules: function(){
            window.console.log( 'onGetSchedules', JSON.stringify(this.profileObj) )
            this.$store.dispatch( 'getAllSchedulesByPatientId', this.profileObj.id );
        }
    }
}
</script>