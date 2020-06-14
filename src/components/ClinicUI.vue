<template>
    <div>
        <section class="hero is-primary is-small">
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
import { mapActions } from 'vuex';

export default {
    name: 'ClinicUI',
    data: ()=>({
        loginInfoObj:{
            cid:100,
            cAdminUserName: 'AdminName',
            cAdminUserPw: 'AdminPw'
        }
    }),
    methods: {
        ...mapActions([ 'onClinicLogin' ]),
        onLoginButtonClick: function(){
            window.console.log('onLoginClick', JSON.stringify(this.loginInfoObj) );
            this.$store.dispatch('onClinicLogin', this.loginInfoObj );
        }, 
    }
}
</script>
<style lang="stylus" scoped>

</style>