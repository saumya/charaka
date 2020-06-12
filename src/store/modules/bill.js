//
//
//
import apiconfig from '../../api.js'
//
const state = {};
const getters = {};
const actions = {
    createNewBill : ({state,commit},payload) => {
        window.console.log('---ACTION---','registerNewPrescription');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload =',  JSON.stringify( payload) );
        commit('UPDATE_INFO_MESSAGE', 'CREATE Bill in Progress');

        const url_1 = apiconfig.global.uri + apiconfig.global.version 
                        + apiconfig.post.create_bill;
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
                commit('UPDATE_INFO_MESSAGE', 'CREATE Bill. Done.' + JSON.stringify(rData) );
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