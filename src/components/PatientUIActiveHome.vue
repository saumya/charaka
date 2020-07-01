<template>
    <div>

        <section class="section">
            <div>
                <span class="is-size-3 has-text-weight-bold"> {{ loginPatientObj.name }} </span>
            </div>

            <div class="field has-addons">
                <p class="control">
                    <button class="button" @click="onShowUpdateProfileUI"> Profile </button>
                </p>
                <p class="control">
                    <button class="button" @click="onShowSchedulesUI"> Schedules </button>
                </p>
                <p class="control">
                    <button class="button" @click="onShowPrescriptionsUI"> Prescriptions </button>
                </p>
                <p class="control">
                    <button class="button" @click="onShowBillsUI"> Bills </button>
                </p>
            </div>

            <PatientProfileComponent v-if="shouldShowUpdateProfileUI" 
                                        :profileObj="loginPatientObj" 
                                        v-on:CancelUpdate="onUpdateProfileCancel"
                                        v-on:PatientProfileUpdate="onUpdateProfile" />
            
            <PatientSchedulesComponent v-if="shouldShowSchedulesUI" :profileObj="loginPatientObj" />
            <PatientPrescriptionsComponent v-if="shouldShowPrescriptionsUI" />
            <PatientBillsComponent v-if="shouldShowBillsUI" />
                
            <section class="section">
                <div>
                    <span class="is-size-3"> Schedule Time and Date </span>
                </div>
                
                <div class="field has-addons">
                    <div class="control">
                        <div class="select is-info">
                            <select v-model="schedule.isMorning">
                                <option value="1">is Morning</option>
                                <option value="0">is Evening</option>
                            </select>
                        </div>
                    </div>
                    <div class="control is-expanded">
                        <input class="input is-info" type="date" placeholder="Schedule Date" v-model="schedule.sDate"> 
                    </div>
                </div>
                <!--
                <div class="field">
                    <div class="control">
                        <label>Doctor Id : for Clinic id={{ ui_clinic_id }}</label>
                        <input class="input is-info" type="text" placeholder="Doctor Id" v-model="schedule.doctorId"> 
                    </div>
                </div>
                -->
                <div class="field">
                    <div class="control">
                        <div class="select is-info is-large is-fullwidth">
                            <select @change="onSelectDoctor" v-model="selectedDoctorId">
                                <option value="0"> Select Doctor </option>
                                <option v-for="(item,index) in getDoctorsForTheClinicId" :key="item.id" :value="item.id">
                                    {{index+1}}-{{item.id}}-{{item.name}}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <button class="button is-large is-fullwidth is-primary is-light" @click="onScheduleAppointment"> Schedule Appointment </button>
                    </div>
                </div>
            </section>
            <GeneralMessage :message="get_general_message"></GeneralMessage>
        </section>
        
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

import GeneralMessage from './GeneralMessage'
import PatientProfileComponent from './PatientProfile.comp'
import PatientSchedulesComponent from './PatientSchedules.comp'
import PatientPrescriptionsComponent from './PatientPrescriptions.comp'
import PatientBillsComponent from './PatientBills.comp'

export default {
    name: "PatientUIActiveHome",
    components: { GeneralMessage, 
                    PatientProfileComponent, 
                    PatientSchedulesComponent, 
                    PatientPrescriptionsComponent, 
                    PatientBillsComponent 
                },
    props: [ 'ui_clinic_id', 'loginPatientObj' ],
    computed: {
        ...mapGetters([ 'get_general_message', 'getDoctorsForTheClinicId' ]),
        getPatientId : function(){
            return this.loginPatientObj.id
        }
    },
    data: function(){
        return({
            selectedDoctorId : 0,
            schedule:{
              name: "Appointment",
              sDate: "2020-07-08",
              isMorning: "0",
            },
            shouldShowUpdateProfileUI : false,
            shouldShowSchedulesUI : false,
            shouldShowPrescriptionsUI : false,
            shouldShowBillsUI: false

        })
    },
    created: function(){
        window.console.log('created:', this.ui_clinic_id)

        const payload = this.ui_clinic_id 
        this.$store.dispatch('getAllDoctorsInClinicId', payload )
    },
    mounted: function(){
        window.console.log('mounted:', this.ui_clinic_id);
    },
    methods: {
        ...mapActions(['getAllDoctorsInClinicId']),
        onScheduleAppointment: function(){
            window.console.log('onScheduleAppointment', this.ui_clinic_id);
            // personId = this.loginPatientObj.id;
            // groupId = this.ui_clinic_id
            /*
            window.console.log('+--------------------------------------------+');
            window.console.log('clinic id = ', this.ui_clinic_id);
            window.console.log('patient id = ', this.loginPatientObj.id);
            window.console.log('doctor id = ', this.selectedDoctorId);
            window.console.log('schedule = ', JSON.stringify( this.schedule ) );
            window.console.log('+--------------------------------------------+');
            */

            const sObj = { 
                ...this.schedule, 
                doctorId : this.selectedDoctorId,
                personId : this.loginPatientObj.id,
                groupId : this.ui_clinic_id
            }
            window.console.log('schedule = ', JSON.stringify( sObj ) );

            this.$store.dispatch('createSchedule', sObj);
        },
        onSelectDoctor: function(event){
            window.console.log('onSelectDoctor', event.target.value);
            window.console.log('onSelectDoctor', this.selectedDoctorId);
        },
        onUpdateProfile: function( new_profile_obj ){
            window.console.log('onUpdateProfile')
            //window.console.log( JSON.stringify(new_profile_obj) ); //new_profile_obj : we got from the event
            this.$store.dispatch('updatePatient', new_profile_obj )
        },
        onUpdateProfileCancel: function(){
            this.shouldShowUpdateProfileUI = false
        },
        onShowUpdateProfileUI: function(){
            this.shouldShowUpdateProfileUI = !this.shouldShowUpdateProfileUI
            this.shouldShowSchedulesUI = false
            this.shouldShowPrescriptionsUI = false
            this.shouldShowBillsUI = false
        },
        onShowSchedulesUI: function(){
            this.shouldShowUpdateProfileUI = false
            this.shouldShowSchedulesUI = !this.shouldShowSchedulesUI
            this.shouldShowPrescriptionsUI = false
            this.shouldShowBillsUI = false
        },
        onShowPrescriptionsUI: function(){
            this.shouldShowUpdateProfileUI = false
            this.shouldShowSchedulesUI = false
            this.shouldShowPrescriptionsUI = !this.shouldShowPrescriptionsUI
            this.shouldShowBillsUI = false
        },
        onShowBillsUI: function(){
            this.shouldShowUpdateProfileUI = false
            this.shouldShowSchedulesUI = false
            this.shouldShowPrescriptionsUI = false
            this.shouldShowBillsUI = !this.shouldShowBillsUI
        }

    }
}
</script>