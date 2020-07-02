<template>
    <div>
        <label>All Bills | {{ info }}</label>
        
        <table class="table is-bordered is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th> index </th>
                    <th> id </th>
                    <th> date </th>
                    <th> ammount </th>
                    <!-- <th> details </th> -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in tableData" :key="item.id">
                    <th>{{index}}</th>
                    <td>{{ item.id }}</td>
                    <td> {{ new Date(item.onDate).toDateString() }} </td>
                    <td>{{ item.ammount }}</td>
                    <!--
                    <td>
                        <button class="button" @click="onGetData(item)"> Details </button>
                    </td>
                    -->
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th> index </th>
                    <th> id </th>
                    <th> date </th>
                    <th> ammount </th>
                    <!-- <th> details </th> -->
                </tr>
            </tfoot>
        </table>

        <article class="message" v-if="shouldShowSmallDetails">
            <div class="message-header">
                Bill id {{ this.displayPrescriptionData.id }} 
                <button class="delete" @click="onCloseSmallDetails"></button>
            </div>
            <div class="message-body">
                <div class="is-size-4">    
                    <div>
                        <span class="is-size-6"> onDate </span>
                        <span > {{ new Date(this.displayPrescriptionData.onDate).toDateString() }} </span>
                    </div>
                    <div>
                        <span class="is-size-6"> Details </span>
                        <span > {{ this.displayPrescriptionData.details }} </span>
                    </div>
                    <div>
                        <span class="is-size-6"> Ammount </span>
                        <span > {{ this.displayPrescriptionData.ammount }} </span>
                    </div>
                </div>
                <button class="button" @click="onMoreDetails"> Printable Details </button>                
            </div>
        </article>

    </div>
</template>
<script>
export default {
    name: 'TableBills',
    props: [ 'info', 'tableData' ],
    data: function(){
        return({
            shouldShowSmallDetails: false,
            displayPrescriptionData: {}
        })
    },
    methods:{
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
        }
    }
}
</script>