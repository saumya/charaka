<template>
    <div>
        <label>All Schedules | {{info}} | {{tableData.length}}</label>
        <div class="table-container">
        <table class="table is-bordered is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>sl no.</th>
                    <th>id</th>
                    <th>when</th>
                    <th>on Date</th>
                    <!-- <th>Person Id</th> -->
                    <th>Doctor</th>
                    <th> More </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in tableData" :key="item.id">
                    <td>{{index+1}}</td>
                    <td>{{ item.id }}</td>
                    <td>
                        <span class="tag is-light is-success is-medium" v-if="item.is_morning"> Morning </span>
                        <span class="tag is-light is-warning is-medium" v-if="!item.is_morning"> Evening </span> 
                    </td>
                    <td>{{ item.on_date }}</td>
                    <!-- <td>{{ item.personId }}</td> -->
                    <!-- <td>{{ item.doctorId }}</td> -->
                    <td>{{ item.doctorName }}</td>
                    <td> <button class="button is-dark" v-on:click="onDetailsClick(item)">Details</button> </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>sl no.</th>
                    <th>id</th>
                    <th>when</th>
                    <th>on Date</th>
                    <!-- <th>Person Id</th> -->
                    <th>Doctor</th>
                    <th> More </th>
                </tr>
            </tfoot>
        </table>
        </div> <!-- table-container / -->

        <div class="modal is-active" v-if="shouldShowModalDetails">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Appointment Details</p>
                    <button class="delete" aria-label="close" v-on:click="onHideDetailsClick"></button>
                </header>
                <section class="modal-card-body">
                    <div style="color:black">
                        hello
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success">Save changes</button>
                    <button class="button" v-on:click="onHideDetailsClick">Cancel</button>
                </footer>
            </div>
        </div>


    </div>
</template>
<script>
export default {
    name: 'TableSchedule',
    props: ['info','tableData'],
    data: ()=>({
        shouldShowModalDetails: false
    }),
    methods: {
        onDetailsClick: function(item){
            window.console.log('onDetailsClick', item.id);
            window.console.log( JSON.stringify(item) )
            window.console.log('TODO: fetch and show details')

            

            this.shouldShowModalDetails = !this.shouldShowModalDetails
        },
        onHideDetailsClick: function(){
            this.shouldShowModalDetails = !this.shouldShowModalDetails
        }
    }
}
</script>