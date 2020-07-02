<template>
    <div>
        <span>All Prescriptions | {{info}} | {{tableData.length}}</span>
        <table class="table is-bordered is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>index</th>
                    <th>id</th>
                    <!-- <td>Name</td> -->
                    <!-- <td>Is on Morning</td> -->
                    <th>on Date</th>
                    <!-- <td>Person Id</td> -->
                    <!-- <th>Doctor Id</th> -->
                    <!-- <td>Group Id</td> -->
                    
                    <!-- <th> Observations </th> -->
                    <!-- <th> Medicines </th> -->
                    <!-- <th> Tests </th> -->
                    <th> FollowUp </th>
                    <th> Details </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in tableData" :key="item.id">
                    <th>{{index}}</th>
                    <td>{{ item.id }}</td>
                    <!-- <td>{{ item.name }}</td> -->
                    <!-- <td>{{ item.is_morning }}</td> -->
                    <td>{{ new Date(item.onDate).toDateString() }}</td>
                    <!-- <td>{{ item.personId }}</td> -->
                    <!-- <td>{{ item.doctorId }}</td> -->
                    <!-- <td>{{ item.groupId }}</td> -->
                    
                    <!-- <td> {{ item.observations }} </td> -->
                    <!-- <td> {{ item.medicines }} </td> -->
                    <!-- <td> {{ item.tests }} </td> -->
                    <td> {{ new Date(item.followupDate).toDateString() }} </td>
                    <td>
                        <button class="button" @click="onGetData(item)"> Details </button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>index</th>
                    <th>id</th>
                    <!-- <td>Name</td> -->
                    <!-- <td>Is on Morning</td> -->
                    <th>on Date</th>
                    <!-- <td>Person Id</td> -->
                    <!-- <th>Doctor Id</th> -->
                    <!-- <td>Group Id</td> -->

                    <!-- <th> Observations </th> -->
                    <!-- <th> Medicines </th> -->
                    <!-- <th> Tests </th> -->
                    <th> FollowUp </th>
                    <th> Details </th>
                </tr>
            </tfoot>
        </table>
        
        <transition name="bounce">
        <article class="message" v-if="shouldShowSmallDetails">
            <div class="message-header">
                Prescription id {{ this.displayPrescriptionData.id }} 
                <button class="delete" @click="onCloseSmallDetails"></button>
            </div>
            <div class="message-body">
                <div class="is-size-4">    
                    <div>
                        <span class="is-size-6"> onDate </span>
                        <span > {{ new Date(this.displayPrescriptionData.onDate).toDateString() }} </span>
                    </div>
                    <div>
                        <span class="is-size-6"> Followup Date </span>
                        <span > {{ new Date(this.displayPrescriptionData.followupDate).toDateString() }} </span>
                    </div>

                    <div>
                        <span class="is-size-6"> Observations </span>
                        <span > {{ this.displayPrescriptionData.observations }} </span>
                    </div>
                    <div>
                        <span class="is-size-6"> Tests </span>
                        <span > {{ this.displayPrescriptionData.tests }} </span>
                    </div>
                    <div>
                        <span class="is-size-6"> Advice </span>
                        <span > {{ this.displayPrescriptionData.advice }} </span>
                    </div>
                    <div>
                        <span class="is-size-6"> Medicines </span>
                        <span > {{ this.displayPrescriptionData.medicines }} </span>
                    </div>
                    <div>
                        <span class="is-size-6"> Miscellaneous </span>
                        <span > {{ this.displayPrescriptionData.details }} </span>
                    </div>
                </div>
                <button class="button" @click="onMoreDetails"> Printable View </button>                
            </div>
        </article>
        </transition>

        
        <PrescriptionModal2 v-if="shouldShowMoreDetails" 
                                v-bind:pData="displayPrescriptionData"
                                v-on:print="onPrint" 
                                v-on:hide="onHideMoreDetails" />
        

        
        

    </div>
</template>
<script>
import PrescriptionModal2 from './PrescriptionModal2.comp'
export default {
    name: 'TablePrescriptionsComponent',
    props: ['info','tableData'],
    components:{
        PrescriptionModal2
    },
    data: function(){
        return({
            shouldShowSmallDetails: false,
            shouldShowMoreDetails: false,
            displayPrescriptionData: {}
        })
    },
    methods: {
        onCloseSmallDetails: function(){
            this.shouldShowSmallDetails = false
        },
        onGetData: function(data){
            //window.console.log('onGetData : ', JSON.stringify(data) )
            this.displayPrescriptionData = data
            this.shouldShowSmallDetails = true
        },
        onMoreDetails: function(){
            window.console.log( JSON.stringify( this.displayPrescriptionData ) );
            this.shouldShowMoreDetails = !this.shouldShowMoreDetails
        },
        onHideMoreDetails: function(){
            this.shouldShowMoreDetails = false
        },
        onPrint: function(){
            window.console.log('print');
        }

    }
}
</script>
<style scoped>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>