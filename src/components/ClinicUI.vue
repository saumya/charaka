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
                    
                    <LoginComp v-if="!isLoggedInAndActive" v-bind:loggedInClinicData="getLoggedInClinicData" v-bind:goNextFromClinicUI="onNextButtonClick" />
                    <ClinicUIActiveHome v-if="isLoggedInAndActive" v-bind:loggedInClinicData="getLoggedInClinicData" /> 

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
import { mapGetters, mapActions } from 'vuex';

import BusyIndicator from './BusyIndicator';
import LoginComp from './LoginComp'
import ClinicUIActiveHome from './ClinicUIActiveHome'

export default {
    name: 'ClinicUI',
    components: { BusyIndicator, LoginComp, ClinicUIActiveHome },
    data: ()=>({}),
    computed: {
        ...mapGetters([ 'get_whetherBusy', 'getLoggedInClinicData' ]),
        isLoggedInAndActive: function(){
            return this.getLoggedInClinicData.isStillActive
        },
    },
    methods: {
        ...mapActions([ 'updateBusyStatus' ]),
        onNextButtonClick: function(){
            //window.console.log( 'onNextButtonClick'+ this.loginInfoObj.cid );
            this.$router.push( '/clinic_admin' );
            //this.$router.push({ path: `/clinic_admin/${this.loginInfoObj.cid}` })
        }, 
    }
}
</script>
<style scoped>

</style>