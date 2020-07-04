<template>
    <div class="box">
        
        <p class="control">
            <span class="title has-text-black is-family-secondary is-size-3"> Schedules </span>
            <button class="button" @click="onGetSchedules"> Get </button>
        </p>
        
        <!-- Table -->
        <section>
            <label>All Schedules | {{profileObj.name}} | {{dataForTheScheduleTable.length}}</label>
            
            <table class="table is-bordered is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <td></td>
                        <th>id</th>
                        <td>Morning</td>
                        <td>Date</td>
                        <td>Doctor Name</td>
                        <td>Web</td>
                        <td>At Time</td>
                        <td>Link</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in dataForTheScheduleTable" :key="item.id">
                        <td>{{index+1}}</td>
                        <th>{{ item.id }}</th>
                        <td style="width:130px;">
                            <!-- {{ item.is_morning }} -->
                            <div class="tags has-addons">
                                <span class="tag is-dark"> Morning </span>
                                <span class="tag is-success" v-if="item.is_morning"> Yes </span>
                                <span class="tag is-danger" v-else> No </span>
                            </div>
                        </td>
                        <td>{{ item.on_date }}</td>
                        <td>{{ item.doctor_name }}</td>
                        <td style="width:130px;">
                            <!-- {{ item.isWeb }} -->
                            <div class="tags has-addons">
                                <span class="tag is-dark"> On Web </span>
                                <span class="tag is-success" v-if="item.isWeb"> Yes </span>
                                <span class="tag is-danger" v-else> No </span>
                            </div>
                        </td>
                        <td>
                            <div v-if="item.isAttended"> x </div>
                            <div v-else>  
                                <span v-if="item.isWeb">{{ item.web_at_time }}</span>
                            </div>
                        </td>
                        <td>
                            <!-- {{ item.webURL }} -->
                            
                            <div v-if="item.isAttended"> Done </div>
                            <div v-else>
                                <div v-if="item.isWeb==null" />
                                <div v-else>
                                    <div v-if="item.isWeb==0" />
                                    <div v-else>
                                        <button class="button is-dark" v-bind:href="item.webURL" @click="onJoinWebSchedule(item.webURL)"> Join </button>
                                    </div>
                                </div>
                            </div>

                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <th>id</th>
                        <td>Morning</td>
                        <td>Date</td>
                        <td>Doctor Name</td>
                        <td>Web</td>
                        <td>At Time</td>
                        <td>Link</td>
                    </tr>
                </tfoot>
            </table>
        </section>
        <!-- Table / -->
                            
    </div>
</template>
<script>
import { mapGetters,mapActions } from 'vuex'


export default {
    name: "PatientSchedulesComponent",
    components: {
        
    },
    props: [ 'profileObj' ],
    computed: {
        ...mapGetters([ 'getFilteredSchedulesForPatientId', 'getDoctorsForTheClinicId' ]),
        dataForTheScheduleTable: function(){
            
            let newData = this.getFilteredSchedulesForPatientId.map( item=>{
                
                //const is_On_Morning = item.is_morning ? "Yes" : "No"
                const doctor = this.getDoctorsForTheClinicId.find( doctor=> (doctor.id===item.doctorId) )
                /*
                if(item.is_morning){
                    item.is_morning = "Yes"
                }else{
                    item.is_morning = "No"
                }
                */
                /*
                if(item.isWeb===null){
                    item.isWeb = 'No'
                }
                */
                const doctor_name = doctor.name
                return {...item, doctor_name}
            })
            
            return(newData)
        },
    },
    methods:{
        ...mapActions([ 'getAllSchedulesByPatientId' ]),
        onGetSchedules: function(){
            window.console.log( 'onGetSchedules', JSON.stringify(this.profileObj) )
            this.$store.dispatch( 'getAllSchedulesByPatientId', this.profileObj.id );
        },
        onJoinWebSchedule(url){
            window.console.log('onJoinWebSchedule',url)
            const windowFeatures = "menubar=no,location=no,resizable=yes,scrollbars=no,status=no"
            const newWindow = window.open(url, 'FH:WebConferencing', windowFeatures)
            window.console.log('newWindow:', newWindow )
        }
    }
}
</script>