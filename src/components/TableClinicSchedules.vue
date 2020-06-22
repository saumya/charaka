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
    </div>
</template>
<script>
export default {
    name: 'TableSchedule',
    props: ['info','tableData'],
    methods: {
        onDetailsClick: function(item){
            window.console.log('onDetailsClick', item.id);
            window.console.log( JSON.stringify(item) )
            window.console.log('TODO: fetch and show details')
        }
    }
}
</script>