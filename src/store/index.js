// VueX Entry

import Vuex from 'vuex';
import Vue from 'vue';
//
import todos from './modules/todos';
import messages from './modules/messages';

//
Vue.use(Vuex);

//
export default new Vuex.Store({
    modules: {
        todos,
        messages
    }
});