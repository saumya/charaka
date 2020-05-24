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

        <section class="section" id="clinic_register_ui" v-bind:style="{display:section_visibility.ui_create}">
            <ClinicForm title="CREATE" :clinic="clinic"></ClinicForm>
            
        </section>
        <section class="section" id="clinic_update_ui" v-bind:style="{display:section_visibility.ui_update}">
            <ClinicForm title="UPDATE" :clinic="clinic"></ClinicForm>
        </section>
        <section class="section" id="clinic_delete_ui" v-bind:style="{display:section_visibility.ui_delete}">
            <ClinicSearchForm title="DELETE"></ClinicSearchForm>
        </section>
        <section class="section" id="clinic_read_ui" v-bind:style="{display:section_visibility.ui_read}">
            <ClinicSearchForm title="READ"></ClinicSearchForm>
        </section>


        <section class="section">
            <article class="message">
                <div class="message-header">
                    <p>Message</p>
                    <!-- <button class="delete" aria-label="delete"></button> -->
                </div>
                <div class="message-body">
                    <!-- TO be filled by App -->
                    {{ ui_message }}
                    <div> {{ get_general_message }} </div>
                </div>
            </article>
        </section>
        

    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ClinicForm from './ClinicForm';
import ClinicSearchForm from './ClinicSearchForm';

export default {
    name: 'HomeClinic',
    components: { ClinicForm, ClinicSearchForm },
    computed: {
        ...mapGetters([
            'get_general_message'
        ])
    },
    data: function(){
        return({
            ui_message: 'Welcome to Clinic Management. This section allows you to CREATE, READ, UPDATE, DELETE clinics.',
            section_visibility:{
                ui_create: 'none',
                ui_read: 'none',
                ui_update: 'none',
                ui_delete: 'none'
            },
            clinic: { 
                name: 'XYZ Clinic',
                adminName: 'XYZ Admin Name',
                adminPassword: 'XYZ Admin Password',
                activated_on:'',
                activated_from:'',
                activated_to:''
            },
        });
    },
    methods:{
        onRegisterNewClinic: function(){
            window.console.log('onRegisterNewClinic');
        },
        onCreate: function(event){
            window.console.log('CREATE',event);
            //this.section_visibility.ui_create = 'block';
            this.makeThisVisible(1);
            this.ui_message = "CREATE a new Clinic.";
        },
        onRead: function(){
            this.makeThisVisible(2);
            this.ui_message = "READ Clinic informations.";
        },
        onUpdate: function(){
            this.makeThisVisible(3);
            this.ui_message = 'UPDATE a Clinic';
        },
        onDelete: function(){
            this.makeThisVisible(4);
            this.ui_message = 'DELETE a Clinic';
        },
        // ui_type = 1 | 2 | 3 | 4
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*
a {
  color: #42b983;
}
*/
</style>