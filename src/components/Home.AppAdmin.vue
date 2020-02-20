<template>
    <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-menu is-active">
                <div class="navbar-start">
                    <a class="navbar-item" v-on:click="onMenuAppAdmin"> App Admin </a>
                    <a class="navbar-item" v-on:click="onMenuUsers"> Users </a>
                    <a class="navbar-item" v-on:click="onMenuClinics"> Clinics </a>
                </div>
                <div class="navbar-end">
                    <a class="navbar-item" v-on:click="onMenuAppConfig"> App Configs </a>
                </div>
            </div>
        </nav>
        <div>Application admin : TODO </div>

        <button v-on:click="greet">Greet</button>
        <button v-on:click="hello('one',$event)">Greet Event</button>
        <button v-on:click="(count++)">Increase Counter {{count}}</button>
        <div> The count = {{count}} </div>

        <section class="section">
            <div class="buttons">
                <button class="button is-info" v-on:click="onNewClinicUI">New Clinic</button>
                <button class="button is-info" v-on:click="onActivateClinicUI">Activate Clinic</button>
            </div>
        </section>
        <!-- Register New Clinic -->
        <section class="section" id="clinic_register_ui" v-bind:style="{display:ui_register_clinic_visibility}">
            <div class="field">
                <div class="control">
                    <input class="input is-info" type="text" placeholder="Clinic Name" v-model="newClinic.name"> 
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <input class="input is-info" type="text" placeholder="Clinic Admin Name" v-model="newClinic.adminName">
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <input class="input is-info" type="text" placeholder="Admin Password" v-model="newClinic.adminPassword">
                </div>
            </div>

            <div class="buttons">
                <button class="button is-info" v-on:click="onRegisterNewClinic">Register A New Clinic</button>
            </div>
        </section>
        <!-- Register New Clinic / -->
        <!-- Activate Clinic -->
        <section class="section" id="clinic_actiavte_ui" v-bind:style="{display:ui_activate_clinic_visibility}">
            <div class="field">
                <div class="control">
                    <input class="input is-info" type="text" placeholder="Clinic Name">
                </div>
            </div>
            <div class="buttons">
                <button class="button is-info">Activate A Clinic</button>
            </div>
        </section>
        <!-- Activate Clinic / -->

        <div class="todos">
            <div v-for="todo in allTodos" v-bind:key="todo.id" class="todo">{{todo.title}}</div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'HomeAppAdmin',
    data: function(){
        return({
            count:0,
            ui_activate_clinic_visibility:'none',
            ui_register_clinic_visibility:'none',
            newClinic: { 
                    name: 'XYZ Clinic',
                    adminName: 'XYZ Admin Name',
                    adminPassword: 'XYZ Admin Password'
                },
            activate:'todo'
        });
    },
    computed: mapGetters(['allTodos']),
    methods:{
        greet: function () {
            //alert('Greet');
            window.console.log('Greet');
            window.console.log('count',this.count);
            this.count++;
        },
        hello: function(data, event){
            //console.log(event);
            //alert(event.target);
            //alert('Hello');
            window.console.log(event);
            window.console.log(data);
        },
        onCount: function(){
            window.console.log('onCount');
        },
        
        onMenuAppAdmin: function(){
            window.console.log('onMenuAppAdmin');
        },
        onMenuUsers: function(){
            window.console.log('onMenuUsers');
        },
        onMenuClinics: function(){
            window.console.log('onMenuClinics');
        },
        onMenuAppConfig: function(){
            window.console.log('onMenuAppConfig');
        },

        onNewClinicUI: function(){
            window.console.log('onNewClinicUI');

            this.ui_register_clinic_visibility = 'block';
            this.ui_activate_clinic_visibility = 'none';
        },
        onActivateClinicUI: function(){
            window.console.log('onActivateClinicUI');
            window.console.log( 'this.displayX', this.displayX );

            this.ui_register_clinic_visibility = 'none';
            this.ui_activate_clinic_visibility = 'block';
        },
        onRegisterNewClinic: function(){
            window.console.log('onRegisterNewClinic');
            window.console.log( this.newClinic.name, this.newClinic.adminName, this.newClinic.adminPassword );
            // TODO: make the REST call and register the clinic
        }
    }
}
</script>