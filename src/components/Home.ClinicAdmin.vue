<template>
    <div>
        <section class="section">
        <label  class="title">Clinic Application</label>


        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-menu is-active">
                <div class="navbar-start">
                    <router-link class="navbar-item" to="/clinic_admin">Home</router-link>
                    <!-- <router-link class="navbar-item" to="/clinic_employees">Employees</router-link> -->
                    <router-link class="navbar-item" to="/clinic_patients">Patients</router-link>
                    <router-link class="navbar-item" to="/clinic_doctors">Doctors</router-link>
                    <!-- <router-link class="navbar-item" to="/clinic_approvals">Approvals</router-link> -->
                    <router-link class="navbar-item" to="/clinic_schedules">Schedules</router-link>
                    
                </div>
                <div class="navbar-end">
                    <!--
                    <a class="navbar-item"> Notice Board </a>
                    <a class="navbar-item"> Dashboard </a>
                    -->
                    <a class="navbar-item"> Dashboard </a>
                </div>
            </div>
        </nav>

        <section class="section">
            <div class="panel-block">
                    <div class="control">
                        <div class="select is-info is-large is-fullwidth">
                            <select v-model="selectedClinicId">
                                <option value="-1">Select A Clinic</option>
                                <option v-for="(item,index) in getAllClinicsData" :key="item.id" :value="item.id">
                                    {{index+1}}-{{item.id}}-{{item.group_name}}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
        </section>

        <div class="buttons">
            <button class="button is-info" v-on:click="getClinics">clinics</button>
        </div>




        
        </section>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'


window.console.log('Hello: Home.ClinicAdmin');

export default {
    name: 'HomeClinicAdmin',
    created: function(){
        window.console.log('created');
    },
    mounted: function(){
        window.console.log('mounted');
    },
    data: function(){
        return {
            selectedClinicId : -1,
        }
    },
    computed: {
        ...mapGetters['getAllClinicsData'],
    },
    methods: {
        ...mapActions['getAllClinics'],
        getClinics: function(){
            window.console.log('getClinics');
            this.$store.dispatch('getAllClinics');
        }
    },
    
}
</script>