//
//
//
//import apiconfig from '../../api.js';
const state = {
    reference_name: 'module_prescription',
    newPrescription: {}
};
const getters = {};
const actions = {
    registerNewPrescription: ({state,commit},payload) => {
        window.console.log('---ACTION---','registerNewPrescription');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload =', payload);
        commit('UPDATE_INFO_MESSAGE', 'CREATE Prescription in Progress');
    },
};
const mutations = {};
//
export default { state, getters, actions, mutations }