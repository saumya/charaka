<template>
    <div>
        
            <!--
            <ul id="example-1">
                <li>
                    index-id-name-admin-adminPW-activatedOn-activatedFrom-activatedTo
                </li>
                <li v-for="(item,index) in tableData" :key="item.id">
                    {{index}}-{{ item.id }}-{{ item.group_name }}-{{ item.user_name }}-{{ item.user_password }}-{{ item.activated_on }}-{{ item.activated_from }}-{{ item.activated_to }}
                </li>
            </ul>
            -->
            <label>All Clinics</label>
            <table class="table is-bordered is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>index</th>
                        <td>id</td>
                        <td>Clinic Name</td>
                        <td>Admin User Name</td>
                        <td>admin Password</td>
                        <td>Activated On</td>
                        <td>Activated From</td>
                        <td>Activated To</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in tableData" :key="item.id">
                        <th>{{index}}</th>
                        <td>{{ item.id }}</td>
                        <td>{{ item.group_name }}</td>
                        <td>{{ item.user_name }}</td>
                        <td>{{ item.user_password }}</td>
                        <td>{{ item.activated_on }}</td>
                        <td>{{ item.activated_from }}</td>
                        <td>{{ item.activated_to }}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>index</th>
                        <td>id</td>
                        <td>Clinic Name</td>
                        <td>Admin User Name</td>
                        <td>admin Password</td>
                        <td>Activated On</td>
                        <td>Activated From</td>
                        <td>Activated To</td>
                    </tr>
                </tfoot>
            </table>
        
    </div>
</template>
<script>
export default {
    name: 'TableGeneral',
    props: ['tableData'],
}
</script>