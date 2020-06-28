<template>
    <div>

        <div class="mb-4 has-text-centered">
            <h1 class="title"> Login </h1>
            <h2 class="subtitle"> Demo Health Clinic. </h2>
            <h3> {{ isLoggedIn ? "Login Success" : "Login Fail" }} </h3>
        </div>
        
        

        <div class="columns">
            <div class="column" />
            <div class="column">
                <!--
                <div class="field">
                    <div class="control">
                        <input class="input is-large" type="text" placeholder="Clinic Id" v-model="loginInfoObj.cid">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input class="input is-large" type="text" placeholder="User Name" v-model="loginInfoObj.pUserName">
                    </div>
                </div>
                -->
                <div class="field">
                    <div class="control">
                        <input class="input is-large" type="text" placeholder="User Name" v-model="loginInfoObj.pUserId">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input class="input is-large" type="password" placeholder="Password" v-model="loginInfoObj.pUserPw">
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

        <div class="container has-text-centered">
            <p> Please user your credentials. </p>
        </div>

        

    </div>
</template>
<script>
import { mapActions } from 'vuex';


export default {
    name: 'LoginPatientComp',
    props: [ 'isLoggedIn' ],
    components: {  },
    data: function(){
        return({
            loginInfoObj:{
                pUserId : '2',
                pUserPw : 'UserPw'
            }
        })
    },
    methods:{
        ...mapActions([ 'updateBusyStatus', 'onPatientLogin' ]),
        onLoginButtonClick: function(){
            window.console.log('onLoginButtonClick', JSON.stringify(this.loginInfoObj) );
            this.$store.dispatch('updateBusyStatus', true);
            this.$store.dispatch('onPatientLogin', this.loginInfoObj );
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>