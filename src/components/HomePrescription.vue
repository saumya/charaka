<template>
    <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-menu is-active">
                <div class="navbar-start">
                    <a class="navbar-item" v-on:click="onCreate"> Create </a>
                    <!--
                    <a class="navbar-item" v-on:click="onRead"> Read </a>
                    <a class="navbar-item" v-on:click="onUpdate"> Update </a>
                    <a class="navbar-item" v-on:click="onDelete"> Delete </a>
                    -->
                </div>
            </div>
        </nav>
        <GeneralMessage :message="get_general_message"></GeneralMessage>
        <section class="section">
            <div class="panel has-background-white-bis">
                <div class="panel-heading">
                    <label class="title"> Prescription : Create </label>
                </div>

                <div class="panel-block">
                    <div class="field">
                        <div class="control">
                            <label>Name</label>
                            <input class="input is-info" type="text" placeholder="Prescription" value="Prescription"> 
                        </div>
                    </div>
                </div>
                <div class="panel-block">
                    <div class="field">
                        <div class="control">
                            <label>On Date</label>
                            <input class="input is-info" type="date" placeholder="Prescription" value=""> 
                        </div>
                    </div>
                </div>
                <div class="panel-block">
                    <div class="field">
                        <div class="control">
                            <label> Details </label>
                            <input class="input is-info" type="text" placeholder="Details" value="Details"> 
                        </div>
                    </div>
                </div>
                
                
                <div class="panel-block">
                    <button class="button is-large is-primary is-fullwidth" @click="onPrescription"> Create Prescription </button>
                </div>
            </div>

            

        </section>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import GeneralMessage from './GeneralMessage';

export default {
    name: 'prescription',
    components: { GeneralMessage },
    data: function(){
        return({
            selectedClinicId: '',
            selectedDoctorId: '',
        })
    },
    computed: {
        ...mapGetters(['get_general_message']),
    },
    methods: {
        onCreate: function(){},
        onRead: function(){},
        onUpdate: function(){},
        onDelete: function(){},
        onPrescription: function(){
            window.console.log('onPrescription')
        }
    }
}
</script>