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
                    
                    <LoginPatientComp :isLoggedIn="getWhetherLoginSuccess" v-if="!getWhetherLoginSuccess"/>
                    <section class="section" v-if="getWhetherLoginSuccess">
                        <div class="field">
                            <div class="control">
                                <button class="button is-large is-fullwidth is-primary is-light"> Schedule Appointment </button>
                            </div>
                        </div>

                        {{ getLoginPatientObj }}

                        <div class="field has-addons">
                            <p class="control">
                                <button class="button is-info"> Schedules </button>
                            </p>
                            <p class="control">
                                <button class="button is-link"> Prescriptions </button>
                            </p>
                            <p class="control">
                                <button class="button is-info"> Bills </button>
                            </p>
                        </div>
                        

                    </section>
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
            window.console.log( 'onLoginSuccess', this.getWhetherLoginSuccess );
        }
    }
}
</script>