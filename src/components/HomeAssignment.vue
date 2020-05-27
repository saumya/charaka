<template>
    <div>
        <!--
        <section class="section">
            Assignments
        </section>
        
        <section class="section">
            <div class="buttons has-addons">
                <button class="button" v-on:click="onClinics">Clinics</button>
                <button class="button">Doctors</button>
                <button class="button">Patients</button>
            </div>
        </section>
        -->
        <section class="section">
            <label class="label is-large">Clinics</label>
            <div class="field">
                <div class="control">
                    <div class="select is-info is-large">
                        <select @change="onSelectClininc" v-model="selectedClinicId">
                            <option>Select A Clinic</option>
                            <option v-for="(item,index) in getAllClinicsData" :key="item.id" :value="item.id">
                                {{index+1}}-{{item.id}}-{{item.group_name}}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <label class="label is-large">Doctors</label>
            <div class="field">
                <div class="control">
                    <div class="select is-info is-large">
                        <select @change="onSelectDoctor" v-model="selectedDoctorId">
                            <option>Select A Doctor</option>
                            <option v-for="(item,index) in getAllDoctorsData" :key="item.id" :value="item.id">
                                {{index+1}}-{{item.id}}-{{item.name}}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <!-- <div>{{selectedClinicId}}-{{selectedDoctorId}}</div> -->
            <button class="button is-large is-primary" @click="onAssignDoctorToClinic">Assign</button>            
        </section>
        <GeneralMessage :message="get_general_message"></GeneralMessage>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import GeneralMessage from './GeneralMessage';

export default {
    name: 'HomeAssignment',
    components: { GeneralMessage },
    data: function(){
        return({
            selectedClinicId: '',
            selectedDoctorId: ''
        })
    },
    computed: {
        ...mapGetters([ 'get_general_message', 'getAllClinicsData', 'getAllDoctorsData' ])
    },
    methods: {
        ...mapActions([ 'assignDoctorToClinic' ]),
        onClinics: function(){
            window.console.log('onclinics')
        },
        onSelectClininc: function(eventObj){
            window.console.log('onSelectClinic');
            //window.console.log( eventObj );
            // 1. Taking it from the event
            window.console.log( eventObj.target.selectedIndex, event.target.value );
            
            // 2. Taking it from the model
            window.console.log('selectedClinicId', this.selectedClinicId);
        },
        onSelectDoctor: function(){
            window.console.log('selectedDoctorId', this.selectedDoctorId);
        },
        onAssignDoctorToClinic: function(){
            window.console.log('onAssignDoctorToClinic');
            this.$store.dispatch('assignDoctorToClinic',{ clinincId: this.selectedClinicId, doctorId: this.selectedDoctorId});
        }
    }
}
</script>