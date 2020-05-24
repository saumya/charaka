<template>
    <div class="scheduleForm">
        <!-- title = CREATE | UPDATE -->
        <div class="field" v-if="(title==='UPDATE')">
            <div class="control">
                <label>Schedule Id</label>
                <input class="input is-info" type="text" placeholder="Schedule Id" v-model="schedule.id"> 
            </div>
        </div>

        <div class="field">
            <div class="control">
                <label>Schedule date</label>
                <input class="input is-info" type="date" placeholder="Schedule Date" v-model="schedule.sDate"> 
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label>Person Id</label>
                <input class="input is-info" type="text" placeholder="Person Id" v-model="schedule.personId"> 
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label>Doctor Id</label>
                <input class="input is-info" type="text" placeholder="Doctor Id" v-model="schedule.doctorId"> 
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label>Group Id</label>
                <input class="input is-info" type="text" placeholder="Group Id" v-model="schedule.groupId"> 
            </div>
        </div>

       

        <div class="buttons" v-if="(title==='CREATE')">
            <button class="button is-info" v-on:click="onRegisterNewPatient">New Schedule</button>
        </div>
        <div class="buttons" v-if="(title==='UPDATE')">
            <button class="button is-info" v-on:click="onUpdatePatient">Update Schedule</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ScheduleForm',
    props: ['title'],
    computed: {},
    data: function(){
        return({
            schedule:{
              id: 3,
              name: "Xyz Last",
              sDate: "2020-05-08",
              isMorning: "0",
              doctorId: "3",
              personId: "4",
              groupId: "5"
          }
        })
    },
    methods: {
        onRegisterNewPatient: function(){
            window.console.log('Schedule : CREATE');
            window.console.log('Schedule : ', JSON.stringify(this.schedule));

            this.$store.dispatch( 'createSchedule', this.schedule);
        },
        onUpdatePatient: function(){
            window.console.log('Schedule : UPDATE');
            window.console.log('Schedule : ', JSON.stringify(this.schedule));

            this.$store.dispatch('updateSchedule', this.schedule);
        }
    }
}
</script>