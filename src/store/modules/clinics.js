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
                commit('UPDATE_INFO_MESSAGE', 'Registration SUCCESS.'); // Mutation >>
            }).catch(function(error_3){
                window.console.log('ERROR : 2'); 
                window.console.log(error_3);
            })
        }).catch(function(error_2){
            window.console.log('ERROR : 2');
            window.console.log(error_2);
        });
        //
        //commit('REGISTER_NEW_CLINIC', result);
    }
};
const mutations = {
    REGISTER_NEW_CLINIC: (state, newClinicResult) => {
        window.console.log('---MUTAION---','REGISTER_NEW_CLINIC');
        window.console.log('---MUTAION---', state.reference_name, newClinicResult);
        state.newClinic = newClinicResult;
        state.clinic_message = 'SUCCESS: New Clinic registered.'
    }
};
//
export default { state, getters, actions, mutations }