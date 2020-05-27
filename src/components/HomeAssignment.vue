<template>
    <div>
        <section class="section">
            Assignments
        </section>
        <section class="section">
            <div class="buttons has-addons">
                <button class="button" v-on:click="onClinics">Clinics</button>
                <button class="button">Doctors</button>
                <button class="button">Patients</button>
            </div>
        </section>
        <section class="section">
            <div class="field">
                <div class="control">
                    <div class="select is-info is-large">
                        <select @change="onSelectClininc" v-model="selectedClinic">
                            <option>Select A Clinic</option>
                            
                            <option v-for="(item,index) in getAllClinicsData" :key="item.id" :value="item.id">
                                {{index}}-{{item.id}}-{{item.group_name}}
                            </option>
                            
                        </select>
                    </div>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <div class="select is-info is-large">
                        <select>
                            <option>Select A Doctor</option>
                            <option>With 1</option>
                            <option>With 2</option>
                            <option>With 3</option>
                        </select>
                    </div>
                </div>
            </div>
            {{selectedClinic}}
            <button class="button is-large is-primary">Assign</button>

                
            
        </section>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    name: 'HomeAssignment',
    data: function(){
        return({
            selectedClinic:'',
        })
    },
    computed: {
        ...mapGetters([ 'getAllClinicsData' ])
    },
    methods: {
        onClinics: function(){
            window.console.log('onclinics')
        },
        onSelectClininc: function(eventObj){
            window.console.log('onSelectClinic');
            window.console.log( eventObj );
            window.console.log( eventObj.target.selectedIndex, event.target.value );
        }
    }
}
</script>