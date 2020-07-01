//
//
//
import apiconfig from '../../api.js';
const state = {
    reference_name: 'module_prescription',
    newPrescription: {},
    filteredPrescriptionssForPatientId: []
};
const getters = {
    getFilteredPrescriptionssForPatientId : state=> state.filteredPrescriptionssForPatientId
};
const actions = {
    registerNewPrescription: ({state,commit},payload) => {
        window.console.log('---ACTION---','registerNewPrescription');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload =',  JSON.stringify( payload) );
        commit('UPDATE_INFO_MESSAGE', 'CREATE Prescription in Progress');
        
        const url_1 = apiconfig.global.uri + apiconfig.global.version 
                        + apiconfig.post.create_prescription;
        const fetch_data = {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(payload)
        };
        fetch( url_1, fetch_data ).then(function(resultData){
            resultData.json().then(function(rData){
                window.console.log('RESULT');
                window.console.log( rData );
                commit('UPDATE_INFO_MESSAGE', 'CREATE Prescription. Done.' + JSON.stringify(rData) );
            }).catch( function(error2){
                window.console.log('ERROR : 2');
                window.console.log(error2);
            } );
        }).catch( function(error1){
            window.console.log('ERROR : 1');
            window.console.log(error1);
        });
    },
    action_AllPrescriptionsByPatientId: ( ({state,commit},payload) => {
        window.console.log('---ACTION---','action_AllPrescriptionsByPatientId');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload =',  JSON.stringify( payload) );
        commit('UPDATE_INFO_MESSAGE', 'Getting Prescriptions in Progress');
        const url_1 = apiconfig.global.uri 
                        + apiconfig.global.version 
                        + apiconfig.get.all_prescription_by_patient_id
                        + payload;
        //window.console.log( 'url', url_1 )
        fetch( url_1 ).then(function(resultData){
            resultData.json().then(function(rData){
                window.console.log('SUCCESS : getAllSchedulesByDoctorId : ');
                window.console.log(rData);
                //Mutation
                commit('UPDATE_INFO_MESSAGE', 'Prescriptions Search SUCCESS.')
                commit('UPDATE_FILTERED_PRESCRIPTION_FOR_PATIENT_ID', rData)
            }).catch(function(error_2){
                window.console.log('ERROR : 2 : getAllSchedulesByDoctorId : ');
                window.console.log(error_2);
            });
        }).catch(function(error_1){
            window.console.log('ERROR : 1');
            window.console.log(error_1);
        });
    }),
};
const mutations = {
    UPDATE_FILTERED_PRESCRIPTION_FOR_PATIENT_ID: (state, newPatientResult) => (state.filteredPrescriptionssForPatientId = newPatientResult)
};
//
export default { state, getters, actions, mutations }