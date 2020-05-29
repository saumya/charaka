<template>
    <div>

        <GeneralMessage :message="get_general_message"></GeneralMessage>
        
        <section class="section">
            <div class="panel has-background-white-bis">
                <div class="panel-heading">
                    <label class="title">Assign Doctor to Clinic</label>
                </div>
                <div class="panel-block">
                    <label class="label">Select a Clinic</label>
                </div>
                <div class="panel-block">
                    
                        <div class="control">
                            <div class="select is-info is-large is-fullwidth">
                                <select @change="onSelectClininc" v-model="selectedClinicId">
                                    <option>Select A Clinic</option>
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
                                <select @change="onSelectDoctor" v-model="selectedDoctorId">
                                    <option>Select A Doctor</option>
                                    <option v-for="(item,index) in getAllDoctorsData" :key="item.id" :value="item.id">
                                        {{index+1}}-{{item.id}}-{{item.name}}
                                    </option>
                                </select>
                            </div>
                        </div>
                    
                </div>
                <div class="panel-block">
                    <button class="button is-large is-primary is-fullwidth" @click="onAssignDoctorToClinic">Assign</button>
                </div>
            </div>

        </section>

        <section class="section">
            <div class="panel has-background-white-bis">
                <div class="panel-heading">
                    <label class="title">Activate a Clinic</label>
                </div>
                <div class="panel-block">
                    <label class="label">Select a Clinic</label>
                </div>
                <div class="panel-block">
                    <div class="control">
                        <div class="select is-info is-large is-fullwidth">
                            <select @change="onSelectClininc" v-model="selectedClinicId">
                                <option>Select A Clinic</option>
                                <option v-for="(item,index) in getAllClinicsData" :key="item.id" :value="item.id">
                                    {{index+1}}-{{item.id}}-{{item.group_name}}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="panel-block">
                    <label class="label">Activation Dates</label>
                </div>
                <div class="panel-block">
                    <div class="control">
                        <label>Activated From</label>
                        <input class="input is-info" type="date" v-model="activation.from">
                    </div>
                </div>
                <div class="panel-block">
                    <div class="control">
                        <label>Activated To</label>
                        <input class="input is-info" type="date" v-model="activation.to">
                    </div> 
                </div>
                <div class="panel-block">
                    <button class="button is-large is-primary is-fullwidth" @click="onActivateClinic">Activate Clinic</button>
                </div>
            </div>

        </section>
      
        
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
            selectedDoctorId: '',
            activation:{ from:'', to:''}
        })
    },
    computed: {
        ...mapGetters([ 'get_general_message', 'getAllClinicsData', 'getAllDoctorsData' ])
    },
    methods: {
        ...mapActions([ 'assignDoctorToClinic', 'activateClinic' ]),
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
        },
        onActivateClinic: function(){
            window.console.log('onActivateClinic');
            window.console.log( this.activation.from, this.activation.to);
            this.$store.dispatch('activateClinic', {    clinincId:this.selectedClinicId, 
                                                        activeFrom:this.activation.from, 
                                                        activeTo: this.activation.to    });
        }
    }
}
</script>