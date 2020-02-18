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

        <section class="section">
            <div class="field">
                <div class="control">
                    <input class="input is-info" type="text" placeholder="Clinic Name">
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <input class="input is-info" type="text" placeholder="Clinic Admin Name">
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <input class="input is-info" type="text" placeholder="Admin Password">
                </div>
            </div>

            <div class="buttons">
                <button class="button is-info" v-on:click="onRegisterNewClinic">Register A New Clinic</button>
            </div>
        </section>

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
            count:0
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
        },
        onActivateClinicUI: function(){
            window.console.log('onActivateClinicUI');
        },
        onRegisterNewClinic: function(){
            window.console.log('onRegisterNewClinic');
        }
    }
}
</script>