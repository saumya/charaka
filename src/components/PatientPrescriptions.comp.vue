<template>
    <div class="box">
        <p class="control">
            <span class="title has-text-black is-family-secondary is-size-3"> Prescriptions </span>
            <button class="button" @click="onGetData"> Get </button>
        </p>
        <TablePrescriptionsComponent :info="profileObj.name" 
                            :tableData='getFilteredPrescriptionssForPatientId' />
    </div>
</template>
<script>
import { mapGetters,mapActions } from 'vuex'
import TablePrescriptionsComponent from './TablePrescriptions.comp'

export default {
    name: 'PatientPrescriptionsComponent',
    props: [ 'profileObj' ],
    components: { TablePrescriptionsComponent },
    computed: {
        ...mapGetters(['getFilteredPrescriptionssForPatientId'])
    },
    methods: {
        ...mapActions([ 'action_AllPrescriptionsByPatientId' ]),
        onGetData: function(){
            window.console.log('onGetData')
            this.$store.dispatch( 'action_AllPrescriptionsByPatientId', this.profileObj.id );
        }
    }
}
</script>