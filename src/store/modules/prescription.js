//
//
//
import apiconfig from '../../api.js';
const state = {
    reference_name: 'module_prescription',
    newPrescription: {}
};
const getters = {};
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
            }).catch( function(error2){
                window.console.log('ERROR : 2');
                window.console.log(error2);
            } );
        }).catch( function(error1){
            window.console.log('ERROR : 1');
            window.console.log(error1);
        });
    },
};
const mutations = {};
//
export default { state, getters, actions, mutations }