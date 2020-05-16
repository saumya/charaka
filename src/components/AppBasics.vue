<template>
    <div>
        <section class="section">
            <div class="buttons">
                <button class="button is-info" v-on:click="onCreate">Create</button>
                <button class="button is-info" v-on:click="onRead">Read</button>
                <button class="button is-info" v-on:click="onUpdate">Update</button>
                <button class="button is-info" v-on:click="onDelete">Delete</button>
            </div>
        </section>
        <!-- Register New Clinic -->
        <section class="section" id="clinic_register_ui" v-bind:style="{display:section_visibility.ui_create}">
            <div class="field">
                <div class="control">
                    <input class="input is-info" type="text" placeholder="Clinic Name" v-model="clinic.name"> 
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <input class="input is-info" type="text" placeholder="Clinic Admin Name" v-model="clinic.adminName">
                </div>
            </div>
            <div class="field">
                <div class="control">
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

            <div class="buttons">
                <button class="button is-info" v-on:click="onRegisterNewClinic">Register A New Clinic</button>
            </div>
            
            

        </section>
        <!-- Register New Clinic / -->
        <section class="section">
            <article class="message">
                <div class="message-header">
                    <p>Message</p>
                    <!-- <button class="delete" aria-label="delete"></button> -->
                </div>
                <div class="message-body">
                    <!-- TO be filled by App -->
                    {{ ui_message }}
                </div>
            </article>
        </section>
        

    </div>
</template>

<script>
export default {
    name: 'AppBasics',
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
a {
  color: #42b983;
}
</style>