<template>
    <div>
        <section class="section">
        <label  class="title">Clinic Application | {{ this.selectedClinic.group_name }}</label>


        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-menu is-active">
                <div class="navbar-start">
                    <router-link class="navbar-item" to="/clinic_admin">Home</router-link>
                    <!-- <router-link class="navbar-item" to="/clinic_employees">Employees</router-link> -->
                    <!-- <router-link class="navbar-item" to="/clinic_patients">Patients</router-link> -->
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
            <label class="label">Select a Clinic</label>
            <div class="control">
                <div class="select is-info is-large is-fullwidth">
                    <select v-model="selectedClinic" @change="onSelectClininc">
                        <option value="-1">Select A Clinic</option>
                        <option v-for="(item,index) in getAllClinicsData" :key="item.id" :value="item">
                            {{index+1}}-{{item.id}}-{{item.group_name}}
                        </option>
                    </select>
                </div>
            </div>
        </section>

        <!--
        <div class="buttons">
            <button class="button is-info" v-on:click="onClinicSelectionDone">Clinic Selection Done</button>
        </div>
        -->

        {{ /* this.$store.state.clinics.reference_name */ }}




        
        </section>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'


window.console.log('Hello: Home.ClinicAdmin');

export default {
    name: 'HomeClinicAdmin',
    created: function(){
        window.console.log('created');
        this.$store.dispatch('getAllClinics');
    },
    mounted: function(){
        window.console.log('mounted');
        //this.$store.dispatch('getAllClinics');
    },
    data: function(){
        return {
            selectedClinicId : -1,
            selectedClinic : '',
        }
    },
    computed: {
        ...mapGetters(['getAllClinicsData']),
    },
    methods: {
        ...mapActions['getAllClinics'],
        /*
        getClinics: function(){
            window.console.log('getClinics');
            window.console.log( this.$store.state.clinics.reference_name );
            this.$store.dispatch('getAllClinics');
        },
        onClinicSelectionDone: function(){
            window.console.log('onClinicSelectionDone');
            window.console.log( 'selectedClinic', JSON.stringify(this.selectedClinic) );
        },
        */
        onSelectClininc: function(){
            window.console.log('onSelectClininc');
            window.console.log( JSON.stringify(this.selectedClinic) );
            this.$store.dispatch('onClinicSelectionDone', (this.selectedClinic) );
        }
    },
    
}
</script>