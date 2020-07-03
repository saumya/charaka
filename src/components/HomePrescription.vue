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

            <div class="field">
                <label>Name</label>
                <input class="input is-info" type="text" placeholder="Prescription" value="Prescription" v-model="prescription.name">
            </div>

            <div class="field">
                <label>Clinic Id</label>
                <input class="input is-info" type="text" placeholder="Clinic Id" value="Clinic Id" v-model="prescription.clinicId">
            </div>
            <div class="field">
                <label>Doctor Id</label>
                <input class="input is-info" type="text" placeholder="Doctor Id" value="Doctor Id" v-model="prescription.doctorId">
            </div>
            <div class="field">
                <label>Person Id</label>
                <input class="input is-info" type="text" placeholder="Person Id" value="Person Id" v-model="prescription.personId">
            </div>

            
            <div class="field">
                <label>On Date</label>
                <input class="input is-info" type="date" value="" v-model="prescription.onDate">
            </div>
            

            <div class="field">
                <label> Observation </label>
                <input class="input is-info" type="text" placeholder="Observation" v-model="prescription.observations">
            </div>
            <div class="field">
                <label> Tests </label>
                <input class="input is-info" type="text" placeholder="Tests" v-model="prescription.tests">
            </div>
            <div class="field">
                <label> Advice </label>
                <input class="input is-info" type="text" placeholder="Advice" v-model="prescription.advice">
            </div>
            <div class="field">
                <label> Medicines </label>
                <input class="input is-info" type="text" placeholder="Medicines" v-model="prescription.medicines">
            </div>
            <div class="field">
                <label> Followup Date </label>
                <input class="input is-info" type="date" placeholder="2020-12-24" v-model="prescription.followupDate">
            </div>

            <div class="field">
                <label>Details</label>
                <input class="input is-info" type="text" placeholder="Details" value="Details" v-model="prescription.details">
            </div>

            <div class="field">
                <label> Is Attended </label>
                <input class="input is-info" type="text" placeholder="Details" value="Details" v-model="prescription.isAttended">
            </div>
            <div class="field">
                <label> Is On Web / In Person </label>
                <input class="input is-info" type="text" placeholder="Details" value="Details" v-model="prescription.isWeb">
            </div>
            <div class="field">
                <label>Web Conference URL</label>
                <input class="input is-info" type="text" placeholder="Details" value="Details" v-model="prescription.webURL">
            </div>

            <div class="field">
                <button class="button is-info" @click="onPrescription"> Create Prescription </button>
            </div>

        </section>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import GeneralMessage from './GeneralMessage';

export default {
    name: 'prescription',
    components: { GeneralMessage },
    data: function(){
        return({
            prescription:{
                name : 'prescriptionX',
                onDate : '2020-12-24',
                
                doctorId : '4',
                personId : '5',
                clinicId : '3',

                observations: 'ObsR',
                tests: 'TesR',
                advice: 'AdvR',
                medicines: 'MedR',
                details : 'detailsX',
                followupDate: '2020-12-31',

                isAttended: false,
                isWeb: false,
                webURL: 'http://www.findhealth.today'
            }
        })
    },
    computed: {
        ...mapGetters(['get_general_message']),
    },
    methods: {
        ...mapActions([ 'registerNewPrescription' ]),
        onCreate: function(){ window.console.log('onCreate') },
        onRead: function(){ window.console.log('onRead') },
        onUpdate: function(){ window.console.log('onUpdate') },
        onDelete: function(){ window.console.log('onDelete') },
        onPrescription: function(){
            window.console.log('onPrescription');
            //window.console.log( JSON.stringify( this.prescription ) );

            this.$store.dispatch('registerNewPrescription', this.prescription );
        }
    }
}
</script>