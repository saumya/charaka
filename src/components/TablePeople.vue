<template>
    <div>
        <label>All Patients | {{tableData.length}}</label>
        <table class="table is-bordered is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>index</th>
                    <td>id</td>
                    <td>Name</td>
                    <td>Phone</td>
                    <td>Email</td>
                    <td>Address</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in tableData" :key="item.id">
                    <th>{{index}}</th>
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.address }}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>index</th>
                    <td>id</td>
                    <td>Doctor Name</td>
                    <td>Phone</td>
                    <td>Email</td>
                    <td>Address</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>
<script>
export default {
    name: 'TablePeople',
    props: ['tableData'],
}
</script>