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
                        <input class="input is-info" type="date" value="" v-model="prescription.onDate">
                    </div>
                    <div class="field">
                        <label>Details</label>
                        <input class="input is-info" type="text" placeholder="Details" value="Details" v-model="prescription.details">
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