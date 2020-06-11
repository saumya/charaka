// VueX Entry

import Vuex from 'vuex';
import Vue from 'vue';
//
import todos from './modules/todos';
import messages from './modules/messages';
import clinics from './modules/clinics';
import doctors from './modules/doctors';
import patients from './modules/patients';
import schedules from './modules/schedules';
import prescriptions from './modules/prescription';

//
Vue.use(Vuex);

//
export default new Vuex.Store({
    modules: {
        todos,
        messages,
        clinics,
        doctors,
        patients,
        schedules,
        prescriptions
    }
});