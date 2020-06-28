<template>
    <div>
        <section class="section">
            
            <nav class="panel">
                <p class="panel-heading"> My Profile </p>
                <div class="panel-block">
                    <label class="is-size-4 has-text-weight-bold"> {{ loginPatientObj.id }} | {{ loginPatientObj.name }} </label>
                </div>
                <div class="panel-block">
                    <label class="is-size-4"> Email- {{ loginPatientObj.email }} </label>
                </div>
                <div class="panel-block">
                    <label class="is-size-4"> Phone- {{ loginPatientObj.phone }} </label>
                </div>
                <div class="panel-block">
                    <label class="is-size-4"> Address- {{ loginPatientObj.address }} </label>
                </div>
            </nav>

            <div class="section">

                <div class="field">
                    <div class="control">
                        <label>Schedule Time and Date</label>
                    </div>
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
            </div>

            <GeneralMessage :message="get_general_message"></GeneralMessage>

            
            
            <!--
            <div class="field has-addons">
                <p class="control">
                    <button class="button is-info"> Schedules </button>
                </p>
                <p class="control">
                    <button class="button is-link"> Prescriptions </button>
                </p>
                <p class="control">
                    <button class="button is-info"> Bills </button>
                </p>
            </div>
            -->
            

        </section>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

import GeneralMessage from './GeneralMessage'

export default {
    name: "PatientUIActiveHome",
    components: { GeneralMessage },
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
          }
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
        }
    }
}
</script>