//
<template>
    <div class="patientForm">
        <!-- title = CREATE | UPDATE -->
        <div class="field" v-if="(title==='UPDATE')">
            <div class="control">
                <label>Patient Id</label>
                <input class="input is-info" type="text" placeholder="Doctor Id" v-model="patient.id"> 
            </div>
        </div>

        <div class="field">
            <div class="control">
                <label>Patient Name</label>
                <input class="input is-info" type="text" placeholder="Doctor Name" v-model="patient.name"> 
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label>Patient Phone Number</label>
                <input class="input is-info" type="number" placeholder="9999999999" v-model="patient.phone"> 
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label>Patient Email</label>
                <input class="input is-info" type="text" placeholder="doctor@email.com" v-model="patient.email"> 
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label>Patient Address</label>
                <input class="input is-info" type="text" placeholder="Road Lane, Town, State,Pin" v-model="patient.address"> 
            </div>
        </div>

        <div class="buttons" v-if="(title==='CREATE')">
            <button class="button is-info" v-on:click="onRegisterNewPatient">Register A New Patient</button>
        </div>
        <div class="buttons" v-if="(title==='UPDATE')">
            <button class="button is-info" v-on:click="onUpdatePatient">Update Patient Info</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PatientForm',
    props: ['title'],
    computed:{},
    data: function(){
        return({
            patient:{
              id: 3,
              name: "Xyz Last",
              phone: "1111111111",
              email: "email@email.com",
              address: "my address is this"
          }
        })
    },
    methods:{
        onRegisterNewPatient: function(){
            window.console.log('Patient : CREATE');
            window.console.log('patient : ', JSON.stringify(this.patient));

            this.$store.dispatch( 'createPatient', this.patient);
        },
        onUpdatePatient: function(){
            window.console.log('Patient : UPDATE');
            window.console.log('patient : ', JSON.stringify(this.patient));

            this.$store.dispatch('updatePatient', this.patient);
        }
    }
}
</script>