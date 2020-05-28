<template>
    <div>
        <!--
        <section class="section">
            <label class="label">Insights</label>
            <div class="buttons has-addons">
                <button class="button" v-on:click="onClinics">Clinics</button>
                <button class="button" v-on:click="onDoctors">Doctors</button>
                <button class="button" v-on:click="onPatients">Patients</button>
                <button class="button" v-on:click="onSchedules">Schedules</button>
            </div>
        </section>
        -->

        <GeneralMessageUI :message="get_general_message" />
        <section class="section">
            <div class="buttons has-addons">
                <button class="button" v-on:click="onClinics">Clinics</button>
                <button class="button" v-on:click="onDoctors">Doctors</button>
                <button class="button" v-on:click="onPatients">Patients</button>
                <button class="button" v-on:click="onSchedules">Schedules</button>
            </div>

            <div class="panel has-background-white-bis">
                <div class="panel-heading">
                    <label class="title">Search Schedules</label>
                </div>

                <div class="panel-block">
                    <label class="label">Select a Clinic</label>
                </div>
                <div class="panel-block">
                    <div class="control">
                        <div class="select is-info is-large is-fullwidth">
                            <select v-model="selectedClinicId">
                                <option value="-1">Select A Clinic</option>
                                <option v-for="(item,index) in getAllClinicsData" :key="item.id" :value="item.id">
                                    {{index+1}}-{{item.id}}-{{item.group_name}}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div class="panel-block">
                    <label class="label">Select a Doctor</label>
                </div>
                <div class="panel-block">
                    <div class="control">
                        <div class="select is-info is-large is-fullwidth">
                            <select v-model="selectedDoctorId">
                                <option value="-1">Select A Doctor</option>
                                <option v-for="(item,index) in getAllDoctorsData" :key="item.id" :value="item.id">
                                    {{index+1}}-{{item.id}}-{{item.name}}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="panel-block">
                    <label class="label">Select a Date</label>
                </div>
                <div class="panel-block">
                    <div class="control is-info is-large is-fullwidth">
                        <input class="input is-info" type="date" placeholder="Schedule Date" v-model="seletedSchedulesDate">
                    </div>
                </div>
                <!-- <div>{{selectedClinicId}}-{{selectedDoctorId}}</div> -->
                <div class="panel-block">
                    <button class="button is-large is-fullwidth" @click="onSearchSchedule">Get Schedules</button>            
                </div>
                
            </div>

            <TableSchedule info="Filtered" :tableData=getFilteredSchedulesData></TableSchedule>
            
        </section>

        
        <section class="section">
            <label class="title">Insights Generic</label>
            <TableClinics :tableData=getAllClinicsData></TableClinics>
            <TableDoctors :tableData=getAllDoctorsData></TableDoctors>
            <TablePatients :tableData=getAllPatientsData></TablePatients>
            <TableSchedule :tableData=getAllSchedulesData></TableSchedule>
            <TableSchedule info="Filtered" :tableData=getFilteredSchedulesData></TableSchedule>
        </section>
    
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

import GeneralMessageUI from './GeneralMessage';

//import TableGeneral from './TableGeneral';

import TableClinics from './TableClinics';
import TableDoctors from './TableDoctors';
import TablePatients from './TablePeople';
import TableSchedule from './TableSchedules';

export default {
    name: 'HomeReport',
    components: { GeneralMessageUI, TableClinics, TableDoctors, TablePatients, TableSchedule },
    data: function(){
        return({
            selectedClinicId: -1,
            selectedDoctorId: -1,
            seletedSchedulesDate: '',
        })
    },
    computed: {
        ...mapGetters([ 'get_general_message', 
                        'getAllClinicsData', 'getAllDoctorsData', 'getAllPatientsData', 
                        'getAllSchedulesData', 'getFilteredSchedulesData']),
    },
    methods:{
        ...mapActions([ 'searchClinicWithId', 
                        'getAllClinics', 'getAllDoctors', 'getAllSchedules',
                        'getAllSchedulesByClinicIdDoctorIdDate' ]),
        onClinics: function(){
            window.console.log('onClinics');
            //window.console.log( this.$store ) // Arrow function throws error for "this" !!
            //window.console.log( this )
            this.$store.dispatch('getAllClinics');
        },
        onDoctors: function(){
            window.console.log('onDoctors');
            this.$store.dispatch('getAllDoctors');
        },
        onPatients: function(){
            window.console.log('onPatients');
            this.$store.dispatch('getAllPatients');
        },
        onSchedules: function(){
            window.console.log('onSchedules');
            this.$store.dispatch('getAllSchedules');
        },
        onSearchSchedule: function(){
            window.console.log('onSearchSchedule');
            window.console.log('clinicID=',this.selectedClinicId, 'doctorID=',this.selectedDoctorId, 'date=',this.seletedSchedulesDate);
            var searchPayload = {
                clinicId : this.selectedClinicId,
                doctorId : this.selectedDoctorId,
                onDate : this.seletedSchedulesDate
            }
            this.$store.dispatch('getAllSchedulesByClinicIdDoctorIdDate', searchPayload);
        },
    }
}
</script>