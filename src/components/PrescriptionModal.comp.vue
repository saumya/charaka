<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Prescription</p>
                <button class="delete" aria-label="close" v-on:click="this.onHideDetailsClick"></button>
            </header>
            <section class="modal-card-body">
               
                <div style="color:black">
                    <div class="field">
                        <label>On Date</label>
                        <input class="input is-info" type="date" v-model="prescription.onDate">
                    </div>

                    <div class="field">
                        <label> Observations </label>
                        <input class="input is-info" type="text" placeholder="Observations" v-model="prescription.observations">
                    </div>
                    <div class="field">
                        <label> Advice </label>
                        <input class="input is-info" type="text" placeholder="Advice" v-model="prescription.advice">
                    </div>
                    <div class="field">
                        <label> Tests </label>
                        <input class="input is-info" type="text" placeholder="Tests" v-model="prescription.tests">
                    </div>
                    <div class="field">
                        <label> Medicines </label>
                        <input class="input is-info" type="text" placeholder="Medicines" v-model="prescription.medicines">
                    </div>
                    <div class="field">
                        <label> FollowUp Date </label>
                        <input class="input is-info" type="date" v-model="prescription.followupDate">
                    </div>

                    <div class="field">
                        <label> Other details / Notes </label>
                        <input class="input is-info" type="text" placeholder="Details" v-model="prescription.details">
                    </div>

                    <!--
                    <div style="color:black">
                        <label>Appointment id:{{ this.appointmentId }}</label>,
                        <label>Clinic id : {{ this.clinicId }}</label>,
                        <label>Person id : {{ this.personId }}</label>,
                        <label>Doctor id : {{ this.doctorId }}</label>,
                        <label>Doctor Name : {{ this.doctorName }}</label>
                        <label>TODO: Get the person details if necessary.</label>
                    </div>
                    -->
                </div>
                
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success" v-on:click="onSavePrescriptionClick">Save</button>
                <button class="button" v-on:click="onHideDetailsClick">Cancel</button>
            </footer>
        </div>
    </div>
</template>
<script>
export default {
    name : "PrescriptionModal",
    props : ['appointmentId', 'clinicId', 'personId', 'doctorId', 'doctorName'],
    data: function(){
        return({
            prescription:{
                name : 'Prescription',
                onDate : '2020-12-24',
                details : 'detailsX',
                
                observations : 'ObsX',
                advice : 'AdvR',
                tests : 'TesR',
                medicines : 'MedR',
                followupDate : '2020-12-24',

                doctorId : this.doctorId,
                personId : this.personId,
                clinicId : this.clinicId
            }
        })
    },
    methods: {
        onHideDetailsClick :  function(){
            this.$emit('on_hide_details_click');
        },
        onSavePrescriptionClick : function(){
            //window.console.log( this.prescription );
            this.$emit('on_save_prescription_click', this.prescription );
            this.$emit('on_hide_details_click');
        },
    },
}
</script>