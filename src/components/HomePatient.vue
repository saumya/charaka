<template>
    <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-menu is-active">
                <div class="navbar-start">
                    <a class="navbar-item" v-on:click="onCreate"> Create </a>
                    <a class="navbar-item" v-on:click="onRead"> Read </a>
                    <a class="navbar-item" v-on:click="onUpdate"> Update </a>
                    <a class="navbar-item" v-on:click="onDelete"> Delete </a>
                </div>
                <!--
                <div class="navbar-end">
                    <a class="navbar-item"> My Profile </a>
                </div>
                -->
            </div>
        </nav>

        <div>
            <strong>Patient Administration</strong>
        </div>

        <!-- Register New Patient -->
        <section class="section" v-bind:style="{display:section_visibility.ui_create}">
            <PatientForm title="CREATE"></PatientForm>
        </section>
        <!-- Register New Patient / -->
        <!-- Update Patient -->
        <section class="section" v-bind:style="{display:section_visibility.ui_update}">
            <PatientForm title="UPDATE"></PatientForm>
        </section>
        <!-- Update Patient / -->
        <!-- DELETE Patient -->
        <section class="section" v-bind:style="{display:section_visibility.ui_delete}">
            <PatientSearchForm title="DELETE"></PatientSearchForm>
        </section>
        <!-- DELETE Patient / -->
        <!-- READ Patient  -->
        <section class="section" id="clinic_read_ui" v-bind:style="{display:section_visibility.ui_read}">
            <PatientSearchForm title="READ"></PatientSearchForm>
        </section>
        <!-- READ Patient / -->

        <section class="section">
            <article class="message">
                <div class="message-header">
                    <p>Message</p>
                    <!-- <button class="delete" aria-label="delete"></button> -->
                </div>
                <div class="message-body">
                    <div>{{ ui_message }}</div>
                    <div>The last action is as follows.</div>
                    <div> {{ get_general_message }} </div>
                </div>
            </article>
        </section>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PatientForm from './PatientForm';
import PatientSearchForm from './PatientSearchForm';


export default {
    name: 'HomePatient',
    components: { PatientForm, PatientSearchForm },
    computed:{
        ...mapGetters(['get_general_message'])
    },
    data: function(){
        return({
            ui_message: 'Welcome to Patient Management. This section allows you to CREATE, READ, UPDATE, DELETE patients.',
            section_visibility:{
                ui_create: 'none',
                ui_read: 'none',
                ui_update: 'none',
                ui_delete: 'none'
            },
        })
    },
    methods: {
        onCreate: function(){
            window.console.log('onCreate');
            this.makeThisVisible(1);
        },
        onRead: function(){
            window.console.log('onRead');
            this.makeThisVisible(2);
        },
        onUpdate: function(){
            window.console.log('onUpdate');
            this.makeThisVisible(3);
        },
        onDelete: function(){
            window.console.log('onDelete');
            this.makeThisVisible(4);
        },
        // 1=CREATE, 2=READ, 3=UPDATE, 4=DELETE
        makeThisVisible: function( ui_type ){
            switch(ui_type){
                case 1:
                    this.section_visibility= {
                        ui_create: 'block',
                        ui_read:'none',
                        ui_update:'none',
                        ui_delete:'none'
                    }
                    break;
                case 2:
                    this.section_visibility= {
                        ui_create: 'none',
                        ui_read:'block',
                        ui_update:'none',
                        ui_delete:'none'
                    }
                    break;
                case 3:
                    this.section_visibility= {
                        ui_create: 'none',
                        ui_read:'none',
                        ui_update:'block',
                        ui_delete:'none'
                    }
                    break;
                case 4:
                    this.section_visibility= {
                        ui_create: 'none',
                        ui_read:'none',
                        ui_update:'none',
                        ui_delete:'block'
                    }
                    break;
                default :
                    this.section_visibility= {
                        ui_create: 'none',
                        ui_read:'none',
                        ui_update:'none',
                        ui_delete:'none'
                    }
                    break;
            }
        }
    }
}
</script>