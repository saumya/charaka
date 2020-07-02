<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Prescription</p>
                <button class="delete" aria-label="close" v-on:click="onCancelClick"></button>
            </header>
            <section class="modal-card-body">
                
                <div class="container is-fluid">
                    <div class="is-size-3 has-text-centered">
                        <strong>{{ getSearchedClinicWithId.group_name}}</strong>
                        <div class="is-size-7">
                            <!--
                            Address of the clinic
                            Clinic Id - {{pData.clinicId}}
                            -->
                        </div>
                        
                        <!-- {{ getSearchedPatientWithId }} -->
                        <!-- {{ getSearchedDoctorWithId }} -->
                        <!-- {{ getSearchedClinicWithId }} -->

                    </div>
                    <div>

                        <div class="prescription_to has-text-left">
                            Date - <strong> {{dateToDisplay}} </strong> <br>
                            Patient - <strong> {{getSearchedPatientWithId.name}} </strong>, <br> 
                            <span class="is-size-7"> 
                                Ph- {{getSearchedPatientWithId.phone}}, 
                                Email- {{getSearchedPatientWithId.email}}, <br>
                                Address- {{getSearchedPatientWithId.address}}  
                            </span>
                        </div>
                        
                        <div class="prescription is-size-6 is-family-monospace">
                            
                            <!-- {{ pData }} -->

                            <div class="is-size-5 has-text-weight-bold"> Prescription </div>
                            <div> Id - {{pData.id}} </div>
                            <div>
                                <div> 
                                    <div class="has-text-weight-bold"> Observations </div>
                                    <p class="prescription_description"> 
                                        {{pData.observations}}
                                    </p>
                                </div>
                                <div> 
                                    <div class="has-text-weight-bold"> Tests </div>
                                    <p class="prescription_description"> 
                                        {{pData.tests}}
                                    </p>
                                </div>
                                <div> 
                                    <div class="has-text-weight-bold"> Medicines </div>
                                    <p class="prescription_description"> 
                                        {{pData.medicines}}
                                    </p>
                                </div>
                                <div> 
                                    <div class="has-text-weight-bold"> Advice </div>
                                    <p class="prescription_description"> 
                                        {{pData.advice}}
                                    </p>
                                </div>
                                <!--
                                <div> 
                                    <div class="has-text-weight-bold"> Miscellaneous </div>
                                    <p> 
                                        {{pData.details}}
                                    </p>
                                </div>
                                -->
                            </div>
                        </div>
                        
                        <div class="has-text-right">
                            <span> Doctor </span>
                            <div> 
                                <strong> {{ getSearchedDoctorWithId.name }} </strong>, <br>
                                <span class="is-size-7"> 
                                    Ph- {{getSearchedPatientWithId.phone}}, 
                                    Email- {{getSearchedPatientWithId.email}}, <br>
                                    Address- {{getSearchedPatientWithId.address}}  
                                </span> 
                            </div>
                        </div>

                    </div>
                </div>

                <div class="thank_you is-size-7 is-family-code has-text-centered"> Thank you for using FindHealth.Today. </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success" v-on:click="onPrintClick"> Print </button>
                <button class="button" v-on:click="onCancelClick"> Cancel </button>
            </footer>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: "PrescriptionModal_2_component",
    props: [ 'pData' ],
    computed: {
        ...mapGetters([ 'getSearchedPatientWithId', 
                        'getSearchedDoctorWithId', 'getSearchedClinicWithId' ]),
        dateToDisplay: function(){
            const d = new Date(this.pData.onDate)
            const ds = (d.getDate()) + '/' + (d.getMonth()+1) + '/' + (d.getFullYear())
            return ds
        }
    },
    created: function(){
        window.console.log( 'onCreate' )
        window.console.log( '---------------------------------' )
        window.console.log( JSON.stringify(this.pData) )
        window.console.log( '---------------------------------' )
        // Get the Details of Patient, Doctor, Clinic
        this.$store.dispatch('searchPatientWithId', this.pData.personId);
        this.$store.dispatch('searchDoctorWithId', this.pData.doctorId);
        this.$store.dispatch('searchClinicWithId', this.pData.clinicId);
    },
    methods: {
        ...mapActions([ 'searchPatientWithId', 
                        'searchDoctorWithId', 'searchClinicWithId' ]),
        onPrintClick: function(){
            this.$emit('print')
        },
        onCancelClick: function(){
            this.$emit('hide')
        }
    }
}
</script>
<style scoped>
    .prescription_to{
        margin-top: 1em;
    }
    .prescription{
        margin-top: 1em;
        padding : 0.4em;
    }
    .prescription_description{
        margin-left: 0.8em;
    }
    .thank_you {
        margin-top: 2em;
    }
</style>