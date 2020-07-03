<template>
    <div class="scheduleForm">


        


        <!-- title = CREATE | UPDATE -->
        <div class="field" v-if="(title==='UPDATE')">
            <div class="control">
                <label>Schedule Id</label>
                <input class="input is-info" type="text" placeholder="Schedule Id" v-model="schedule.id"> 
            </div>
        </div>

        <!--
        <div class="field">
            <div class="control">
                <label>Schedule date</label>
                <input class="input is-info" type="date" placeholder="Schedule Date" v-model="schedule.sDate"> 
            </div>
        </div>
        <div class="field">
            <label>Select Timing</label>
            <div class="control">
                <div class="select">
                    <select class="is-hovered" v-model="schedule.isMorning">
                        <option value="1">is Morning</option>
                        <option value="0">is Evening</option>
                    </select>
                </div>
            </div>
        </div>
        -->
        <div class="field">
            <div class="control">
                <label>Schedule Time and Date</label>
            </div>
        </div>
        <div class="field has-addons">
            <div class="control">
                <div class="select is-info">
                    <select v-model="schedule.is_morning">
                        <option value=true>is Morning</option>
                        <option value=false>is Evening</option>
                    </select>
                </div>
            </div>
            <div class="control is-expanded">
                <input class="input is-info" type="date" placeholder="Schedule Date" v-model="schedule.on_date"> 
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

        <div class="field is-size-4">
            <label> Is Attended? </label>
            <span class="is-size-6"> {{ schedule.isAttended }} </span>
            <div class="control">
                <label class="radio"> <input type="radio" value=true v-model="schedule.isAttended"> Yes </label>
                <label class="radio"> <input type="radio" value=false v-model="schedule.isAttended"> No </label>
            </div>
        </div>
        <div class="field is-size-4">
            <label> Is a web consultation? </label>
            <span class="is-size-6"> {{ schedule.isWeb }} </span>
            <div class="control">
                <label class="radio"> <input type="radio" value=true v-model="schedule.isWeb"> Yes </label>
                <label class="radio"> <input type="radio" value=false v-model="schedule.isWeb"> No </label>
            </div>
        </div>
        <div class="field">
            <label>Web Conference URL</label>
            <input class="input is-info" type="text" placeholder="Details" value="Details" v-model="schedule.webURL">
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
              id:'',
              name: "Appointment",
              on_date: "2020-05-08",
              is_morning: false,
              doctorId: "3",
              personId: "4",
              groupId: "5",
              
              isAttended: false,
              isWeb: false,
              webURL: 'http://www.findhealth.today'
          }
        })
    },
    methods: {
        onRegisterNewPatient: function(){
            window.console.log('Schedule : CREATE');
            window.console.log('Schedule : ', JSON.stringify(this.schedule));

            this.$store.dispatch('createSchedule', this.schedule);
        },
        onUpdatePatient: function(){
            window.console.log('Schedule : UPDATE');
            window.console.log('Schedule : ', JSON.stringify(this.schedule));

            this.$store.dispatch('updateSchedule', this.schedule);
        }
    }
}
</script>