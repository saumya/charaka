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
                        <th>index</th>
                        <td>id</td>
                        <td>Is on Morning</td>
                        <td>on Date</td>
                        <td>Doctor Name</td>
                        <td>On Web</td>
                        <td>Web Link</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in dataForTheScheduleTable" :key="item.id">
                        <th>{{index+1}}</th>
                        <td>{{ item.id }}</td>
                        <td>{{ item.is_morning }}</td>
                        <td>{{ item.on_date }}</td>
                        <td>{{ item.doctor_name }}</td>
                        <td>{{ item.isWeb }}</td>
                        <td>{{ item.webURL }}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>index</th>
                        <td>id</td>
                        <td>Is on Morning</td>
                        <td>on Date</td>
                        <td>Doctor Name</td>
                        <td>On Web</td>
                        <td>Web Link</td>
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
                if(item.is_morning){
                    item.is_morning = "Yes"
                }else{
                    item.is_morning = "No"
                }
                if(item.isWeb===null){
                    item.isWeb = 'No'
                }

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
        }
    }
}
</script>