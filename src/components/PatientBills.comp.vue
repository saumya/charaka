<template>
    <div class="box">
        <p class="control">
            <span class="title has-text-black is-family-secondary is-size-3"> Bills </span>
            <button class="button" @click="onGetData"> Get </button>
        </p>
        <TableBills :info="profileObj.name" 
                    :tableData='getFilteredBillsForPatientId' />

    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import TableBills from './TableBills'

export default {
    name: 'PatientBillsComponent',
    props: [ 'profileObj' ],
    components: { TableBills },
    computed: {
        ...mapGetters(['getFilteredBillsForPatientId'])
    },
    methods:{
        ...mapActions([ 'action_AllBillsByPatientId' ]),
        onGetData: function(){
            this.$store.dispatch( 'action_AllBillsByPatientId', this.profileObj.id );
        }
    }
}
</script>