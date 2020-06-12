<template>
    <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-menu is-active">
                <div class="navbar-start">
                    <a class="navbar-item" v-on:click="onCreate"> Create </a>
                    <!--
                    <a class="navbar-item" v-on:click="onRead"> Read </a>
                    <a class="navbar-item" v-on:click="onUpdate"> Update </a>
                    <a class="navbar-item" v-on:click="onDelete"> Delete </a>
                    -->
                </div>
            </div>
        </nav>
        <GeneralMessage :message="get_general_message"></GeneralMessage>
        <section class="section">

            <div class="field">
                <label>Name</label>
                <input class="input is-info" type="text" placeholder="Bill" value="Bill" v-model="bill.name">
            </div>
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
            <div class="field">
                <label>Doctor Id</label>
                <input class="input is-info" type="text" placeholder="Doctor Id" value="Doctor Id" v-model="bill.doctorId">
            </div>
            <div class="field">
                <label>Person Id</label>
                <input class="input is-info" type="text" placeholder="Person Id" value="Person Id" v-model="bill.personId">
            </div>
            <div class="field">
                <label>Clinic Id</label>
                <input class="input is-info" type="text" placeholder="Clinic Id" value="Clinic Id" v-model="bill.clinicId">
            </div>

            <div class="field">
                <button class="button is-info" @click="onBill"> Create Bill </button>
            </div>

        </section>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import GeneralMessage from './GeneralMessage';

export default {
    name: 'bills',
    components: { GeneralMessage },
    data: function(){
        return({
            bill : {
                name : "Bill",
                onDate : "2020-12-24",
                details : "Bill Detail",
                ammount : "300.50",
                doctorId : 3,
                personId : 5,
                clinicId : 0
            }
        })
    },
    computed: {
        ...mapGetters(['get_general_message']),
    },
    methods:{
        ...mapActions([ 'createNewBill' ]),
        onCreate: function(){
            window.console.log('onCreate');
        },
        onRead: function(){},
        onUpdate: function(){},
        onDelete: function(){},
        onBill: function(){
            window.console.log('onBill', JSON.stringify(this.bill));
            this.$store.dispatch('createNewBill', this.bill);
        }
    },
}
</script>