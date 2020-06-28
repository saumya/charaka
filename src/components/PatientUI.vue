<template>
    <div>

        <!--
        <section class="section">
            <div> Login : {{ getLoggedInClinicData.result }} </div>
            <div> Is Still Active : {{ getLoggedInClinicData.isStillActive }} </div>
        </section>
        -->

        <section class="hero is-primary is-small">
            <BusyIndicator v-bind:isBusy="get_whetherBusy" />
            <!--
            <div class="hero-head">
                head
            </div>
            -->
            
            <div class="hero-body">
                <div class="container">
                    <!-- <span> *This is Demo. So clinic id is set to 1. By default. </span> -->
                    <LoginPatientComp :isLoggedIn="getWhetherLoginSuccess" v-if="!getWhetherLoginSuccess"/>
                    <PatientUIActiveHome v-if="getWhetherLoginSuccess" 
                                            :ui_clinic_id="ui_clinic_id" 
                                            v-bind:loginPatientObj="getLoginPatientObj"/>
                    
                </div>
            </div>
            
            <div class="hero-foot">
                <div class="container has-text-centered">
                    <p> FindHeath.today | Thank you for using. </p>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

import BusyIndicator from './BusyIndicator'
import LoginPatientComp from './LoginPatientComp'
import PatientUIActiveHome from './PatientUIActiveHome'

export default {
    name : 'PatientUI',
    components: { BusyIndicator, LoginPatientComp, PatientUIActiveHome },
    data: function(){
        // clinic_id is from UI
        // As there would be different UI for different Clinics
        return {
            ui_clinic_id: 1
        }
    },
    computed: {
        ...mapGetters([ 'get_whetherBusy', 'getWhetherLoginSuccess', 'getLoginPatientObj' ]),
    },
    methods:{
        onLoginSuccess: function(){
            window.console.log( 'onLoginSuccess', this.getWhetherLoginSuccess );
        }
    }
}
</script>