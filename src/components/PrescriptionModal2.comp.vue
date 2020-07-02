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
                        <strong>Clinic Name</strong>
                        <div class="is-size-7">
                            Address of the clinic
                            Clinic Id - {{pData.clinicId}}
                            Person Id - {{pData.personId}}
                            Doctor Id - {{pData.doctorId}}
                        </div>
                    </div>
                    <div class="is-family-monospace">

                        <div class="has-text-left">
                            Date - <strong> {{  new Date( pData.onDate ).toDateString() }} </strong> <br>
                            Patient - <strong>Patient Name</strong>
                        </div>
                        
                        <div class="prescription is-size-6">
                            
                            <!-- {{ pData }} -->

                            <div class="is-size-5 has-text-weight-bold"> Prescription </div>
                            <div class="has-text-centered"> Id - {{pData.id}} </div>
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
                            Doctor 
                            <div> <strong> Doctor Name </strong> </div>
                        </div>

                    </div>
                </div>

                <div class="is-size-7 is-family-code has-text-centered"> Thank you for using FindHealth.Today. </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success" v-on:click="onPrintClick"> Print </button>
                <button class="button" v-on:click="onCancelClick"> Cancel </button>
            </footer>
        </div>
    </div>
</template>
<script>
export default {
    name: "PrescriptionModal_2_component",
    props: [ 'pData' ],
    methods: {
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
    .prescription{
        padding : 0.4em;
    }
    .prescription_description{
        margin-left: 0.8em;
    }
</style>