<template>
    <div>
        
        <section class="section">
            <span class="title has-text-black is-family-secondary is-size-3"> {{ newProfile.name }} </span>
            <div class="field">
                <button class="button" @click="onShowUpdateProfileUI"> Update Your Profile </button>
            </div>

            <div class="box" v-if="shouldShowUpdateProfileUI">
                <span class="title has-text-black is-family-secondary is-size-3"> Profile </span>
                
                <div class="field">
                    <label>Name</label>
                    <input class="input is-info" type="text" placeholder="Name" v-model="newProfile.name">
                </div>
                <div class="field">
                    <label>Password</label>
                    <input class="input is-info" type="text" placeholder="Password" v-model="newProfile.password">
                </div>
                <div class="field">
                    <label>Specialization</label>
                    <input class="input is-info" type="text" placeholder="Specialization" v-model="newProfile.specialization">
                </div>
                <div class="field">
                    <label> Phone </label>
                    <input class="input is-info" type="text" placeholder="phone" v-model="newProfile.phone">
                </div>
                <div class="field">
                    <label> Email </label>
                    <input class="input is-info" type="text" placeholder="em@il" v-model="newProfile.email">
                </div>
                <div class="field">
                    <label> Address </label>
                    <input class="input is-info" type="text" placeholder="address" v-model="newProfile.address">
                </div>

                <div class="buttons">
                    <button class="button is-success" v-on:click="onUpdateProfileClick"> Update </button>
                    <button class="button is-danger" @click="onUpdateProfileCancelClick"> Cancel </button>
                </div>
            </div>

        </section>
        
        <section class="section">
            
            <div>
                <TableDoctorSchedules :doctorName='newProfile.name' 
                                        :tableData='getSchedulesForDoctorId' />

            </div>
        </section>
        
    </div>
</template>
<script>

import { mapActions, mapGetters } from 'vuex';

import TableDoctorSchedules from './TableDoctorSchedules'

export default {
    name: "DoctorUIActiveHome",
    components: { TableDoctorSchedules, },
    props: [ 'loginDoctorObj' ],
    data: function(){
        return(
            {
                shouldShowUpdateProfileUI: false,
                newProfile: {
                    id: '',
                    name: 'cc',
                    password: 'pp',
                    phone: '11',
                    email: 'e',
                    address: 'aa',
                    specialization: 'ss'
                },
            }
        )
    },
    computed: {
        ...mapGetters([ 'getSchedulesForDoctorId' ]),
        modifiedSchedulesForRender: function(){
            // Modifying the Array to add this DoctorName 
            let newArray = this.getSchedulesForDoctorId.map( item =>{
                
                //const foundDoctor = this.searchClinicWithId.find(element => (element.id===item.doctorId) );
                //const clinicDetails = item.groupId

                const clinicName = 'TODO';
                return { ...item, clinicName }
            } );
            return newArray
        }
    },
    created: function(){
        // Taking the props and making them stateObjects here to modify
        //const newObj = Object.assign( this.newProfile, this.loginDoctorObj );
        
        Object.assign( this.newProfile, this.loginDoctorObj )
        
        // Get the Schedules
        this.$store.dispatch('getAllSchedulesByDoctorId', this.loginDoctorObj.id )

    },
    methods: {
        ...mapActions([ 'updateDoctor' ]),
        onShowUpdateProfileUI: function(){
            window.console.log('onShowUpdateProfileUI')
            this.shouldShowUpdateProfileUI = !this.shouldShowUpdateProfileUI
        },
        onUpdateProfileCancelClick: function(){
            this.onShowUpdateProfileUI();
        },
        onUpdateProfileClick: function(){
            window.console.log('onUpdateProfileClick')
            //window.console.log( JSON.stringify(this.newProfile) )
            this.onShowUpdateProfileUI()
            this.$store.dispatch('updateDoctor', this.newProfile )
        },
        onChangeThis: function(event){
            window.console.log( event.target.value )
        }
    }
}
</script>