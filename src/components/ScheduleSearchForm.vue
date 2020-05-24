<template>
    <div class="searchForm">
        <h4>{{ title }}</h4>
        <div class="field has-addons">
            <div class="control is-expanded">
                <input class="input is-info" type="text" placeholder="Find a doctor with Id." v-model="userSelectedScheduleId">
            </div>
            <div class="control">
                <button class="button is-info" v-on:click="onSearch"> Search </button>
            </div>
        </div>
        <div>searched Schedule details</div>
        <div class="buttons" v-if="(title==='DELETE')">
            <button class="button is-danger" v-on:click="onDelete"> Delete </button>
        </div>
    </div> 
</template>
<script>
import { mapActions } from 'vuex';
export default {
    name: 'ScheduleSearchForm',
    props: ['title'],
    data: function(){
        return({
            userSelectedScheduleId : 0
        })
    },
    methods: {
        ...mapActions([ 'searchScheduleWithId', 'deleteScheduleWithId' ]),
        onSearch: function(){
            window.console.log('onSearch', this.userSelectedScheduleId);
            this.$store.dispatch('searchScheduleWithId', this.userSelectedScheduleId);
        },
        onDelete: function(){
            window.console.log('onDelete', this.userSelectedPatientId);
            this.$store.dispatch('deleteScheduleWithId', this.userSelectedScheduleId);
        }
    }
}
</script>