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
                    
                    <LoginDoctorComp :isLoggedIn="getWhetherLoginSuccess" v-if="!getWhetherLoginSuccess" />
                    <DoctorUIActiveHome v-if="getWhetherLoginSuccess" 
                                            v-bind:loginDoctorObj="getLoggedInDoctorObj"/>
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

import BusyIndicator from './BusyIndicator'
import LoginDoctorComp from './LoginDoctorComp'
import DoctorUIActiveHome from './DoctorUIActiveHome'

export default {
    name: 'ClinicUI',
    components: { BusyIndicator, LoginDoctorComp, DoctorUIActiveHome },
    data: ()=>({}),
    computed: {
        ...mapGetters([ 'get_whetherBusy', 'getWhetherLoginSuccess', 'getLoggedInDoctorObj' ])
    },
    created: function(){
        window.console.log('CREATED : DoctorUI')
        this.$store.dispatch('new_appusage','DoctorUI');
    },
    methods: {
        ...mapActions([ 'new_appusage', 'updateBusyStatus' ]),
    }
}
</script>
<style scoped>

</style>