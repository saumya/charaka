<template>
    <div>

        <div class="mb-4 has-text-centered">
            <h1 class="title"> Login </h1>
            <h2 class="subtitle"> Manage your clinic </h2>
        </div>
        
        <LoginStatusComp v-bind:loginStatusObj="loggedInClinicData" v-bind:goNext="goNextFromClinicUI" />

        <div class="columns">
            <div class="column" />
            <div class="column">

                <div class="field">
                    <div class="control">
                        <input class="input is-large" type="text" placeholder="Clinic Id" v-model="loginInfoObj.cid">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input class="input is-large" type="text" placeholder="User Name" v-model="loginInfoObj.cAdminUserName">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input class="input is-large" type="password" placeholder="Password" v-model="loginInfoObj.cAdminUserPw">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <button class="button is-large is-fullwidth is-primary is-light" v-on:click="onLoginButtonClick"> Login </button>
                    </div>
                </div>

            </div>
            <div class="column" />
        </div>

        

    </div>
</template>
<script>
import { mapActions } from 'vuex';

import LoginStatusComp from './LoginStatus.comp';

export default {
    name: 'LoginComp',
    props: ['loggedInClinicData', 'goNextFromClinicUI'],
    components: { LoginStatusComp },
    data: function(){
        return({
            loginInfoObj:{
                cid:100,
                cAdminUserName: 'AdminName',
                cAdminUserPw: 'AdminPw'
            }
        })
    },
    computed:{
        
    },
    methods:{
        ...mapActions([ 'updateBusyStatus', 'onClinicLogin' ]),
        onLoginButtonClick: function(){
            window.console.log('onLoginButtonClick', JSON.stringify(this.loginInfoObj) );
            this.$store.dispatch('onClinicLogin', this.loginInfoObj );
            this.$store.dispatch('updateBusyStatus', true);
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>