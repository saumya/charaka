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

                    {{ getWhetherLoginSuccess }}
                    {{ getLoginPatientObj }}


                    <LoginPatientComp :loggedInClinicData="getLoginPatientObj" :goNextFromPatientUI="onLoginSuccess" />
                    

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

export default {
    name : 'PatientUI',
    components: { BusyIndicator, LoginPatientComp },
    computed: {
        ...mapGetters([ 'get_whetherBusy', 'getWhetherLoginSuccess', 'getLoginPatientObj' ]),
    },
    methods:{
        onLoginSuccess: function(){
            window.console.log( 'onLoginSuccess' );
        }
    }
}
</script>