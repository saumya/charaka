//
// API calls and Data
//
import apiconfig from '../../api.js';
//
const state = {
    reference_name: 'module_clinics',
    newClinic:{
        name: 'n',
        adminName: 'a',
        adminPassword: 'ap',
        activated_on:'1',
        activated_from:'2',
        activated_to:'3'
    },
};
const getters = {
    getNewClinic: state=>{
        return state.newClinic
    }
};
const actions = {
    registerNewClinic: ({state,commit},payload) => {
        window.console.log('---ACTION---','registerNewClinic');
        window.console.log('1. state.reference_name =', state.reference_name);
        //window.console.log('2. store =', this);
        window.console.log('2. payload =', payload);
        //
        //this.dispatch('updateInfoMessage','registerNewClinic');
        commit('UPDATE_INFO_MESSAGE', 'Registration Progress');
        //
        const url_1 = apiconfig.global.uri + apiconfig.global.version + apiconfig.post.create_group;
        //
        const fetch_data = {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                'groupName': payload.name,
                'userName': payload.adminName,
                'userPassword': payload.adminPassword
            })
        };
        //var that = this;
        fetch( url_1, fetch_data ).then(function(resultData){
            //commit('REGISTER_NEW_CLINIC', resultData);
            resultData.json().then(function(rData){
                commit('REGISTER_NEW_CLINIC', rData); // Mutation >>
                commit('UPDATE_INFO_MESSAGE', 'Clinic.Registration SUCCESS.'+JSON.stringify(rData) ); // Mutation >>
            }).catch(function(error_3){
                window.console.log('ERROR : 2'); 
                window.console.log(error_3);
            })
        }).catch(function(error_2){
            window.console.log('ERROR : 1');
            window.console.log(error_2);
        });
        //
        //commit('REGISTER_NEW_CLINIC', result);
    }, // registerNewClinic/
    updateClinic: ({state,commit},payload) => {
        window.console.log('---ACTION---','updateClinic');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload =', payload);
        commit('UPDATE_INFO_MESSAGE', 'UPDATE clinic in Progress');
        const url_1 = apiconfig.global.uri + apiconfig.global.version + apiconfig.put.update_group;
        const fetch_data = {
            method: 'PUT',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                'groupId': payload.id,
                'groupName': payload.name,
                'userName': payload.adminName,
                'userPassword': payload.adminPassword
            })
        };
        fetch( url_1, fetch_data ).then(function(resultData){
            window.console.log('UPDATE : then');
            resultData.json().then(rData=>{
                window.console.log('UPDATE : SUCCESS :');
                window.console.log(rData);
                // Mutation
                commit('UPDATE_CLINIC', rData); 
                commit('UPDATE_INFO_MESSAGE', 'Registration SUCCESS.'+JSON.stringify(rData) );
            }).catch(error_2=>{
                window.console.log('UPDATE: ERROR : 2');
                window.console.log(error_2);
            });
        }).catch(function(error_1){
            window.console.log('ERROR : 1');
            window.console.log(error_1);
        });
    },
    searchClinicWithId: ( {state, commit},payload )=>{
        window.console.log('---ACTION---','searchClinicWithId');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload =', payload);
        commit('UPDATE_INFO_MESSAGE', 'SEARCH clinic in Progress');
        const url_1 = apiconfig.global.uri + apiconfig.global.version + apiconfig.get.group_by_id + payload;
        fetch( url_1 ).then(function(resultData){
            resultData.json().then(function(rData){
                window.console.log('UPDATE : SUCCESS :');
                window.console.log(rData);
                //Mutation
                //commit('SEARCH_CLINIC', rData);
                commit('UPDATE_INFO_MESSAGE', 'Search SUCCESS.'+JSON.stringify(rData) ); 
            }).catch(function(error_2){
                window.console.log('ERROR : 2');
                window.console.log(error_2);
            });
        }).catch(function(error_1){
            window.console.log('ERROR : 1');
            window.console.log(error_1);
        });
    },
    deleteClinicWithId: ( {state, commit},payload )=>{
        window.console.log('---ACTION---','deleteClinicWithId');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload =', payload);
        commit('UPDATE_INFO_MESSAGE', 'DELETE clinic in Progress');
        const url_1 = apiconfig.global.uri + apiconfig.global.version + apiconfig.delete.delete_group;
        const fetch_data = {
            method: 'DELETE',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                'groupId': payload
            })
        };
        fetch( url_1, fetch_data ).then(function(resultData){
            window.console.log('UPDATE : then');
            resultData.json().then(rData=>{
                window.console.log('UPDATE : SUCCESS :');
                window.console.log(rData);
                // Mutation
                //commit('UPDATE_CLINIC', rData); 
                commit('UPDATE_INFO_MESSAGE', 'Delete SUCCESS.'+JSON.stringify(rData) );
            }).catch(error_2=>{
                window.console.log('DELETE: ERROR : 2');
                window.console.log(error_2);
            });
        }).catch(function(error_1){
            window.console.log('ERROR : 1');
            window.console.log(error_1);
        });
    }
};
const mutations = {
    REGISTER_NEW_CLINIC: (state, newClinicResult) => {
        window.console.log('---MUTAION---','REGISTER_NEW_CLINIC');
        window.console.log('---MUTAION---', state.reference_name, newClinicResult);
        state.newClinic = newClinicResult;
        state.clinic_message = 'SUCCESS: New Clinic registered.'
    },
    UPDATE_CLINIC: (state, clinicResult)=>{
        window.console.log('---MUTAION---','UPDATE_CLINIC');
        state.newClinic = clinicResult;
        state.clinic_message = 'SUCCESS: Clinic updated.';
    }

};
//
export default { state, getters, actions, mutations }