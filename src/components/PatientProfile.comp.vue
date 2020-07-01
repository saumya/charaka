<template>
    
    <div class="box">
        <span class="title has-text-black is-family-secondary is-size-3"> Profile </span>
        <div class="field">
            <span> Id {{newProfile.id}} </span>
        </div>                
        <div class="field">
            <label> Name </label>
            <input class="input is-info" type="text" placeholder="Name" v-model="newProfile.name">
        </div>
        <div class="field">
            <label> Email </label>
            <input class="input is-info" type="text" placeholder="Name" v-model="newProfile.email">
        </div>
        <div class="field">
            <label> Phone </label>
            <input class="input is-info" type="text" placeholder="Name" v-model="newProfile.phone">
        </div>
        <div class="field">
            <label> Address </label>
            <input class="input is-info" type="text" placeholder="Name" v-model="newProfile.address">
        </div>
        <div class="field">
            <div class="buttons">
                <button class="button is-success" v-on:click="onUpdateProfileClick"> Update </button>
                <button class="button is-danger" @click="onUpdateProfileCancelClick"> Cancel </button>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name: 'PatientProfileComponent',
    props: [ 'profileObj' ],
    data: function(){
        return({
            newProfile: {
                id: '0',
                name: 'cc',
                password: 'pp',
                phone: '11',
                email: 'e',
                address: 'aa'
            },
        })
    },
    created: function(){
        // Taking the props and making them stateObjects here to modify
        //const newObj = Object.assign( this.newProfile, this.profileObj );
        Object.assign( this.newProfile, this.profileObj )
    },
    methods: {
        onUpdateProfileCancelClick: function(){
            this.$emit('CancelUpdate');
        },
        onUpdateProfileClick: function(){
            this.$emit('PatientProfileUpdate', this.newProfile);
        }
    }
    
}
</script>