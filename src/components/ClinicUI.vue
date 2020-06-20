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
                <div class="container has-text-centered">
                    <h1 class="title"> Login </h1>
                    <h2 class="subtitle"> Manage your clinic </h2>

                    <div class="columns is-mobile">
                        <div class="column"></div>
                        <div class="column is-one-thirds">
                            
                            <LoginComp v-bind:loggedInClinicData="getLoggedInClinicData" v-bind:goNextFromClinicUI="onNextButtonClick" v-if="!isLoggedInAndActive" />
                            <div v-if="isLoggedInAndActive"> TODO: UI for Clinic Management </div>
                            
                        </div>
                        <div class="column"></div>
                    </div>
                </div>
            </div>
            <div class="hero-foot">
                <div class="container has-text-centered">
                    <p>Please user your Clinic Administration credentials. It is provided to you while activating the clinic.</p>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

import BusyIndicator from './BusyIndicator';
//import LoginStatusComp from './LoginStatus.comp';
import LoginComp from './LoginComp'

export default {
    name: 'ClinicUI',
    components: { BusyIndicator, LoginComp },
    data: ()=>({}),
    computed: {
        ...mapGetters([ 'get_whetherBusy', 'getLoggedInClinicData' ]),
        isLoggedInAndActive: function(){
            return this.getLoggedInClinicData.isStillActive
        },
    },
    methods: {
        ...mapActions([ 'updateBusyStatus', 'onClinicLogin' ]),
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