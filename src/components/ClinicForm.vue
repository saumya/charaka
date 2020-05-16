<template>
    <div class="comp_form">
        <label>{{ title }}</label>
        <div class="field">
            <div class="control">
                <label>Clinic Name</label>
                <input class="input is-info" type="text" placeholder="Clinic Name" v-model="clinic.name"> 
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label>Clinic Admin Name</label>
                <input class="input is-info" type="text" placeholder="Clinic Admin Name" v-model="clinic.adminName">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label>Clinic Admin Password</label>
                <input class="input is-info" type="text" placeholder="Admin Password" v-model="clinic.adminPassword">
            </div>
        </div>

        <div class="field">
            <div class="control">
                <label>Activated On</label>
                <input class="input is-info" type="date" v-model="clinic.activated_on">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label>Activated From</label>
                <input class="input is-info" type="date" v-model="clinic.activated_from">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label>Activated To</label>
                <input class="input is-info" type="date" v-model="clinic.activated_to">
            </div>
        </div>

        <div class="buttons" v-if="(title==='CREATE')">
            <button class="button is-info" v-on:click="onRegisterNewClinic">Register A New Clinic</button>
        </div>
        <div class="buttons" v-if="(title==='UPDATE')">
            <button class="button is-info" v-on:click="onUpdateClinic">Update Clinic</button>
        </div>
    


    </div>
</template>
<script>
export default {
    name: "ClinicForm",
    data: function(){
        return({
            section_visibility:{
                ui_create: 'none',
                ui_update: 'none'
            }
        });
    },
    props:['title','clinic'],
    methods: {
        onRegisterNewClinic: function(event){
            window.console.log('onRegisterNewClinic',event);
        },
        onUpdateClinic: function(event){
            window.console.log('onUpdateClinic',event);
        }
    }
}
</script>
<style scoped>

</style>