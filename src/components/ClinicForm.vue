<template>
    <div class="comp_form">
        <!-- <label>{{ title }}</label> -->
        <h3>{{ messages.info_message }}</h3> <!-- using mapState -->
        <h3>below</h3>
        <h3>>>> {{ computedMessage }}</h3> <!-- Using Computed -->
        <h3>above</h3>
        <h3>Counter Value {{ count_value }}</h3>
        <ul>
            <li v-for="(value, index) in messages.dummy_List" v-bind:key="index">
                {{ value }}
            </li>
            Total <b> {{ count_dummy_items }} </b> items there from VueX Store!
        </ul>

        <div class="field" v-if="(title==='UPDATE')">
            <div class="control">
                <label>Clinic Id</label>
                <input class="input is-info" type="text" placeholder="Clinic Id" v-model="clinic.id"> 
            </div>
        </div>
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

        <div class="buttons">
            <button class="button is-info" v-on:click="onCounterUp">Counter ++</button>
        </div>
    


    </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
//import { store } from vuex;

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
    computed: {
        localComputed(){
            return 'LocalComputedPropertyExample'
        },
        ...mapState([
            'messages'
        ]),
        ...mapGetters([
            'count_dummy_items', 'count_value'
        ]),
        computedMessage(store){
            return store.get_infoMessage
        }
    },
    methods: {
        onCounterUp: event=>{
            window.console.log('onCounterUp',event);
            //this.$store.commit('INCREMENT_COUNT'); //NOT WORKING !! $store is 'undefined'
            //window.console.log('store', $store);
            
            //const incrementBy = 4;
            //this.$store.commit('INCREMENT_COUNT', incrementBy);

            //const incrementBy = 4;
            //this.$store.dispatch('updateCount',incrementBy); //NOT WORKING !! $store is 'undefined'
        },
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