<template>
    <div>
        
        <div class="section">
            <button class="button" @click="onShowUpdateProfileUI"> Update Profile </button>

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

            
        </div>
        <div class="section">
            <div class="">
                TODO: Render the Schedules
            </div>
        </div>
        
    </div>
</template>
<script>

import { mapActions } from 'vuex';

export default {
    name: "DoctorUIActiveHome",
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
                }
            }
        )
    },
    created: function(){
        // Taking the props and making them stateObjects here to modify
        //const newObj = Object.assign( this.newProfile, this.loginDoctorObj );
        
        Object.assign( this.newProfile, this.loginDoctorObj )
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