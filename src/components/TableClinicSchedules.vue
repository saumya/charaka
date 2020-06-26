<template>
    <div>
        <GeneralMessage :message="get_general_message"></GeneralMessage>

        <label>All Schedules | {{clinicName}} | {{tableData.length}}</label>
        <div class="table-container">
        <table class="table is-bordered is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>sl no.</th>
                    <th>id</th>
                    <th>when</th>
                    <th>on Date</th>
                    <!-- <th>Person Id</th> -->
                    <th>Doctor</th>
                    <th> Prescription </th>
                    <th> Bill </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in tableData" :key="item.id">
                    <td>{{index+1}}</td>
                    <td>{{ item.id }}</td>
                    <td>
                        <span class="tag is-light is-success is-medium" v-if="item.is_morning"> Morning </span>
                        <span class="tag is-light is-warning is-medium" v-if="!item.is_morning"> Evening </span> 
                    </td>
                    <td>{{ item.on_date }}</td>
                    <!-- <td>{{ item.personId }}</td> -->
                    <!-- <td>{{ item.doctorId }}</td> -->
                    <td>{{ item.doctorName }}</td>
                    <td> <button class="button is-dark" v-on:click="onDetailsClick(item)"> Prescribe </button> </td>
                    <td> <button class="button is-dark" @click="onBillThisClick(item)"> Bill This </button> </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>sl no.</th>
                    <th>id</th>
                    <th>when</th>
                    <th>on Date</th>
                    <!-- <th>Person Id</th> -->
                    <th>Doctor</th>
                    <th> Prescription </th>
                    <th> Bill </th>
                </tr>
            </tfoot>
        </table>
        </div> <!-- table-container / -->

        <PrescriptionModal v-if="shouldShowModalDetails" 
                            v-bind:appointmentId="this.detailsOfObj.id"
                            v-bind:clinicId="this.clinicId"
                            v-bind:personId="this.detailsOfObj.personId"
                            v-bind:doctorId="this.detailsOfObj.doctorId" 
                            v-bind:doctorName="this.detailsOfObj.doctorName"
                            v-on:on_hide_details_click="onHideDetails"
                            v-on:on_save_prescription_click="onSavePrescription" />

    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import PrescriptionModal from './PrescriptionModal.comp'
import GeneralMessage from './GeneralMessage'

export default {
    name: 'TableSchedule',
    props: ['clinicName', 'clinicId','tableData'],
    data: ()=>({
        shouldShowModalDetails: false,
        detailsOfObj: '',
    }),
    components: { PrescriptionModal, GeneralMessage },
    computed: {
        ...mapGetters(['get_general_message']),
    },
    methods: {
        ...mapActions([ 'registerNewPrescription' ]),
        onSavePrescription: function( newPrescription ){
            window.console.log('TableSchedule : onSavePrescription');
            window.console.log( JSON.stringify(newPrescription) );
            this.$store.dispatch('registerNewPrescription', newPrescription );
        },
        onHideDetails: function(){
            this.shouldShowModalDetails = !this.shouldShowModalDetails
        },
        onDetailsClick: function(item){
            window.console.log('onDetailsClick', item.id);
            window.console.log( JSON.stringify(item) )
            window.console.log('TODO: fetch and show details')
            this.detailsOfObj = item;
            this.shouldShowModalDetails = !this.shouldShowModalDetails
        },
        onBillThisClick: function(item){
            window.console.log('onBillThisClick', JSON.stringify(item) );
        }
        
    }
}
</script>