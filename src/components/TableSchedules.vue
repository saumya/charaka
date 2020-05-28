<template>
    <div>
        <label>All Schedules | {{info}} | {{tableData.length}}</label>
        <table class="table is-bordered is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>index</th>
                    <td>id</td>
                    <td>Name</td>
                    <td>Is on Morning</td>
                    <td>on Date</td>
                    <td>Person Id</td>
                    <td>Doctor Id</td>
                    <td>Group Id</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in tableData" :key="item.id">
                    <th>{{index}}</th>
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.is_morning }}</td>
                    <td>{{ item.on_date }}</td>
                    <td>{{ item.personId }}</td>
                    <td>{{ item.doctorId }}</td>
                    <td>{{ item.groupId }}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>index</th>
                    <td>id</td>
                    <td>Name</td>
                    <td>Is on Morning</td>
                    <td>on Date</td>
                    <td>Person Id</td>
                    <td>Doctor Id</td>
                    <td>Group Id</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>
<script>
export default {
    name: 'TableSchedule',
    props: ['info','tableData'],
}
</script>