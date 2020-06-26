<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Prescription</p>
                <button class="delete" aria-label="close" v-on:click="this.onHideDetailsClick"></button>
            </header>
            <section class="modal-card-body">
                <!--
                <div style="color:black">
                    <div>Appointment id : {{ this.appointmentId }}</div>
                    <div>Clinic id : {{ this.clinicId }}</div>
                    <div>Person id : {{ this.personId }}</div>
                    <div>Doctor id : {{ this.doctorId }}</div>
                    <div>Doctor Name : {{ this.doctorName }}</div>
                </div>
                -->
                
                <div style="color:black">
                    <!--
                    <div class="field">
                        <label>Name</label>
                        <input disabled class="input is-info" type="text" placeholder="Prescription" value="Prescription" v-model="prescription.name">
                    </div>
                    -->
                    <div class="field">
                        <label>On Date</label>
                        <input class="input is-info" type="date" value="" v-model="prescription.onDate">
                    </div>
                    <div class="field">
                        <label>Details</label>
                        <input class="input is-info" type="text" placeholder="Details" value="Details" v-model="prescription.details">
                    </div>
                    
                    <!--
                    <div class="field">
                        <label>Doctor Id</label>
                        <input disabled class="input is-info" type="text" placeholder="Doctor Id" value="Doctor Id" v-model="prescription.doctorId">
                    </div>
                    <div class="field">
                        <label>Person Id</label>
                        <input disabled class="input is-info" type="text" placeholder="Person Id" value="Person Id" v-model="prescription.personId">
                    </div>
                    <div class="field">
                        <label>Clinic Id</label>
                        <input disabled class="input is-info" type="text" placeholder="Clinic Id" value="Clinic Id" v-model="prescription.clinicId">
                    </div>
                    -->

                    <div style="color:black">
                        <label>Appointment id:{{ this.appointmentId }}</label>,
                        <label>Clinic id : {{ this.clinicId }}</label>,
                        <label>Person id : {{ this.personId }}</label>,
                        <label>Doctor id : {{ this.doctorId }}</label>,
                        <label>Doctor Name : {{ this.doctorName }}</label>
                        <label>TODO: Get the person details if necessary.</label>
                    </div>

                </div>
                
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success" v-on:click="onSavePrescriptionClick">Save changes</button>
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