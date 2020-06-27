<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title"> Bill </p>
                <button class="delete" aria-label="close" v-on:click="this.onHideDetailsClick"></button>
            </header>
            <section class="modal-card-body">
                
                <div style="color:black">
                    <div>
                        <div class="field">
                            <label>Details</label>
                            <input class="input is-info" type="text" placeholder="Details" value="Details" v-model="bill.details">
                        </div>
                        <div class="field">
                            <label>On Date</label>
                            <input class="input is-info" type="date" value="" v-model="bill.onDate">
                        </div>
                        <div class="field">
                            <label>Ammount</label>
                            <input class="input is-info" type="number" value="" v-model="bill.ammount">
                        </div>
                    </div>
                    <!--
                    <div style="color:black">
                        <label>Appointment id:{{ this.appointmentId }}</label>,
                        <label>Clinic id : {{ this.bill.clinicId }}</label>,
                        <label>Person id : {{ this.bill.personId }}</label>,
                        <label>Doctor id : {{ this.bill.doctorId }}</label>,
                        <label>Doctor Name : {{ this.doctorName }}</label>
                    </div>
                    -->
                </div>
                
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success" v-on:click="onSaveBillClick"> Save </button>
                <button class="button" v-on:click="onHideDetailsClick"> Cancel </button>
            </footer>
        </div>
    </div>
</template>
<script>
export default {
    name: "BillModal",
    props : ['appointmentId', 'clinicId', 'personId', 'doctorId', 'doctorName'],
    data: function(){
        return({
            bill : {
                name : "Bill",
                onDate : "2020-12-24",
                details : "Bill for Consultation",
                ammount : "300.50",
                doctorId : this.doctorId,
                personId : this.personId,
                clinicId : this.clinicId
            }
        })
    },
    methods: {
        onHideDetailsClick :  function(){
            this.$emit('on_hide_modal_bill_click');
        },
        onSaveBillClick : function(){
            //window.console.log( this.bill );
            this.$emit('on_save_bill_click', this.bill );
            this.$emit('on_hide_modal_bill_click');
        },
    },
}
</script>