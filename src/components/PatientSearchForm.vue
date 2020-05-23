<template>
    <div class="searchForm">
        <h4>{{ title }}</h4>
        <div class="field has-addons">
            <div class="control is-expanded">
                <input class="input is-info" type="text" placeholder="Find a doctor with Id." v-model="userSelectedPatientId">
            </div>
            <div class="control">
                <button class="button is-info" v-on:click="onSearch"> Search </button>
            </div>
        </div>
        <div>searched doctor details</div>
        <div class="buttons" v-if="(title==='DELETE')">
            <button class="button is-danger" v-on:click="onDelete"> Delete </button>
        </div>
    </div> 
</template>
<script>
import { mapActions } from 'vuex';
export default {
    name: 'PatientSearchForm',
    props:['title'],
    data: function(){
        return({
            userSelectedPatientId : 0
        })
    },
    methods: {
        ...mapActions([ 'searchPatientWithId', 'deletePatientWithId' ]),
        onSearch: function(){
            window.console.log('onSearch', this.userSelectedPatientId);
            this.$store.dispatch('searchPatientWithId', this.userSelectedPatientId);
        },
        onDelete: function(){
            window.console.log('onDelete', this.userSelectedPatientId);
            this.$store.dispatch('deletePatientWithId', this.userSelectedPatientId);
        }
    }
}
</script>