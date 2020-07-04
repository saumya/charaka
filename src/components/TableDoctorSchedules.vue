<template>
    <div>
        <!--
        <GeneralMessage :message="get_general_message"></GeneralMessage>
        -->

        

        <div class="modal" v-bind:class="{ 'is-active': shouldShowModalForUpdateSchedule }">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title"> Update This Schedule </p>
                    <button class="delete" aria-label="close" v-on:click="this.onHideUpdateViewClick"></button>
                </header>
                <section class="modal-card-body">
                    <div style="color:black">
                        
                        <div class="is-size-4"> {{ selectedSchedule.on_date }} | {{ (selectedSchedule.is_morning? "Morning" : "Evening") }} </div>
                        
                        <div class="field">
                            <div class="control is-size-3">
                                <label class="checkbox has-text-weight-bold"> 
                                    <input type="checkbox" v-model="selectedSchedule.isAttended"> Done 
                                </label>
                                
                                <div class="tags has-addons">
                                    <span class="tag is-dark"> Patient Attended </span>
                                    <span class="tag is-success" v-if="selectedSchedule.isAttended"> Yes </span>
                                    <span class="tag is-danger" v-else> No </span>
                                </div>
                                
                            </div>
                        </div>

                        <div class="field">
                            <div class="control">
                                <label class="checkbox is-size-3"> 
                                    <input type="checkbox" v-model="selectedSchedule.isWeb"> Make it on Web 
                                </label>
                                
                                <div class="tags has-addons">
                                    <span class="tag is-dark"> On Web </span>
                                    <span class="tag is-success" v-if="selectedSchedule.isWeb"> Yes </span>
                                    <span class="tag is-danger" v-else> No </span>
                                </div>
                                
                            </div>
                        </div>

                        <!--
                        <label class='is-size-3'> Make it a Web Schedule At </label>
                        <div class="field has-addons">
                            <div class="control">
                                
                                <input class="input" type="text" placeholder="8.00" v-model="selectedSchedule.isWeb">
                            </div>
                            <div class="control">
                                <button class="button" @click="onResetTheWebSchedule"> Reset </button>
                            </div>
                        </div>
                        -->

                        


                        

                    </div>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success" v-on:click="onUpdateScheduleClick"> Update </button>
                    <button class="button" v-on:click="onHideUpdateViewClick"> Cancel </button>
                </footer>
            </div>

        </div>

        

        <label>All Schedules for Doctor | {{doctorName}} | {{tableData.length}}</label>
        <div class="table-container">
        <table class="table is-bordered is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>sl no.</th>
                    <th>Update</th>
                    <th>id</th>
                    <th>when</th>
                    <th>on Date</th>

                    <th>On Web</th>
                    <th>Web Link</th>

                    <th> Prescription </th>
                    <th> Bill </th>
                </tr>
            </thead>
            <tbody>
                
                <tr v-for="(item,index) in tableData" :key="item.id">
                    <td>{{index+1}}</td>
                    <td> <button class="button is-info" @click="showScheduleUpdateView(item)" > Update </button> </td>
                    <td>{{ item.id }}</td>
                    <td>
                        <span class="tag is-light is-success is-medium" v-if="item.is_morning"> Morning </span>
                        <span class="tag is-light is-warning is-medium" v-if="!item.is_morning"> Evening </span> 
                    </td>
                    <td>{{ item.on_date }}</td>
                    <td> {{item.isWeb}} </td>
                    <td>
                        <div v-if="item.isWeb==null" />
                        <div v-else>
                            <div v-if="item.isWeb==0" />
                            <div v-else>
                                <button class="button is-dark" v-bind:href="item.webURL" @click="onJoinWebSchedule(item.webURL)"> Join </button>
                            </div>
                        </div>
                    </td>
                    <!--
                    <td>{{ item.personId }}</td>
                    <td>{{ item.doctorId }}</td>
                    <td>{{ item.groupId }}</td>
                    -->
                    <td> <button class="button is-dark" v-on:click="onPrescriptionClick(item)"> Prescribe </button> </td>
                    <td> <button class="button is-dark" @click="onBillThisClick(item)"> Bill This </button> </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>sl no.</th>
                    <th>Update</th>
                    <th>id</th>
                    <th>when</th>
                    <th>on Date</th>

                    <th>On Web</th>
                    <th>Web Link</th>

                    <th> Prescription </th>
                    <th> Bill </th>
                </tr>
            </tfoot>
        </table>
        </div> <!-- table-container / -->

        <PrescriptionModal v-if="shouldShowModalDetails" 
                            v-bind:appointmentId="this.detailsOfObj.id"
                            v-bind:clinicId="this.detailsOfObj.groupId"
                            v-bind:personId="this.detailsOfObj.personId"
                            v-bind:doctorId="this.detailsOfObj.doctorId" 
                            v-bind:doctorName="this.detailsOfObj.doctorName"
                            v-on:on_hide_details_click="onHideDetails"
                            v-on:on_save_prescription_click="onSavePrescription" />

        <BillModal v-if="shouldShowModalBill" 
                    v-bind:appointmentId="this.billsObj.id" 
                    v-bind:clinicId="this.billsObj.groupId" 
                    v-bind:personId="this.billsObj.personId" 
                    v-bind:doctorId="this.billsObj.doctorId"
                    v-bind:doctorName="this.billsObj.doctorName"  
                    v-on:on_hide_modal_bill_click="onHideBillThisModalClick"
                    v-on:on_save_bill_click="onSaveBill" />

    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import PrescriptionModal from './PrescriptionModal.comp'
import BillModal from './BillModal.comp'
//import GeneralMessage from './GeneralMessage'

export default {
    name: 'TableDoctorSchedules',
    props: ['doctorName', 'clinicId','tableData'],
    data: ()=>({
        shouldShowModalForUpdateSchedule: false,
        selectedSchedule:{},
        shouldShowModalDetails: false,
        shouldShowModalBill: false,
        detailsOfObj: '',
        billsObj: '',
    }),
    components: { PrescriptionModal, BillModal },
    computed: {
        ...mapGetters(['get_general_message']),
    },
    methods: {
        ...mapActions([ 'registerNewPrescription', 'createNewBill' ]),
        onSavePrescription: function( newPrescription ){
            window.console.log('TableSchedule : onSavePrescription');
            window.console.log( JSON.stringify(newPrescription) );
            this.$store.dispatch('registerNewPrescription', newPrescription );
        },
        onHideDetails: function(){
            this.shouldShowModalDetails = !this.shouldShowModalDetails
        },
        onPrescriptionClick: function(item){
            window.console.log('onPrescriptionClick', item.id);
            window.console.log( JSON.stringify(item) )
            window.console.log('TODO: fetch and show details')
            this.detailsOfObj = item;
            this.shouldShowModalDetails = !this.shouldShowModalDetails
        },
        onSaveBill: function(bill){
            window.console.log('onSaveBill', JSON.stringify(bill) );
            this.$store.dispatch('createNewBill', bill);
        },
        onBillThisClick: function(item){
            window.console.log('onBillThisClick', JSON.stringify(item) );
            this.billsObj = item;
            this.shouldShowModalBill = !this.shouldShowModalBill;
        },
        onHideBillThisModalClick: function(){
            this.shouldShowModalBill = !this.shouldShowModalBill
        },
        showScheduleUpdateView: function(schedule){
            window.console.log('showScheduleUpdateView')
            window.console.log( JSON.stringify(schedule) )

            this.selectedSchedule = schedule;
            this.shouldShowModalForUpdateSchedule = true
        },
        onHideUpdateViewClick: function(){
            this.shouldShowModalForUpdateSchedule = false
        },
        onResetTheWebSchedule: function(){
            this.selectedSchedule.isWeb = 0
            this.selectedSchedule.webURL = ''
            //window.console.log( this.selectedSchedule )
            //window.console.log( JSON.stringify(this.selectedSchedule) )
        },
        onUpdateScheduleClick: function(){
            this.shouldShowModalForUpdateSchedule = false
            // https://meet.jit.si/
            // fht+'#?'+groupId+'#?'+doctorId+'#?'+personId
            const url = 'https://meet.jit.si/'
                                    +'FindHealthToday_'
                                    + this.selectedSchedule.groupId + '_'
                                    + this.selectedSchedule.doctorId + '_'
                                    + this.selectedSchedule.personId 
                                    //+ this.selectedSchedule.atWebTime
            //window.console.log( JSON.stringify(this.selectedSchedule)  )
            if( this.selectedSchedule.isWeb ){
                this.selectedSchedule.webURL = url
            }else{
                this.selectedSchedule.webURL = ''
            }
        },
        onJoinWebSchedule: function(url){
            window.console.log('onJoinWebSchedule',url)
            /*
            const windowFeatures = "menubar=no,location=no,resizable=yes,scrollbars=no,status=no"
            const newWindow = window.open(url, 'FH:WebConferencing', windowFeatures)
            window.console.log('newWindow:', newWindow )
            */
            // TODO: 
            // Update for isAttended
            // Update the Schedule
            //
        }
        
    }
}
</script>
